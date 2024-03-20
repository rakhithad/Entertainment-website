time = setInterval(myTimer, 1000); //call fuction of timer with millisec
var time;
var sec = 120; //time in seconds
var min = parseInt(sec/60)   //get minutes
var seconds = parseInt(sec%60) //get the remaining seconds
function myTimer() {
    if(seconds<10){
      seconds=`0${seconds}`
    }
    if(min<10){
      min=`0${min}`
    }
    document.getElementById('timer').innerHTML = min+":"+seconds;
    sec--;   
    min = parseInt(sec/60)
    seconds = parseInt(sec%60)
    console.log(sec)
    if (sec === -1) {
        clearInterval(time); //freeze the time 
        document.getElementById("submitButton").disabled = true; //disable the button if time excedes
        submitQuiz();
    }
}
//quiz subimition
function submitQuiz() {
  var score = 0
  //if submited the time should freeze
  clearInterval(time);
  document.getElementById("showAnswer").style.display="block"
  window.location = '#showAnswer';
  document.getElementById("Container1").style.display = "none"
  //display the answer
  document.getElementById("show").addEventListener("click",function(){
  document.getElementById("Container1").style.display = "block";
  document.getElementById("submitButton").style.display = "none";
  });
  // get each answer score for each question 
  function getRadioValue (qName) {
    var radiosNo = document.getElementsByName(qName);
    for (var i = 0, length = radiosNo.length; i < length; i++) {
      if (radiosNo[i].checked) {
      // answer is saved with the checked value
        var answerValue = Number(radiosNo[i].value);
      }
      radiosNo[i].disabled = true;
    }
    // if nothing is selected its null so the value "-1" is given to it
    if (isNaN(answerValue)) {
    answerValue = 0;
  }
  return answerValue;
  }
  // calculate score with getRadioValue function
  qname=["q1","q2","q3","q4","q5","q6","q7","q8","q9","q10"]
  var calcScore
  for(var i=0; i<10; i++){
    calcScore=getRadioValue(qname[i])//returns the answer value
    console.log(calcScore)
    //the calling of getRadioValue fuction and it will asign a value for calcscore
    score=calcScore+score
    
  }



  // function to return correct answer string
  function correctAnswer (correctStringNo, qNumber) {
    return ("The correct answer for question no." + qNumber + ": &nbsp;<strong>" +
    (document.getElementById(correctStringNo).textContent) + "</strong>");
  }
  function correct(number){
    return("Your Answer for question no."+number+" is correct ")
  }
  // print correct answers only if wrong (calls correctAnswer function) id correctstringNO
  if (getRadioValue('q1') === 0) {
    document.getElementById('correctAnswer1').innerHTML = correctAnswer('correctA1', 1);//id of div to show the correct answer
    document.getElementById('correctAnswer1').style.backgroundColor="#D2222D"
  }else{
    document.getElementById('correctAnswer1').innerHTML = correct(1);
    document.getElementById('correctAnswer1').style.backgroundColor="#238823"
  }
  if (getRadioValue('q2') === 0) {
    document.getElementById('correctAnswer2').innerHTML = correctAnswer('correctA2', 2);
    document.getElementById('correctAnswer2').style.backgroundColor="#D2222D"
    document.getElementById('correctAnswer2').innerHTML = correct(2);
    document.getElementById('correctAnswer2').style.backgroundColor="#238823"
  }
  if (getRadioValue('q3') === 0) {
    document.getElementById('correctAnswer3').innerHTML = correctAnswer('correctA3', 3);
    document.getElementById('correctAnswer3').style.backgroundColor="#D2222D"
  }else{
    document.getElementById('correctAnswer3').innerHTML = correct(3);
    document.getElementById('correctAnswer3').style.backgroundColor="#238823"
  }
  if (getRadioValue('q4') === 0) {
    document.getElementById('correctAnswer4').innerHTML = correctAnswer('correctA4', 4);
    document.getElementById('correctAnswer4').style.backgroundColor="#D2222D"
  }else{
    document.getElementById('correctAnswer4').innerHTML = correct(4);
    document.getElementById('correctAnswer4').style.backgroundColor="#238823"
  }
  if(getRadioValue('q5') === 0){
    document.getElementById('correctAnswer5').innerHTML = correctAnswer('correctA5', 5);
    document.getElementById('correctAnswer5').style.backgroundColor="#D2222D"
  }else{
    document.getElementById('correctAnswer5').innerHTML = correct(5);
    document.getElementById('correctAnswer5').style.backgroundColor="#238823"
  }
  if(getRadioValue('q6') === 0){
    document.getElementById('correctAnswer6').innerHTML = correctAnswer('correctA6', 6);
    document.getElementById('correctAnswer6').style.backgroundColor="#D2222D"
  }else{
    document.getElementById('correctAnswer6').innerHTML = correct(6);
    document.getElementById('correctAnswer6').style.backgroundColor="#238823"
  }
  if(getRadioValue('q7') === 0){
    document.getElementById('correctAnswer7').innerHTML = correctAnswer('correctA7', 7);
    document.getElementById('correctAnswer7').style.backgroundColor="#D2222D"
  }else{
    document.getElementById('correctAnswer7').innerHTML = correct(7);
    document.getElementById('correctAnswer7').style.backgroundColor="#238823"
  }
  if(getRadioValue('q8') === 0){
    document.getElementById('correctAnswer8').innerHTML = correctAnswer('correctA8', 8);
    document.getElementById('correctAnswer8').style.backgroundColor="#D2222D"
  }else{
    document.getElementById('correctAnswer8').innerHTML = correct(8);
    document.getElementById('correctAnswer8').style.backgroundColor="#238823"
  }
  if(getRadioValue('q9') === 0){
    document.getElementById('correctAnswer9').innerHTML = correctAnswer('correctA9', 9);
    document.getElementById('correctAnswer9').style.backgroundColor="#D2222D"
  }else{
    document.getElementById('correctAnswer9').innerHTML = correct(9);
    document.getElementById('correctAnswer9').style.backgroundColor="#238823"
  }
  if(getRadioValue('q10') === 0){
    document.getElementById('correctAnswer10').innerHTML = correctAnswer('correctA10', 10);
    document.getElementById('correctAnswer10').style.backgroundColor="#D2222D"
  }else{
    document.getElementById('correctAnswer10').innerHTML = correct(10);
    document.getElementById('correctAnswer10').style.backgroundColor="#238823"
  }

  var maxMarks = 100;

  // show the marks in fraction method 
  if (score < 0){
    score =0;
  }
  var showScore = name+" Your Score: " + score +"/" + maxMarks;

  //if all correct answer it will display this
  if (score === maxMarks) {
    showScore = showScore + "&nbsp; <strong> Perfect Score!</strong>";
  };
  document.getElementById('userScore').innerHTML = showScore;
  if(score>10){
    document.getElementById("showAnswer").style.backgroundColor="	#99ff99"
  }else{
    document.getElementById("showAnswer").style.backgroundColor="#ff9999"
  }
}
