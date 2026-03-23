import { SocialLinkConfig } from "@/app/types";

interface PropTypes {
  socialLinks: SocialLinkConfig[];
}

export const PageFooter = ({ socialLinks }: PropTypes) => (
  <footer className="w-screen flex flex-col justify-end grow px-3 py-2">
    <div className="grid grid-cols-2 uppercase">
      <div>
        <p>&copy;2023-2026 </p>
        <p>All rights reserved</p>
        <p>Bradon Studebaker</p>
      </div>
      <div className="flex flex-col items-end">
        {socialLinks.map((socialLink) => (
          <a href={socialLink.href} key={socialLink.id} target="_blank">
            <p>{socialLink.text}</p>
          </a>
        ))}
      </div>
    </div>
  </footer>
);
