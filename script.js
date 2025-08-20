// QR Generator
function generateQR() {
  let qrText = document.getElementById("qrText").value;
  document.getElementById("qrCode").innerHTML = ""; // clear old QR
  if (qrText.trim() === "") {
    alert("Please enter text or URL");
    return;
  }
  new QRCode(document.getElementById("qrCode"), {
    text: qrText,
    width: 200,
    height: 200,
  });
}

// QR Scanner
function startScanner() {
  let scanner = new Html5Qrcode("reader");
  scanner.start(
    { facingMode: "environment" }, // use back camera if available
    { fps: 10, qrbox: 250 },
    qrCodeMessage => {
      document.getElementById("scanResult").innerText = "Scanned: " + qrCodeMessage;
      scanner.stop(); // stop after first scan
    },
    errorMessage => {
      // Ignore errors for now
    }
  );
}

// Start scanner on page load
window.onload = () => {
  startScanner();
};
