console.log("Print all numbers between -10 and 19");
for(i = -10; i <= 19; i++){

    console.log(i);
}

console.log("Print all even numbers between 10 and 40");
for(i = 10; i <= 40; i++){

    if( i % 2 === 0){
        console.log(i);
    }
}

console.log("Print all odd numbers between 300 and 333");
for(i = 300; i <= 333; i++){

    if( i % 2 !== 0){
        console.log(i);
    }
}

console.log("Print all numbers divisible by 5 AND 3 between 5 and 50");
for(i = 5; i <= 50; i++){

    if( i % 5 === 0 && i % 3 === 0){
        console.log(i);
    }
}





//For Loops Problem Set

//Print all numbers between -10 and 19
//Print all even numbers between 10 and 40
//Print all odd numbers between 300 and 333
//Print all numbers divisible by 5 AND 3 between 5 and 50

function singSong(){
    console.log("Twinkle twinkle little star");
    console.log("How I wonder what you are");
    console.log("Up above the world so high");
    console.log("Like a diamond in the sky");
    console.log("Twinkle twinkle little star");
}

function userGreeting(greeting1, greeting2, greeting3, greeting4){


    if(greeting1 === "Jorge"){
        console.log("Hello there " + greeting1);
        console.log("Have a good day " + greeting1 +"!");
        console.log("Say hi to your wife, and give your kids a hug for me. :)")
    }
    if(greeting2 === "Jessica"){
        console.log("Hello there " + greeting2);
        console.log("Have a good day " + greeting2 +"!");
        console.log("Say hi to your husband, and give your kids a hug for me. :)")
    }
    if(greeting3 === "Christian"){
        console.log("Good morning " + greeting3);
        console.log("Time to take a shower " + greeting3 +"!");
        console.log("Don't forget about your daily planner!. :)")
    }
    if(greeting4 === "Lucas"){
        console.log("Good morning " + greeting4);
        console.log("Go to the changing table " + greeting4 +"!");
        console.log("Be a good boy, and listen to your papa. :)")
    }else{
        console.log("you're not authorized to mess with this computer. GET OUT!!!");
    }
    
}

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}

var city = "paris";
var capital = capitalize(city); 

//Function declaration
function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}
//Function expression
var capitalize = function(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}
