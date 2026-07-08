<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      p.mb-5 La transformación digital ha modificado la forma en que las organizaciones se comunican y establecen relaciones con sus públicos. El crecimiento de internet, el uso masivo de redes sociales y los cambios en los hábitos de consumo han convertido los entornos digitales en espacios estratégicos para la interacción empresarial. En este contexto, la gestión de comunidades virtuales se posiciona como una herramienta fundamental para fortalecer la presencia digital, mejorar la comunicación con las audiencias y generar relaciones más cercanas y participativas.
      .row.justify-content-center.align-items-center
        .col-xl.mb-4.mb-lg-0
          .caja-1(data-aos="fade-right")
            p.mb-0 La administración de comunidades virtuales trasciende la simple publicación de contenidos en redes sociales, ya que implica una gestión estratégica basada en conocimientos de #[i marketing] digital, comportamiento del consumidor, comunicación escrita y atención al usuario. Asimismo, requiere analizar las características de las audiencias para diseñar estrategias comunicativas pertinentes, seleccionar adecuadamente los canales digitales y ofrecer experiencias que respondan a las necesidades e intereses de los usuarios.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/intro/img1.jpg', alt='').m-auto
        .col-xl
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/intro/img2.svg', alt='' style="width: 70px")
          p.mb-0 Este componente formativo proporciona fundamentos conceptuales y prácticos para desarrollar competencias relacionadas con la planificación de contenidos, la interacción con usuarios, la organización de información y la optimización de la presencia digital. Además, incorpora aspectos como la curación de contenidos, la automatización de respuestas, el posicionamiento digital y el análisis de datos, contribuyendo a que las organizaciones fortalezcan sus procesos comunicativos y respondan de manera eficiente a los desafíos del entorno empresarial contemporáneo.
      
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
