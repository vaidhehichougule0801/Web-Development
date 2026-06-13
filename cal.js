const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

const clickSound = new Audio("click.wav");

let expression = "";

buttons.forEach(button => {
    button.addEventListener("click", () => {

        // Play sound
        clickSound.currentTime = 0;
        clickSound.play();

        const value = button.innerText;

        if (value === "C") {
            expression = "";
            display.value = "";
        }
        else if (value === "=") {
            try {
                expression = eval(expression).toString();
                display.value = expression;
            } catch {
                display.value = "Error";
                expression = "";
            }
        }
        else {
            expression += value;
            display.value = expression;
        }
    });
});