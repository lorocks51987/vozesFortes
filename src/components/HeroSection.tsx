import heroBackground from "@/assets/banner.png";
import escritaImg from "@/assets/escrita.png";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroBackground})` }}
            />
            <div className="absolute inset-0 bg-gradient-hero opacity-75" />

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-16 md:pt-0">
                <p className="text-xs sm:text-sm md:text-base tracking-wide uppercase text-primary-foreground/80 mb-3">
                    Educação, Cultura, Comunicação, Desenvolvimento social
                </p>
                {/* Logo */}
                <div className="mb-8 flex justify-center">
                    <img
                        src={logo}
                        alt="Vozes Fortes - VF Logo"
                        className="w-28 h-28 sm:w-36 sm:h-36 md:w-48 md:h-48 hover-scale transition-smooth"
                        loading="lazy"
                        width={192}
                        height={192}
                    />
                </div>

                {/* Main Title */}
                <div className="mb-6 animate-fade-in flex justify-center">
                    <img
                        src={escritaImg}
                        alt="Vozes Fortes"
                        className="w-full max-w-xs sm:max-w-md md:max-w-2xl h-auto px-4"
                        loading="lazy"
                        width={1024}
                        height={256}
                    />
                </div>

                {/* Subtitle */}
                <p className="text-base sm:text-lg md:text-xl text-primary-foreground mb-8 max-w-2xl mx-auto leading-7 sm:leading-8 px-4">
                    Damos Espaço à Sua Voz
                </p>

                {/* Description */}
                <p className="text-sm sm:text-base md:text-lg text-primary-foreground mb-12 max-w-2xl mx-auto leading-7 sm:leading-8 px-4">
                    O Instituto Vozes Fortes dedica-se a dar voz a quem luta contra dependência química e codependência,
                    promovendo educação, conscientização e transformação através de projetos que inspiram esperança e renovação.
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
                    <Button
                        variant="hero"
                        size="lg"
                        onClick={() => scrollToSection('o-que-fazemos')}
                        className="transition-bounce"
                    >
                        Conheça Nossos Projetos
                    </Button>
                    <Button
                        variant="outline-hero"
                        size="lg"
                        onClick={() => scrollToSection('monica-casagrande')}
                        className="transition-bounce text-primary-foreground border-primary-foreground bg-black/30 hover:bg-black/40 backdrop-blur-sm font-semibold shadow-lg"
                    >
                        Nossa História
                    </Button>
                </div>
            </div>


        </section>
    );
}