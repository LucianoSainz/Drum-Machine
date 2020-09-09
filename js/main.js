function play(str){

    if(str === "q" || str === 'Q'){
        document.getElementById('display').innerHTML = " On snare";  
       } else if(str === "w" || str === 'W'){
         document.getElementById('display').innerHTML = " On bass drum";
       } else if(str === "e" || str === 'E'){
         document.getElementById('display').innerHTML = " On percussion";
       } else if(str === "a" || str === 'A'){
         document.getElementById('display').innerHTML = " On electrick";
       } else if(str === "s" || str === 'S'){
         document.getElementById('display').innerHTML = " On bass";
       } else if(str === "d" || str === 'D'){
         document.getElementById('display').innerHTML = " On dry";
       } else if(str === "z" || str === 'Z'){
         document.getElementById('display').innerHTML = " On closed";
       } else if(str === "x" || str === 'X'){
         document.getElementById('display').innerHTML = " On side stick";
       } else if(str === "c" || str === 'C'){
         document.getElementById('display').innerHTML = " On blc";
     }


    var audio = document.getElementById(str);
    audio.play();
 }

 window.document.onkeyup = function(event){
     let keyPress = event.key
     if(keyPress === "q" || keyPress === 'Q'){
         play("Q");
     } else if(keyPress === "w" || keyPress === 'W'){
        play("W");
     } else if(keyPress === "e" || keyPress === 'E'){
        play("E");
     } else if(keyPress === "a" || keyPress === 'A'){
        play("A");
     } else if(keyPress === "s" || keyPress === 'S'){
        play("S");
     } else if(keyPress === "d" || keyPress === 'D'){
        play("D");
     } else if(keyPress === "z" || keyPress === 'Z'){
        play("Z");
     } else if(keyPress === "x" || keyPress === 'X'){
        play("X");
     } else if(keyPress === "c" || keyPress === 'C'){
        play("C");
     }
 }