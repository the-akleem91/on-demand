
import { cn } from "@components/libs/utils";
import { ReactNode } from "react";

function Container({ children, className }) {
    return (
        <div
            className={cn(
                "max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 ",
                className
            )}
        >
            {children}
        </div>
    );
}

export default Container;
