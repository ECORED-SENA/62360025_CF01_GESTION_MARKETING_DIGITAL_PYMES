<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Comunicación y gestión de comunidades virtuales',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> Identificar los conceptos clave relacionados con el marketing digital, la gestión de redes sociales, las audiencias digitales y la administración de comunidades virtuales en entornos empresariales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el propósito principal del marketing digital en las organizaciones?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Fortalecer la relación con los clientes mediante medios digitales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Sustituir completamente la atención presencial tradicional.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Incrementar exclusivamente las ventas a corto plazo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reducir toda inversión en comunicación empresarial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué característica distingue principalmente al marketing digital del tradicional?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La eliminación total de intermediarios comerciales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La ausencia de segmentación del mercado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La imposibilidad de medir resultados obtenidos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La comunicación bidireccional con los usuarios.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué beneficio ofrece el marketing digital a las pequeñas y medianas empresas?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar la competencia existente en el mercado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la necesidad de productos de calidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Desarrollar presencia digital con recursos ajustados.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Garantizar ventas inmediatas y permanentes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué comportamiento es frecuente en el consumidor digital actual?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Adquirir productos sin buscar información previa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Evitar el uso de plataformas digitales.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ignorar las opiniones de otros usuarios.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Comparar alternativas antes de decidir.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué influye positivamente en la percepción del servicio digital?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La rapidez en la atención al usuario.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La antigüedad de la empresa.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El tamaño de las instalaciones.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La ubicación de las oficinas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es una ventaja estratégica de las redes sociales para las pymes?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reducir el número de clientes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incrementar la visibilidad comercial.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evitar la interacción constante.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Eliminar actividades promocionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué criterio es fundamental al elegir una red social?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La cantidad de anuncios publicados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'El diseño visual disponible.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Las características del público objetivo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La moda tecnológica del momento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Cuál es un riesgo de gestionar mal las redes sociales?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar el reconocimiento empresarial.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Incrementar la participación positiva.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir costos administrativos.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Deteriorar la imagen organizacional.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué elemento facilita identificar un perfil empresarial?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El nombre visible de la organización.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Los comentarios recibidos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Las promociones activas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Los horarios comerciales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto: '¿Cuál es la función principal de un catálogo digital?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Incrementar consultas repetitivas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Presentar productos de forma organizada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar información comercial.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Restringir el acceso del usuario.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            '¿Qué herramienta recopila solicitudes de manera estructurada?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los mensajes automáticos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los botones de reacción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Los formularios digitales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Los enlaces promocionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: '¿Qué variable corresponde a la segmentación psicográfica?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La ciudad de residencia.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los intereses y estilos de vida.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La frecuencia de compra.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El nivel educativo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Qué técnica ayuda a analizar al consumidor digital?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ignorar las consultas frecuentes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir la presencia digital.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Observar las interacciones realizadas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Evitar el análisis de comentarios.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto: '¿Qué práctica fortalece la relación con los consumidores?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Responder solo mensajes favorables.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Atender oportunamente las consultas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evitar orientar al usuario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Usar expresiones ambiguas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto: '¿Qué aspecto mejora la comunicación escrita digital?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La construcción adecuada de oraciones.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El exceso de tecnicismos.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La ausencia de puntuación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El uso frecuente de abreviaturas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto: '¿Qué acción fortalece la credibilidad empresarial?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evitar revisar los mensajes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aplicar correctamente las tildes.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Reducir el contenido escrito.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Usar mayúsculas excesivas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Cuál es el propósito de la curación de contenidos?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Difundir toda información encontrada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Repetir contenidos sin revisar.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Seleccionar información útil y confiable.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar fuentes externas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto: '¿Qué técnica narrativa conecta con la audiencia?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Publicar datos estadísticos únicamente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Utilizar storytelling con propósito.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminar llamados a la acción.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Automatizar todas las publicaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué herramienta organiza las publicaciones empresariales?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El calendario editorial.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El historial de conversaciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El catálogo digital.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La base de datos comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto: '¿Qué indicador evidencia la participación de la audiencia?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El número de empleados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La antigüedad empresarial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El presupuesto publicitario.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La interacción mediante comentarios y reacciones.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
