const accordion = () => {
  let header = document.querySelectorAll(".accordion__header"),
    content = document.querySelectorAll(".accordion__content");
    
    for(let i = 0; i < header.length; i++) {
      header[i].addEventListener('click', () => {
        content[i].style.transition = 'all 0.3s ease'
        if(content[i].style.height) {
          content[i].style.height = null;
        } else {
          for(let j = 0; j < header.length; j++) {
            content[j].style.height = null;
          }
          content[i].style.height = `${content[i].scrollHeight}px`;
        }
      })
    }
};

accordion();