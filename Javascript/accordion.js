const accTitles = document.querySelectorAll('.accordion .acc-title');

window.addEventListener('resize', (e) => {
  const accContent = document.querySelectorAll('.acc-content');
  accContent.forEach(content => {
    const accTitle = content.previousElementSibling;
    const isHidden = accTitle.classList.contains('acc-hide');
    // const maxHeight =  content.style.maxHeight;
    console.log('check', isHidden)
    if (!isHidden) content.style.maxHeight = '100%';
  })
})

accTitles.forEach(panel => {
  const accContent = panel.nextElementSibling;
  const height = accContent.scrollHeight;
  accContent.style.maxHeight = `${height}px`;

  panel.addEventListener('click', (e) => {
    panel.classList.toggle('acc-hide')
    const isHidden = panel.classList.contains('acc-hide');
    accContent.style.maxHeight = (isHidden) ? '0' : `${height}px`;
  })
})