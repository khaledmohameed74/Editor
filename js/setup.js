let saturate = document.querySelector('#saturate');
let contrast = document.querySelector('#contrast');
let brightness = document.querySelector('#brightness');
let sepia = document.querySelector('#sepia');
let grayscale = document.querySelector('#grayscale');
let blur = document.querySelector('#blur');
let huerotate = document.querySelector('#hue-rotate');

let dawnload = document.querySelector('#dawnload');
let reset = document.querySelector('#reset');
let imgbox = document.querySelector('#img-box');
let img = document.querySelector('#img');
let upload = document.querySelector('#upload');

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');


// start programer
window.onload = function () {
    reset.style.display = 'none';
    dawnload.style.display = 'none';
    imgbox.style.display = 'none';
}


//load img
upload.onchange = function () {
    reset.style.display = 'block';
    dawnload.style.display = 'block';
    imgbox.style.display = 'block';
    let file = new FileReader;
    file.readAsDataURL(upload.files[0]);
    file.onload = function () {
        img.src = file.result
    }
    img.onload = function () {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    }
    img.style.display = 'none';
    restetvalue()
}

//run filters
let filters = document.querySelectorAll("input[data-filter='true']");
filters.forEach(filter => {
    filter.addEventListener('input', function () {
        ctx.filter = `
        saturate(${saturate.value}%)
        contrast(${contrast.value}%)
        brightness(${brightness.value}%)
        sepia(${sepia.value}%)
        grayscale(${grayscale.value})
        blur(${blur.value}px)
        hue-rotate(${huerotate.value}deg)
        `
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    })
})

//reset
function restetvalue() {
    img.style.filter = 'none';
    saturate.value = '100';
    contrast.vlue = '100';
    brightness.value = '100';
    sepia.value = '0';
    grayscale.value = '0';
    blur.value = '0';
    huerotate.vlaue = '0';
}

reset.addEventListener('click', function () {
    restetvalue()
});

dawnload.onclick = function () {
    dawnload.href = canvas.toDataURL();
}