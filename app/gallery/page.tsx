import { createPageTheme } from "@/app/lib/createPageTheme";

const { metadata, styleTag } = createPageTheme("blue");

export { metadata };

export default function Gallery() {
  return (
    <>
      <style>{styleTag}</style>
      <h1>Gallery</h1>
    </>
  );
}
