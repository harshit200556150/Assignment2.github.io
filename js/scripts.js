// constants for query selector
const custColorBtn = document.querySelector('#custColorBtn');
const randColorBtn = document.querySelector('.randColor');
const imageSelect = document.querySelector('#imageSelect');
const images = document.querySelector('#images');
const myStudentId = document.querySelector('#myStudentId');

// array of image file names
const imageFiles = ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg'];

// function to generate options for select list
function addList() {
    // loop through array of image file names
    for (let i = 0; i < imageFiles.length; i++) {
        // create new option element
        const option = document.createElement('option');

        // set value and text of option element
        option.value = imageFiles[i];
        option.textContent = imageFiles[i];

        // add option element to select list
        imageSelect.appendChild(option);
    }
}

// function to change image
function changeImage() {
    // get selected image file name
    const selectedImage = imageSelect.value;

    // set src attribute of image element to selected image file name
    images.src = `img/${selectedImage}`;
}

// function to change background color from user input
function changeCustomColor() {
    // get user input
    const customNumber = document.querySelector('#customNumber').value;

    // display student id
    myStudentId.textContent = `Your student id is: ${customNumber}`;

    // set background color based on user input
    let color;
    if (customNumber < 0 || customNumber > 100) {
        color = 'red';
    } else if (customNumber >= 0 && customNumber < 20) {
        color = 'green';
    } else if (customNumber >= 20 && customNumber < 40) {
        color = 'blue';
    } else if (customNumber >= 40 && customNumber < 60) {
        color = 'orange';
    } else if (customNumber >= 60 && customNumber < 80) {
        color = 'purple';
    } else if (customNumber >= 80 && customNumber <= 100) {
        color = 'yellow';
    }
    document.body.style.backgroundColor = color;
}

// function to change background color from random number
function changeRandomColor() {
    // generate random number
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    // set background color based on random number
    let color;
    if (randomNumber < 20) {
        color = 'green';
    } else if (randomNumber >= 20 && randomNumber < 40) {
        color = 'blue';
    } else if (randomNumber >= 40 && randomNumber < 60) {
        color = 'orange';
    } else if (randomNumber >= 60 && randomNumber < 80) {
        color = 'purple';
    } else {
        color = 'yellow';
    }
    document.body.style.backgroundColor = color;
}

// event listeners for on click event of buttons and select
custColorBtn.addEventListener('click', changeCustomColor);

randColorBtn.addEventListener('click', changeRandomColor);

const changeImageBtn = document.querySelector('#changeImageBtn');
changeImageBtn.addEventListener('click', changeImage);

// call function to generate options for select list
addList();