export function slider(arrowNextEl, arrowBackEl, cardsSelector) {
    const homesArrowNextEl = document.getElementById(arrowNextEl);
    const homesArrowBackEl = document.getElementById(arrowBackEl);

    let startNumberSlider = 0;
    let nextNumberSlider = 4;

    const homesCardsElements = document.querySelectorAll(cardsSelector);

    if (homesCardsElements.length <= 3) {
        homesArrowNextEl.classList.add('display-none');
    }

    homesArrowNextEl.addEventListener('click', () => {
        homesCardsElements[startNumberSlider].classList.add('display-none');
        homesCardsElements[nextNumberSlider].classList.remove('display-none');

        if (nextNumberSlider === homesCardsElements.length - 1) {
            homesArrowNextEl.classList.add('display-none');
            return;
        }
        startNumberSlider++;
        nextNumberSlider++;

        if (startNumberSlider > 0) {
            homesArrowBackEl.classList.remove('display-none');
        }
    });

    homesArrowBackEl.addEventListener('click', () => {
        if (nextNumberSlider === homesCardsElements.length - 1) {
            homesArrowNextEl.classList.remove('display-none');
        }

        homesCardsElements[nextNumberSlider].classList.add('display-none');
        homesCardsElements[startNumberSlider].classList.remove('display-none');
        if (startNumberSlider === 0) {
            homesArrowBackEl.classList.add('display-none');
            return;
        }
        startNumberSlider--;
        nextNumberSlider--;
    });
}

