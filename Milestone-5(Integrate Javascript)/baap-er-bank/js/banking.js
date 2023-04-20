document.getElementById('deposit-button').addEventListener('click', function () {
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;

    const depositTotal = document.getElementById('deposit-total');
    depositTotal.innerText = parseFloat(depositAmount) + parseFloat(depositTotal.innerText);
    depositInput.value = '';
    const balance = document.getElementById('balance-total');
    balance.innerText = parseFloat(balance.innerText) + parseFloat(depositAmount);
})

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;

    const withdrawTotal = document.getElementById('withdraw-total');
    withdrawTotal.innerText = parseFloat(withdrawTotal.innerText) + parseFloat(withdrawAmount);
    withdrawInput.value = '';
    const balance = document.getElementById('balance-total');
    balance.innerText = parseFloat(balance.innerText) - parseFloat(withdrawAmount);
})