(function () {
  // grabing 4 different classes from HTML: the scren, all the buttons, the clear button, and the equal button w/
  // 'document.querySelector'
  let screen = document.querySelector(".screen");
  let buttons = document.querySelectorAll(".btn");
  let clear = document.querySelector(".btn-clear");
  let equal = document.querySelector(".btn-equal");

  // Adding click functionatility to each button with a for loop.
  // running a for loop with a function attached.
  // the buttons "listen" for the evetns of CLICK and an active FUNCTION
  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      // the scrren will print out the matching value of button
      let value = e.target.dataset.num;
      screen.value += value;
    });
  });

  // adding functionality to equal button
  equal.addEventListener("click", function (e) {
    if (screen.value === "") {
      screen.value = "";
    } else {
      let answer = eval(screen.value);
      screen.value = answer;
    }
  });

  // adding functionality to clear button
  clear.addEventListener("click", function (e) {
    screen.value = "";
  });
})();
