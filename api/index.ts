import { config } from "./config";
import { dbConnection } from "./startup/db";
import { logger } from "../api/utils/logger";
import app  from "./app"; // Import httpServer instead of app

dbConnection();

// Listen on httpServer, not app
app.listen(config.PORT, () => {
  logger.info(`Web server is running on ${config.PORT}`);
});
