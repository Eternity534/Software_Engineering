import { Eta } from "https://deno.land/x/eta@v3.4.0/src/index.ts";

const eta = new Eta({ views: `${Deno.cwd()}/templates/` });

const showRegisterForm = (c) => c.html(eta.render("register.eta"));

export { showRegisterForm };