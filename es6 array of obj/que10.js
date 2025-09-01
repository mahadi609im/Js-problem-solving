// 1 Task: Get only the names from the users array.
const users = [
  { id: 1, name: 'Alice', age: 22 },
  { id: 2, name: 'Bob', age: 17 },
  { id: 3, name: 'Charlie', age: 25 },
];

users.forEach(i => console.log(i.name));

// 2 Task: Return only the products that cost less than 100.
const products = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Phone', price: 800 },
  { id: 3, name: 'Pen', price: 2 },
];

let ex = products.filter(i => i.price > 100);
// console.log(ex);

// 3 Task: Find the first student whose grade is "B".
const students = [
  { id: 1, name: 'David', grade: 'A' },
  { id: 2, name: 'Eve', grade: 'C' },
  { id: 3, name: 'Frank', grade: 'B' },
];

let findGradB = students.find(i => i.grade === 'B');
// console.log(findGradB);

// 4 Task: Print each book title with its page count.
const books = [
  { title: 'Book One', pages: 200 },
  { title: 'Book Two', pages: 150 },
  { title: 'Book Three', pages: 300 },
];

books.forEach(i => {
  let bookTitle = i.title;
  let page = i.pages;

  console.log(`title: ${bookTitle} pages: ${page}`);
});

// 5 Task: Create a new array of employee names with their salaries increased by 10%.
const employees = [
  { id: 1, name: 'Sam', salary: 5000 },
  { id: 2, name: 'John', salary: 7000 },
  { id: 3, name: 'Sara', salary: 4000 },
];

let emp = employees.map(i => {
  let salary = i.salary;
  let disc10 = (salary * 10) / 100;
  salary += disc10;
  return `name: ${i.name} salary: ${salary}`;
});
console.log(emp);

// 6 Task: Get only the cars manufactured after 2017.
const cars = [
  { brand: 'Toyota', year: 2018 },
  { brand: 'Honda', year: 2020 },
  { brand: 'Ford', year: 2015 },
];

let manufactured = cars.filter(i => i.year > 2017);
console.log(manufactured);

// 7 Task: Find the first movie that has a rating below 5.
const movies = [
  { id: 1, title: 'Inception', rating: 8.8 },
  { id: 2, title: 'The Room', rating: 3.6 },
  { id: 3, title: 'Interstellar', rating: 8.6 },
];

let below = movies.find(i => i.rating < 5);
console.log(below);

// 8 Task: Print each player's name with the number of goals they scored.
const players = [
  { name: 'Messi', goals: 30 },
  { name: 'Ronaldo', goals: 25 },
  { name: 'Neymar', goals: 20 },
];

players.forEach(i => {
  console.log(i.name, 'goal :', i.goals);
});

// 9 Task: Get only the titles of the courses that are completed.
const courses = [
  { id: 1, title: 'Math', completed: true },
  { id: 2, title: 'English', completed: false },
  { id: 3, title: 'Science', completed: true },
];

let completedCourse = courses.filter(i => i.completed).map(i => i.title);
console.log(completedCourse);

// 10 Task: Create a new array containing only the total amounts from the orders.

const orders = [
  { id: 1, total: 250 },
  { id: 2, total: 400 },
  { id: 3, total: 150 },
];

let total = orders.map(i => i.total);
console.log(total);
