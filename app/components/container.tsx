export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-[1120px] px-8">{children}</div>;
}
