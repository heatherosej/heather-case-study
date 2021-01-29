const accTitles = document.querySelectorAll('.accordion .acc-title');

accTitles.forEach(panel => {
  panel.addEventListener('click', (e) => {
    panel.classList.toggle('acc-active')

    // const acc = panel.parentElement;
    // print(acc)

    // const accContent = panel.nextElementSibling;
    // const height = accContent.scrollHeight;
    // const isActive = panel.classList.contains('acc-active');
  })
})