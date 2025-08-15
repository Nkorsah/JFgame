let charsPosX = 0; 

// On game start, start a timer
document.addEventListener("DOMContentLoaded", function () {
    const keytext = document.getElementById("keytext");
    const finish = document.getElementById("finish");
    const timeDisplay = document.getElementById("time");
    const restartButton = document.getElementById("restart");

    let startTime;
    let keys_pressed = '';
    let handleKeydown;

    function startGame() {
        // Reset state
        keys_pressed = '';
        keytext.innerHTML = '';
        finish.style.visibility = 'hidden';
        timeDisplay.style.visibility = 'hidden';
        restartButton.style.visibility = 'hidden';

        startTime = performance.now();

        // Define and attach event handler
        handleKeydown = function (event) {
            if (keys_pressed.length >=100) {
                keys_pressed = 'Stop the game! ur done!';
                const endTime = performance.now();
                const duration = endTime - startTime;

                  // Convert milliseconds to minutes, seconds, and milliseconds
                const totalSeconds = Math.floor(duration / 1000);
                const minutes = Math.floor(totalSeconds / 60);
                const seconds = totalSeconds % 60;
                const ms = Math.floor(duration % 1000);

                // Format time as mm:ss.mmm
                const formattedTime = `${minutes}:${seconds.toString().padStart(2, '0')}.${ms.toString().padStart(3, '0')}`;

                keytext.innerHTML = keys_pressed;
                finish.style.visibility = 'visible';
                timeDisplay.style.visibility = 'visible';
                timeDisplay.innerHTML = formattedTime;
                restartButton.style.visibility = 'visible';

                document.removeEventListener('keydown', handleKeydown);
            } else {
                const key = event.key.toUpperCase(); // Handle both upper/lower case
                if (key === 'J' || key === 'F') {
                    const lastKey = keys_pressed[keys_pressed.length - 1];
                    if(key === lastKey){
                        console.log('same key has been pressed!');

                        const stringOfChars = document.getElementById("keytext");

                        // Remove the class first
                        stringOfChars.classList.remove("errorAnimation");

                        // Force reflow so the browser registers the removal
                        void stringOfChars.offsetWidth;

                        // Re-add the class to trigger the animation
                        stringOfChars.classList.add("errorAnimation");
                    } else {
                        keys_pressed += key;
                        console.log(keys_pressed)
                        keytext.innerHTML = keys_pressed; 
                        const before = keys_pressed.slice(0, -1);
                        const last = keys_pressed.slice(-1);
                        
                        // Wrap last char in a span with animation class
                        keytext.innerHTML = `${before}<span class="last-char">${last}</span>`;
                        
                        moveStringOfChars();
                    }
                    
                }
            }
        };

        document.addEventListener('keydown', handleKeydown);
    }

    // Bind restart button
    restartButton.onclick = () => {
        startGame();
        const keytext = document.getElementById("keytext");
        keytext.style.transform = `translate(-50%, -50%)`;
    };

    // Start game initially
    startGame();
});
function moveStringOfChars() {
  requestAnimationFrame(() => {
    const keytext = document.getElementById("keytext");
    const textLength = keytext.innerText.length;

    if (textLength === 0) {
      // Reset transform if empty
      keytext.style.transform = 'translate(-50%, -50%)';
      return;
    }

    // Measure width of all characters except last
    const range = document.createRange();
    range.setStart(keytext.firstChild, 0);
    range.setEnd(keytext.firstChild, textLength - 1);
    const rect = range.getBoundingClientRect();

    // Amount to shift left is exactly width of all chars but last
    // const shiftX = rect.width/2;
    // console.log("Amount to shift is " + shiftX)
    let shiftX = 0;
if (textLength > 1) {
  const range = document.createRange();
  range.setStart(keytext.firstChild, 0);
  range.setEnd(keytext.firstChild, textLength - 1);
  const rect = range.getBoundingClientRect();
  shiftX = rect.width/2; // keep your small offset if needed
}

// Apply transform
keytext.style.setProperty(
  '--base-transform',
  `translate(calc(-50% - ${shiftX}px), -50%)`
);
    // Apply transform: shift left by shiftX, plus center offset -50%
    // keytext.style.transform = `translate(calc(-50% - ${shiftX}px), -50%)`;

    keytext.style.setProperty(
  '--base-transform',
  `translate(calc(-50% - ${shiftX}px), -50%)`
);

     // --- Debug overlay ---
     const lastCharRange = document.createRange();
    lastCharRange.setStart(keytext.firstChild, textLength - 1);
    lastCharRange.setEnd(keytext.firstChild, textLength);
    const lastCharRect = lastCharRange.getBoundingClientRect();
    let centerbox = document.getElementById("centerbox");
    centerbox.style.width = lastCharRect.width + "px";
    centerbox.style.height = lastCharRect.height + "px";


    let debugBox = document.getElementById("debug-box");
    if (!debugBox) {
      debugBox = document.createElement("div");
      debugBox.id = "debug-box";
      debugBox.style.position = "absolute";
      debugBox.style.border = "2px dashed lime";
      debugBox.style.pointerEvents = "none";
      debugBox.style.zIndex = "9999";
      document.body.appendChild(debugBox);
    }
    debugBox.style.left = rect.left + "px";
    debugBox.style.top = rect.top + "px";
    debugBox.style.width = rect.width + "px";
    debugBox.style.height = rect.height + "px";
  });
}


    
// this is code for creating the time elapsed


// alert('do something...');

// alert('It took ' + (b - a) + ' ms.');

// document.documentElement.style.setProperty("--main-background-color", "green");