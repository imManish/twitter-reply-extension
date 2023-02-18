import dotenv from "dotenv";
dotenv.config();

const config = {
    URI: process.env.URI || '',
    KEY: process.env.API_KEY || ''
};
  
export default config;
  
