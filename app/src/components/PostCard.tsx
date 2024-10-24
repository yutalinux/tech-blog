export interface Props {
  slug: string;
  title: string;
  description: string;
}

export default function PostCard({ slug, title, description }: Props) {
  return (
    <a
      href={`/tech-blog/${slug}`}
      className="flex flex-col w-full h-32 border p-2 rounded-md"
    >
      <h2 className="text-2xl">{title}</h2>
      <p>{description}</p>
    </a>
  );
}
