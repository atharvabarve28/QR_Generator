//https://github.com/atharvabarve28

const wrapper = document.querySelector(".wrapper"),
    qrInput = document.querySelector(".form input"),
    qrImg = document.querySelector(".qr-code img"),
    generateBtn = wrapper.querySelector(".form button");

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value;
    if (!qrValue) return;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${qrValue}`;
    qrImg.addEventListener("load", () => {
        wrapper.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value) {
        wrapper.classList.remove("active");
    }
});

document.addEventListener("keypress", function (event) {
    if (event.keyCode === 13 || event.keyCode === 108) {
        event.preventDefault();
        document.getElementById("submit-btn").classList.add("active");
        setTimeout(function () {
            document.getElementById("submit-btn").classList.remove("active");
        }, 100);
        document.getElementById("submit-btn").click();
    }
});

window.onload = function () {
    document.getElementById("input-box").focus();
};

const inputBox = document.getElementById("input-box");
inputBox.addEventListener("blur", function () {
    inputBox.focus();
});
