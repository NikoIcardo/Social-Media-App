import dotenv from "dotenv";
import bunyan from "bunyan";
import cloudinary from "cloudinary";

dotenv.config({});

class Config {
  public DATABASE_URL: string | undefined;
  public JWT_TOKEN: string | undefined;
  public NODE_ENV: string | undefined;
  public SECRET_KEY_ONE: string | undefined;
  public SECRET_KEY_TWO: string | undefined;
  public CLIENT_URL: string | undefined;
  public SERVER_PORT: string | undefined;
  public REDIS_HOST: string | undefined;
  public CLOUD_NAME: string | undefined;
  public CLOUD_API_KEY: string | undefined;
  public CLOUD_API_SECRET: string | undefined;

  private readonly DEFAULT_DATABASE_URL =
    "mongodb://localhost:27017/social-media-app-backend";

  constructor() {
    this.DATABASE_URL = process.env.DATABASE_URL || this.DEFAULT_DATABASE_URL;
    this.JWT_TOKEN = process.env.DATABASE_URL || "1234";
    this.NODE_ENV = process.env.DATABASE_URL;
    this.SECRET_KEY_ONE = process.env.DATABASE_URL || "";
    this.SECRET_KEY_TWO = process.env.DATABASE_URL || "";
    this.CLIENT_URL = process.env.DATABASE_URL || "";
    this.SERVER_PORT = process.env.SERVER_PORT || "";
    this.REDIS_HOST = process.env.REDIS_HOST || "";
    this.CLOUD_NAME = process.env.CLOUD_NAME || "";
    this.CLOUD_API_KEY = process.env.CLOUD_API_KEY || "";
    this.CLOUD_API_SECRET = process.env.CLOUD_API_SECRET || "";
  }

  public createLogger = (name: string): bunyan => {
    return bunyan.createLogger({ name, level: "debug" });
  };

  public validateConfig = (): void => {
    Object.entries(this).forEach(([key, value]: [string, string]) => {
      if (value === undefined) {
        throw new Error(`Configuration ${key} is undefined`);
      }
    });
  };

  public cloudinaryConfig(): void {
    cloudinary.v2.config({
      cloud_name: this.CLOUD_NAME,
      api_key: this.CLOUD_API_KEY,
      api_secret: this.CLOUD_API_SECRET,
    });
  }
}

export const config: Config = new Config();
