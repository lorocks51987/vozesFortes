import { BookOpen, Mic, Smartphone, Users } from "lucide-react";
import espacoVozImg from "@/assets/espacoVoz.png";

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
        <section id="o-que-fazemos" className="py-20 bg-gradient-section">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="relative mb-6 flex items-center justify-center h-32 md:h-40">
                        <h2 className="text-section text-primary-dark">
                            O Que Fazemos
                        </h2>
                        <img
                            src={espacoVozImg}
                            alt="Damos Espaço à Sua Voz"
                            className="absolute -right-6 md:-right-24 bottom-0 w-48 h-48 md:w-64 md:h-64 translate-y-6 md:translate-y-8 object-contain pointer-events-none select-none"
                        />
                    </div>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        O Instituto Vozes Fortes nasce do compromisso em dar voz a quem luta contra a dependência química e a codependência. Nosso propósito é educar, conscientizar e formar profissionais e comunidades para lidar com um dos maiores desafios sociais e de saúde pública do nosso tempo. Fundado por Mônica Casagrande Neto – educadora, escritora, conselheira e especialista em dependência química – o projeto conecta experiência de vida, conhecimento técnico e ação social em diferentes frentes.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gradient-card p-8 rounded-xl shadow-card hover-lift transition-smooth"
                        >
                            <div className="mb-6">
                                <service.icon className="w-12 h-12 text-primary mx-auto" />
                            </div>
                            <h3 className="text-xl font-semibold text-primary-dark mb-4 text-center">
                                {service.title}
                            </h3>
                            <p className="text-lg text-muted-foreground text-center leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}