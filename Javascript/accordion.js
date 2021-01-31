const accTitles = document.querySelectorAll('.accordion .acc-title');


window.addEventListener('resize', (e) => {
  const accContent = document.querySelectorAll('.acc-content');
  accContent.forEach(content => {
    const accTitle = content.previousElementSibling;
    const isHidden = accTitle.classList.contains('acc-hide');
    const maxHeight =  content.style.maxHeight;
    if (!isHidden && maxHeight !== '1000em') content.style.maxHeight = '1000em';
  })
})

accTitles.forEach(panel => {
  panel.addEventListener('click', (e) => {
    panel.classList.toggle('acc-hide')
    const isHidden = panel.classList.contains('acc-hide');
    const accContent = panel.nextElementSibling;
    const maxHeight = accContent.scrollHeight;
    accContent.style.maxHeight = (isHidden) ? '0' : `${maxHeight}px`;
  })
})