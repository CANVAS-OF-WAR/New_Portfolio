let button = document.getElementById('button');
let paras = document.getElementsByTagName('p');
let headings = document.querySelectorAll('h1, h3, h2');
let lines = document.getElementsByClassName('line');
let listItems = document.getElementsByTagName('li');
let aside = document.getElementsByTagName('aside')[0];
let nav = document.getElementById('nav');
let profileImg = document.getElementById('img1');

button.addEventListener('click', () => {
    // Check the current bg
    if (document.body.style.background === 'white') {
        // Switch to a dark theme
        document.body.style.background = 'rgb(28, 28, 28)';
        
        for (let i = 0; i < paras.length; i++) {
            paras[i].style.color = 'white';
        }
        for (let i = 0; i < headings.length; i++) {
            headings[i].style.color = 'white';
        }
        for (let i = 0; i < lines.length; i++) {
            lines[i].style.backgroundColor = 'white';
        }
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].style.color = 'white';
        }
        if (aside) {
            aside.style.border = '1px solid white'; // Change aside border to white
        }
        if (nav) {
            nav.style.borderColor = 'white'; // Change header's bottom border
        }
        if (profileImg) {
            profileImg.style.borderColor = 'white'; // Change profile image border
        }
        if (button) {
            button.style.borderColor = 'white'; // Change button border color
        }
    } else {
        
        document.body.style.background = 'white';

        for (let i = 0; i < paras.length; i++) {
            paras[i].style.color = 'black';
        }
        for (let i = 0; i < headings.length; i++) {
            headings[i].style.color = 'black';
        }
        for (let i = 0; i < lines.length; i++) {
            lines[i].style.backgroundColor = 'black';
        }
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].style.color = 'black';
        }
    
        if (aside) {
            aside.style.border = '1px solid black'; 
        }
        if (nav) {
            nav.style.borderColor = 'black'; 
        }
        if (profileImg) {
            profileImg.style.borderColor = 'black'; 
        }
        if (button) {
            button.style.borderColor = 'black'; 
        }
    }
});