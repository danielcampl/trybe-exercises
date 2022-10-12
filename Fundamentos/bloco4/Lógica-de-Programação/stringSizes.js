let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggest = array[0];
let smallest = array[0];

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length > biggest.length) {
        biggest = array[index];
    }
}

for (let index = 0; index < array.length; index += 1) {
    if (array[index].length < smallest.length) {
        smallest = array[index];
    }
}

console.log(smallest);
console.log(biggest);

