import { visit } from "unist-util-visit";
import { h } from "hastscript";

export function remarkMessagePlugin() {
  return (tree) => {
    visit(tree, "containerDirective", (node) => {
      if (
        node.name === "note info" ||
        node.name === "note warn" ||
        node.name === "note alert"
      ) {
        node.attributes.class = node.name;
        const data = node.data || (node.data = {});
        data.hName = "div";
        data.hProperties = h("div", node.attributes).properties;
      }
    });
  };
}
