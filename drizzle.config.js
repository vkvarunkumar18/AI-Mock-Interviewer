import { defineConfig } from "drizzle-kit";
export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.js",
  dbCredentials: {
  url: 'postgresql://neondb_owner:npg_YLR5DrJev4yx@ep-rapid-glitter-a4k18cyt-pooler.us-east-1.aws.neon.tech/neondb?sslmode=require',
  }
  
});