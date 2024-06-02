import { db } from "./src/database/connection";

beforeAll(async () => {
  await db.sequelize.authenticate();
});

afterAll(async () => {
  await db.sequelize.close();
});

beforeEach(async () => {
  await db.sequelize.sync({ force: true });
});
