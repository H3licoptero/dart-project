const accordion = () => {
  let header = document.querySelectorAll(".accordion__header"),
    content = document.querySelectorAll(".accordion__content");

  for (let i = 0; i < header.length; i++) {
    header[i].addEventListener("click", () => {
      content[i].style.transition = "all 0.3s ease";
      if (content[i].style.height) {
        content[i].style.height = null;
      } else {
        for (let j = 0; j < header.length; j++) {
          content[j].style.height = null;
        }
        content[i].style.height = `${content[i].scrollHeight}px`;
      }
    });
  }
};

accordion();

const slider = () => {
  let container = document.querySelector(".slider__wrapper"),
    item = document.querySelectorAll(".slider__item"),
    btn = document.querySelectorAll(".slider__btn");

  let count = 0;
  let marg = getComputedStyle(item[0]);
  let marginBot = parseInt(marg.marginBottom);
  let size = item[0].clientHeight + marginBot;

  container.style.transform = `translateY(${-size * count}px)`;

  const switcher = () => {
    container.style.transform = `translateY(${-size * count}px)`;
    container.style.transition = `transform 0.3s ease`;
  };

  btn.forEach((el) => {
    el.addEventListener("click", (event) => {
      let target = event.target;
      if (target.matches(".fa-angle-up")) {
        if (count >= item.length - 2) {
          return;
        }
        count++;
      }
      if (target.matches(".fa-angle-down")) {
        if (count <= 0) {
          return;
        }
        count--;
      }
      switcher();
    });
  });
};

slider();

const toggler = () => {
  const image = document.querySelectorAll(".team__slider-image"),
    name = document.querySelectorAll(".team__name");

  for(let j = 0; j < image.length; j++) {
    image[j].addEventListener('click', (event) => {
      event.preventDefault();
        for (let i = 0; i < image.length; i++) {
          image[i].classList.remove("team__slider-image--active");
          name[i].classList.remove("team__name--active");
        }
        image[j].classList.add("team__slider-image--active");
        name[j].classList.add("team__name--active");
    });
  }
};

toggler();


const video = () => {
  const button = document.querySelector(".header__video-btn"),
    bg = document.querySelector(".header__video");

  button.addEventListener('click', (event) => {
    let target = event.target;
    if(target) {
      button.style.display = `none`;
      bg.insertAdjacentHTML(
        `afterbegin`,
        `<iframe width="100%" height="320px" src="https://www.youtube.com/embed/LEK2R58xdsk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
      );
    }
  });
};

video();

const scroll = () => {
  const links = document.querySelectorAll(
    `a[href="#home"], a[href="#service"], a[href="#slider"], 
    a[href="#help"], a[href="#team"]`
  );
  links.forEach(el => {
    el.addEventListener("click", event => {
      event.preventDefault();
      let target = event.target;
      let anchors = el.getAttribute("href").substr(1);
      if(target) {
        document.getElementById(anchors).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })
};

scroll();
