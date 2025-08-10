var number = 10
var string = 'Hello there'
var isRad = true

if(number == 10){
    console.log("yeah buddy");
} else {
    console.log("Nope!");
}
// document.getElementById('box').innerHTML = number + 5;

var groceries = ['Milk', 'Eggs', 'Cheese']

function listGroceries(){
    for (var i=0; i < groceries.length; i++) {
        console.log(groceries[i]);
        
    }
}

listGroceries();

document.getElementById("box2").addEventListener('click', function(){
    alert("I got clicked");
})