const form = document.getElementById("form");
const qrcode = document.getElementById("qrcode");

const onGenerateQrCode = (e) => {
  e.preventDefault();
  clearUi();

  const url = document.getElementById("url").value;
  const size = document.getElementById("size").value;
  //   console.log(url, size);

  if (url === "") {
    alert("Please input url");
    inputFocus();
  } else {
    showSpinner();

    setTimeout(() => {
      hideSpinner();
      generateQrCode(url, size);

      setTimeout(() => {
        const createdUrl = qrcode.querySelector("img").src;
        createDownloadBtn(createdUrl);
      }, 50);
    }, 1000);
  }
};

const generateQrCode = (url, size) => {
  const qrCode = new QRCode(qrcode, {
    text: url,
    width: size,
    height: size,
  });
};

const inputFocus = () => {
  document.getElementById("url").focus();
};
const showSpinner = () => {
  document.getElementById("spiner").style.display = "block";
};
const hideSpinner = () => {
  document.getElementById("spiner").style.display = "none";
};
const clearUi = () => {
  qrcode.innerHTML = "";
};
const createDownloadBtn = (saveUrl) => {
  const link = document.createElement("a");
  link.classList =
    "my-4 bg-red-500 py-2 px-6 text-white text-lg font-bold rounded-md";
  link.id = "downloadLink";
  link.href = saveUrl;
  link.innerHTML = "Download as Image";
  link.download = qrcode;
  link.pathname = "Qr-code.png";
  document.getElementById("output").appendChild(link);
};
hideSpinner();

form.addEventListener("submit", onGenerateQrCode);
