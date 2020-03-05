const fs = require("fs");
const faker = require("faker");

faker.locale = "ru";
const headers = [
  { title: "ФИО", type: "string" },
  { title: "Имя пользователя", type: "string" },
  { title: "Дата регистрации", type: "string" },
  { title: "Email", type: "string" },
  { title: "Работа", type: "string" },
  { title: "ID", type: "number" },
  { title: "Спортсмен", type: "boolean" },
];
function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};
const jobs = ['Врач', 'Повар', 'Военный', 'Учитель', 'Строитель'];
const createRow = () => [
  faker.name.findName(),
  faker.internet.userName(),
  faker.date.past(),
  faker.internet.email(),
  jobs[randomInteger(0,4)],
  faker.random.number(),
  faker.random.boolean()
];

const data = Array(1000)
  .fill(0)
  .map(() => createRow());

try {
  fs.writeFileSync('./src/data.json', JSON.stringify({headers, data}));
} catch (err) {
  console.error(err)
}
