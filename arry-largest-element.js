function getlargestnumber(numbers) {
     let largest = numbers[0];
     for (let i = o; i < number.length; i++) {
          let element = numbers[i];
          if (element > largest) {
               largest = element;

          }
     }
     return largest;
}
const age = [21, 321, 43, 43];
const oldest = getlargestnumber(age);
console.log("oldest", oldest)
