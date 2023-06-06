import { api } from "trpc-api";

export default async function HomePage() {
  const data = await api.example.secret.query();
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] pt-16">
      <div className="container flex flex-col items-center gap-12 px-4 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          <div className="text-purple-400">{data.greeting}</div>
        </h1>
      </div>
    </main>
  );
}
