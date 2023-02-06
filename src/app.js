const express = require("express");
const db = require("./utils/database");
const initModels = require("./models/init.model");
const userRoutes = require("./routes/users.routes");
const coursesRoutes = require("./routes/courses.routes");
const categoriesRoutes = require("./routes/categories.routes");
const videosRoutes = require("./routes/videos.routes");

const app = express();

app.use(express.json());


db.authenticate()
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));

initModels();

db.sync({ force: true })
  .then(() => console.log("Base de datos sincronizada"))
  .catch((error) => console.log(error));

app.use("/api/v1", userRoutes);
app.use("/api/v1", coursesRoutes);
app.use("/api/v1", videosRoutes);
app.use("/api/v1", categoriesRoutes);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
