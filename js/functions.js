function random() {
    s = Math.floor(Math.random() * 10);
    return s;
}

function swapLast(array) {
    array.splice(array.length - 2, 2, array[array.length - 1], array[array.length - 2]);
    return array
}
function doWork() {
    console.log("Provide magic")
}