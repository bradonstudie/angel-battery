import { PageHeader } from "./components/PageHeader";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full flex-col">
        <PageHeader pageName="Projects" />
      </main>
    </div>
  );
}
