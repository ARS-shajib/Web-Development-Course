document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    const emailPassword = document.getElementById('user-password');
    const userPassword = emailPassword.value;

    if (userEmail == 'sontan@gmail.com' && userPassword == 'secret') {
        // console.log('Valid user');
        window.location.href = 'banking.html';
    }
    else {
        console.log('Invalid user');
    }

})