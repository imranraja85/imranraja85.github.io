// script.js file

function domReady(fn) {
    if (
        document.readyState === "complete" ||
        document.readyState === "interactive"
    ) {
        setTimeout(fn, 1000);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
}

domReady(function () {
    // If found you qr code
    function onScanSuccess(decodeText, decodeResult) {
        result = decodeText.replace("viewform?","formResponse?&submit=Submit&")
        document.getElementById("result").innerHTML = result;
    }

    let htmlscanner = new Html5QrcodeScanner(
        "my-qr-reader",
        { fps: 10, 
          qrbox: 250,
          supportedScanTypes: [Html5QrcodeScanType.SCAN_TYPE_FILE]
        }
    );
    htmlscanner.render(onScanSuccess);

});

function copyLink() {
   var copyText = document.getElementById("result");
   navigator.clipboard.writeText(copyText.innerText);
 
   alert("Copied the link to your clipboard");
} 