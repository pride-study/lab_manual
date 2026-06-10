function searchContent() {
  const input = document.getElementById('search');
  const filter = input.value.toLowerCase();
  const toc = document.querySelector('.toc');
  const items = toc.getElementsByTagName('li');

  for (let i = 0; i < items.length; i++) {
    const text = items[i].textContent || items[i].innerText;
    if (text.toLowerCase().indexOf(filter) > -1) {
      items[i].style.display = "";
    } else {
      items[i].style.display = "none";
    }
  }
}