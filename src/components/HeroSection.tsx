import heroBackground from "@/assets/banner.png";
import logo from "@/assets/logo.png";
import escritaImg from "@/assets/escrita.png";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroBackground})` }}
            />
            <div className="absolute inset-0 bg-gradient-hero opacity-75" />

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <p className="text-sm md:text-base tracking-wide uppercase text-primary-foreground/80 mb-3">
                    Educação, Cultura, Comunicação, Desenvolvimento social
                </p>
                {/* Logo */}
                <div className="mb-8 flex justify-center">
                    <img
                        src={logo}
                        alt="Vozes Fortes - VF Logo"
                        className="w-36 h-36 md:w-48 md:h-48 hover-scale transition-smooth"
                    />
                </div>

                {/* Main Title */}
                <div className="mb-6 animate-fade-in flex justify-center">
                    <img
                        src={escritaImg}
                        alt="Vozes Fortes"
                        className="max-w-xl md:max-w-2xl h-auto"
                    />
                </div>

                {/* Subtitle */}
                <p className="text-subsection text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                    Damos Espaço à Sua Voz
                </p>

                {/* Description */}
                <p className="text-lg text-primary-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
                    O Instituto Vozes Fortes dedica-se a dar voz a quem luta contra dependência química e codependência,
                    promovendo educação, conscientização e transformação através de projetos que inspiram esperança e renovação.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button
                        variant="hero"
                        size="xl"
                        onClick={() => scrollToSection('o-que-fazemos')}
                        className="transition-bounce"
                    >
                        Conheça Nossos Projetos
                    </Button>
                    <Button
                        variant="outline-hero"
                        size="xl"
                        onClick={() => scrollToSection('monica-casagrande')}
                        className="transition-bounce text-primary-foreground border-primary-foreground bg-black/30 hover:bg-black/40 backdrop-blur-sm font-semibold shadow-lg"
                    >
                        Nossa História
                    </Button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-primary-foreground/80 rounded-full mt-2 animate-pulse" />
                </div>
            </div>
        </section>
    );
}