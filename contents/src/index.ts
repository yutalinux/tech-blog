import { readdirSync, readFileSync, statSync } from "fs";
import matter from "gray-matter";
import * as path from "path";

// ブログの記事データを入れるディレクトリ
export const POST_DIR = "posts";

/**
 * 記事データの型
 */
export interface Post {
  /**
   * 記事のID
   */
  slug: string;

  /**
   * 記事のタイトル
   */
  title: string;

  /**
   * 説明
   */
  description: string;

  /**
   * 公開日
   */
  pubDate: string;

  /**
   * 更新日
   */
  updatedDate?: string;

  /**
   * タグ
   */
  tags: string[];

  /**
   * マークダウンの本文
   */
  body: string;
}

/**
 * ブログの記事一覧を取得する
 * @returns 記事の一覧データ
 */
export function getPosts(packageDir: string = "../contents"): Post[] {
  try {
    // @ts-ignore
    const posts = readdirSync(path.resolve(packageDir, POST_DIR));

    return posts
      .map((post) => {
        const fp = path.resolve(packageDir, POST_DIR, post);
        const parsePath = path.parse(fp);
        const stat = statSync(fp);
        if (parsePath.ext !== ".md" || !stat.isFile()) return;
        const { data, content } = matter({
          content: readFileSync(fp, "utf-8"),
        });
        let result = data as Post;
        result.slug = parsePath.name;
        result.body = content;
        return result;
      })
      .filter((post) => post);
  } catch {
    return [];
  }
}
