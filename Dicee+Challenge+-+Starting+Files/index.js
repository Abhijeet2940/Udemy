var randomNumber1=Math.floor(Math.random()*6)+1;
var imagea="images/"+"dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",imagea);
var randomNumber2=Math.floor(Math.random()*6)+1;
var imageaa="images/"+"dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",imageaa);
if(imagea>imageaa){
    document.querySelector("h1").innerHTML="player1 wins";
}else if(imagea===imageaa){
    document.querySelector("h1").innerHTML="Draw";
}else{
    document.querySelector("h1").innerHTML="player2 wins";

}





