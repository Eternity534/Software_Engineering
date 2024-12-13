import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";
import * as login from "./routes/login.js";

const app = new Hono();

app.get("/login", login.showLoginForm);

Deno.serve(app.fetch);