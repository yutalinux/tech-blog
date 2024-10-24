import { useEffect, useState } from "react";

export default function App() {
  const [id, setId] = useState("");
  const [dark, setDark] = useState(false);
  const [html, setHtml] = useState("");
  const [all, setAll] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:3000/api");
      setAll(await res.json());
    })();
  }, []);

  useEffect(() => {
    const classlist = document.documentElement.classList;
    if (dark) {
      classlist.add("dark");
    } else {
      classlist.remove("dark");
    }
  }, [dark]);

  useEffect(() => {
    if (!id) return;
    try {
      (async () => {
        const res = await fetch(`http://localhost:3000/api/${id}`);
        setHtml(await res.text());
      })();
    } catch {
      console.log("error");
    }
  }, [id]);

  return (
    <>
      <form className="w-80 mx-auto border p-2 m-2">
        <label>記事のID</label>
        <input
          className="w-full border rounded-md px-1"
          value={id}
          onChange={(e) => setId(e.target.value)}
          type="text"
        />
        <label>ダークモード: </label>
        <input
          type="checkbox"
          checked={dark}
          onChange={(e) => setDark(e.target.checked)}
        />
        <details>
          <summary>記事一覧</summary>
          <ul>
            {all.map((item) => {
              return (
                <li
                  onClick={() => {
                    setId(item);
                  }}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </details>
      </form>
      <main>
        <article className="blog-article">
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </main>
    </>
  );
}
