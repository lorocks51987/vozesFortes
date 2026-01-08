import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/utils";
import { GraduationCap, Monitor, Users } from "lucide-react";

export default function CoursesSection() {
    const courses = [
        {
            icon: GraduationCap,
            title: "Treinamento Intensivo (8h) – Dependência Química e Prevenção",
            description: "Para profissionais da saúde, educação, assistência social e empresas.",
            duration: "8 horas",
            format: "Presencial, Híbrido ou Online",
            message:
                "Olá! Tenho interesse no Treinamento Intensivo (8h) – Dependência Química e Prevenção. Gostaria de saber valores, próximas turmas e como me inscrever."
        },
        {
            icon: Users,
            title: "Formação para Terapeutas",
            description: "Formação para atuação no acompanhamento e suporte a pessoas em recuperação.",
            duration: "Carga horária variável",
            format: "Presencial ou Híbrido",
            message:
                "Olá! Tenho interesse na Formação para Terapeutas. Gostaria de saber valores, próximas turmas e como me inscrever."
        },
        {
            icon: Monitor,
            title: "Workshops Corporativos",
            description: "Álcool, drogas e saúde mental no trabalho, com foco em prevenção e acolhimento.",
            duration: "8–16 horas",
            format: "Online",
            message:
                "Olá! Tenho interesse nos Workshops Corporativos sobre álcool, drogas e saúde mental no trabalho. Gostaria de saber valores, disponibilidade e como contratar."
        }
    ];

    return (
        <section id="cursos-treinamentos" className="py-20 bg-background anchor-offset">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-section text-primary-dark mb-6">
                        Cursos e Treinamentos
                    </h2>
                    <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
                        Formação & Cursos. Modalidades: presencial, híbrido e online. Certificação: Instituto Vozes Fortes.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8 mb-12 px-2 sm:px-4 md:px-0 reveal reveal-stagger">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="bg-gradient-card p-5 sm:p-7 md:p-8 rounded-xl shadow-card hover-lift transition-smooth border border-border flex flex-col h-full"
                        >
                            <div className="mb-6">
                                <course.icon className="w-10 h-10 sm:w-12 sm:h-12 text-primary mx-auto" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold text-primary-dark mb-3 sm:mb-4 text-center min-h-[3.25rem] sm:min-h-[3.5rem]">
                                {course.title}
                            </h3>
                            <p className="text-sm sm:text-base text-muted-foreground text-center leading-relaxed mb-5 sm:mb-6">
                                {course.description}
                            </p>

                            <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
                                <div className="flex items-center justify-between py-2 px-3 sm:px-4 bg-primary/5 rounded-lg">
                                    <span className="text-sm font-medium text-primary-dark">Duração:</span>
                                    <span className="text-sm text-primary font-semibold">{course.duration}</span>
                                </div>
                                <div className="flex items-center justify-between py-2 px-3 sm:px-4 bg-primary/5 rounded-lg">
                                    <span className="text-sm font-medium text-primary-dark">Formato:</span>
                                    <span className="text-sm text-primary font-semibold">{course.format}</span>
                                </div>
                            </div>

                            <Button asChild variant="cta" size="lg" className="w-full mt-auto">
                                <a
                                    href={buildWhatsAppLink(course.message, course.title)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {course.title.includes('Workshops Corporativos')
                                        ? 'Saiba Mais - Valores e Disponibilidade'
                                        : 'Saiba Mais - Valores e Próximas Turmas'
                                    }
                                </a>
                            </Button>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
}