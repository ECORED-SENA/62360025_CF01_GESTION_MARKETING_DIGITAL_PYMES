export default {
  global: {
    Name: 'Comunicación y gestión de comunidades virtuales',
    Description:
      'Este componente desarrolla competencias para gestionar la comunicación digital empresarial mediante redes sociales, abordando la identificación de audiencias, comunicación escrita, interacción con comunidades virtuales, curación de contenidos, automatización de respuestas, optimización de publicaciones y uso estratégico de información digital, con el propósito de fortalecer la relación entre las pymes y sus clientes.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-4.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo:
          '<em>Marketing</em> digital y comunicación empresarial en entornos digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Transformación de la comunicación empresarial en medios digitales',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Redes sociales y su importancia para las pymes',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo:
              'Beneficios del marketing digital en la relación con clientes',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Redes sociales para la gestión empresarial',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto, características y usos de las redes sociales',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Selección de redes sociales según el público objetivo',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Configuración, ajustes y optimización de perfiles empresariales',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Catálogos digitales, difusión y herramientas de interacción',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Audiencias, comportamiento del consumidor y comunicación escrita en entornos digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Identificación y segmentación del público objetivo',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Técnicas de análisis del comportamiento del consumidor',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Gestión de relaciones con consumidores en entornos digitales',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Evaluación del consumo de información digital',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Comunicación escrita aplicada a medios digitales',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Gestión de comunidades virtuales y contenidos digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Interacción con usuarios y gestión de conversaciones',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Respuestas rápidas, automatización y atención digital',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Bases de datos aplicadas a la comunicación empresarial',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Curación, agregación y valoración de contenidos',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Técnicas narrativas para contenidos digitales',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Planeación, programación y organización de publicaciones',
            hash: 't_4_6',
          },
          {
            numero: '4.7',
            titulo:
              'Construcción de <em>feeds</em> informativos según audiencia',
            hash: 't_4_7',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo:
          'Optimización, posicionamiento y análisis de información digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Concepto de posicionamiento digital',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Optimización básica de contenidos digitales',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Introducción al SEO aplicado a contenidos',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Introducción al uso estratégico de pauta digital',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo:
              'Organización, jerarquización y clasificación de información',
            hash: 't_5_5',
          },
          {
            numero: '5.6',
            titulo: 'Validación y uso responsable de datos',
            hash: 't_5_6',
          },
          {
            numero: '5.7',
            titulo: 'Introducción al uso de datos en estrategias digitales',
            hash: 't_5_7',
          },
          {
            numero: '5.8',
            titulo: 'Fundamentos de análisis de información digital',
            hash: 't_5_8',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Alcance digital',
      significado:
        'es el equivalente moderno a estar en la cima de la colina más alta con un megáfono, solo que la colina es internet y el megáfono es tu estrategia digital. Es un método que permite a las pequeñas empresas trascender sus límites físicos y llegar a una audiencia global sin necesidad de presupuestos exorbitantes.',
    },
    {
      termino: 'Audiencias en marketing',
      significado:
        'se refieren al conjunto específico de personas o grupos a quienes una marca dirige sus mensajes. Esta definición va más allá de un público general; implica conocer características demográficas, intereses, comportamientos y necesidades particulares.',
    },
    {
      termino: 'Bases de datos',
      significado:
        'es una herramienta que almacena información perteneciente a un mismo contexto, organizada y sistematizada lógicamente para su posterior recuperación, análisis o transmisión. Una biblioteca, un listado completo de clientes o el historial de las páginas visitadas en un navegador web son algunos ejemplos de bases de datos.',
    },
    {
      termino: 'Calendario editorial',
      significado:
        'es la herramienta que te permite establecer las estrategias de contenido para tu blog, ya que reúne el flujo de trabajo en cuanto a tipos de contenido, autores y fechas de publicación.',
    },
    {
      termino: 'Feed digital',
      significado:
        'se refiere a la corriente de contenido que se presenta a un usuario cuando navega por la plataforma. Es una secuencia de publicaciones, actualizaciones y actividades de otros usuarios, páginas o cuentas que están conectadas o seguidas por el usuario.',
    },
  ],
  referencias: [
    {
      referencia:
        'Camacho, K. (2026, 24 de marzo). Qué son las audiencias en marketing + ejemplos reales. DesignPlus.',
      link: 'https://designplus.co/blog/marketing-digital/que-son-audiencias-marketing/',
    },
    {
      referencia:
        'Gatward, D. (2024, 27 de marzo). ¿Qué es el alcance digital y cómo puedes implementarlo? Counting Stars.',
      link: 'https://www.counting-stars.co.uk/what-is-digital-outreach-how-can-you-implement-it/',
    },
    {
      referencia:
        'Londoño, P. (2025, 11 de septiembre). Qué es un calendario editorial y cómo crearlo (+ plantilla). HubSpot.',
      link: 'https://blog.hubspot.es/website/calendario-editorial-para-tu-blog',
    },
    {
      referencia:
        'MSMK. (2024, 9 de septiembre). ¿Qué es el feed en RRSS? MSMK University.',
      link: 'https://msmk.university/que-es-el-feed-en-rrss-msmk-university/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06 - Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Joinner Enrique Osorio Martínez',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cielo Damaris Angulo Rodríguez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Ricardo Oliveros Zambrano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
