window.onload = function(){ 
    // your code 

    // *** Get the modal ***

var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');
var modal4 = document.getElementById('myModal4');
var modal5 = document.getElementById('myModal5');
var modal6 = document.getElementById('myModal6');
var modal7 = document.getElementById('myModal7');
var modal8 = document.getElementById('myModal8');

// *** Get the button that opens the modal *****
// *** Get the Portfolio Overlay that opens the modal *****
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");
var btn5 = document.getElementById("myBtn5");
var btn6 = document.getElementById("myBtn6");
var btn7 = document.getElementById("myBtn7");
var btn8 = document.getElementById("myBtn8");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];
var span5 = document.getElementsByClassName("close5")[0];
var span6 = document.getElementsByClassName("close6")[0];
var span7 = document.getElementsByClassName("close7")[0];
var span8 = document.getElementsByClassName("close8")[0];

// When the user clicks the button, open the modal 

//Modal 001
btn.onclick = function(){modal.style.display = "block";}
//Modal 002
btn2.onclick = function() {modal2.style.display = "block";}
//Modal 003
btn3.onclick = function() { modal3.style.display = "block";}
//Modal 004
btn4.onclick = function() { modal4.style.display = "block";}
//Modal 005
btn5.onclick = function() { modal5.style.display = "block";}
//Modal 006
btn6.onclick = function() { modal6.style.display = "block";}
//Modal 007
btn7.onclick = function() { modal7.style.display = "block";}
//Modal 008
btn8.onclick = function() { modal8.style.display = "block";}

// When the user clicks on <span> (x), close the modal

//Modal 001
span.onclick = function() { modal.style.display = "none";}
//Modal 002
span2.onclick = function() { modal2.style.display = "none";}
//Modal 003
span3.onclick = function() { modal3.style.display = "none";}
//Modal 004
span4.onclick = function() { modal4.style.display = "none";}
//Modal 005
span5.onclick = function() { modal5.style.display = "none";}
//Modal 006
span6.onclick = function() { modal6.style.display = "none";}
//Modal 007
span7.onclick = function() { modal7.style.display = "none";}
//Modal 008
span8.onclick = function() { modal8.style.display = "none";}

// When the user clicks anywhere outside of the modal, close it

window.onclick = function(event) {

    //Modal 001
    if (event.target == modal) {
        modal.style.display = "none";
    }
  //Modal 002
    if (event.target == modal2) {
        modal2.style.display = "none";

    }

    //Modal 003
    if (event.target == modal3) {
        modal3.style.display = "none";

    }

    //Modal 004
    if (event.target == modal4) {
        modal4.style.display = "none";

    }

    //Modal 005
    if (event.target == modal5) {
        modal5.style.display = "none";
    }
  //Modal 006
    if (event.target == modal6) {
        modal6.style.display = "none";

    }

    //Modal 007
    if (event.target == modal7) {
        modal7.style.display = "none";

    }

    //Modal 008
    if (event.target == modal8) {
        modal8.style.display = "none";

    }
}


};

