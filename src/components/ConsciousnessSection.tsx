import peleLogo from "@/assets/PelePraDentro.png";
import { Heart, MessageCircle, Users2 } from "lucide-react";

export default function ConsciousnessSection() {
    const initiatives = [
        {
            icon: Heart,
            title: "Escuta Ativa Terapêutica",
            description: "Sessões individuais de acolhimento e terapia, oferecendo um espaço seguro para expressão e cura."
        },
        {
            icon: Users2,
            title: "Rodas de Conversa",
            description: "Encontros em grupo que promovem o compartilhamento de experiências e apoio mútuo."
        },
        {
            icon: MessageCircle,
            title: "Palestras Educativas",
            description: "Apresentações informativas para comunidades, escolas e organizações sobre prevenção e conscientização."
        }
    ];

    return (
        <section id="da-pele-para-dentro" className="py-20 bg-gradient-hero text-primary-foreground">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <div className="relative mb-0 flex items-center justify-center h-52 md:h-64">
                        <h2 className="text-6xl md:text-7xl font-bold whitespace-nowrap">Da Pele para Dentro</h2>
                        <img
                            src={peleLogo}
                            alt="Logo Da Pele para Dentro"
                            className="absolute -left-10 md:-left-32 bottom-0 w-64 h-64 md:w-72 md:h-72 translate-y-2 md:translate-y-4 object-contain pointer-events-none select-none"
                        />
                    </div>
                    <div className="w-24 h-1 bg-primary-foreground mx-auto mb-0 rounded-full" />
                    <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90">
                        Da Pele para Dentro nasceu com a missão de promover reflexão e conscientização sobre a dependência química, que muitas vezes se disfarça em outras doenças e é tratado com preconceito e julgamento. A proposta é olhar além do que aparece na superfície — para além da pele — e enxergar a realidade interna de cada ser humano. É falar de dor, mas também de esperança. É dar voz a quem sofre em silêncio e trazer informação, acolhimento e caminhos de recuperação. Fortalecer a escuta e o diálogo, criando um espaço seguro de partilha e aprendizado.
                    </p>
                    <p className="text-xl max-w-3xl mx-auto leading-relaxed opacity-90 mt-3">
                        A ação se desenvolve através de: Escuta ativa em grupo (terapia), fundamentada no método Minnesota; Rodas de conversa, que favorecem o acolhimento e a troca de experiências; Palestras, com o objetivo de comunicar, informar e conscientizar sobre questões emocionais, sociais e de dependência química.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {initiatives.map((initiative, index) => (
                        <div
                            key={index}
                            className="bg-primary-foreground/10 backdrop-blur-sm p-8 rounded-xl hover-lift transition-smooth border border-primary-foreground/20"
                        >
                            <div className="mb-6">
                                <initiative.icon className="w-12 h-12 text-primary-foreground mx-auto" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-center">
                                {initiative.title}
                            </h3>
                            <p className="text-center leading-relaxed opacity-90">
                                {initiative.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="max-w-4xl mx-auto bg-primary-foreground/10 backdrop-blur-sm p-8 rounded-xl border border-primary-foreground/20">
                    <h3 className="text-2xl font-semibold text-center mb-6">Ação de Conscientização — Escuta ativa</h3>
                    <p className="text-center leading-relaxed opacity-90 mb-6">
                        A escuta ativa proposta pelo “Da Pele para Dentro” é inspirada no método Minnesota, aplicada por meio de reuniões em grupos de ajuda mútua. Trata-se de uma prática ainda pouco difundida no Brasil, mas bastante consolidada em países como Estados Unidos, Canadá, Reino Unido e Portugal, onde se tornou uma das bases dos processos de recuperação emocional e social.
                    </p>
                    <p className="text-center leading-relaxed opacity-90 mb-6">
                        Essa metodologia se apoia no espelhamento: ao ouvir as histórias de outras pessoas, o indivíduo se reconhece, identifica seus próprios padrões e, a partir daí, desenvolve novas formas de compreender a si mesmo, ou seja é responsável pela sua própria recuperação. Essa troca humaniza, gera pertencimento e rompe o isolamento que tantas vezes a dor impõe.
                    </p>
                    <p className="text-center leading-relaxed opacity-90 mb-6">
                        Mediado pelos 12 Passos, o processo oferece não apenas ferramentas de enfrentamento, mas também uma nova perspectiva sobre como lidar com as emoções cotidianas, transformando vulnerabilidades em aprendizado e esperança.
                    </p>
                    <div className="text-center">
                        <blockquote className="text-lg italic font-medium">
                            "Da pele para dentro: é neste espaço íntimo que acontece a verdadeira transformação."
                        </blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
}