import {slider} from "./slider.js";
import {bubbleSort} from "./bubbleSort";
import {getDataFromAPI} from "./fetch";
import {addHomesCards} from "./addBlockHomes";
import {selectedDateCheckOut, selectedDateCheckIN} from "./calendar";

export function searchAndSendForm() {
    const formEl = document.getElementById('header__form');
    const formDestinationEl = document.getElementById('city');
    const availableHotelsEl = document.getElementById('available--hotels');
    formEl.addEventListener('submit', async (event) => {
        event.preventDefault();
        const search1 = formDestinationEl.value.toLowerCase().trim();

        const res = await getDataFromAPI(`https://fe-student-api.herokuapp.com/api/hotels?search=${search1
        }&dateFrom=${selectedDateCheckIN.getTime()}&dateTo=${selectedDateCheckOut.getTime()}`);
        if (res.length === 0) {
            if (availableHotelsEl.classList.contains('background__successfully')) {
                availableHotelsEl.classList.remove('background__successfully');
            }
            availableHotelsEl.classList.add('background__not-successfully');
            availableHotelsEl.innerHTML = `
    <div class="container">
        <h2 class="title">Available hotels</h2>
        <p class="available--text">Unfortunately, your search returned no results </p>
    </div>
    `;
        }
        if (res.length !== 0) {
            bubbleSort(res);
            availableHotelsEl.classList.add('background__successfully');
            availableHotelsEl.innerHTML = `
    <div class="container">
        <h2 class="title">Available hotels</h2>
        <div class="row" id="available--cards">
        <svg class="available__svg_arrow-back display-none" id="available__arrow-back">
            <use href="#arrow"></use>
        </svg>
        <svg class="homes__svg_arrow-next" id="available__arrow-next">
            <use href="#arrow"></use>
        </svg>
    </div>
    `;
            const availableCardsEl = document.getElementById('available--cards');
            addHomesCards(res, availableCardsEl, 'availableCards');
        }
        slider('available__arrow-next', 'available__arrow-back', '.availableCards');
    });
}