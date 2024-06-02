import { db } from "../../database/connection";

describe('Database Connection', () => {
  test('should connect to the database successfully', async () => {
    try {
      await db.sequelize.authenticate();
      expect(true).toBe(true);
    } catch (error) {
      expect(error).toBeNull();
    }
  });
});
