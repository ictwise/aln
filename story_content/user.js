function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6G1ILQFxKV1":
        Script1();
        break;
      case "68EZWHstb4U":
        Script2();
        break;
      case "6UKIVBCCgdz":
        Script3();
        break;
      case "6jzMb92FYL6":
        Script4();
        break;
      case "64lvK0VA2Cl":
        Script5();
        break;
      case "5Z4Z8XtKnrx":
        Script6();
        break;
      case "6WRbG37rRf2":
        Script7();
        break;
      case "6Rl5unvuS4u":
        Script8();
        break;
      case "6FYTidcQf2O":
        Script9();
        break;
      case "6arYBaZ8zG2":
        Script10();
        break;
      case "6g3khRUPKfs":
        Script11();
        break;
      case "6oKSH4sCF7i":
        Script12();
        break;
      case "6VNDeuXcscI":
        Script13();
        break;
      case "6hVUJOauJX4":
        Script14();
        break;
      case "6PksedmMb32":
        Script15();
        break;
      case "5ZVOK8ycoLE":
        Script16();
        break;
      case "6PDtHgYx96E":
        Script17();
        break;
      case "6ZpLMG7jTZT":
        Script18();
        break;
      case "5slf6hOruyQ":
        Script19();
        break;
      case "6C4r0a7u4N5":
        Script20();
        break;
      case "6Vy06wZOx3e":
        Script21();
        break;
      case "6NjggKlUFSy":
        Script22();
        break;
      case "6hQ1CLDYjnw":
        Script23();
        break;
      case "5ul5nUpbjjX":
        Script24();
        break;
      case "5fpWrd10WKD":
        Script25();
        break;
      case "5fBvL56nDHz":
        Script26();
        break;
      case "5qMc60L49PS":
        Script27();
        break;
      case "5j7b0a54o0o":
        Script28();
        break;
      case "6Xra9A8Kxzx":
        Script29();
        break;
      case "5suWNUFLGN5":
        Script30();
        break;
      case "6DdabFt7Spr":
        Script31();
        break;
      case "6IE8baDST5J":
        Script32();
        break;
      case "6XJhf8IjzMM":
        Script33();
        break;
      case "61lMxtTlvcW":
        Script34();
        break;
      case "6lNuZNoylIP":
        Script35();
        break;
      case "5sGtQGR6OlF":
        Script36();
        break;
      case "6gqHtHXEgjx":
        Script37();
        break;
      case "5vubIgYNpUL":
        Script38();
        break;
      case "5kxtEGEokAL":
        Script39();
        break;
      case "5XnXzPiRRAl":
        Script40();
        break;
      case "6oSrIxgNyiD":
        Script41();
        break;
      case "6CZNKVDEQqU":
        Script42();
        break;
      case "6TjiJfM6NqY":
        Script43();
        break;
      case "5avFk3D8Hly":
        Script44();
        break;
      case "5aaLqVw52Ro":
        Script45();
        break;
      case "5fiURocovcK":
        Script46();
        break;
      case "5nYMGj4stYk":
        Script47();
        break;
      case "6AHcvPnw94T":
        Script48();
        break;
      case "6V3VJPAodfB":
        Script49();
        break;
      case "6C3kYQrcfwh":
        Script50();
        break;
      case "5flj71H0d8t":
        Script51();
        break;
      case "6c9wSwCX4o5":
        Script52();
        break;
      case "62Z8MFzbEKh":
        Script53();
        break;
      case "6indjvEDBxo":
        Script54();
        break;
      case "6NrjVoCq2U0":
        Script55();
        break;
      case "6me1iHxkPWy":
        Script56();
        break;
      case "6bt3v1l9LOw":
        Script57();
        break;
      case "65JKX9M9JkE":
        Script58();
        break;
  }
}

function Script1()
{
  DS.appState.onToggleVolume();
}

function Script2()
{
  DS.appState.onToggleVolume();
}

function Script3()
{
  DS.appState.onToggleVolume();
}

function Script4()
{
  var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
//get the name of the month
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var currentMonth = month[today.getMonth()];
//create the alternate date as mmmm dd, yyyy
var alternateDate = currentMonth + " " + dd + ", " + yyyy;
//create the standard numeric date as mm/dd/yyyy
//start by creating a leading zero for single digit days and months
if(dd<10) {
dd='0'+dd
}
if(mm<10) {
mm='0'+mm
}
today = dd+'/'+mm+'/'+yyyy;
//send the dates to StoryLine variables
var player = GetPlayer();
player.SetVar("SystemDate",today);
player.SetVar("AlternateDate",alternateDate);
}

function Script5()
{
  DS.appState.onToggleVolume();
}

function Script6()
{
  DS.appState.onToggleVolume();
}

function Script7()
{
  var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();
//get the name of the month
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var currentMonth = month[today.getMonth()];
//create the alternate date as mmmm dd, yyyy
var alternateDate = currentMonth + " " + dd + ", " + yyyy;
//create the standard numeric date as mm/dd/yyyy
//start by creating a leading zero for single digit days and months
if(dd<10) {
dd='0'+dd
}
if(mm<10) {
mm='0'+mm
}
today = dd+'/'+mm+'/'+yyyy;
//send the dates to StoryLine variables
var player = GetPlayer();
player.SetVar("SystemDate",today);
player.SetVar("AlternateDate",alternateDate);
}

function Script8()
{
  window.print()
}

function Script9()
{
  DS.appState.onToggleVolume();
}

function Script10()
{
  DS.appState.onToggleVolume();
}

function Script11()
{
  DS.appState.onToggleVolume();
}

function Script12()
{
  DS.appState.onToggleVolume();
}

function Script13()
{
  DS.appState.onToggleVolume();
}

function Script14()
{
  DS.appState.onToggleVolume();
}

function Script15()
{
  DS.appState.onToggleVolume();
}

function Script16()
{
  DS.appState.onToggleVolume();
}

function Script17()
{
  DS.appState.onToggleVolume();
}

function Script18()
{
  DS.appState.onToggleVolume();
}

function Script19()
{
  DS.appState.onToggleVolume();
}

function Script20()
{
  DS.appState.onToggleVolume();
}

function Script21()
{
  DS.appState.onToggleVolume();
}

function Script22()
{
  DS.appState.onToggleVolume();
}

function Script23()
{
  DS.appState.onToggleVolume();
}

function Script24()
{
  DS.appState.onToggleVolume();
}

function Script25()
{
  DS.appState.onToggleVolume();
}

function Script26()
{
  DS.appState.onToggleVolume();
}

function Script27()
{
  DS.appState.onToggleVolume();
}

function Script28()
{
  DS.appState.onToggleVolume();
}

function Script29()
{
  DS.appState.onToggleVolume();
}

function Script30()
{
  DS.appState.onToggleVolume();
}

function Script31()
{
  DS.appState.onToggleVolume();
}

function Script32()
{
  DS.appState.onToggleVolume();
}

function Script33()
{
  DS.appState.onToggleVolume();
}

function Script34()
{
  DS.appState.onToggleVolume();
}

function Script35()
{
  DS.appState.onToggleVolume();
}

function Script36()
{
  DS.appState.onToggleVolume();
}

function Script37()
{
  DS.appState.onToggleVolume();
}

function Script38()
{
  DS.appState.onToggleVolume();
}

function Script39()
{
  DS.appState.onToggleVolume();
}

function Script40()
{
  DS.appState.onToggleVolume();
}

function Script41()
{
  DS.appState.onToggleVolume();
}

function Script42()
{
  DS.appState.onToggleVolume();
}

function Script43()
{
  DS.appState.onToggleVolume();
}

function Script44()
{
  DS.appState.onToggleVolume();
}

function Script45()
{
  DS.appState.onToggleVolume();
}

function Script46()
{
  DS.appState.onToggleVolume();
}

function Script47()
{
  DS.appState.onToggleVolume();
}

function Script48()
{
  DS.appState.onToggleVolume();
}

function Script49()
{
  DS.appState.onToggleVolume();
}

function Script50()
{
  DS.appState.onToggleVolume();
}

function Script51()
{
  DS.appState.onToggleVolume();
}

function Script52()
{
  DS.appState.onToggleVolume();
}

function Script53()
{
  DS.appState.onToggleVolume();
}

function Script54()
{
  DS.appState.onToggleVolume();
}

function Script55()
{
  DS.appState.onToggleVolume();
}

function Script56()
{
  DS.appState.onToggleVolume();
}

function Script57()
{
  var appState = require("helpers/appState");
appState.onToggleVolume();//mute
}

function Script58()
{
  DS.appState.onToggleVolume();
}

