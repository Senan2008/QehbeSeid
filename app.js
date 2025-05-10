function next(){
    document.getElementById("main").style.display = "none";
    document.getElementById("second").style.display = "block";
    document.body.style.backgroundImage = "linear-gradient(to right, rgba(255, 0, 0, 0.5), rgba(0, 0, 255, 0.5))";
}

function geri(){
    document.getElementById("second").style.display = "none";
    document.getElementById("main").style.display = "block";
    document.body.style.backgroundImage = "linear-gradient(45deg, #ff7eb3, #ff758c)"
}