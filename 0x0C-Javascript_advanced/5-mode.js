function changeMode (size, weight, transform, background, color) {
    document.body.style.size = size;
    document.body.style.weight = weight;
    document.body.style.transform = transform;
    document.body.style.background = background;
    document.body.style.color = color;
}

function main () {
    let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
 
    textBox = document.createElement('p');
    tb = document.createTextNode("Welcome Holberton!");
    textBox.appendChild(tb);

    spookMode = document.createElement('button');
    spookMode.setAttribute('onclick', spooky);
    spm = document.createTextNode("Spooky");
    spookMode.appendChild(spm);

    dMMode = document.createElement('button');
    dMMode.setAttribute('onclick', darkMode());
    dm = document.createTextNode("Dark mode");
    dMMode.appendChild(dm);

    sMode = document.createElement('button');
    sMode.setAttribute('onclick', screamMode());
    sm = document.createTextNode("Scream mode");
    sMode.appendChild(sm);

    document.body.append(textBox, spookMode, dMMode, sMode);
}
