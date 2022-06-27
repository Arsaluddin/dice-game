
var p1 = Math.floor(Math.random()*6)+1;
var p2 = Math.floor(Math.random()*6)+1;


if(p1>p2){
    document.getElementById("title").innerHTML = "player 1 is winner";
    
}
else if(p2>p1){
    document.getElementById("title").innerHTML = "player 2 is winner";
}
else{
    document.getElementById("title").innerHTML = "draw !";
}

// for player 1

var image1 = "images/dice"+ p1 + ".png";

var getimage1 = document.getElementById("img1");

getimage1.setAttribute("src", image1);

// for player 2

var image2 = "images/dice"+ p2 + ".png";

document.getElementById("img2").setAttribute("src",image2);