var todos = ["Pet the Belly"];

var input = prompt("What would you like to do?");

function listTodos() {
    console.log("**********");
    todos.forEach(function (todo, i) {
        console.log(i + ": " + todo)
    });
    console.log("**********");
}

function addTodo() {
    //ask for new todo
    var newTodo = prompt("Enter new todo");
    //add to array
    todos.push(newTodo);
    console.log("Added Todo");

}

function deleteTodo() {
    var deleted = prompt("What is the index of the entry you would like to delete?")
    todos.splice(deleted, 1);
    console.log("Item has been deleted");
}



while (input !== "quit") {
    //handle input
    if (input === "list") {
        listTodos();
    } else if (input === "new") {
        addTodo();
    } else if (input === "delete") {
        deleteTodo();
    }
    //ask again for new input
    var input = prompt("What would you like to do?");

}

console.log("OK, You quit the App");