import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkDirective from "remark-directive";
import remarkMessagePlugin from "../../remark-note-plugin/src";
import remark2rehype from "remark-rehype";
import html from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";
import rehypeHighlightCodeLines from "rehype-highlight-code-lines";

export default async function markdown2html(markdown: string): Promise<string> {
  const result = await remark()
    .use(remarkDirective)
    .use(remarkMessagePlugin)
    .use(remarkGfm)
    .use(remark2rehype)
    .use(rehypeHighlight)
    .use(rehypeHighlightCodeLines, {
      showLineNumbers: true,
      lineContainerTagName: "div",
    })
    .use(html)
    .process(markdown);
  return result.toString();
}
