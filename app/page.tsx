import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 mt-20">
      <header className="flex flex-col items-center justify-center flex-1 gap-6">
        <Image
          src="/logo.png"
          width={64}
          height={64}
          alt="logo-home"
          priority
        />
        <div></div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col text-center text-orange-800">
            <h1 className="text-3xl text-amber-600 font-extrabold">
              NextLevel food for NextLevel Foodies!
            </h1>
            <p className="text-lg bg-blend-multiply">
              Taste and share food from all over the world
            </p>
          </div>

          <div className="flex items-center justify-between text-xl font-semibold">
            <Link href={"/community"}>Join the Community</Link>
            <Link href={"/meals"}>Explore Meals</Link>
          </div>
        </div>
      </header>
      <main className="flex flex-col items-center justify-center gap-6">
        <section className="max-w-screen-sm">
          <h2 className="text-2xl font-semibold mb-4">How it works</h2>
          <p className="text-md leading-8 bg-white/10 rounded-xl p-2 mb-4">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p className="text-md leading-8 bg-white/10 rounded-xl p-2">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section className="max-w-screen-sm">
          <h2 className="text-2xl font-semibold mb-4">Why NextLevel Food?</h2>
          <p className="text-md leading-8 bg-white/10 rounded-xl p-2 mb-4">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p className="text-md leading-8 bg-white/10 rounded-xl p-2">
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </div>
  );
}
