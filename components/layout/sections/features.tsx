import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  IconVideo,
  IconApi,
  IconCode,
  IconUsers,
  IconSearch,
  IconDatabase,
} from '@tabler/icons-react'

interface FeaturesProps {
  icon: React.ComponentType<any>
  title: string
  description: string
}

const featureList: FeaturesProps[] = [
  {
    icon: IconVideo,
    title: 'Análisis de Video con IA',
    description:
      'Procesamiento automático de contenido multimedia con transcripción, análisis visual y extracción de insights mediante algoritmos avanzados de inteligencia artificial.',
  },
  {
    icon: IconApi,
    title: 'API MCP Completa',
    description:
      'Integración nativa con Model Context Protocol para conectar con Claude, ChatGPT y otros sistemas de IA. API REST lista para producción con documentación completa.',
  },
  {
    icon: IconCode,
    title: 'Playground Interactivo',
    description:
      'Entorno de pruebas integrado para experimentar con tu contenido procesado. Prueba consultas, ajusta parámetros y verifica resultados en tiempo real.',
  },
  {
    icon: IconUsers,
    title: 'Gestión de Espacios',
    description:
      'Sistema multi-tenant completo con gestión de equipos, permisos granulares y separación segura de datos. Perfecto para organizaciones de cualquier tamaño.',
  },
  {
    icon: IconSearch,
    title: 'Búsqueda Semántica',
    description:
      'Encuentra contenido por significado, no solo por palabras exactas. Búsquedas inteligentes que entienden contexto y conceptos relacionados en tu biblioteca de videos.',
  },
  {
    icon: IconDatabase,
    title: 'Memoria Persistente',
    description:
      'Almacenamiento vectorial optimizado para consultas rápidas y memoria a largo plazo. Tu conocimiento se mantiene accesible y consultable indefinidamente.',
  },
]

export const FeaturesSection = () => {
  return (
    <section id='features' className='container py-24 sm:py-32'>
      <h2 className='text-lg text-primary text-center mb-2 tracking-wider'>Características</h2>

      <h2 className='text-3xl md:text-4xl text-center font-bold mb-4'>
        Tecnología de Vanguardia para IA
      </h2>

      <h3 className='md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8'>
        Framik combina procesamiento de video avanzado, almacenamiento vectorial y APIs modernas
        para crear la plataforma más completa de memoria fotográfica para sistemas de inteligencia
        artificial.
      </h3>

      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {featureList.map(({ icon: IconComponent, title, description }) => (
          <div key={title}>
            <Card className='h-full bg-background border-0 shadow-none'>
              <CardHeader className='flex justify-center items-center'>
                <div className='bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4'>
                  <IconComponent size={24} className='text-primary' />
                </div>

                <CardTitle className='text-center'>{title}</CardTitle>
              </CardHeader>

              <CardContent className='text-muted-foreground text-center'>{description}</CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  )
}
