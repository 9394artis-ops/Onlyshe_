console.log("onlyshe website loaded ❤️");
function copyText(id) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("Quote copied!");
  });
}
