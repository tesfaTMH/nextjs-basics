import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <img src="/logo.png" alt="logo" className="size-16" />
      <h1 className="text-3xl font-bold tracking-tight">NextJS Basics</h1>
      <p className="text-md text-muted-foreground">Let&apos;s get started!</p>
    </main>
  );
}
