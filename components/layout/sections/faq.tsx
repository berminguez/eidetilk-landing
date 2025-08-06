import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: '¿Qué es Eidetik y cómo funciona?',
    answer:
      'Eidetik es una plataforma de memoria eidética para IA que transforma videos en conocimiento estructurado. Utiliza algoritmos avanzados de procesamiento de video, transcripción automática y análisis visual para crear embeddings semánticos que tus sistemas de IA pueden consultar instantáneamente.',
    value: 'item-1',
  },
  {
    question: '¿Qué tipos de videos puede procesar Eidetik?',
    answer:
      'Eidetik puede procesar cualquier contenido multimedia: videos de formación, reuniones grabadas, webinars, entrevistas, presentaciones, tutoriales, demos de productos y más. Soporta los formatos más comunes (MP4, AVI, MOV, etc.) y puede manejar desde clips cortos hasta sesiones de varias horas.',
    value: 'item-2',
  },
  {
    question: '¿Cómo me integro con la API MCP de Eidetik?',
    answer:
      'Eidetik ofrece una API REST completa compatible con Model Context Protocol (MCP). Puedes integrarla con Claude, ChatGPT y otros sistemas de IA en minutos. Proporcionamos SDKs, documentación completa y ejemplos de código para las integraciones más comunes.',
    value: 'item-3',
  },
  {
    question: '¿Es seguro subir contenido empresarial sensible?',
    answer:
      'Absolutamente. Eidetik implementa cifrado de extremo a extremo, almacenamiento seguro en la nube, auditorías de compliance y separación completa de datos entre organizaciones. Los planes empresariales incluyen SSO, SAML y controles de acceso granulares.',
    value: 'item-4',
  },
  {
    question: '¿Cuánto tiempo tarda en procesar un video?',
    answer:
      'El tiempo de procesamiento depende de la duración y calidad del video. Típicamente, un video de 1 hora se procesa en 10-15 minutos. Esto incluye transcripción, análisis visual, extracción de insights y creación de embeddings para búsqueda semántica.',
    value: 'item-5',
  },
  {
    question: '¿Puedo probar Eidetik antes de comprar?',
    answer:
      'Sí, ofrecemos un plan gratuito que incluye hasta 10 videos por mes, 2GB de almacenamiento y acceso a la API básica. También puedes solicitar una demo personalizada para ver cómo Eidetik se adapta a tus casos de uso específicos.',
    value: 'item-6',
  },
  {
    question: '¿En qué idiomas funciona Eidetik?',
    answer:
      'Eidetik soporta transcripción y análisis en más de 50 idiomas, incluyendo español, inglés, francés, alemán, italiano, portugués, chino, japonés y muchos más. La búsqueda semántica funciona efectivamente en contenido multiidioma.',
    value: 'item-7',
  },
  {
    question: '¿Qué soporte técnico ofrecen?',
    answer:
      'Ofrecemos soporte por email para todos los planes, soporte prioritario para plan Profesional, y soporte telefónico 24/7 para planes Empresariales.',
    value: 'item-8',
  },
]

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Preguntas frecuentes
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
