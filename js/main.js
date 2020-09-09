function play(str){

    if(str === "q" || str === 'Q'){
        document.getElementById('display').innerText = " On snare";  
       } else if(str === "w" || str === 'W'){
         document.getElementById('display').innerText = " On bass drum";
       } else if(str === "e" || str === 'E'){
         document.getElementById('display').innerText = " On percussion";
       } else if(str === "a" || str === 'A'){
         document.getElementById('display').innerText = " On electrick";
       } else if(str === "s" || str === 'S'){
         document.getElementById('display').innerText = " On bass";
       } else if(str === "d" || str === 'D'){
         document.getElementById('display').innerText = " On dry";
       } else if(str === "z" || str === 'Z'){
         document.getElementById('display').innerText = " On closed";
       } else if(str === "x" || str === 'X'){
         document.getElementById('display').innerText = " On side stick";
       } else if(str === "c" || str === 'C'){
         document.getElementById('display').innerText = " On blc";
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