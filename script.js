var img2 = document.querySelector("#img2");
var img1 = document.querySelector("#img1");
var heading = document.querySelector("h1");
var box1 = document.querySelector(".first");
var box2 = document.querySelector(".second");
function reset(){
    img1.setAttribute("src", "img/Alea_6.png");
    img2.setAttribute("src", "img/Alea_6.png");
    heading.innerHTML = "Welcome to Dikku's Game";
    box1.style.backgroundColor = "#a2a378";
    box2.style.backgroundColor = "#a2a378";
    
    
}


function myFunction() {
    box1.style.backgroundColor = "#a2a378";
    box2.style.backgroundColor = "#a2a378";
    
    let num1 = Math.floor(Math.random() * 6) + 1;
    var randomImg = "img/Alea_" + num1 + ".png";
    img1.setAttribute("src", randomImg);
    
    let num2 = Math.floor(Math.random() * 6) + 1;
    // while (num1 == num2) {
        //     num2 = Math.floor(Math.random() * 6) + 1;
        // }
        randomImg = "img/Alea_" + num2 + ".png";

    img2.setAttribute("src", randomImg);

    if(num1 == num2){
        heading.innerHTML ="Draw!" ;
    }else if(num1 > num2){
        heading.innerHTML = "🚩 Player 1 Wins!";
        box1.style.backgroundColor = "#83764F";
    }else{
        heading.innerHTML = "Player 2 Wins!🚩";
        box2.style.backgroundColor = "#83764F";
    }

}