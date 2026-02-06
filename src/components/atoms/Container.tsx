import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Container({ children, className = "", id }: ContainerProps) {
  return (
    <div
      id={id ?? ""}
      className={`p-5 ipad-vertical:px-7.5 ipad-vertical:py-7.5 lg:px-15 lg:py-15 max-width ${className}`}
    >
      {children}
    </div>
  );
}
