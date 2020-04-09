//Filter

const arr = [33, 35, 67, 100, 21, 22, 25, 88, 89, 1000, 343, 567, 320];

const oddNumbers = arr.filter(number => number % 2)
console.log(oddNumbers);

const evenNumber = arr.filter(number => !(number % 2));
console.log(evenNumber);

const numberBiggerThen100 = arr.filter(number => number > 100);
console.log(numberBiggerThen100);

// MAP

const double = arr.map(number => number * 2);
console.log(double);

const people = arr.map(number => number + ' osób');
console.log(people)

