import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  buttonLink: string;
  description: string;
  buttonText: string;
  benefitList: string[];
}


const plans: PlanProps[] = [
  {
    title: 'Gratuito',
    popular: 0,
    price: 0,
    buttonLink: 'https://app.framik.io/signup',
    description: 'Perfecto para probar Eidetik y casos de uso básicos de análisis de video con IA.',
    buttonText: 'Comenzar gratis',
    benefitList: [
      'Hasta 10 videos/mes',
      '2 GB de almacenamiento',
      'API básica MCP',
      'Transcripción automática',
      'Búsqueda semántica básica',
      'Soporte por email',
    ],
  },
  {
    title: 'Profesional',
    popular: 1,
    price: 49,
    buttonLink: 'https://app.framik.io/signup?plan=professional',
    description:
      'Ideal para equipos pequeños y medianos que necesitan procesamiento avanzado de contenido.',
    buttonText: 'Empezar ahora',
    benefitList: [
      'Videos ilimitados',
      '50 GB de almacenamiento',
      'API MCP completa',
      'Análisis visual avanzado',
      'Playground interactivo',
      'Gestión de equipos',
      'Soporte prioritario',
      'Integraciones webhook',
    ],
  },
  {
    title: 'Empresarial',
    popular: 0,
    price: 199,
    buttonLink: 'mailto:sales@framik.io',
    description:
      'Solución completa para organizaciones grandes con necesidades de compliance y seguridad.',
    buttonText: 'Contactar ventas',
    benefitList: [
      'Todo de Profesional',
      'Almacenamiento ilimitado',
      'Instancia dedicada',
      'SSO & SAML',
      'Auditoría y compliance',
      'SLA del 99.9%',
      'Soporte telefónico',
      'Onboarding personalizado',
      'Integración custom',
    ],
  },
]

export const PricingSection = () => {
  return (
    <section id='pricing' className="container py-24 sm:py-32">
     <h2 className='text-lg text-primary text-center mb-2 tracking-wider'>Precios</h2>

    <h2 className='text-3xl md:text-4xl text-center font-bold mb-4'>
      Planes adaptados a tu necesidad
    </h2>

    <h3 className='md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14'>
      Desde pruebas gratuitas hasta soluciones empresariales. Escala tus contenidos según
      crezca tu organización.
    </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList, buttonLink }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan?.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  <span className="text-3xl font-bold">${price}</span>
                  <span className="text-muted-foreground"> /month</span>
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  asChild
                  variant={
                    popular === PopularPlan?.YES ? "default" : "secondary"
                  }
                  className="w-full"
                >
                  <Link href={buttonLink}>{buttonText}</Link>
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
