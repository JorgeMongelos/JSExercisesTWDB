function printReverse(arr){

    for(var i = arr.length-1; i > 0; i--){

        console.log(arr[i]);
    }

}

function isUniform(arr){

    var first = arr[0];

    for(var i = 1; i < arr.length; i++){

        if(arr[i] !== first){
            return false;
        }

    }
    return true;
}

function max(arr){

    var highest = arr[0];
    for(var i = 1; i < arr.length; i++){

        if(arr[i] > highest){

            highest = arr[i];

        }//If statement
    }//For loop
}//Function

function sumArray(arr){

    var result = 0;

    for(var i = 0; i < arr.length; i++){

        result += arr[i];

    }//for loop
}

var someObject = {
    friends: [
        {name: "Malfoy"},
        {name: "Crabbe"},
        {name: "Goyle"}
    ],
    color: "baby blue",
    isEvil: true
};

someObject.Friends[0].name

var movies = [

    {
        title: "In Bruges",
        hasWatched: true,
        rating: 5
    },
    {
        title: "Frozen",
        hasWatched: false,
        rating: 4.5
    },
    {
        title: "Les Miserables",
        hasWatched: false,
        rating: 3.5
    },
    
];

movies.forEach(function(movie){
    buildString(movie)
});

function buildString(movie){
    var result = "You have ";
    if(movie.hasWatched){
        result += "watched ";
    }else{
        result += "not seen ";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    console.log(result);
}