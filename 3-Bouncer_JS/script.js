var age = prompt("What's your age?");

if(age < 0){
    alert("You're in your mums belly still. You can't be here!");
}else if(age < 18){
    alert(" You're not old enough");
}else if(age === 21){
    alert("Congratulations on your 21st birthday! Drink is on the house");
}else if((age % 2) === 1){
    alert("your age is odd")
}else if(age % Math.sqrt(age) === 0){
    alert("Your age is a perfect square");
}else{
    alert("Wow! you're " + age + " years old!")
}


