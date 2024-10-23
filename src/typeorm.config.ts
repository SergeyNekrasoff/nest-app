import { DataSource } from "typeorm"
import CONNECTION from "./db.connection"
import { User } from "./users/entities/user.entity"

// @ts-ignore
const AppDataSource = new DataSource({
    ...CONNECTION,
    entities: ["*/**/*.entity.ts"],
    migrations: ["src/migrations/*.ts"]
})

AppDataSource.initialize()
  .then(() => {
      console.log("Data Source has been initialized!")
  })
  .catch((err) => {
      console.error("Error during Data Source initialization", err)
  })

export default AppDataSource;