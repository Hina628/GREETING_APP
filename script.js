function Display_Greeting() {
    var name1 = prompt("Enter Your Name");
    var age = prompt("Enter Your Age?");

    if (age >= 18) {
        document.getElementById('GREETING_APP').innerHTML = ` "Welcome" ${name1}! You are eligible to participate `;
    }

    else {
        document.getElementById('GREETING_APP').innerHTML = `"Sorry" ${name1}! you are too young to join`;
    }
}


