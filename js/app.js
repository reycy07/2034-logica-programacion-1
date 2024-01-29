// Variable Declaration
const maxNumber = 10;
const secretNumber = Math.round(Math.random() * 9) + 1; // Get a number between 1 and 10
const minNumber = 0;
let attempts = 1;

// Get the maximum number of attempts
const maxAttempts = Number(prompt('Ingrese la cantidad de intentos para adivinar el numero secreto'));

// Function definition
function guessNumber() {
    
    let userNumber = Number(prompt(`Escoje un número de entre ${minNumber} y ${maxNumber}`)); // Get user's number

    // Validate that it is a number and within the range
    if (isNaN(userNumber) || userNumber <= 0 || userNumber > 10) {
        alert('Solo puedes escojer valores numericos positivos');
        guessNumber();
        return;
    }

    // Check if it's the secret number or if the maximum number of attempts is reached
    if (userNumber === secretNumber || maxAttempts === attempts) {
        alert(`${userNumber === secretNumber ? 'WoW Ganaste 🎉' : 'Lo siento Perdiste 😌'} el numero secreto es ${secretNumber} - ${attempts} ${attempts > 1 ? 'intentos': 'intento' }`);
        return;
    } else if (userNumber < secretNumber) {
        alert(`El numero ${userNumber} es Menor al numero secreto intenta otra vez`); // If the number is smaller, give a message to the user
        attempts++; // Increment the attempts counter
        guessNumber();
    } else {
        alert(`El numero ${userNumber} es Mayor al numero secreto intenta otra vez`); // If the number is greater, give a message to the user
        attempts++; // Increment the attempts counter
        guessNumber();
    }
}

// Function call
guessNumber();