// On game start, start a timer
document.getElementById('finish').style.visibility='hidden'
document.getElementById('time').style.visibility='hidden'

document.addEventListener("DOMContentLoaded", function() {
    // alert("Your page is loaded");
    const a = performance.now();
    document.getElementById("keytext").innerHTML = 'page had been loaded';

    var keys_pressed = '';
    document.getElementById("keytext").innerHTML = keys_pressed;

    document.onkeydown = function(event) {   
        if(keys_pressed.length >= 10){
            keys_pressed = 'Stop the game! ur done!';
            const b = performance.now();

            console.log(keys_pressed);
            document.getElementById("keytext").innerHTML = keys_pressed;
            document.getElementById('finish').style.visibility='visible'
            document.getElementById('time').style.visibility='visible'
            document.getElementById('time').innerHTML = (b-a) + 'ms'
        } else {
            var key_press = String.fromCharCode(event.keyCode);
            keys_pressed += key_press;
            document.getElementById("keytext").innerHTML = keys_pressed;
        }
    }
});
// this is code for creating the time elapsed


// alert('do something...');

// alert('It took ' + (b - a) + ' ms.');