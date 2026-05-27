import { HTMLAttributes, ReactNode } from "react";
import { cn } from "../../../lib/cn";

export type ContainerSize = "default" | "narrow" | "wide";

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  size?: ContainerSize;
};

const sizeClasses: Record<ContainerSize, string> = {
  default: "max-w-[var(--container-max)]",
  narrow: "max-w-3xl",
  wide: "max-w-[90rem]",
};

export const Container = ({
  children,
  className,
  size = "default",
  ...props
}: ContainerProps) => (
  <div
    className={cn(
      "mx-auto w-full",
      "px-[var(--container-padding)] sm:px-[var(--container-padding-sm)] lg:px-[var(--container-padding-lg)]",
      sizeClasses[size],
      className,
    )}
    {...props}
  >
    {children}
  </div>
);
