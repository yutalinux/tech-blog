import { readFileSync } from "fs";
import { serveStatic } from "hono/bun";
import { Hono } from "hono";
import { getPosts } from "@repo/contents";
import markdown2html from "@repo/parser";
import { cors } from "hono/cors";

const app = new Hono();

app.use("/*", serveStatic({ root: "../dist/" }));
app.use("/*", cors());

app.get("/", (c) => {
  try {
    return c.html(readFileSync("../dist/index.html", "utf-8"));
  } catch {
    return c.text("");
  }
});

app.get("/api", (c) => {
  let posts = getPosts("../../contents");

  return c.json(posts.map((post) => post.slug));
});

app.get("/api/:id", (c) => {
  let id = c.req.param("id");

  let posts = getPosts("../../contents");

  const post = posts.filter((post) => post.slug === id);

  if (post.length > 0) {
    const body = post[0].body;
    const html = markdown2html(body);
    return c.html(html);
  }

  return c.text("Error");
});

export default app;
