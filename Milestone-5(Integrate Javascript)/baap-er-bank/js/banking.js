document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    if (parseFloat(depositAmount) > 0) {
        const depositTotal = document.getElementById('deposit-total');
        depositTotal.innerText = parseFloat(depositAmount) + parseFloat(depositTotal.innerText);

        const balance = document.getElementById('balance-total');
        balance.innerText = parseFloat(balance.innerText) + parseFloat(depositAmount);
    }
    depositInput.value = '';
})

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;

    const balance = document.getElementById('balance-total');

    if (parseFloat(withdrawAmount) > 0 && parseFloat(withdrawAmount) <= parseFloat(balance.innerText)) {
        const withdrawTotal = document.getElementById('withdraw-total');
        withdrawTotal.innerText = parseFloat(withdrawTotal.innerText) + parseFloat(withdrawAmount);

        balance.innerText = parseFloat(balance.innerText) - parseFloat(withdrawAmount);
    }
    withdrawInput.value = '';
})