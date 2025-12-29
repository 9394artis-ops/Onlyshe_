const btn = document.querySelector('.copy-btn');

btn.addEventListener('click', () => {
  const text = document.querySelector('.quote-hindi').innerText;
  navigator.clipboard.writeText(text);
  btn.innerText = "Copied ❤️";
  setTimeout(()=>btn.innerText="Copy",2000);
});
