import { readFile } from 'fs/promises';
import { createServer } from 'http';
import crypto from 'crypto';
import path from 'path';
import { writeFile } from 'fs/promises';
import { text } from 'stream/consumers';
const PORT = 3002;
const DATA_FILE = path.join("data", "links.json");

const saveLinks = async (links) => {
    await writeFile(DATA_FILE,JSON.stringify(links));

}

const serveFile = async (res, filePath, contentType) => {
    try {
        const data = await readFile(filePath);
        res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
    }catch(err){
        console.error(err);
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 page not found");
    }
}

const Loadlinks = async () => {
    try{
        const data = await readFile(DATA_FILE, "utf8");
        return JSON.parse(data);
    }catch(error){
        if(error.code === "ENOENT"){
            await writeFile(DATA_FILE,JSON.stringify({}));
            return {}; 
        }
        throw error;
    }
}

const server = createServer(async (req, res) => {
    console.log(req.url);
    if (req.method === "GET") {
        if (req.url === "/") {
            await serveFile(res, path.join("Public", "index.html"), "text/html");
        } else if (req.url === "/style.css") {
            await serveFile(res, path.join("Public","style.css"), "text/css");
        }
    }else if(req.method === "GET" && req.url === "/links"){
        const links =await Loadlinks();
        res.writeHead(200,{"Content-Type":"application/json"})
        return res.end(JSON.stringify(links));
    }
    if(req.method === "POST" && req.url === "/shorten"){
        const links =await Loadlinks();
        let body = "";
        req.on("data", (chunk)=>body+=chunk);
        req.on('end',async ()=>{
            console.log(body);
            const {url,shortercode} =JSON.parse(body);
            if(!url){
                res.writeHead(400, { "Content-Type": "text/plain" });
                res.end("URL is required");
                return;
            }
            if(!shortercode){
                res.writeHead(400, { "Content-Type": "text/plain" });
                res.end("Shortcode is required");
                return;
            }
            const finalshortcode =shortercode || crypto.randomBytes(4).toString("hex");

            if(links[finalshortcode]){
                res.writeHead(400, { "Content-Type": "text/plain" });
                res.end("Shortcode already exists");
                return;
            }
            links[finalshortcode] = url;
            await saveLinks(links);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({success:true, shortcode:finalshortcode}));
        });
    }
    });

server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
