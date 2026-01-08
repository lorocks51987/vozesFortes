import monicaImg from "@/assets/monica.jpg";

export default function MonicaSection() {
    return (
        <section id="monica-casagrande" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-section text-primary-dark mb-6">
                            Conheça Mônica Casagrande Neto
                        </h2>
                        <div className="w-24 h-1 bg-gradient-purple mx-auto mb-8 rounded-full" />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center flex flex-col-reverse lg:grid">
                        <div className="space-y-6">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                <strong className="text-primary-dark">Educadora, escritora, conselheira e terapeuta</strong>,
                                Mônica Casagrande Neto é a força inspiradora por trás do Instituto Vozes Fortes.
                            </p>

                            <p className="text-muted-foreground leading-relaxed">
                                Sua trajetória pessoal de superação e transformação a levou a dedicar sua vida
                                a ajudar outras pessoas que enfrentam desafios similares. Com uma abordagem
                                empática e profissional, ela desenvolveu métodos únicos de acolhimento e recuperação.
                            </p>


                            <div className="bg-gradient-card p-6 rounded-xl">
                                <blockquote className="text-primary-dark font-medium italic text-center">
                                    "Cada voz que se ergue contra o silêncio da adicção é uma vitória.
                                    Nosso papel é amplificar essas vozes e mostrar que a transformação é possível."
                                </blockquote>
                                <cite className="block text-center text-primary mt-4 font-semibold">
                                    — Mônica Casagrande Neto
                                </cite>
                            </div>
                        </div>

                        <div className="bg-gradient-card p-8 rounded-xl shadow-card">
                            <img src={monicaImg} alt="Mônica Casagrande Neto" className="w-full h-72 md:h-80 object-contain rounded-md mb-6" loading="lazy" width={640} height={320} />
                            <h3 className="text-xl font-semibold text-primary-dark mb-6">
                                Áreas de Especialização
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                    <span className="text-muted-foreground">Dependência Química e Prevenção</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                    <span className="text-muted-foreground">Codependência e Relações Familiares</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                    <span className="text-muted-foreground">Terapia e Aconselhamento</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                    <span className="text-muted-foreground">Educação e Capacitação</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                    <span className="text-muted-foreground">Produção de Conteúdo Terapêutico</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                                    <span className="text-muted-foreground">Hipnoterapia</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}