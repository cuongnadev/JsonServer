import jsonServer from "json-server";
import { authMiddleware } from "../middlewares/authMiddleware";
import routes from "../config/routes.json";

const server = jsonServer.create();
const router = jsonServer.router("src/db/db.json");
const middlewares = jsonServer.defaults();

// Middleware mặc định
server.use(middlewares);

// Middleware tùy chỉnh
server.use(authMiddleware);

// Tùy chỉnh endpoint từ routes.json
server.use(jsonServer.rewriter(routes));

// Router chính
server.use(router);

// Chạy server
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`JSON-Server is running on http://localhost:${PORT}`);
});
