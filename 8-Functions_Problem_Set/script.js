alert("Write a function isEven() which takes a single numeric argument" + 
    " and returns true if the number is even and false otherwise");

var num = Number(prompt("Please enter a number to check if it's even"));
var answer = null;
function isEven(num){

    if(num % 2 === 0){

        answer = "true";

    }else{

        answer = "false";

    }

    return answer;
}

alert(isEven(num));

alert("Write a function factorial() which takes a single numeric argument" +
" and returns the factorial of that number");

var num1 = Number(prompt("Please enter a number to see its factorial"));

function factorialize(num1) {
    if (num1 === 0 || num1 === 1)
      return 1;
    for (var i = num1 - 1; i >= 1; i--) {
      num1 *= i;
    }
    return num1;
  }

alert(factorialize(num1));

alert("Write a function kebabToSnake() which takes a single kebab-cased string argument" +
" and returns the snake_cased version");
var kebab = prompt("Write a kebab cased phrase to get a snake cased phrase");

function replaceChar(kebab){

   var snake = kebab.replace(/-/g, "_");
   return snake

}

alert(replaceChar(kebab));



//<h1>isEven() Exercise</h1>

  //  <p>Write a function isEven() which takes a single numeric argument
    //     and returns true uf the number is even and false otherwise</p>
      //  <ul>
        //   <li>isEven(4) //true</li>
        //   <li>isEven(4) //false</li>
        //   <li>isEven(4) //true</li>
        //   <li>isEven(4) //false</li>
        //</ul>

        var friends = ["Charlie", "Liz", "David", "Mattias"];