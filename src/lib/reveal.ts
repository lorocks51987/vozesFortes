export function initRevealOnScroll() {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
        (entries, obs) => {
            for (const entry of entries) {
                const el = entry.target as HTMLElement;
                if (entry.isIntersecting) {
                    const animation = el.dataset.reveal || "vf-fade-up";
                    const duration = el.dataset.revealDuration || "0.7s";
                    const delay = el.dataset.revealDelay || "0s";
                    el.style.animation = `${animation} ${duration} cubic-bezier(0.4, 0, 0.2, 1) both`;
                    el.style.animationDelay = delay;
                    el.classList.remove("reveal");
                    const canRepeat = el.dataset.revealRepeat === "true";
                    if (!canRepeat) {
                        obs.unobserve(el);
                    }
                } else {
                    if (el.dataset.revealRepeat === "true") {
                        el.style.animation = "";
                        el.style.animationDelay = "";
                        el.classList.add("reveal");
                    }
                }
            }
        },
        { threshold: 0.15 }
    );

    const register = (root: ParentNode = document) => {
        const elements = root.querySelectorAll<HTMLElement>(".reveal");
        elements.forEach((el, index) => {
            const parent = el.parentElement;
            if (parent && parent.classList.contains("reveal-stagger")) {
                el.dataset.revealDelay = el.dataset.revealDelay || `${index * 90}ms`;
                el.dataset.revealRepeat = el.dataset.revealRepeat || "true";
            }
            observer.observe(el);
        });
    };

    // registra os elementos presentes inicialmente
    register();

    // observa novos elementos adicionados dinamicamente (lazy-loaded)
    const mo = new MutationObserver((mutations) => {
        for (const m of mutations) {
            m.addedNodes.forEach((node) => {
                if (node instanceof HTMLElement) {
                    if (node.classList.contains("reveal")) {
                        register(node.parentElement || node);
                    } else if (node.querySelector) {
                        register(node);
                    }
                }
            });
        }
    });
    mo.observe(document.body, { childList: true, subtree: true });
}


