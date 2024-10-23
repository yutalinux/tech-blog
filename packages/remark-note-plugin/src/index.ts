import { visit } from "unist-util-visit";
import { h } from "hastscript";

export default function remarkMessagePlugin() {
  return (tree) => {
    visit(tree, "containerDirective", (node) => {
      if (
        node.name === "info" ||
        node.name === "warn" ||
        node.name === "alert"
      ) {
        node.attributes.class = `note ${node.name}`;
        const data = node.data || (node.data = {});
        data.hName = "div";
        data.hProperties = h("div", node.attributes).properties;
      }
    });
  };
}
