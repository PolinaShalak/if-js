// функция сложения с замыканием
function sum3(a) {
    return function (b) {
        return a + b;
    };
}
test('Function must will return number', () => {
    expect(sum3(1)(4)).toBe(5)
})