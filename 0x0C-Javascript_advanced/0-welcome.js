// this function sends an welcoming alert

function welcome(firstName, lastName) {
    let fullName = firstName + " " + lastName;
    function displayFullName(fullName) {
        alert('Welcome' + " " + fullName + "!");
    }
    displayFullName(fullName);
}
