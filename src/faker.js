const fs = require("fs");
const faker = require("faker");

faker.locale = "ru";
const headers = [
  { title: "ФИО", type: "string", id: faker.random.uuid() },
  { title: "Имя пользователя", type: "string", id: faker.random.uuid() },
  { title: "Регистрация", type: "date", id: faker.random.uuid() },
  { title: "Email", type: "string", id: faker.random.uuid() },
  { title: "Работа", type: "enum", id: faker.random.uuid() },
  { title: "Просмотры", type: "number", id: faker.random.uuid() },
  { title: "Спортсмен", type: "boolean", id: faker.random.uuid() }
];
function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
const jobs = ["Врач", "Повар", "Военный", "Учитель", "Строитель"];
const createRow = () => ({
  id: faker.random.uuid(),
  data: [
    faker.name.findName(),
    faker.internet.userName(),
    faker.date.between('2010-01-01', '2019-01-05'),
    faker.internet.email(),
    jobs[randomInteger(0, 4)],
    faker.random.number(),
    faker.random.boolean()
  ]
});

const data = Array(1000)
  .fill(0)
  .map(() => createRow());

try {
  fs.writeFileSync("./src/data.json", JSON.stringify({ headers, data }));
} catch (err) {
  console.error(err);
}
