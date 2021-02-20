export function addHomesCards(array, element, nameCards = 'cards') {
      const screenBrowserWidth = window.screen.availWidth;
    array.forEach((item, index) => {
      const el = document.createElement('div');
      el.classList.add('col-3', 'col-xs-3', 'col-sm-2', nameCards);
      el.innerHTML = `
   <img class="homes__images" src ="${item.imageUrl}" alt="${item.name}">
   <a class="homes__link" href="">${item.name}</a>
   <p class="homes__text">${item.city}, ${item.country}</p>
   `;
      element.appendChild(el);
      if (index > 3) {
        el.classList.add('display-none');
      }
      if (index > 1 && screenBrowserWidth < 768) {
        el.classList.add('display-none');
      }
    });
}
