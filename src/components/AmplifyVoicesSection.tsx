import { Button } from "@/components/ui/button";
import { Building2, HandHeart, Megaphone, Share2, UsersRound } from "lucide-react";

const phoneNumber = "5514997335195";
const SHARE_URL = "https://vozesfortes.com.br/";

const buildWhatsAppLink = (text: string) => {
    const encoded = encodeURIComponent(text);
    return `https://wa.me/${phoneNumber}?text=${encoded}`;
};

type ActionCard = {
    icon: typeof HandHeart;
    title: string;
    description: string;
    ctaLabel: string;
    href: string;
    type: "action";
};

type ShareCard = {
    icon: typeof Megaphone;
    title: string;
    description: string;
    type: "share";
};

type Card = ActionCard | ShareCard;

export default function AmplifyVoicesSection() {
    const cards: ReadonlyArray<Card> = [
        {
            icon: HandHeart,
            title: "Apoie com Recursos",
            description:
                "Sua doação financia oficinas, equipamentos, divulgação das histórias e outras ações que mantêm o projeto vivo com transparência e propósito.",
            ctaLabel: "Quero Doar",
            href: buildWhatsAppLink(
                "Olá! Tenho interesse em apoiar financeiramente o Instituto Vozes Fortes. Poderiam me orientar sobre formas de doação?",
            ),
            type: "action",
        },
        {
            icon: UsersRound,
            title: "Doe seu Tempo e Talento",
            description:
                "Seja você programador, designer, psicólogo, comunicador ou mentor, seu talento pode fortalecer nosso coro e ampliar nosso impacto.",
            ctaLabel: "Quero ser Voluntário",
            href: buildWhatsAppLink(
                "Olá! Gostaria de me voluntariar no Instituto Vozes Fortes. Posso contribuir com meu tempo e habilidades. Como proceder?",
            ),
            type: "action",
        },
        {
            icon: Building2,
            title: "Empresas que Fazem a Diferença",
            description:
                "Se sua empresa deseja apoiar por meio de patrocínio ou parceria estratégica, vamos construir impacto social real juntos.",
            ctaLabel: "Seja uma Empresa Parceira",
            href: buildWhatsAppLink(
                "Olá! Tenho interesse em parcerias/patrocínios com o Instituto Vozes Fortes. Poderiam compartilhar propostas e contrapartidas?",
            ),
            type: "action",
        },
        {
            icon: Megaphone,
            title: "Seja um Amplificador",
            description:
                "Não pode contribuir com recursos ou tempo agora? Ajude-nos a chegar mais longe! Compartilhe o projeto nas suas redes.",
            type: "share",
        },
    ] as const;

    const handleShare = async () => {
        const shareData = {
            title: "Vozes Fortes",
            text: "Conheça e apoie o Instituto Vozes Fortes",
            url: SHARE_URL,
        };
        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch {
                // ignore cancel
            }
            return;
        }
        try {
            await navigator.clipboard.writeText(shareData.url);
            alert("Link copiado! Compartilhe com seus contatos.");
        } catch {
            window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(shareData.text + " " + shareData.url)}`);
        }
    };

    return (
        <section id="amplifique-essas-vozes" className="py-20 bg-background anchor-offset">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-section text-primary-dark mb-4">Amplifique essas Vozes</h2>
                    <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
                        Quatro maneiras de apoiar o Instituto Vozes Fortes agora mesmo.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 reveal reveal-stagger">
                    {cards.map((card, idx) => (
                        <div key={idx} className="bg-gradient-card p-6 sm:p-7 md:p-8 rounded-xl shadow-card hover-lift transition-smooth border border-border flex flex-col h-full">
                            <div className="mb-6">
                                <card.icon className="w-12 h-12 text-primary mx-auto" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold text-primary-dark mb-3 text-center">
                                    {card.title}
                                </h3>
                                <p className="text-muted-foreground text-center leading-relaxed mb-6">
                                    {card.description}
                                </p>
                            </div>

                            {card.type === "share" ? (
                                <Button onClick={handleShare} variant="cta" size="lg" className="w-full mt-auto">
                                    <Share2 /> Compartilhar
                                </Button>
                            ) : (
                                <Button asChild variant="cta" size="lg" className="w-full mt-auto">
                                    <a href={(card as ActionCard).href} target="_blank" rel="noopener noreferrer">
                                        {(card as ActionCard).ctaLabel}
                                    </a>
                                </Button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}


