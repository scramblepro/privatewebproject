import { HTMLAttributes } from "react";
import { cn } from "../../../lib/cn";
import { surfaces } from "../../../lib/ui-classes";

type BadgeProps = HTMLAttributes<HTMLSpanElement>;

export const Badge = ({ className, children, ...props }: BadgeProps) => (
  <span className={cn(surfaces.pill, className)} {...props}>
    {children}
  </span>
);
