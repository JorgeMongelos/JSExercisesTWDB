var todos = ["Buy new turtle"];
var input = prompt("What would you like to do?");
window.setTimeout(function(){

    
    while(input !== "quit"){

        if(input === "list"){

            alert(todos);

        }else if(input === "new"){

            var newTodo = prompt("Enter a new todo");
            todos.push(newTodo);
        }
        input = prompt("What would you like to do?");

    }//While loop
    alert("OK, YOU QUIT THE APP");
},500);