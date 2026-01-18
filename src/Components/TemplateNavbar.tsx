import { type PropsWithChildren } from "react";
interface TemplateNavbarProps extends PropsWithChildren {
  className?: string;
}

export default function TemplateNavbar({
  children,
  className,
}: TemplateNavbarProps) {
  return (
    <>
      <div className={`host-navbar py-8 ${className}`}>
        <nav>
          <ul className="flex items-center gap-6 text-app-light">{children}</ul>
        </nav>
      </div>
    </>
  );
}
