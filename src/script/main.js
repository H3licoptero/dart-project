document.addEventListener("DOMContentLoaded", () => {
  "use strict";
  const accordion = () => {
    let header = document.querySelectorAll(".accordion__header"),
      content = document.querySelectorAll(".accordion__content");
  
    for (let i = 0; i < header.length; i++) {
      header[i].addEventListener("click", () => {
        content[i].style.transition = "all 0.3s ease";
        if (content[i].style.height) {
          content[i].style.height = null;
          content[i].style.paddingBottom = null; 
        } else {
          for (let j = 0; j < header.length; j++) {
            content[j].style.height = null;
            content[j].style.paddingBottom = null; 
          }
          content[i].style.height = `${content[i].scrollHeight}px`;
          content[i].style.paddingBottom = '20px'; 
        }
      });
    }
  };
  
  accordion();
  
  function slider(){
    const container = document.querySelector(".slider__wrapper"),
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
        event.preventDefault();
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
          // image[j].style.transition ='transform 0.3s ease';
      });
    }
  };
  
  toggler();
  
  
  const videoPlay = () => {
    const button = document.querySelector(".header__video-btn"),
      bg = document.querySelector(".header__video");
  
    button.addEventListener('click', (event) => {
      let target = event.target;
      if(target) {
        button.style.display = `none`;
        bg.insertAdjacentHTML(
          `afterbegin`,
          `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/LEK2R58xdsk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
        );
      }
    });
  };
  
  videoPlay();
  
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
  
  const objectCreate = () => {
  
  const contactsLastname = document.querySelector(".contacts__lastname");
  const contactsUsername = document.querySelector(".contacts__username");
  const contactsEmail = document.querySelector(".contacts__email");
  const contactsPhone = document.querySelector(".contacts__phone");
  const contactsMessage = document.querySelector(".contacts__textarea");
  const contactsForm = document.querySelectorAll(".contacts__form input, .contacts__textarea"
  );
  
    let obj = () => {
     let name = contactsUsername.value,
      lastName = contactsLastname.value,
      email = contactsEmail.value,
      phone = contactsPhone.value,
      message = contactsMessage.value;
      return {
        "First Name": name,
        "Last Name": lastName,
        "Email": email,
        "Phone": phone,
        "Message": message,
      };
    };
    let copy;
    contactsForm.forEach(el => {
      el.addEventListener("change", () => {
        copy = obj();
        console.log(copy);
      });
    });
  };
  
  objectCreate();
  
  const scrollShow = () => {
    const btnTop = document.querySelector(".button__block");
    window.addEventListener('scroll', (event) => {
      event.preventDefault();
      let positionTop = 0 + 'px'; 
      let count = 500 + 'px';
      let top = pageYOffset + 'px';
      
      if(top >= count) {
        btnTop.style.opacity = 1;
      } else if(top === positionTop){
        btnTop.style.opacity = 0;
      }
    });
  };
  
  scrollShow();

  function burger() {
    let line = document.querySelector(".nav__burger-firstLine"),
      lineSecond = document.querySelector(".nav__burger-secondLine"),
      lineThird = document.querySelector(".nav__burger-thirdLine"),
      burger = document.querySelector(".header__burger"),
      navList = document.querySelector(".nav__list");

      burger.addEventListener('click', (event) => {
        let target = event.target;
        if(target) {
          lineSecond.classList.toggle('second');
          line.classList.toggle('first');
          lineThird.classList.toggle('third');
          navList.classList.toggle('nav__list--active');
        } 
        line.style.transition = 'transform 0.3s ease'
        lineSecond.style.transition = "transform 0.3s ease";
        lineThird.style.transition = "transform 0.3s ease";
      });
  }

  burger();
});
