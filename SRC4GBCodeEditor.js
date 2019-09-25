function dblclick() {
  document.getElementsByClassName("dbl")[0].innerHTML =
"h3\
{color: blue;\
text-align: center;}\
p{\
font-family: cursive;\
font-size: 22pt;\
color: green;}";
}
function dblclick2() {
  document.getElementsByClassName("dbl2")[0].innerHTML =
"<h3>Greetings! </h3>\
<p>Start by adding some HTML and CSS</p>";
}
function gethtml(){
var textareaObject = document.getElementsByClassName("comments")[0];
console.dir(textareaObject);
console.log(textareaObject.value);
document.getElementById("html").innerHTML = textareaObject.value;
}
var clicked = false;
function getcss(){
    clicked = !clicked;
    var textareaObject = document.getElementsByClassName('comments2')[0];
if (clicked){
    document.getElementById("css").innerHTML = textareaObject.value;
} else {
    document.getElementById("css").innerHTML = "";
}
//var textareaObject = document.getElementsByClassName('comments2')[0];
//console.dir(textareaObject);
//console.log(textareaObject.value);
//document.getElementById("css").innerHTML = textareaObject.value;

}
function clearTextarea(){
var textareaObject = document.getElementsByClassName('comments3')[0];
console.dir(textareaObject);
textareaObject.value = null;

}
function clearTextarea2(){
var textareaObject = document.getElementsByClassName('comments4')[0];
console.dir(textareaObject);
textareaObject.value = null;

}
function dblclick3() {
 var element = document.getElementsByClassName("dbl3")[0];
    var element2 = document.getElementsByClassName("dbl3")[1];

 var newtitle = prompt("Please enter your new title");
element.innerHTML = newtitle;
    element2.innerHTML = newtitle;


} 
