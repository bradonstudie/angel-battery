import { createPageTheme } from "@/app/lib/createPageTheme";
import { PageHeader } from "../components/UI/PageHeader";

const { metadata, styleTag } = createPageTheme("default");

export { metadata };

export default function Gallery() {
  return (
    <>
      <style>{styleTag}</style>
      <PageHeader text="Selected Works 2023-2026" />
    </>
  );
}
