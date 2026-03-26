import { createPageTheme } from "@/app/lib/createPageTheme";
import { PageHeader } from "../components/UI/PageHeader";

const { metadata, styleTag } = createPageTheme("blue");

export { metadata };

export default function Gallery() {
  return (
    <>
      <style>{styleTag}</style>
      <PageHeader text="Selected works 2023-2026" />
    </>
  );
}
