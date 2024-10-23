export interface Props {
  title: string;
  description: string;
}

export default function PostCard({ title, description }: Props) {
  return (
    <div className="flex flex-col w-80 h-64 border p-2 rounded-md">
      <h2 className="text-lg">{title}</h2>
      <p>{description}</p>
      <ul></ul>
    </div>
  );
}
