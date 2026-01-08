import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
    const location = useLocation();

    useEffect(() => {
        console.error("404 Error: Tentativa de acesso a rota inexistente:", location.pathname);
    }, [location.pathname]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-section p-4">
            <div className="text-center max-w-md w-full bg-white/50 backdrop-blur-sm p-8 rounded-2xl shadow-elegant border border-white/20">
                <div className="mb-6 inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10 text-primary animate-pulse">
                    <span className="text-4xl font-bold">?</span>
                </div>
                <h1 className="mb-2 text-4xl font-bold text-primary-dark">Página não encontrada</h1>
                <p className="mb-8 text-lg text-muted-foreground">
                    Ops! Parece que o caminho que você procurou não existe ou foi movido.
                </p>
                <Button asChild size="lg" variant="hero" className="w-full sm:w-auto hover-lift">
                    <Link to="/">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Voltar para o Início
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default NotFound;
