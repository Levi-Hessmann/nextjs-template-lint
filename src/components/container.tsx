export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className={"w-full h-full max-w-7xl p-10 md:p-8 sm:p-6 mx-auto"}>
      {children}
    </div>
  );
}
