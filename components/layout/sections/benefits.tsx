import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { IconBrain, IconSearch, IconApi, IconRocket } from '@tabler/icons-react'

interface BenefitsProps {
  icon: React.ComponentType<any>
  title: string
  description: string
}

const benefitList: BenefitsProps[] = [
  {
    icon: IconBrain,
    title: 'Memoria Eidética para IA',
    description:
      'Tu IA nunca olvida. Cada frame, cada palabra, cada detalle de tus videos se almacena y organiza para consulta instantánea. Memoria perfecta al servicio de la inteligencia artificial.',
  },
  {
    icon: IconSearch,
    title: 'Búsqueda Semántica Inteligente',
    description:
      "Encuentra contenido por significado, no solo por palabras clave. Busca 'reunión sobre presupuestos' y encuentra todas las discusiones financieras, sin importar cómo se mencionaron.",
  },
  {
    icon: IconApi,
    title: 'Integración API Completa',
    description:
      'API MCP lista para producción que se integra con cualquier sistema. Conecta Framik con tus herramientas existentes en minutos, no en meses.',
  },
  {
    icon: IconRocket,
    title: 'Procesamiento Automático',
    description:
      'Sube videos y olvídate del resto. Nuestros algoritmos de IA procesan, analizan y estructuran tu contenido automáticamente, liberando tu tiempo para tareas más importantes.',
  },
]

export const BenefitsSection = () => {
  return (
    <section id='benefits' className='container py-24 sm:py-32'>
      <div className='grid lg:grid-cols-3 place-items-center lg:gap-24'>
        <div >
          <h2 className='text-lg text-primary mb-2 tracking-wider'>Beneficios</h2>

          <h2 className='text-2xl md:text-3xl font-bold mb-4'>
            Transforma tus Videos en Conocimiento Inteligente
          </h2>
          <p className='text-xl text-muted-foreground mb-8'>
            Framik convierte contenido multimedia en memoria estructurada que tus sistemas de IA
            pueden usar, recordar y consultar de forma inteligente. El futuro del procesamiento de
            video está aquí.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-4 w-full col-span-2'>
          {benefitList.map(({ icon: IconComponent, title, description }, index) => (
            <Card
              key={title}
              className='bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number'
            >
              <CardHeader>
                <div className='flex justify-between'>
                  <IconComponent size={32} className='mb-6 text-primary' />
                  <span className='text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30'>
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className='text-muted-foreground'>{description}</CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
