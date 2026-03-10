import { PageHeader } from "./components/PageHeader";
import { CustomButton } from "./components/UI/CustomButton";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <main className="flex min-h-screen w-full flex-col">
        <PageHeader pageName="Projects" />
        {/* Sidebar */}
        <div className="lg:w-1/3 flex items-center p-10">
          <CustomButton id="test-1" variant="primary">
            Primary
          </CustomButton>
          <CustomButton id="test-2" variant="secondary">
            Secondary
          </CustomButton>
        </div>
        {/* Content */}
        <div className="lg:w-2/3"></div>
      </main>
    </div>
  );
}
