function validate1()
{
    if (document.form1.title.value == ""     || document.form1.score.value == ""    ||
        document.form1.passScore.value == "" || document.form1.qType.value == ""    ||
        document.form1.duration.value == ""  || document.form1.q1.value == ""       || 
        document.form1.choice11.value == ""  || document.form1.choice12.value == "" ||
        document.form1.choice13.value == ""  || document.form1.choice14.value == "" ||
        document.form1.q2.value == ""        || document.form1.q3.value == ""       ||
        document.form1.q4.value == ""        || document.form1.q5.value == ""       ||
        document.form1.choice21.value == ""  || document.form1.choice22.value == "" ||
        document.form1.choice23.value == ""  || document.form1.choice24.value == "" ||
        document.form1.choice31.value == ""  || document.form1.choice32.value == "" ||
        document.form1.choice33.value == ""  || document.form1.choice34.value == "" ||
        document.form1.choice41.value == ""  || document.form1.choice42.value == "" ||
        document.form1.choice43.value == ""  || document.form1.choice44.value == "" ||
        document.form1.choice51.value == ""  || document.form1.choice52.value == "" ||
        document.form1.choice53.value == ""  || document.form1.choice54.value == ""
    ){
        alert("All data must be Entered");
        return false;   
    }
    return true;
    
}