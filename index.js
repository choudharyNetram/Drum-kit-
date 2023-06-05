/* document.querySelector("button").addEventListener("click", handleClick) ; 
function handleClick(){
    alert("I got clicked! ") ; 
}*/
// you can read from bellow link what is a addEventListener and click 
//  https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
/// basically javascript function they can detect enent . exapmle:- that if we are clicking to a button
// if we used parenthesis in calling at addEventListener than it will directly called and we don't want this,  if only want to call this fuction when that event happened 
// passing a function without parenthesis is a way to call that function at a later time 

/* one another way to do it 
document.querySelector("button").addEventListener("click", function() {
    alert("I got clicked ") ; 
    // what to do when click detected 
} ) ; 

*/
/*
var numberOfDrumButton = document.querySelectorAll(".drum").length
for(var i = 0 ;i< numberOfDrumButton ;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        alert("I got clicked !") ; 
        // what to do when click detected 
    } ) ; 
    
}
*/

// playing sound using javascript 
/* playing sound for unly first button 
var audio = new Audio("sounds/crash.mp3") ; 
document.querySelector("button").addEventListener("click", function() {
    audio.play()  ;

} ) ; */ 
/* playing only one drum for all buttons 
var numberOfDrumButton = document.querySelectorAll(".drum").length ; 
for(var i = 0 ;i< numberOfDrumButton ;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var audio = new Audio("sounds/crash.mp3") ; 
        audio.play() ;

    } ) ; 
    
}
*/ 
/* changing color of character using  "this" 
by this we are getting the identity of button which was cliced 
var numberOfDrumButton = document.querySelectorAll(".drum").length ; 
for(var i = 0 ;i< numberOfDrumButton ;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        this.style.color = "white" ;

    } ) ; 
    
}

*/ 
// playing sounds for all button different sounds 
/*
var numberOfDrumButton = document.querySelectorAll(".drum").length ; 
for(var i = 0 ;i< numberOfDrumButton ;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHtml= this.innerHTML ;  /// here we seleting innerHTML of the clicked button and we know that on button what is the innerHTML 
        /// we can  use if, else or switch-case 
        switch (buttonInnerHtml) {
            case 'w':
                var crash = new Audio("sounds/crash.mp3") ; 
                crash.play() ;
                break;
            case 'a':
                var kick_bass = new Audio("sounds/kick-bass.mp3") ; 
                kick_bass.play() ;
                break;
            case 's':
                var snare = new Audio("sounds/snare.mp3") ; 
                snare.play() ;
                break;
            case 'd':
                var tom1 = new Audio("sounds/tom-1.mp3") ; 
                tom1.play() ;
                break;
            case 'j':
                var tom2 = new Audio("sounds/tom-2.mp3") ; 
                tom2.play() ;
                break;
            case 'k':
                var tom3 = new Audio("sounds/tom-3.mp3") ; 
                tom3.play() ;
                break;            
            case 'l':
                var tom4 = new Audio("sounds/tom-4.mp3") ; 
                tom4.play() ;
                break;        
                                                        
            default:
                break;
        }
    } ) ; 
    
}

*/



////  detecting button press 
var numberOfDrumButton = document.querySelectorAll(".drum").length ; 
for(var i = 0 ;i< numberOfDrumButton ;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHtml = this.innerHTML ; 
        makeSound(buttonInnerHtml) ;
        buttonAnimation(buttonInnerHtml) ;
    } ) ; 
    
}

document.addEventListener("keydown", function(event){
    makeSound(event.key) ;
    buttonAnimation(event.key) ;
}) ;


/// dectecting keyboard press , it means that if we click button w than coressponding sound will come 
function makeSound(key){
    switch (key) {
        case 'w':
            var crash = new Audio("sounds/crash.mp3") ; 
            crash.play() ;
            break;
        case 'a':
            var kick_bass = new Audio("sounds/kick-bass.mp3") ; 
            kick_bass.play() ;
            break;
        case 's':
            var snare = new Audio("sounds/snare.mp3") ; 
            snare.play() ;
            break;
        case 'd':
            var tom1 = new Audio("sounds/tom-1.mp3") ; 
            tom1.play() ;
            break;
        case 'j':
            var tom2 = new Audio("sounds/tom-2.mp3") ; 
            tom2.play() ;
            break;
        case 'k':
            var tom3 = new Audio("sounds/tom-3.mp3") ; 
            tom3.play() ;
            break;            
        case 'l':
            var tom4 = new Audio("sounds/tom-4.mp3") ; 
            tom4.play() ;
            break;        
                                                    
        default:
            break;
    }
}
///  adding animation to button :-  when  we click button and coressponding key on key board than 
function buttonAnimation(currKey){
    var activeButton = document.querySelector("."+ currKey) ; 
    activeButton.classList.add("pressed") ;
    setTimeout(function(){
        activeButton.classList.remove("pressed") ; 
    }, 100) ; 
}



/*

function anotherAddEventListener(typeOfEvent, callback) {
    var eventThatHappened = {
        eventType : "keydown" , 
        key : "p" ,
        durationOfKeypress : 2 ,
    }
    if(eventThatHappened.eventType === typeOfEvent){
        callback(eventThatHappened) ;
    }
}

document.addEventListener("keydown" , function(event){
    console.log(event) ;
}) ; 

*/