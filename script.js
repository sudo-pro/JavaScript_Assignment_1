const successfulCalculation = async (fireBtn) => {
  fireBtn.addEventListener("click", () => {
    confetti({
      particleCount: 300,
      spread: 90,
      origin: { x: 1, y: 0.9 },
    });

    confetti({
      particleCount: 300,
      spread: 90,
      origin: { x: 0, y: 0.9 },
    });
  });
};

document
  .getElementById("calculator-form")
  .addEventListener("submit", (event) => {
    event.preventDefault();
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;
    const resultElement = document.getElementById("result");
    // Use try-catch blocks to handle runtime errors
    try {
      if (isNaN(num1) || isNaN(num2)) {
        throw new Error("Please enter valid numbers.");
      }

      let result;
      // Implement separate JavaScript functions for addition, subtraction, multiplication, and division
      switch (operator) {
        case "+":
          result = num1 + num2;
          break;
        case "-":
          result = num1 - num2;
          break;
        case "*":
          result = num1 * num2;
          break;
        case "/":
          // Prevent division by zero with appropriate error handling
          if (num2 === 0) throw new Error("Division by zero is not allowed.");
          result = num1 / num2;
          break;
        default:
          throw new Error("Invalid operator selected.");
      }
      result = parseFloat(result.toFixed(10)).toString();

      resultElement.classList.remove("text-red-500");
      resultElement.textContent = `${result}`;

      confetti({
        particleCount: 300,
        spread: 90,
        origin: { x: 1, y: 0.9 },
      });
      confetti({
        particleCount: 300,
        spread: 90,
        origin: { x: 0, y: 0.9 },
      });

    } catch (error) {
      resultElement.textContent = error.message;
      resultElement.classList.add("text-red-500");
    }
  });
