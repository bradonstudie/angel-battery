import { createPageTheme } from "@/app/_lib/createPageTheme";
import { PageHeader } from "../_components/UI/PageHeader";

const { metadata, styleTag } = createPageTheme("default");

export { metadata };

export default function Gallery() {
  return (
    <>
      <style>{styleTag}</style>
      <PageHeader text="2023-2026" />
    </>
  );
}
