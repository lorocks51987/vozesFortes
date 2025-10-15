import espacoVozImg from "@/assets/espacoVoz.png";
import { BookOpen, Mic, Smartphone, Users } from "lucide-react";

export default function WhatWeDoSection() {
    const services = [
        {
            icon: BookOpen,
            title: "Cursos e Treinamentos",
            description: "Formação & Cursos: Treinamento Intensivo (8h) – Dependência Química e Prevenção; Capacitação de Monitores e Conselheiros; Workshops Corporativos. Modalidades: presencial, híbrido e online. Certificação: Instituto Vozes Fortes."
        },
        {
            icon: Users,
            title: "Produção Editorial",
            description: "Dar vida às histórias reais através de podcast e literatura: narrativas que sensibilizam, inspiram e mostram que há solução possível e real."
        },
        {
            icon: Mic,
            title: "Ações de Conscientização",
            description: "Da Pele para Dentro: escuta ativa (método Minnesota), rodas de conversa e palestras para comunicar, informar e conscientizar."
        },
        {
            icon: Smartphone,
            title: "Projetos Digitais",
            description: "App com IA treinada, conteúdos educativos, ferramentas de reflexão e dicas de autocuidado, conectando usuários a redes de apoio."
        }
    ];

    return (
        <section id="o-que-fazemos" className="py-20 bg-gradient-section anchor-offset">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="relative mb-6 flex items-center justify-center h-28 sm:h-32 md:h-40 px-4">
                        <h2 className="text-3xl sm:text-section text-primary-dark">
                            O Que Fazemos
                        </h2>
                        <img
                            src={espacoVozImg}
                            alt="Damos Espaço à Sua Voz"
                            className="absolute right-1 sm:-right-6 md:-right-24 bottom-2 sm:bottom-3 md:bottom-0 w-20 h-20 sm:w-32 sm:h-32 md:w-64 md:h-64 translate-y-0 sm:translate-y-2 md:translate-y-8 object-contain pointer-events-none select-none"
                            loading="lazy"
                            width={256}
                            height={256}
                        />
                    </div>
                    <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-8 px-4">
                        O Instituto Vozes Fortes nasce do compromisso em dar voz a quem luta contra a dependência química e a codependência. Nosso propósito é educar, conscientizar e formar profissionais e comunidades para lidar com um dos maiores desafios sociais e de saúde pública do nosso tempo. Fundado por Mônica Casagrande Neto – educadora, escritora, conselheira e especialista em dependência química – o projeto conecta experiência de vida, conhecimento técnico e ação social em diferentes frentes.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 reveal reveal-stagger">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gradient-card p-8 rounded-xl shadow-card hover-lift transition-smooth"
                        >
                            <div className="mb-6 flex justify-start">
                                <service.icon className="w-10 h-10 text-primary" />
                            </div>
                            <h3 className="text-xl font-semibold text-primary-dark mb-2 text-left">
                                {service.title}
                            </h3>
                            <p className="text-base md:text-lg text-muted-foreground text-left leading-7">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}