import livroImg from "@/assets/livro.png";
import podcastImg from "@/assets/podcast.png";
import { Button } from "@/components/ui/button";
import { BookOpen, Mic } from "lucide-react";

export default function EditorialSection() {
    return (
        <section id="producao-editorial" className="py-20 bg-gradient-section">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-section text-primary-dark mb-6">
                        Nossa Produção Editorial
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        No Vozes Fortes, a produção editorial busca dar vida às histórias reais através de podcast e literatura. Essas vozes, ao romperem o silêncio e narrarem sua dor, carregam uma força quase sobrenatural: a de sensibilizar, inspirar e mostrar que existe solução — possível e real.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Podcast Section */}
                    <div className="bg-gradient-card p-8 rounded-xl shadow-card hover-lift transition-smooth flex flex-col h-full">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-primary rounded-full">
                                <Mic className="w-8 h-8 text-primary-foreground" />
                            </div>
                            <h3 className="text-2xl font-semibold text-primary-dark">
                                Podcast Milagre Invisível
                            </h3>
                        </div>
                        <img src={podcastImg} alt="Podcast Milagre Invisível" className="w-full h-80 object-contain rounded-lg mb-3" />

                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Milagre Invisível é um podcast que nasce da urgência de dar voz ao que tantas vezes é silenciado. Histórias verídicas de luta, queda, reconstrução e superação são narradas com a força da verdade nua e crua, mas também com a esperança que brota mesmo nos terrenos mais áridos.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            A cada episódio, você vai ouvir relatos de quem enfrentou dependência química, violência, abandono, preconceito ou doenças emocionais — e encontrou um caminho possível de recomeço. São pessoas comuns que, ao contarem suas trajetórias, revelam o poder invisível da coragem e da persistência.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Além dos protagonistas dessas histórias, recebemos também familiares, profissionais da saúde e da assistência social, e especialistas que ajudam a compreender as emoções e os desafios do processo de recuperação.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            O Milagre Invisível é mais do que um podcast: é uma rede de apoio em forma de voz. É informação que liberta, testemunho que inspira e diálogo que transforma. Porque cada história narrada lembra a quem escuta: você não está sozinho, sempre existe um caminho, sempre existe esperança.
                        </p>

                        <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-primary rounded-full" />
                                <span className="text-muted-foreground">Histórias de superação autênticas</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-primary rounded-full" />
                                <span className="text-muted-foreground">Relatos de familiares e cuidadores</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-primary rounded-full" />
                                <span className="text-muted-foreground">Insights de especialistas</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 bg-primary rounded-full" />
                                <span className="text-muted-foreground">Abordagem empática e educativa</span>
                            </div>
                        </div>

                        <Button 
                            variant="cta" 
                            size="lg" 
                            className="w-full mt-auto"
                            onClick={() => window.open('https://open.spotify.com/episode/5oBxnjG7DY8IxRMdsaErxn?si=75Ja59mbQ4KX9ofMG2IqIA', '_blank')}
                        >
                            Ouvir Episódios
                        </Button>
                    </div>

                    {/* Literature Section */}
                    <div className="bg-gradient-card p-8 rounded-xl shadow-card hover-lift transition-smooth flex flex-col h-full">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-primary rounded-full">
                                <BookOpen className="w-8 h-8 text-primary-foreground" />
                            </div>
                            <h3 className="text-2xl font-semibold text-primary-dark">
                                Literatura: Obras Impressas
                            </h3>
                        </div>
                        <img src={livroImg} alt="Literatura Vozes Fortes" className="w-full h-80 object-contain rounded-lg mb-6" />

                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            A literatura, dentro do projeto Vozes Fortes, nasce como um braço que transforma histórias reais em palavras impressas, capazes de atravessar o tempo e alcançar pessoas em diferentes lugares. A proposta é dar forma escrita às narrativas de superação, resiliência e transformação — relatos que começam nos encontros e nos podcasts, mas que encontram, nos artigos, livros e editoriais, um espaço de permanência e reflexão mais profunda.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Esses encontros literários têm como missão não apenas compartilhar histórias, mas criar espaços de diálogo, acolhimento e análise, onde cada narrativa possa ser debatida, ressignificada e transformada em inspiração. Acreditamos que a palavra escrita tem um poder singular: ela não apenas conta, mas permanece.
                        </p>

                        <div className="bg-primary/5 p-6 rounded-lg mb-6 border-l-4 border-primary">
                            <h4 className="text-xl font-semibold text-primary-dark mb-3">
                                Destaque: "Tempestade Interior"
                            </h4>
                            <p className="text-muted-foreground mb-4 leading-relaxed">
                                Por Mônica Casagrande Neto. Uma obra profunda que explora as nuances da
                                dependência química e os caminhos para a recuperação, baseada em experiências
                                reais e conhecimento terapêutico.
                            </p>
                            <div className="flex items-center gap-3 text-sm text-muted-foreground">
                                <span>📖 Disponível em versão impressa</span>
                                <span>•</span>
                                <span>🎧 Audiobook em produção</span>
                            </div>
                        </div>

                        <Button variant="hero" size="lg" className="w-full mt-auto" disabled>
                            Comprar "Tempestade Interior" (em breve)
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}