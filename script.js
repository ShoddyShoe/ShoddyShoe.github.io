const menu = document.getElementById("menu");
var aboutItems = Array.from(document.getElementsByClassName('card'));
const menuItems = document.getElementById('menu-items');
const aboutPageBackButton = document.getElementById("aboutPageBackButton");

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
  document.querySelectorAll('.cardTitle').forEach(t => {
    t.classList.remove('expanded', 'glass');
  });
  menuItems.classList.remove('bounceBack-animation');
  menuItems.classList.add('bounce-animation');
  await delay(1000);
  for (const element of aboutItems) {
    element.classList.remove('glideBack-animation')
    element.classList.add('glide-animation');
    await delay(250);
  }
  await delay(1200);
  aboutPageBackButton.classList.remove('arrowBack-animation')
  aboutPageBackButton.classList.add('arrow-animation')
}

var cards = document.querySelectorAll('.card');

cards.forEach(function(card) {
  card.addEventListener('click', async function(event) {
    if (event.target.matches('.innerCard') & !event.target.closest('.card').classList.contains("clicked")) {
    var title = this.querySelector('.cardTitle');
    if (event.target.closest('.card') !== this) return;
    cards.forEach(function(c) {
      c.classList.remove('clicked');
      c.classList.add('wait');
      var character = c.querySelector('.character');
      character.style.removeProperty('top');
      c.style.removeProperty('height');
      c.style.removeProperty('bottom');
    });
    this.classList.add('clicked');
    document.querySelectorAll('.cardTitle').forEach(t => {
      t.style.opacity = "0"
    });
    await delay(500)
    var character = this.querySelector('.character');
    character.style.top = "10px";
    this.style.height = "400px";
    this.style.bottom = "0px";
    document.querySelectorAll('.cardTitle').forEach(t => {
      t.classList.remove('glass', 'expanded');
    });
    cards.forEach(function(c) {
      c.classList.remove('wait');
    });
    title.style.opacity = "100";
    title.classList.add('glass', 'expanded');
    };
  });
});



async function glideBack(){
    aboutPageBackButton.classList.remove('arrow-animation');
    aboutPageBackButton.classList.add('arrowBack-animation');
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
    document.querySelectorAll('.cardTitle').forEach(t => {
      t.style.opacity = '0';
    });
    aboutItems = originalOrder
    });
};