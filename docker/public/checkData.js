function GetURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}
let UserChoice = [GetURLParameter("title"), GetURLParameter("userId")];
console.log(UserChoice);
fetch("http://localhost:7000/",
    {
        method: "POST",
        body: JSON.stringify({ UserChoice }),
        headers: { "Content-Type": "application/json" }
    }).then(function (data) {
        return data.json();
    }).then(function (data) {
        console.log(data);
        document.getElementById("Title").innerHTML = data[0].Title;
        document.getElementById("score").innerHTML = data[0].Score;
        document.getElementById("passScore").innerHTML = data[0].PassScore;
        document.getElementById("quizType").innerHTML = data[0].SkillType;
        document.getElementById("duration").innerHTML = data[0].Duration;
        document.getElementById("q1").innerHTML = data[0].Question1;
        document.getElementById("q2").innerHTML = data[0].Question2;
        document.getElementById("q3").innerHTML = data[0].Question3;
        document.getElementById("q4").innerHTML = data[0].Question4;
        document.getElementById("q5").innerHTML = data[0].Question5;
        document.getElementById("lc11").innerHTML = data[0].Choice11;
        document.getElementById("lc12").innerHTML = data[0].Choice12;
        document.getElementById("lc13").innerHTML = data[0].Choice13;
        document.getElementById("lc14").innerHTML = data[0].Choice14;
        document.getElementById("lc21").innerHTML = data[0].Choice21;
        document.getElementById("lc22").innerHTML = data[0].Choice22;
        document.getElementById("lc23").innerHTML = data[0].Choice23;
        document.getElementById("lc24").innerHTML = data[0].Choice24;
        document.getElementById("lc31").innerHTML = data[0].Choice31;
        document.getElementById("lc32").innerHTML = data[0].Choice32;
        document.getElementById("lc33").innerHTML = data[0].Choice33;
        document.getElementById("lc34").innerHTML = data[0].Choice34;
        document.getElementById("lc41").innerHTML = data[0].Choice41;
        document.getElementById("lc42").innerHTML = data[0].Choice42;
        document.getElementById("lc43").innerHTML = data[0].Choice43;
        document.getElementById("lc44").innerHTML = data[0].Choice44;
        document.getElementById("lc51").innerHTML = data[0].Choice51;
        document.getElementById("lc52").innerHTML = data[0].Choice52;
        document.getElementById("lc53").innerHTML = data[0].Choice53;
        document.getElementById("lc54").innerHTML = data[0].Choice54;
    });

document.getElementById("form").addEventListener("submit",function(e){
    e.preventDefault();
    var x = [document.querySelector('input[name="q1answer"]:checked').value, document.querySelector('input[name="q2answer"]:checked').value,
        document.querySelector('input[name="q3answer"]:checked').value, document.querySelector('input[name="q4answer"]:checked').value, document.querySelector('input[name="q5answer"]:checked').value,
         GetURLParameter("title"), GetURLParameter("userId")];
    console.log(x);
    fetch("http://localhost:7000/CalcScore", 
    {
        method: "POST", 
        body: JSON.stringify({x}),
        headers:{"Content-Type": "application/json"}
    }).then(function(data){
        console.log(data);
    });
});