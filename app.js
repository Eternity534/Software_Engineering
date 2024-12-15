import { Hono } from "https://deno.land/x/hono@v3.12.11/mod.ts";

const app = new Hono();

app.get('/register', async (c) => {
    return c.html(await Deno.readTextFile('./views/register.html'));
});

app.get('/login', async (c) => {
    return c.html(await Deno.readTextFile('./views/login.html'));
});

app.get('/index', async (c) => {
    return c.html(await Deno.readTextFile('./views/index.html'));
});

Deno.serve(app.fetch);