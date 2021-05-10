function add(a, b) {
    return a + b;
}

test("2+2=4", () => {
    let result = add(2,2);
    expect(result).toBe(4)

})