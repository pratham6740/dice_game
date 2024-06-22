var s1=Math.floor(Math.random()*6)+1;
var im1="dice"+ s1 + ".png";
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src", im1);


var s2=Math.floor((Math.random()*6)) +1;
var im2="dice"+ s2 + ".png";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src", im2);

if(s1===s2)
{
   document.querySelector("h1").innerHTML="DRAW!!🥸";
}
else if(s1>s2)
{
    document.querySelector("h1").innerHTML="🚩 Player 1 WINS";
}
else {
    document.querySelector("h1").innerHTML="🚩 Player 2 WINS";
}