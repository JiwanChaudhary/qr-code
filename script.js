const Text = document.getElementById('text');
const Button = document.getElementById('button');
const ErrorText = document.getElementById('error');
const Img = document.getElementById('img');
const QRImage = document.getElementById('qr-image');

function generateQR() {
    QRImage.style.display = 'block';
    if (Text.value.trim().length === 0) {
        ErrorText.innerHTML = "Please Enter Text";
        Img.style.display = "none";
    } else {
        Img.style.display = "block";
        ErrorText.innerHTML = "";
        Img.src = "https://api.qrserver.com/v1/create-qr-code/?size=100*100&data=" + Text.value;
    }
}

Button.addEventListener('click', generateQR);

