import { createPageTheme } from "@/app/_lib/createPageTheme";
import { PageHeader } from "../_components/UI/PageHeader";

const { metadata, styleTag } = createPageTheme("blue");

export { metadata };

export default function Gallery() {
  return (
    <>
      <style>{styleTag}</style>
      <PageHeader text="Works 2023-2026" />
    </>
  );
}
