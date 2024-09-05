// script.js file

// If found you qr code
function onScanSuccess(decodeText, decodeResult) {
    result = decodeText.replace("viewform?","formResponse?&submit=Submit&")
    document.getElementById("result").innerHTML = result;
    alert('scan complete, go to step 3')
}

function initScanner(){
let htmlscanner = new Html5QrcodeScanner(
    "my-qr-reader",
    { fps: 10, 
      qrbox: 250,
      facingMode: 'environment'
    }
);



htmlscanner.render(onScanSuccess);
}


function copyLink() {
   var copyText = document.getElementById("result");
   navigator.clipboard.writeText(copyText.innerText);
 
   alert("Copied the link to your clipboard");
} 