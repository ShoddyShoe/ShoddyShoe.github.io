const menu = document.getElementById("menu");
var aboutItems = Array.from(document.getElementsByClassName('Avatar'));
const menuItems = document.getElementById('menu-items');

function delay(milliseconds){
  return new Promise(resolve => {
      setTimeout(resolve, milliseconds);
  });
}

Array.from(document.getElementsByClassName("menu-item"))
  .forEach((item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
    }
  });

async function aboutPageTransition(){
  menuItems.classList.remove('bounceBack-animation');
  menuItems.classList.add('bounce-animation');
  await delay(1000);
  for (const element of aboutItems) {
    element.classList.remove('glideBack-animation')
    element.classList.add('glide-animation');
    await delay(250);
  document.getElementById("arrow").classList.remove("arrowBack-animation")
  document.getElementById("arrow").classList.add("arrow-animation")
  }
}

var cards = document.querySelectorAll('.card');

cards.forEach(function(card) {
  card.addEventListener('click', function() {
      cards.forEach(function(c) {
      var character = c.querySelector('.character');
      character.style.top = "15%"
      c.style.height = "250px"
      c.style.bottom = "-150px"
      c.classList.remove('clicked');
      });
      var character = this.querySelector('.character');
      character.style.top = "2%";
      this.style.height = "400px";
      this.style.bottom = "0px";
      this.classList.add('clicked');
  });
});

async function glideBack(){
    document.getElementById("arrow").classList.remove('arrow-animation');
    document.getElementById("arrow").classList.add('arrowBack-animation');
    const originalOrder = Array.from(aboutItems);
    for (const element of aboutItems.reverse()) {
      element.classList.remove('glide-animation');
      element.classList.add('glideBack-animation');
      await delay(250)
    }
    menuItems.classList.remove('bounce-animation');
    menuItems.classList.add('bounceBack-animation');
    cards.forEach(function() {
      cards.forEach(function(c) {
      var character = c.querySelector('.character');
      character.style.top = "15%"
      c.style.height = "250px"
      c.style.bottom = "-150px"
      c.classList.remove('clicked');
      });
    aboutItems = originalOrder
    });
};