// Mendapatkan elemen-elemen penting
const display = document.querySelector('#display');
const keys = document.querySelector('.calculator-keys');

let firstOperand = '';  // Operand pertama
let secondOperand = ''; // Operand kedua
let currentOperator = ''; // Operator saat ini
let shouldResetScreen = false; // Untuk mereset layar saat operasi baru dimulai

// Fungsi untuk memperbarui tampilan
function updateDisplay(value) {
    if (shouldResetScreen) {
        display.value = value;  // Reset tampilan
        shouldResetScreen = false;
    } else {
        display.value += value; // Tambahkan ke tampilan
    }
}

// Fungsi untuk menghitung hasil
function calculate() {
    const a = parseFloat(firstOperand);
    const b = parseFloat(display.value);

    let result;
    switch (currentOperator) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = b !== 0 ? a / b : 'Error';
            break;
        default:
            return;
    }

    display.value = result;
    firstOperand = result.toString();
    secondOperand = '';
    currentOperator = '';
}

// Fungsi untuk mengatur ulang kalkulator
function resetCalculator() {
    display.value = '';
    firstOperand = '';
    secondOperand = '';
    currentOperator = '';
    shouldResetScreen = false;
}

// Fungsi untuk menghapus satu angka (Backspace)
function backspace() {
    display.value = display.value.slice(0, -1); // Hapus karakter terakhir
}

// Event listener untuk tombol-tombol kalkulator
keys.addEventListener('click', (event) => {
    const { target } = event;
    const { value } = target;

    if (!target.matches('button')) return; // Abaikan klik di luar tombol

    switch (true) {
        case target.classList.contains('operator'):
            if (firstOperand && currentOperator && !shouldResetScreen) {
                calculate();
            }
            firstOperand = display.value;
            currentOperator = value;
            shouldResetScreen = true;
            break;

        case target.classList.contains('equal-sign'):
            if (currentOperator && firstOperand) calculate();
            break;

        case target.classList.contains('all-clear'):
            resetCalculator();
            break;

        case target.classList.contains('backspace'):
            backspace();
            break;

        case target.classList.contains('decimal'):
            if (!display.value.includes('.')) updateDisplay(value);
            break;

        default:
            updateDisplay(value);
            break;
    }
});
