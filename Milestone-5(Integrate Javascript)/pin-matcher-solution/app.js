function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';

    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const calc = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calc.value = '';
        }
    }
    else {
        const newNumber = calc.value + number;
        calc.value = newNumber;
    }
})

document.getElementById('submit-btn').addEventListener('click', function () {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;

    if (pin == typedNumbers) {
        document.getElementById('fail-noti').style.display = 'none';
        document.getElementById('success-noti').style.display = 'block';

    }
    else {
        document.getElementById('fail-noti').style.display = 'block';
        document.getElementById('success-noti').style.display = 'none';
    }
})