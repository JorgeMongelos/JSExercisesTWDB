var todos = ["Buy new turtle"];
var input = prompt("What would you like to do?");
window.setTimeout(function(){

    
    while(input !== "quit"){
        if(input === "list"){
            listTodo();
        }else if(input === "new"){
            addTodo();
        }else if(input === "delete"){
            deleteTodo();
        }
        input = prompt("What would you like to do?");

    }//While loop
    alert("OK, YOU QUIT THE APP");
},500);

function listTodo(){
    console.log("************");
    todos.forEach(function(todo, i){
        console.log(i + ": " +todo);
    });
    console.log("************");
}

function addTodo(){
    var newTodo = prompt("Enter a new todo");
    todos.push(newTodo);
    console.log("Todo added");
}

function deleteTodo(){
    var index = Number(prompt("Enter index of todo to delete"));
    todos.splice(index, 1);
    console.log("Todo deleted.");

}