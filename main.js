const users = [
  { name: "An", age: 25 },
  { name: "Bình", age: 30 },
  { name: "Chi", age: 22 },
];

for (let i = 0; i < users.length; i++) {
  console.log(users[i].name);
}

let maxAge = users[0].age;
let oldestUser = users[0].name;
for (let i = 1; i < users.length; i++) {
  if (users[i].age > maxAge) {
    maxAge = users[i].age;
    oldestUser = users[i].name;
  }
}
console.log("Người lớn tuổi nhất là", oldestUser);

let sumAge = 0;
for (let i = 0; i < users.length; i++) {
  sumAge += users[i].age;
}
let averageAge = sumAge / users.length;
console.log("Tuổi trung bình là", averageAge);

const products = [
  { name: "Laptop", price: 15000000 },
  { name: "Mouse", price: 250000 },
  { name: "Keyboard", price: 800000 },
];

let productNames = [];
for (let i = 0; i < products.length; i++) {
  productNames.push(products[i].name);
}
console.log(productNames);

let totalPrice = 0;
for (let i = 0; i < products.length; i++) {
  totalPrice += products[i].price;
}
console.log("Tổng giá trị sản phẩm là", totalPrice);

let expensiveProducts = [];
for (let i = 0; i < products.length; i++) {
  if (products[i].price > 1000000) {
    expensiveProducts.push(products[i]);
  }
}
console.log(expensiveProducts);

const students = [
  { name: "Lan", scores: [8, 9, 7] },
  { name: "Huy", scores: [6, 5, 7] },
  { name: "Minh", scores: [9, 8, 10] },
];

for (let i = 0; i < students.length; i++) {
  let sum = 0;
  for (let j = 0; j < students[i].scores.length; j++) {
    sum += students[i].scores[j];
  }
  students[i].average = sum / students[i].scores.length;
}
console.log(students);

let excellentStudents = [];
for (let i = 0; i < students.length; i++) {
  if (students[i].average >= 8) {
    excellentStudents.push(students[i]);
  }
}
console.log("Học sinh giỏi:", excellentStudents);

for (let i = 0; i < students.length - 1; i++) {
  for (let j = i + 1; j < students.length; j++) {
    if (students[i].average < students[j].average) {
      let temp = students[i];
      students[i] = students[j];
      students[j] = temp;
    }
  }
}
console.log("Học sinh sắp xếp theo điểm TB giảm dần:", students);

const posts = [
  {
    id: 1,
    title: "JavaScript cơ bản",
    tags: ["js", "basic"],
    comments: [
      { user: "An", text: "Hay quá!" },
      { user: "Bình", text: "Rất dễ hiểu" },
    ],
  },
  {
    id: 2,
    title: "Học React không khó",
    tags: ["react", "js"],
    comments: [{ user: "Chi", text: "Cảm ơn chia sẻ" }],
  },
];

for (let i = 0; i < posts.length; i++) {
  console.log(posts[i].title + " có " + posts[i].comments.length + " comments");
}

let allTags = [];
for (let i = 0; i < posts.length; i++) {
  for (let j = 0; j < posts[i].tags.length; j++) {
    if (allTags.indexOf(posts[i].tags[j]) === -1) {
      allTags.push(posts[i].tags[j]);
    }
  }
}
console.log("Tất cả tags:", allTags);

let commentsByAn = [];
for (let i = 0; i < posts.length; i++) {
  for (let j = 0; j < posts[i].comments.length; j++) {
    if (posts[i].comments[j].user === "An") {
      commentsByAn.push(posts[i].comments[j]);
    }
  }
}
console.log("Bình luận của An:", commentsByAn);
