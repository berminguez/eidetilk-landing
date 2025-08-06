import { Badge } from '@/components/ui/badge'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

enum ContentType {
  MULTIMEDIA = 'multimedia',
  ENTERPRISE = 'enterprise',
}

interface ServiceProps {
  title: string
  type: ContentType
  description: string
  examples: string[]
}

const serviceList: ServiceProps[] = [
  {
    title: 'Videos de Formación y Capacitación',
    description:
      'Procesa contenido educativo para crear bases de conocimiento consultables que tus equipos pueden usar para aprendizaje continuo.',
    type: ContentType.MULTIMEDIA,
    examples: ['Tutoriales', 'Cursos', 'Workshops'],
  },
  {
    title: 'Reuniones y Conferencias',
    description:
      'Convierte reuniones grabadas en memoria estructurada para seguimiento de decisiones, acuerdos y próximos pasos.',
    type: ContentType.ENTERPRISE,
    examples: ['Daily standups', 'Board meetings', 'Planning sessions'],
  },
  {
    title: 'Webinars y Presentaciones',
    description:
      'Transforma presentaciones en conocimiento indexado que puede ser consultado y citado por sistemas de IA empresariales.',
    type: ContentType.MULTIMEDIA,
    examples: ['Product demos', 'Keynotes', 'Training sessions'],
  },
  {
    title: 'Entrevistas y Documentales',
    description:
      'Extrae insights y testimonios de entrevistas para crear bibliotecas de conocimiento empresarial y feedback de clientes.',
    type: ContentType.ENTERPRISE,
    examples: ['User interviews', 'Expert talks', 'Case studies'],
  },
  {
    title: 'Compliance y Auditorías',
    description:
      'Analiza videos de procesos operativos para asegurar cumplimiento normativo y identificar áreas de mejora automáticamente.',
    type: ContentType.ENTERPRISE,
    examples: ['Safety protocols', 'Quality checks', 'Audit trails'],
  },
  {
    title: 'Investigación y Desarrollo',
    description:
      'Procesa presentaciones de investigación y demos de productos para acelerar la innovación y compartir conocimiento técnico.',
    type: ContentType.MULTIMEDIA,
    examples: ['Research presentations', 'Product demos', 'Technical reviews'],
  },
]

export const ServicesSection = () => {
  return (
    <section id='services' className='container py-24 sm:py-32'>
      <h2 className='text-lg text-primary text-center mb-2 tracking-wider'>Casos de Uso</h2>

      <h2 className='text-3xl md:text-4xl text-center font-bold mb-4'>
        Transforma Cualquier Contenido en Conocimiento IA
      </h2>
      <h3 className='md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8'>
        Desde formación empresarial hasta compliance operativo, Eidetik procesa cualquier tipo de
        contenido multimedia para crear memoria estructurada que tus sistemas de IA pueden usar.
      </h3>

      <div className='grid sm:grid-cols-2 lg:grid-cols-2 gap-8 w-full'>
        {serviceList.map(({ title, description, type, examples }) => (
          <Card
            key={title}
            className='border-slate-300 p-4 bg-muted/60 dark:bg-card h-full relative group hover:shadow-md transition-shadow duration-300'
          >
            <CardHeader>
              <CardTitle className='group-hover:text-primary transition-colors duration-300'>
                {title}
              </CardTitle>
              <CardDescription className='mb-12'>{description}</CardDescription>
              <div className=' flex flex-wrap gap-1 mb-4 !mt-4'>
                {examples.map((example) => (
                  <Badge key={example} variant='default' className='text-xs'>
                    {example}
                  </Badge>
                ))}
              </div>
            </CardHeader>
         {/*    <Badge
              data-type={type}
              variant={type === ContentType.ENTERPRISE ? 'default' : 'secondary'}
              className='absolute -top-2 -right-3 data-[type=enterprise]:bg-primary data-[type=multimedia]:bg-secondary'
            >
              {type === ContentType.ENTERPRISE ? 'Enterprise' : 'Multimedia'}
            </Badge> */}
          </Card>
        ))}
      </div>
    </section>
  )
}
