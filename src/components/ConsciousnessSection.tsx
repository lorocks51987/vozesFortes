import peleLogo from "@/assets/PelePraDentro.png";
import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/utils";
import { Heart, MessageCircle, Users2 } from "lucide-react";

export default function ConsciousnessSection() {
    const initiatives = [
        {
            icon: Heart,
            title: "Escuta Ativa Terapêutica",
            description: "Sessões individuais de acolhimento e terapia, oferecendo um espaço seguro para expressão e cura.",
            message: "Olá! Tenho interesse na Escuta Ativa Terapêutica. Gostaria de saber mais informações e como participar."
        },
        {
            icon: Users2,
            title: "Rodas de Conversa",
            description: "Encontros em grupo que promovem o compartilhamento de experiências e apoio mútuo.",
            message: "Olá! Tenho interesse nas Rodas de Conversa. Gostaria de saber mais informações e como participar."
        },
        {
            icon: MessageCircle,
            title: "Palestras Educativas",
            description: "Apresentações informativas para comunidades, escolas e organizações sobre prevenção e conscientização.",
            message: "Olá! Tenho interesse nas Palestras Educativas. Gostaria de saber mais informações e como contratar."
        }
    ];

    return (
        <section id="da-pele-para-dentro" className="py-20 bg-gradient-hero text-primary-foreground anchor-offset">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-8">
                        <img
                            src={peleLogo}
                            alt="Logo Da Pele para Dentro"
                            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain pointer-events-none select-none hover-scale transition-smooth"
                        />
                        <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight break-words text-center md:text-left md:mr-64">
                            Da Pele para Dentro
                        </h2>
                    </div>
                    <div className="w-20 sm:w-24 h-1 bg-primary-foreground mx-auto -mt-3 md:-mt-6 mb-4 md:mb-8 rounded-full" />
                    <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90 px-4">
                        Da Pele para Dentro nasceu com a missão de promover reflexão e conscientização sobre a dependência química, que muitas vezes se disfarça em outras doenças e é tratado com preconceito e julgamento. A proposta é olhar além do que aparece na superfície — para além da pele — e enxergar a realidade interna de cada ser humano. É falar de dor, mas também de esperança. É dar voz a quem sofre em silêncio e trazer informação, acolhimento e caminhos de recuperação. Fortalecer a escuta e o diálogo, criando um espaço seguro de partilha e aprendizado.
                    </p>
                    <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed opacity-90 mt-3 px-4">
                        A ação se desenvolve através da escuta terapêutica, fundamentada no método Minnesota integrada à hipnoterapia dando origem ao Método Âncora (símbolo de marca registrada), voltado à regulação emocional, ao manejo de gatilhos e ao fortalecimento da consciência no processo de recuperação; rodas de conversa, que favorecem o acolhimento e a troca de experiências; palestras, com o objetivo de comunicar, informar e conscientizar sobre questões emocionais, sociais e de dependência química.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12 px-4 md:px-0 reveal reveal-stagger">
                    {initiatives.map((initiative, index) => (
                        <div
                            key={index}
                            className="bg-primary-foreground/10 backdrop-blur-sm p-6 sm:p-7 md:p-8 rounded-xl hover-lift transition-smooth border border-primary-foreground/20 flex flex-col h-full"
                        >
                            <div className="mb-6">
                                <initiative.icon className="w-12 h-12 text-primary-foreground mx-auto animate-pulse-soft" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-center">
                                {initiative.title}
                            </h3>
                            <p className="text-center leading-relaxed opacity-90 mb-6 flex-grow">
                                {initiative.description}
                            </p>
                            <Button asChild className="w-full bg-white text-primary hover:bg-white/90 font-semibold shadow-lg">
                                <a
                                    href={buildWhatsAppLink(initiative.message)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Saiba Mais
                                </a>
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}