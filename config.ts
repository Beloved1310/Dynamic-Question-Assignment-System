import path from "path";

import dotenv, { config as dotenv2 } from "dotenv";

const { env } = process;

type IConfig = {
  PORT: number;
  MONGODBURI: string;
};

dotenv.config();

dotenv2({
  path: path.resolve(__dirname, "./.env"),
});

export const config: IConfig = {
  PORT: parseInt(env.PORT!, 10) || 8000,
  MONGODBURI: <string>env.MONGODBURI,
};
