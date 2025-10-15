import livroImg from "@/assets/livro.png";
import podcastImg from "@/assets/podcast.png";
import { Button } from "@/components/ui/button";
import { BookOpen, ChevronDown, ChevronUp, Mic } from "lucide-react";
import { useState } from "react";

export default function EditorialSection() {
    const [isPodcastExpanded, setIsPodcastExpanded] = useState(false);
    const [isLiteratureExpanded, setIsLiteratureExpanded] = useState(false);

    return (
        <section id="producao-editorial" className="py-20 bg-gradient-section anchor-offset">
            <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-section text-primary-dark mb-6">
                        Nossa Produção Editorial
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
                        No Vozes Fortes, a produção editorial busca dar vida às histórias reais através de podcast e literatura. Essas vozes, ao romperem o silêncio e narrarem sua dor, carregam uma força quase sobrenatural: a de sensibilizar, inspirar e mostrar que existe solução — possível e real.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 reveal reveal-stagger">
                    {/* Podcast Section */}
                    <div className="bg-gradient-card p-3 sm:p-4 md:p-6 lg:p-8 rounded-xl shadow-card hover-lift transition-smooth flex flex-col h-full w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:max-w-none lg:mx-0">
                        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                            <div className="p-2 sm:p-2.5 md:p-3 bg-primary rounded-full flex-shrink-0">
                                <Mic className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary-foreground" />
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary-dark leading-tight">
                                Podcast Milagre Invisível
                            </h3>
                        </div>
                        <img
                            src={podcastImg}
                            alt="Podcast Milagre Invisível"
                            className="w-full max-w-full h-auto object-contain rounded-lg mb-3 sm:mb-4 max-h-48 sm:max-h-56 md:max-h-64"
                            loading="lazy"
                            width={640}
                            height={256}
                        />

                        <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-3 sm:mb-4 md:mb-6">
                            Milagre Invisível é um podcast que nasce da urgência de dar voz ao que tantas vezes é silenciado. Histórias verídicas de luta, queda, reconstrução e superação são narradas com a força da verdade nua e crua, mas também com a esperança que brota mesmo nos terrenos mais áridos.
                        </p>

                        {isPodcastExpanded && (
                            <>
                                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-3 sm:mb-4 md:mb-6">
                                    A cada episódio, você vai ouvir relatos de quem enfrentou dependência química, violência, abandono, preconceito ou doenças emocionais — e encontrou um caminho possível de recomeço. São pessoas comuns que, ao contarem suas trajetórias, revelam o poder invisível da coragem e da persistência.
                                </p>
                                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-3 sm:mb-4 md:mb-6">
                                    Além dos protagonistas dessas histórias, recebemos também familiares, profissionais da saúde e da assistência social, e especialistas que ajudam a compreender as emoções e os desafios do processo de recuperação.
                                </p>
                                <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                                    O Milagre Invisível é mais do que um podcast: é uma rede de apoio em forma de voz. É informação que liberta, testemunho que inspira e diálogo que transforma. Porque cada história narrada lembra a quem escuta: você não está sozinho, sempre existe um caminho, sempre existe esperança.
                                </p>
                            </>
                        )}

                        <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                            <div className="flex items-center gap-2 sm:gap-3">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full flex-shrink-0" />
                                <span className="text-xs sm:text-sm text-muted-foreground">Histórias de superação autênticas</span>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full flex-shrink-0" />
                                <span className="text-xs sm:text-sm text-muted-foreground">Relatos de familiares e cuidadores</span>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full flex-shrink-0" />
                                <span className="text-xs sm:text-sm text-muted-foreground">Insights de especialistas</span>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-3">
                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full flex-shrink-0" />
                                <span className="text-xs sm:text-sm text-muted-foreground">Abordagem empática e educativa</span>
                            </div>
                        </div>

                        <Button
                            variant="outline"
                            size="sm"
                            className="w-full mb-4 sm:mb-6"
                            onClick={() => setIsPodcastExpanded(!isPodcastExpanded)}
                        >
                            {isPodcastExpanded ? (
                                <>
                                    <ChevronUp className="w-4 h-4 mr-2" />
                                    Ler menos
                                </>
                            ) : (
                                <>
                                    <ChevronDown className="w-4 h-4 mr-2" />
                                    Ler mais
                                </>
                            )}
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            className="w-full mt-auto border-primary/20 text-muted-foreground hover:bg-primary/5 hover:text-primary cursor-not-allowed opacity-60"
                            disabled
                        >
                            <Mic className="w-4 h-4 mr-2" />
                            Podcast - Em breve
                        </Button>
                    </div>

                    {/* Literature Section */}
                    <div className="bg-gradient-card p-3 sm:p-4 md:p-6 lg:p-8 rounded-xl shadow-card hover-lift transition-smooth flex flex-col h-full w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:max-w-none lg:mx-0">
                        <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                            <div className="p-2 sm:p-2.5 md:p-3 bg-primary rounded-full flex-shrink-0">
                                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-primary-foreground" />
                            </div>
                            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary-dark leading-tight">
                                Literatura: Obras Impressas
                            </h3>
                        </div>
                        <img
                            src={livroImg}
                            alt="Literatura Vozes Fortes"
                            className="w-full max-w-full h-auto object-contain rounded-lg mb-3 sm:mb-4 md:mb-6 max-h-48 sm:max-h-56 md:max-h-64"
                            loading="lazy"
                            width={640}
                            height={256}
                        />

                        <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-3 sm:mb-4 md:mb-6">
                            A literatura, dentro do projeto Vozes Fortes, nasce como um braço que transforma histórias reais em palavras impressas, capazes de atravessar o tempo e alcançar pessoas em diferentes lugares. A proposta é dar forma escrita às narrativas de superação, resiliência e transformação.
                        </p>

                        {isLiteratureExpanded && (
                            <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                                Esses encontros literários têm como missão não apenas compartilhar histórias, mas criar espaços de diálogo, acolhimento e análise, onde cada narrativa possa ser debatida, ressignificada e transformada em inspiração. Acreditamos que a palavra escrita tem um poder singular: ela não apenas conta, mas permanece.
                            </p>
                        )}

                        <div className="bg-primary/5 p-4 sm:p-6 rounded-lg mb-4 sm:mb-6 border-l-4 border-primary">
                            <h4 className="text-lg sm:text-xl font-semibold text-primary-dark mb-2 sm:mb-3 leading-tight">
                                Destaque: "Tempestade Interior"
                            </h4>
                            <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4 leading-relaxed">
                                "Esta obra nasce da urgência de compartilhar uma jornada real de transformação.
                                É uma narrativa que atravessa os abismos da dependência química e emerge como
                                testemunho de que a recuperação é possível. Cada palavra aqui contada carrega
                                o peso da verdade e a leveza da esperança, oferecendo não apenas uma história,
                                mas um caminho possível para quem busca sua própria redenção."
                            </p>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-xs sm:text-sm text-muted-foreground">
                                <span>📖 Disponível em versão impressa</span>
                                <span className="hidden sm:inline">•</span>
                                <span>🎧 Audiobook em produção</span>
                            </div>
                        </div>

                        <Button
                            variant="outline"
                            size="sm"
                            className="w-full mb-4 sm:mb-6"
                            onClick={() => setIsLiteratureExpanded(!isLiteratureExpanded)}
                        >
                            {isLiteratureExpanded ? (
                                <>
                                    <ChevronUp className="w-4 h-4 mr-2" />
                                    Ler menos
                                </>
                            ) : (
                                <>
                                    <ChevronDown className="w-4 h-4 mr-2" />
                                    Ler mais
                                </>
                            )}
                        </Button>

                        <Button
                            variant="outline"
                            size="lg"
                            className="w-full mt-auto border-primary/20 text-muted-foreground hover:bg-primary/5 hover:text-primary cursor-not-allowed opacity-60"
                            disabled
                        >
                            <BookOpen className="w-4 h-4 mr-2" />
                            "Tempestade Interior" - Em breve
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}