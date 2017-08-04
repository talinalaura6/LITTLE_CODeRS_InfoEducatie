function verif(){
	var score = 1;
	var c1 = document.getElementById("nivelul").children;
	var c2 = document.getElementById("nivelul2").children;
	var c3 = document.getElementById("nivelul3").children;
	var c4 = document.getElementById("nivelul4").children;
	var c5 = document.getElementById("nivelul5").children;
	var c6 = document.getElementById("nivelul6").children;
	var c7 = document.getElementById("nivelul7").children;
	var c8 = document.getElementById("nivelul8").children;
	var c9 = document.getElementById("nivelul9").children;
	var gresit1;var gresit2;var gresit3;var gresit4;var gresit5;var gresit6;var gresit7;var gresit8;var gresit9;
	if(c1[1].style.border == "2px solid black")
		score++;
		else
		document.getElementById("nivelul").style.boxShadow = "0px 0px 50px red";
	if(c2[3].style.border == "2px solid black")
		score++;
		else
		document.getElementById("nivelul2").style.boxShadow = "0px 0px 50px red";
	if(c3[4].style.border == "2px solid black")
		score++;
		else
		document.getElementById("nivelul3").style.boxShadow = "0px 0px 50px red";
	if(c4[2].style.border == "2px solid black")
		score++;
		else
		document.getElementById("nivelul4").style.boxShadow = "0px 0px 50px red";
	if(c5[3].style.border == "2px solid black")
		score++;
		else
		document.getElementById("nivelul5").style.boxShadow = "0px 0px 50px red";
	if(c6[2].style.border == "2px solid black")
		score++;
		else
		document.getElementById("nivelul6").style.boxShadow = "0px 0px 50px red";
	if(c7[1].style.border == "2px solid black")
		score++;
		else
		document.getElementById("nivelul7").style.boxShadow = "0px 0px 50px red";
	if(c8[2].style.border == "2px solid black")
		score++;
		else
		document.getElementById("nivelul8").style.boxShadow = "0px 0px 50px red";
	if(c9[3].style.border == "2px solid black")
		score++;
		else
		document.getElementById("nivelul9").style.boxShadow = "0px 0px 50px red";
		document.getElementById("nivelul10").style.display="block";
    if(score<4)
        var text = "Ai gresit cam mult...studiaza mai profund!";
        else
        if(score<6)
            var text = "Este insuficient...incearca sa inveti mai mult!";
            else
            if(score<8)
                var text = "Bine....in mod cert poti obtine mai mult!";
                else
                var text = "Felicitari! Se vede ca ai studiat!";
    var not = document.getElementById("text").innerHTML = text;
    var not2 = document.getElementById("nota").innerHTML = score;
	document.getElementById("note").value = score;
}