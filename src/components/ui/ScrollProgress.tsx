import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

export function ScrollProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const currentScroll = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

            if (scrollHeight) {
                setProgress(Number((currentScroll / scrollHeight).toFixed(2)) * 100);
            }
        };

        window.addEventListener("scroll", updateProgress);
        return () => window.removeEventListener("scroll", updateProgress);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 z-[100] pointer-events-none">
            <div
                className={cn(
                    "h-full bg-gradient-to-r from-primary via-primary-light to-accent transition-all duration-100 ease-out",
                    progress > 0 ? "opacity-100" : "opacity-0"
                )}
                style={{ width: `${progress}%` }}
            />
        </div>
    );
}
