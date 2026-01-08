import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            // Detect active section
            const sections = ["hero", "o-que-fazemos", "monica-casagrande", "da-pele-para-dentro", "producao-editorial", "cursos-treinamentos", "projetos-digitais", "amplifique-essas-vozes"];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
                    setActiveSection(section);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        setIsOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navLinks = [
        { name: "O que fazemos", id: "o-que-fazemos" },
        { name: "Mônica Casagrande", id: "monica-casagrande" },
        { name: "Da Pele para Dentro", id: "da-pele-para-dentro" },
        { name: "Editorial", id: "producao-editorial" },
        { name: "Cursos", id: "cursos-treinamentos" },
        { name: "App", id: "projetos-digitais" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b border-transparent",
                scrolled
                    ? "bg-background/70 backdrop-blur-xl border-white/10 shadow-lg supports-[backdrop-filter]:bg-background/60"
                    : "bg-transparent py-2"
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection("hero")}
                        className={cn(
                            "text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity flex items-center gap-1",
                            scrolled ? "text-foreground" : "text-white"
                        )}
                    >
                        Vozes<span className={cn(
                            "bg-clip-text text-transparent bg-gradient-to-r",
                            scrolled ? "from-primary to-primary/60" : "from-white to-white/80"
                        )}>Fortes</span>
                    </button>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center space-x-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className={cn(
                                    "px-3 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:bg-primary/10 hover:text-primary whitespace-nowrap",
                                    activeSection === link.id
                                        ? "text-primary bg-primary/10 font-semibold"
                                        : "text-muted-foreground"
                                )}
                            >
                                {link.name}
                            </button>
                        ))}
                        <div className="pl-2">
                            <Button
                                size="sm"
                                className="rounded-full px-6 shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
                                onClick={() => scrollToSection("amplifique-essas-vozes")}
                            >
                                Apoie
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-foreground hover:bg-accent rounded-full transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="lg:hidden absolute top-16 left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/10 shadow-2xl animate-in slide-in-from-top-5 duration-300">
                    <div className="flex flex-col space-y-2 p-6">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className={cn(
                                    "text-left px-4 py-3 rounded-lg text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                                    activeSection === link.id
                                        ? "text-primary bg-primary/5"
                                        : "text-muted-foreground"
                                )}
                            >
                                {link.name}
                            </button>
                        ))}
                        <div className="pt-4">
                            <Button className="w-full rounded-full" size="lg" onClick={() => scrollToSection("amplifique-essas-vozes")}>
                                Apoie
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
