function total() {
    const caseTotal = document.getElementById('case-total');
    const phoneTotal = document.getElementById('phone-total');
    let totalAmount = parseFloat(caseTotal.innerText) + parseFloat(phoneTotal.innerText);

    const total = document.getElementById('total');
    const tax = document.getElementById('tax');
    const totalWithTax = document.getElementById('total-with-tax');

    total.innerText = totalAmount;
    tax.innerText = totalAmount / 10;
    totalWithTax.innerText = totalAmount + (totalAmount / 10);
}


document.getElementById('case-pos').addEventListener('click', function () {
    const caseInput = document.getElementById('case-input');
    caseInput.value = parseInt(caseInput.value) + 1;

    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = parseInt(caseInput.value) * 59;
    total();
})
document.getElementById('case-neg').addEventListener('click', function () {
    const caseInput = document.getElementById('case-input');
    if (parseInt(caseInput.value) > 0) caseInput.value = parseInt(caseInput.value) - 1;

    const caseTotal = document.getElementById('case-total');
    caseTotal.innerText = parseInt(caseInput.value) * 59;
    total();
})
document.getElementById('phone-pos').addEventListener('click', function () {
    const caseInput = document.getElementById('phone-input');
    caseInput.value = parseInt(caseInput.value) + 1;

    const caseTotal = document.getElementById('phone-total');
    caseTotal.innerText = parseInt(caseInput.value) * 1219;
    total();
})
document.getElementById('phone-neg').addEventListener('click', function () {
    const caseInput = document.getElementById('phone-input');
    if (parseInt(caseInput.value) > 0) caseInput.value = parseInt(caseInput.value) - 1;

    const caseTotal = document.getElementById('phone-total');
    caseTotal.innerText = parseInt(caseInput.value) * 1219;
    total();
})