import { faker } from "@faker-js/faker";
import db from "#db/client";
import { createEmployee } from "./queries/employees.js";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  // TODO
  for (let i = 0; i < 10; i++) {
    const employee = {
      name: faker.person.fullName(),
      birthday: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
      salary: faker.number.int({ min: 40000, max: 250000 }),
    };
    await createEmployee(employee);
  }
}
