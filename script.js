function generateQRCode() {
    var text = document.getElementById("text").value;

    if (text) {
        new QRCode(document.getElementById("qrcode"), text);
    } else {
        alert("Please enter text or URL.");
    }
}
