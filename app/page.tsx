import { PageHeader } from "./components/PageHeader";

export default function Home() {
  return (
    <main className="flex w-full flex-col">
      <PageHeader pageName="Projects" />
      {/* Sidebar */}
      <div className="lg:w-1/3 flex items-center p-10 w-full flex"></div>
      {/* Content */}
      <div className="lg:w-2/3"></div>
    </main>
  );
}
