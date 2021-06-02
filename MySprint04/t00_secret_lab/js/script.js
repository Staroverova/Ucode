function transformation(){
    let a = document.getElementById("lab");
    let b = document.getElementById('hero');
 if(b.innerHTML == "Bruce Banner"){
    a.style.background = "#70964b";
    b.style.fontSize = "130px";
    b.style.letterSpacing = "6px";
    b.innerHTML = "Hulk"; 
 }else{
    a.style.background = "#ffb300";
    b.style.fontSize = "60px";
    b.style.letterSpacing = "2px";
    b.innerHTML = "Bruce Banner"; 
 }
 }