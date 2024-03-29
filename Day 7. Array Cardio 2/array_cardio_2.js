// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 },
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 },
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const isSomeAdult = people.some((person) => new Date().getFullYear() - person.year >= 19);
console.log(isSomeAdult);

// Array.prototype.every() // is everyone 19 or older?
const isEveryAdult = people.every((person) => new Date().getFullYear() - person.year >= 19);
console.log(isEveryAdult);

// Array.prototype.find()
const findAdult = people.find((person) => new Date().getFullYear() - person.year >= 19);
console.log(findAdult);

// Find is like filter, but instead returns just the first one you are looking for
// find the comment with the ID of 823423
const findComment = comments.find((comment) => comment.id === 823423);
console.log(findComment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const commentIdx = comments.findIndex((comment) => comment.id === 823423);
console.log(commentIdx);
comments.splice(commentIdx, 1);
console.table(comments);

// Another way to delete:
const newComments = [...comments.slice(0, commentIdx), ...comments.slice(commentIdx)];
console.table(newComments);