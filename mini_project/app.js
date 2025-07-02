import  Readline  from "readline";   
const rl = Readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
const todoList = [];

const showMenu = () => {
    console.log("\nTodo List Menu:");
    console.log("1. Add Todo");
    console.log("2. View Todos");
    console.log("3. Remove Todo");
    console.log("4. Exit");
    rl.question("Choose an option (1-4): ", handleinput);
}
const handleinput = (option) => {
    switch (option) {
        case '1':
            rl.question("Enter a todo item: ", (todo) => {
                todoList.push(todo);
                console.log(`Todo "${todo}" added.`);;
                showMenu();
            });
            break;
        case '2':
            console.log("\nTodo List:");
            todoList.forEach((todo, index) => {
                console.log(`${index + 1}. ${todo}`);
            });
            showMenu();
            break;
        case '3':
            rl.question("Enter the index of the todo to remove: ", (index) => {
                const idx = parseInt(index) - 1;
                if (idx >= 0 && idx < todoList.length) {
                    const removed = todoList.splice(idx, 1);
                    console.log(`Removed todo: ${removed}`);
                } else {
                    console.log("Invalid index.");
                }
                showMenu();
            });
            break;
        case '4':
            console.log("Exiting Todo List. Goodbye!");
            rl.close();
            break;
        default:
            console.log("Invalid option. Please try again.");
            showMenu();
    }
}


showMenu();