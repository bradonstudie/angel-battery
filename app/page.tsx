import { createPageTheme } from "@/app/_lib/createPageTheme";

const { metadata, styleTag } = createPageTheme("default");

export { metadata };

export default function Home() {
  return (
    <>
      <style>{styleTag}</style>
      <h1>Home</h1>
    </>
  );
}
