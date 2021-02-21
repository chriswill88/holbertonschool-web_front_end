function changeMode (size, weight, transform, background, color) {
    document.body.style.size = size;
    document.body.style.weight = weight;
    document.body.style.transform = transform;
    document.body.style.background = background;
    document.body.style.color = color;
}

let spooky = function () {changeMode(9, 'bold', 'uppercase', 'pink', 'green')};
let darkMode = function () {changeMode(12, 'bold', 'capitalize', 'black', 'white')};
let screamMode = function () {changeMode(12, 'normal', 'lowercase', 'white', 'black')};

function main () {
    textBox = document.createElement('p');
    tb = document.createTextNode("Welcome Holberton!");
    textBox.appendChild(tb);

    function buttonMaker(func, texty) {
        button = document.createElement('button');
        button.setAttribute('onclick', func);
        button.appendChild(document.createTextNode(texty));
        return button;
    }

    spook = buttonMaker("spooky()", 'Spooky');
    dark = buttonMaker("darkMode()", 'Dark mode');
    scream = buttonMaker("screamMode()", 'Scream mode');

    document.body.append(textBox, spook, dark, scream);
}
