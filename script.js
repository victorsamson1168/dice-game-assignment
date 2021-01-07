let noOne=Math.floor(Math.random()*6)+1;
let noTwo=Math.floor(Math.random()*6)+1;
// alert(noOne+"---"+noTwo);

document.querySelector(".img1").setAttribute("src","images/dice"+noOne+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+noTwo+".png");


if(noOne>noTwo)
{
    document.querySelector("h1").innerHTML="🚩 Player 1 wins!";
}
else if(noOne==noTwo)
{
    document.querySelector("h1").innerHTML="Draw!";
}

else if(noOne<noTwo)
{
    document.querySelector("h1").innerHTML="Player 2 wins! 🚩";
}
