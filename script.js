const qrFormEl = document.getElementById('qrForm');
const qrContainerEl = document.getElementById('qrContainer');
const qrImageEl = document.getElementById('qrImage');
const qrInputTextEl = document.getElementById('qrInputText');
const generateBtnEl = document.getElementById('generateBtn');

const renderQRCode = (url) => {
  if (!url) return;
  generateBtnEl.innerText = "Generating QR Code...";
  qrImageEl.src = url;
  qrContainerEl.classList.add('show');
  qrImageEl.addEventListener('load',() => {
    generateBtnEl.innerText = "Generate QR Code";
  });
};
qrFormEl.addEventListener('submit',(event) =>{
  event.preventDefault();
  
  const formData = new FormData(qrFormEl);
  const text = formData.get('qrText');
  const qrCodeurl = "https://api.qrserver.com/v1/create-qr-code/?size=150*150&data=${text}"; 
  renderQRCode(qrCodeurl);
  qrInputTextEl.addEventListener('keyup', () => {
    if (!qrInputTextEl.value.trim()){
      qrContainerEl.classList.remove('show');
    }
  })
});
