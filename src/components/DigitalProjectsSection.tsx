import appPreview from "@/assets/app-preview.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { BookOpen, Brain, Mail, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function DigitalProjectsSection() {
    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const handleEmailSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        toast({
            title: "Obrigado pelo seu interesse!",
            description: "Você receberá todas as novidades sobre o lançamento do nosso app.",
        });

        setEmail("");
        setIsSubmitting(false);
    };

    const features = [
        {
            icon: Brain,
            title: "Inteligência Artificial",
            description: "Suporte personalizado com IA para acompanhamento diário"
        },
        {
            icon: BookOpen,
            title: "Conteúdos Educativos",
            description: "Biblioteca completa sobre dependência e recuperação"
        },
        {
            icon: MessageCircle,
            title: "Ferramentas de Reflexão",
            description: "Exercícios guiados para autoconhecimento e crescimento"
        }
    ];

    return (
        <section id="projetos-digitais" className="py-20 bg-gradient-section">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-section text-primary-dark mb-6">
                        Projetos Digitais
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
                        Nosso app oferece suporte a pessoas que enfrentam adicção, combinando inteligência artificial treinada com conteúdos educativos, ferramentas de reflexão e dicas de autocuidado. Também orienta e encaminha para redes de apoio e serviços especializados, promovendo autonomia, resiliência e transformação pessoal de forma segura e acessível.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* App Preview */}
                    <div className="relative">
                        <div className="bg-gradient-hero p-8 rounded-2xl shadow-elegant overflow-hidden">
                            <div className="flex justify-center mb-6 px-4 md:px-0">
                                <div className="relative">
                                    <img
                                        src={appPreview}
                                        alt="Preview do aplicativo Vozes Fortes"
                                        className="w-full max-w-full h-auto mx-auto rounded-2xl shadow-glow"
                                    />
                                    <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                                        Em Breve
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-2xl font-semibold text-primary-foreground text-center mb-4">
                                App Vozes Fortes
                            </h3>
                            <p className="text-primary-foreground/90 text-center leading-relaxed px-4 md:px-0">
                                Seu companheiro digital na jornada de recuperação e crescimento pessoal.
                            </p>
                        </div>
                    </div>

                    {/* Features and Email Capture */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-semibold text-primary-dark mb-6">
                                Recursos Inovadores
                            </h3>
                            <div className="space-y-6">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="p-3 bg-primary rounded-full flex-shrink-0">
                                            <feature.icon className="w-6 h-6 text-primary-foreground" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-primary-dark mb-2">
                                                {feature.title}
                                            </h4>
                                            <p className="text-lg text-muted-foreground leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Email Capture Form */}
                        <div className="bg-gradient-card p-8 rounded-xl shadow-card">
                            <div className="flex items-center gap-3 mb-6">
                                <Mail className="w-8 h-8 text-primary" />
                                <h4 className="text-xl font-semibold text-primary-dark">
                                    Seja o Primeiro a Saber
                                </h4>
                            </div>
                            <p className="text-base sm:text-lg text-muted-foreground mb-6 leading-relaxed">
                                Cadastre seu e-mail e receba notificações exclusivas sobre o lançamento
                                do aplicativo e novidades do Instituto Vozes Fortes.
                            </p>

                            <form onSubmit={handleEmailSubmit} className="space-y-4">
                                <Input
                                    type="email"
                                    placeholder="Seu melhor e-mail"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="h-12"
                                />
                                <Button
                                    type="submit"
                                    variant="hero"
                                    size="lg"
                                    className="w-full"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Cadastrando..." : "Quero Ser Notificado"}
                                </Button>
                            </form>

                            <p className="text-xs text-muted-foreground text-center mt-4">
                                Respeitamos sua privacidade. Nenhum spam, apenas conteúdo relevante.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}