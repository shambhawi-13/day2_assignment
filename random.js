var a = Math.floor(Math.random() * 10);
console.log(a);
guess = 1;
for (i = 0; i < 5; i++) {
    var b = parseInt(prompt("Enter a number"));
    guess++
    if (a == b) {
        alert("User Won")
        break
    }

    else {
        alert(`User Loss, you have ${4 - i} attempt left`)
    }

    if (guess > 5) {
        alert("Attempt finished")
    }
}

