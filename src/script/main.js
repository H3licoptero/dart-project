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

const slider = () => {
  let container = document.querySelector(".slider__wrapper"),
    item = document.querySelectorAll(".slider__item"),
    btn = document.querySelectorAll(".slider__btn");

    let count = 0;
    let size = item[0].clientHeight;

    container.style.transform = `translateY(${-size * count}px)`;

    const switcher = () => {
      container.style.transform = `translateY(${-size * count}px)`;
      container.style.transition = `transform 0.3s ease`;
    };
    
    btn.forEach(el => {
      el.addEventListener('click', event => {
        let target = event.target;
        if (target.matches(".fa-angle-up")) {
          if(count > item.length - 1) {
            return;
          }
          count++;
        }
        if (target.matches(".fa-angle-down")) {
          if (count < 0) {
            return;
          }
          count--;
        }
        switcher();
      })
    })
};

slider();