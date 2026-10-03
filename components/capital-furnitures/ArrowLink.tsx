import type { AnchorHTMLAttributes, ReactNode } from "react";

type ArrowLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  light?: boolean;
};

export function ArrowLink({
  children,
  className = "",
  light = false,
  ...props
}: ArrowLinkProps) {
  return (
    <a
      className={`arrow-link${light ? " arrow-link--light" : ""} ${className}`}
      {...props}
    >
      <span>{children}</span>
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M4 10h11M10 4l6 6-6 6" />
      </svg>
    </a>
  );
}
