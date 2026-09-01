import type { ReactNode } from "react";

interface AuthCardContainerProps {
  children: ReactNode;
}

export const AuthCardContainer = ({ children }: AuthCardContainerProps) => {
    return (
        <section className="flex items-center justify-center p-8 lg:p-16">
            {children}
        </section>
    );
};