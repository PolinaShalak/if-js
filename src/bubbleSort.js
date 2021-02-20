export function bubbleSort(array) {
    let buff;
    for (let n = 0; n < array.length; n++) {
        let wasSwap = false;
        for (let i = 0; i < array.length - 1 - n; i++) {
            if (array[i].name > array[i + 1].name) {
                buff = array[i].name;
                array[i].name = array[i + 1].name;
                array[i + 1].name = buff;
                wasSwap = true;
            }
        }
        if (!wasSwap) break;
    }
    return array;
}