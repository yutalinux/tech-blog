export interface Props {
  title: string;
}

export default function PostCard({ title }: Props) {
  return (
    <div className="flex flex-col max-w-xl w-full bg-neutral-200">
      <h2>{title}</h2>
    </div>
  );
}
