function sum(a, b) {
    c = 10;//hoisting
    console.log(c); //hoisting
    if (a > 10) {
        var c = 'happy';
        console.log(c);

        mood = 'happy';
        mood = 'sad';
    }
}
sum(11, 2);

console.log(mood);// globally leaked, Cz we are not using const,let,var.