---
title: How to Write a Coffee Timer in JavaScript
date: 2024-03-23
---

Brewing the perfect cup of coffee is an art that requires precise timing, especially when using methods like the V60 pour-over. In this article, we'll develop a simple coffee timer using JavaScript to help you achieve the perfect brew every time.

## Setting Up the Basics

First, let's establish the basic structure of our coffee timer. We'll need a place to display the timer, buttons to start and reset it, and the JavaScript logic to make it all work.

```html
<!doctype html>
<html>
  <head>
    <title>Coffee Timer</title>
  </head>
  <body>
    <h1>Coffee Timer</h1>
    <div id="timer">00:00</div>
    <button id="start">Start</button>
    <button id="reset" disabled>Reset</button>

    <script src="coffeeTimer.js"></script>
  </body>
</html>
```

Now, let's write our JavaScript. We'll create a file named coffeeTimer.js and start by setting up our variables and selecting our DOM elements.

```javascript
const display = document.getElementById("timer");
const startButton = document.getElementById("start");
const resetButton = document.getElementById("reset");

let startTime;
let updatedTime;
let difference;
let tInterval;
let running = 0;
```

## Writing the Timer Logic

We need to create functions to start, stop, and reset the timer. Our timer will display minutes and seconds, counting up from 00:00.

```javascript
function startTimer() {
if (!running) {
startTime = new Date().getTime();
tInterval = setInterval(getShowTime, 1000);
startButton.disabled = true;
resetButton.disabled = false;
running = 1;
}
}

function getShowTime() {
updatedTime = new Date().getTime();
difference = updatedTime - startTime;

let minutes = Math.floor((difference % (1000 _ 60 _ 60)) / (1000 _ 60));
let seconds = Math.floor((difference % (1000 _ 60)) / 1000);

minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;

display.textContent = minutes + ':' + seconds;
}

function resetTimer() {
clearInterval(tInterval);
startButton.disabled = false;
resetButton.disabled = true;
display.textContent = '00:00';
running = 0;
}
```

Lastly, we need to attach event listeners to our buttons so they respond to clicks.

```javascript
startButton.addEventListener("click", startTimer);
resetButton.addEventListener("click", resetTimer);
```

## Integrating the Timer into Your Brew Routine

Now that we have our coffee timer, how can you integrate it into your brewing routine? Start the timer when you begin pouring water over your coffee grounds. Most V60 recipes recommend specific times for pouring intervals and total brew time—use your timer to ensure you're hitting these marks accurately.

For example, you might begin pouring your first water infusion and aim to finish it within 30 seconds. Your timer will help you pace your pour, ensuring you're not rushing or lagging behind. Once you hit the final desired brew time (often around 2-3 minutes for a V60), you'll know it's time to enjoy your perfectly brewed coffee.

By using this simple JavaScript coffee timer, you can enhance your coffee brewing precision, turning your morning routine or afternoon break into a ritual of perfection and pleasure. Happy brewing!pour over is more than just a brewing method; it's a ritual that offers a moment of reflection and appreciation for the complexities of coffee. It rewards patience and precision, making that first sip all the more delightful. Whether you're a seasoned barista or a curious newcomer, the V60 is a tool that can elevate your coffee experience, one cup at a time. Happy brewing!
