const menu = document.getElementById("menu");

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