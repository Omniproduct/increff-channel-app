
import { ReactNode } from "react";

interface ScreenHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export const ScreenHeader = ({ title, subtitle, children }: ScreenHeaderProps) => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">{title}</h1>
          {subtitle && (
            <p className="text-lg text-muted-foreground">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </div>
  );
};
