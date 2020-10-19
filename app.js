// var wb=document.getElementById('wb').value;
// console.log(wb)
// var eng=document.getElementById('eng').value;
// var phy=document.getElementById('phy').value;
// var math=document.getElementById('math').value;
// var javascript=document.getElementById('javascript').value;

function calculate(){
   
    var wb=document.getElementById('wb').value;
    console.log(wb)
    var eng=document.getElementById('eng').value;
    console.log(eng)

    var phy=document.getElementById('phy').value;
    console.log(phy)

    var math=document.getElementById('math').value;
    console.log(math)

    var javascript=document.getElementById('javascript').value;
    console.log(javascript)
    var data_show=document.getElementById('data_show');

    if ((wb>=100) || (eng>=100) || (phy>=100) || (math>=100) || (javascript>=100)){
        alert("eror")

}
   

    var markObtained=parseFloat(wb) + parseFloat(eng) + parseFloat(phy) + parseFloat(math) + parseFloat(javascript);
    var percentage=(markObtained/500) * 100;
     if ((percentage > 79) && (percentage<=99)){
         var grade="A";

    }
    else if ((percentage > 69) && (percentage<=79)){
        var grade="B";

    }
    else if ((percentage > 59) && (percentage<=69)){
        var grade="C";

   }
   else if ((percentage > 49) && (percentage<=59)){
    var grade="D";

    }
    else{
        var grade="E";
    } 

    if (percentage<49){
        data_show.innerHTML="Out of 500 your total is " + markObtained + " and your percentage is " + percentage + "%." + "<br>" + "your grade is " + grade + " and you are fail";
    }
    else if((wb==="")||(math==="")||(phy==="")||(javascript==="")||(eng==="")){
        data_show.innerHTML="Please fill all the fields";
    }
    else{

        data_show.innerHTML="Out of 500 your total is " + markObtained + " and your percentage is " + percentage + "%." + "<br>" + "your grade is " + grade + " and you are Pass";
    }
}