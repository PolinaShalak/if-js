import {slider} from "./slider";
import {searchAndSendForm} from "./searchAndSendForm";
import {getDataHomes} from "./dataHomes";
import {getDataFromAPI} from "./fetch";
import {calendar} from "./calendar";

window.addEventListener(
    'DOMContentLoaded', () => {
        calendar();
        getDataFromAPI();
        getDataHomes();
        slider('homes__arrow-next', 'homes__arrow-back', '.cards');
        searchAndSendForm();
    }
)

