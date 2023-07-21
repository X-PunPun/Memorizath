// Variables globales
let num1, num2, operador, result;

// Función para generar un número aleatorio entre min y max (ambos inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Función para generar un problema aleatorio
function generateProblem() {
    num1 = getRandomNumber(1, 99);
    num2 = getRandomNumber(1, 99);
    const operadores = ['+', '-', '*', '/'];
    operador = operadores[getRandomNumber(0, operadores.length - 1)];
    if (operador === '/') {
        // Solo se permiten divisiones con resultado entero
        num2 = getRandomNumber(1, 10) * 10;
        num1 = num2 * getRandomNumber(1, 10);
    }

    // Mostrar el problema en pantalla
    const problemElement = document.querySelector('.problema');
    problemElement.textContent = `${num1} ${operador} ${num2} = ?`;

    // Calcular la respuesta correcta
    switch (operador) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }

    // Limpiar el campo de respuesta y resultado
    document.getElementById('respuesta').value = '';
    document.getElementById('resultado').textContent = '';
}

// Función para comprobar la respuesta del usuario
function checkAnswer() {
    const respuesta = parseFloat(document.getElementById('respuesta').value);
    const resultElement = document.getElementById('resultado');
    if (respuesta === result) {
        resultElement.textContent = '¡Respuesta correcta! 🎉';
    } else {
        resultElement.textContent = 'Respuesta incorrecta. Inténtalo de nuevo. 😔';
    }

    // Generar un nuevo problema después de verificar la respuesta
    setTimeout(generateProblem, 1000); // Esperar 1. segundos antes de mostrar el siguiente problema
}

// Evento al presionar la tecla "Enter"
document.getElementById('respuesta').addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});

// Generar el primer problema al cargar la página
generateProblem();
