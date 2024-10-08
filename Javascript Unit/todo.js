let todo = [];

while (true) {
    let choice = prompt("What would you like to do?").toLowerCase();

    if (choice == "new") {
        let add = prompt("Enter new todo");
        todo.push(add);
        console.log(`"${add}" has been added to the list!`);
    } else if (choice == "list") {
        for (let items = 0; items < todo.length; items++) {
            console.log(`${items}: ${todo[items]}`);
        }
    } else if (choice == "delete") {
        let remove = parseInt(prompt("Select the index of the todo that you want to delete"));
        while (isNaN(remove)) {
            remove = parseInt(prompt("Select the index of the todo that you want to delete"));
        }
        console.log(`Todo "${todo[remove]}" at index ${remove} has been deleted!`)
        todo.splice(remove, 1);
    } else if (choice == "quit") {
        console.log("Goodbye!");
        break;
    } else {
        console.log("Invalid choice! Try again!");
    }
}