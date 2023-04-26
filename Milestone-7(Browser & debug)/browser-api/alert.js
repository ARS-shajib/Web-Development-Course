const personalDevelopment = () => {
    alert('Buy Some Courses and Complete those!!!!');
}

const askPicnic = () => {
    const response = confirm('Are you going to picnic?');
    console.log(response);

    if (response === true) {
        alert('give me 1000 BDT via bkash');
    }
    else {
        alert('spend your time with your wife/wifi');
    }
}

const askName = () => {
    const name = prompt('What is your name?');
    if (name) {
        console.log(name);
    }
}