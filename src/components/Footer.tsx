import logo from "@/assets/logo.png";
import { Heart, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-hero text-primary-foreground">
            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center gap-4 mb-6">
                            <img src={logo} alt="Vozes Fortes" className="w-24 h-24 object-cover rounded" />
                            <div>
                                <h3 className="text-2xl font-bold">Vozes Fortes</h3>
                                <p className="text-primary-foreground/80">Instituto de Transformação</p>
                            </div>
                        </div>
                        <p className="text-primary-foreground/90 leading-relaxed mb-6 max-w-md">
                            Dedicados a dar voz a quem luta contra dependência química e codependência,
                            promovendo educação, conscientização e transformação.
                        </p>
                        <div className="flex items-center gap-2 text-primary-foreground/80">
                            <Heart className="w-4 h-4" />
                            <span className="text-sm">Feito com amor e propósito</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Navegação</h4>
                        <ul className="space-y-2">
                            <li><a href="#o-que-fazemos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">O Que Fazemos</a></li>
                            <li><a href="#monica-casagrande" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Nossa História</a></li>
                            <li><a href="#da-pele-para-dentro" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Ações de Conscientização</a></li>
                            <li><a href="#producao-editorial" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Produção Editorial</a></li>
                            <li><a href="#cursos-treinamentos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Cursos</a></li>
                            <li><a href="#projetos-digitais" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">Projetos Digitais</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contato</h4>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-primary-foreground/60" />
                                <a
                                    href="mailto:vozesfortes32@gmail.com"
                                    className="text-primary-foreground/80 text-sm hover:text-primary-foreground transition-colors"
                                >
                                    vozesfortes32@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-primary-foreground/60" />
                                <a
                                    href="https://wa.me/5514998540110"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-primary-foreground/80 text-sm hover:text-primary-foreground transition-colors"
                                >
                                    +55 14 99854-0110
                                </a>
                            </div>
                            <div className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-primary-foreground/60 mt-1" />
                                <span className="text-primary-foreground/80 text-sm">Marília, SP<br />Brasil</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-primary-foreground/20 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-primary-foreground/60 text-sm">
                            © {currentYear} Instituto Vozes Fortes. Todos os direitos reservados.
                        </p>
                        <div className="flex gap-6 text-sm">
                            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                                Política de Privacidade
                            </a>
                            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                                Termos de Uso
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}