document.getElementById("sortForm").addEventListener("submit", function(event) {
    event.preventDefault();
    bubbleSort();
});

function bubbleSort() {
    let input = document.getElementById("arrayInput").value;

    if (!input) {
        alert("Введите массив.");
        return;
    }

    let array = input.split(',').map(Number);

    if (array.some(isNaN)) {
        alert("Введите корректные числа.");
        return;
    }

    let n = array.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; n - 1 - i > j; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }

    document.getElementById("sortedArray").value = array.join(', ');
}
