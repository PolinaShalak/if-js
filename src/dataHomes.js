import {bubbleSort} from "./bubbleSort";
import {getDataFromAPI} from "./fetch";
import {addHomesCards} from "./addBlockHomes";

export function getDataHomes () {
    (async () => {
        let dataHomes;
        if (!sessionStorage.getItem('homes')) {
            dataHomes = await getDataFromAPI('https://fe-student-api.herokuapp.com/api/hotels/popular');
            sessionStorage.setItem('homes', JSON.stringify(dataHomes));
        } else {
            dataHomes = JSON.parse(sessionStorage.getItem('homes'));
        }
        if (!dataHomes) {
            console.log('Array dataHomes not found');
        } else {
            const homesElements = document.getElementById('homes-cards');
            bubbleSort(dataHomes);
            addHomesCards(dataHomes, homesElements);
        }
    })();
}
