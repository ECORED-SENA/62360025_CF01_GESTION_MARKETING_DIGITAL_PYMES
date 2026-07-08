<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Redes sociales para la gestión empresarial
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1(data-aos="fade-right")
            p.mb-0 Las redes sociales son plataformas digitales diseñadas para facilitar la interacción entre personas, comunidades y organizaciones mediante el intercambio de información, contenidos y experiencias. Inicialmente surgieron como espacios orientados a la comunicación interpersonal; sin embargo, con el paso del tiempo evolucionaron hasta convertirse en herramientas estratégicas utilizadas por empresas, instituciones y emprendimientos para fortalecer su presencia digital y establecer relaciones con diferentes públicos.
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img1.jpg', alt='').m-auto
        .col-xl
          figure.mb-2.d-none.d-xl-block(data-aos="fade-left")
            img(src='@/assets/curso/temas/intro/img2.svg', alt='' style="width: 70px")
          p.mb-0 Desde una perspectiva empresarial, las redes sociales representan canales de comunicación que permiten compartir información, promocionar productos o servicios, interactuar con clientes y construir reconocimiento de marca. Su valor no radica únicamente en la publicación de contenido, sino en la posibilidad de generar comunicación bidireccional, donde la organización puede escuchar, responder y adaptarse a las necesidades de su audiencia.
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Concepto, características y usos de las redes sociales
      .row.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p Las redes sociales constituyen herramientas estratégicas dentro de la gestión empresarial contemporánea. Su incorporación en las organizaciones ha trascendido la simple difusión de contenidos para convertirse en un medio que facilita la comunicación con diferentes públicos, fortalece la presencia digital y contribuye al logro de objetivos comerciales e institucionales.
          p.mb-0 Comprender sus características, reconocer los usos que pueden tener dentro de una organización y gestionar adecuadamente su funcionamiento permite aprovechar su potencial como canales de interacción, atención al cliente, posicionamiento y construcción de relaciones con las audiencias. En este sentido, el uso estratégico de las redes sociales requiere planificación, coherencia comunicativa y orientación hacia las necesidades del público objetivo.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img2.png', alt='').m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img35.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Características principales de las redes sociales
      p.mb-5 Las redes sociales poseen atributos que explican su importancia dentro de la comunicación empresarial actual:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Interactividad")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img3.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Interactividad
              p.mb-0 Permite la comunicación bidireccional mediante comentarios, mensajes directos, reacciones e intercambio de opiniones, convirtiendo al usuario en participante activo del proceso comunicativo.
        .py-3.py-md-4(titulo="Inmediatez")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img4.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Inmediatez
              p.mb-0 Facilita respuestas ágiles, comunicación en tiempo real y actualización constante de la información.
        .py-3.py-md-4(titulo="Accesibilidad")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img5.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Accesibilidad
              p.mb-0 Posibilita la interacción desde diferentes dispositivos con acceso a internet, como teléfonos móviles, computadores y tabletas.
        .py-3.py-md-4(titulo="Alcance ampliado")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img6.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Alcance ampliado
              p.mb-0 Permite desarrollar presencia local, regional, nacional o internacional, según la estrategia implementada.
        .py-3.py-md-4(titulo="Adaptabilidad")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img7.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Adaptabilidad
              p.mb-0 Favorece el uso de diversos formatos, como imágenes, textos, videos, historias, mensajes informativos o promociones, ajustados a cada objetivo comunicativo.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img35.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Usos empresariales de las redes sociales
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img8.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Las redes sociales pueden utilizarse estratégicamente para diferentes propósitos dentro de la gestión empresarial. Algunos de los usos más relevantes son:
          br
          ul.fa-ul.mb-0
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Comunicación institucional:] compartir información corporativa.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Atención al cliente:] resolver consultas y solicitudes.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Promoción comercial:] difundir productos y servicios.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Posicionamiento de marca:] fortalecer el reconocimiento empresarial.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Gestión de comunidad:] fomentar la interacción con los usuarios.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Difusión de novedades:] comunicar lanzamientos o actualizaciones.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img35.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Redes sociales como herramienta de gestión
      p.mb-5 Dentro del entorno empresarial, las redes sociales no deben manejarse de forma improvisada. Su gestión requiere planificación, coherencia comunicativa y claridad en los objetivos. Los principales aspectos que orientan una gestión adecuada son los siguientes:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Definir el propósito de uso
                  p.mb-0 Establecer objetivos claros para la presencia digital, orientando las acciones hacia metas específicas como aumentar la visibilidad, fortalecer la relación con los clientes, promocionar productos o mejorar la atención al usuario. Contar con un propósito definido facilita la planificación y evaluación de los resultados obtenidos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img9.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Identificar la audiencia
                  p.mb-0 Reconocer las características, necesidades, intereses y comportamientos del público objetivo para adaptar los mensajes y seleccionar estrategias de comunicación más efectivas. Comprender a la audiencia permite ofrecer contenidos pertinentes y generar mayor conexión con los usuarios.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img10.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Seleccionar plataformas adecuadas
                  p.mb-0 Elegir los canales más pertinentes según la estrategia definida y el perfil del público al que se desea llegar. La adecuada selección de plataformas optimiza los recursos disponibles y favorece una comunicación más eficiente y con mayores posibilidades de impacto.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img11.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Mantener consistencia en los mensajes
                  p.mb-0 Garantizar coherencia con la identidad, los valores y el tono institucional en todos los espacios digitales. Una comunicación uniforme fortalece el reconocimiento de marca, proyecta profesionalismo y genera confianza entre los usuarios.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img12.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Responder oportunamente
                  p.mb-0 Fortalecer la atención y la confianza de los usuarios mediante respuestas ágiles a consultas, comentarios o solicitudes. La rapidez y calidad en la interacción contribuyen a mejorar la experiencia del cliente y consolidar relaciones positivas con la organización.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img13.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Actualizar información relevante
                  p.mb-0 Mantener vigentes los contenidos y datos de interés para la audiencia, evitando información desactualizada o confusa. La actualización periódica favorece la credibilidad institucional, facilita la toma de decisiones de los usuarios y promueve.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img14.png', alt='' style="max-width: 500px").m-auto
      p.mb-0 Cuando estos elementos se gestionan adecuadamente, las redes sociales se convierten en herramientas efectivas para fortalecer la comunicación con los clientes y mejorar la presencia digital empresarial.
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Selección de redes sociales según el público objetivo
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p La presencia empresarial en redes sociales debe responder a una estrategia planificada y no a decisiones basadas únicamente en tendencias o popularidad de determinadas plataformas. No todas las redes sociales resultan adecuadas para todos los tipos de negocio, ya que cada una posee características, dinámicas de interacción y perfiles de usuarios diferentes. Por esta razón, seleccionar correctamente las redes sociales según el público objetivo constituye un paso fundamental dentro de la gestión empresarial digital.
          .caja-2(data-aos="zoom-in")
            .row.align-items-center
              .col-xl-auto
                figure
                  img(src='@/assets/curso/temas/t2/img15.jpg', alt='').m-auto
              .col-xl.caja-2_p
                p.mb-0 El público objetivo corresponde al grupo de personas al que una organización dirige sus productos, servicios o mensajes de comunicación. Estas personas comparten características relacionadas con intereses, necesidades, comportamientos o hábitos de consumo. Identificar este público permite orientar los esfuerzos comunicativos hacia usuarios con mayor probabilidad de interacción o interés comercial.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img16.png', alt='').m-auto
      p.mb-5 Seleccionar una red social adecuada implica comprender dónde se encuentra la audiencia y cómo se comporta dentro del entorno digital. Algunas plataformas favorecen contenidos visuales, otras priorizan la interacción inmediata y algunas están orientadas a contextos más profesionales o informativos. 
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img17.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Para realizar una selección adecuada, es recomendable considerar los siguientes criterios:
          br
          ul.fa-ul.mb-0
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Perfil demográfico:] edad, ubicación geográfica y ocupación de la audiencia.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Intereses:] temas y necesidades relevantes para el público objetivo.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Comportamiento digital:] tipo de interacción y frecuencia de uso de las plataformas.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Objetivo empresarial:] comunicación, promoción, atención al cliente o posicionamiento.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Tipo de contenido:] Formatos visuales, conversacionales, informativos o audiovisuales.
      .caja-3.mb-5(data-aos="zoom-in")
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-2_p
            p.mb-0 Por ejemplo, una empresa que comercializa productos visualmente atractivos puede obtener mejores resultados en plataformas centradas en contenido gráfico, mientras que una organización orientada a servicios profesionales podría beneficiarse de canales con un enfoque más corporativo o informativo.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t2/img18.png', alt='').m-auto
      p.mb-0 La correcta selección de plataformas permite optimizar recursos, mejorar la interacción con los usuarios y fortalecer la efectividad de las estrategias comunicativas empresariales.
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Configuración, ajustes y optimización de perfiles empresariales
      p Una vez seleccionadas las redes sociales más adecuadas para la organización, el siguiente paso consiste en configurar correctamente los perfiles empresariales. Un perfil empresarial representa la identidad digital de la empresa dentro de una plataforma y, en muchos casos, constituye el primer punto de contacto entre la organización y sus clientes potenciales. Por ello, su configuración debe transmitir profesionalismo, claridad y coherencia.
      p.mb-5 La configuración inicial de un perfil empresarial no debe limitarse a la creación de una cuenta. Es necesario estructurar adecuadamente la información para facilitar la comunicación, mejorar la experiencia del usuario y fortalecer la credibilidad institucional. Los elementos básicos que deben configurarse se presentan a continuación:
      .caja-7.mb-5
        .row.justify-content-center
          .col-xl-10
            .row.justify-content-center.align-items-center
              .col-xl-auto.mb-4.mb-lg-0
                .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                  h5 Figura 1.
                  span Ejemplo perfil institucional de una empresa
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/t2/img19.png', alt='Ejemplo  de una página empresarial en Facebook con los elementos básicos de identificación institucional: nombre de la empresa, imagen de perfil con logotipo, fotografía de portada asociada a la actividad comercial, descripción del negocio, información de contacto, ubicación geográfica, enlaces relevantes y horarios de atención. ').m-auto
              .col-xl
                ul.fa-ul.estilo___ul.mb-0
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Nombre empresarial:] facilitar la identificación de la organización. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Imagen de perfil institucional:] favorecer el reconocimiento de marca. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Fotografía de portada:] complementar la identidad visual cuando la plataforma lo permita. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Descripción del negocio:] informar de manera breve la actividad empresarial. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Información de contacto:] facilitar la comunicación con los usuarios. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Ubicación geográfica:] orientar a los clientes cuando resulte pertinente. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Enlaces relevantes:] dirigir a otros canales o recursos institucionales. 
                  li.mb-0
                    span.fa-li
                      i.fas.fa-check-circle
                    | #[b Horarios de atención:] informar la disponibilidad de respuesta.
      p.mb-5 Además de la configuración inicial, es necesario realizar ajustes orientados a optimizar la funcionalidad del perfil y mejorar la interacción con los usuarios.
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Activación de herramientas de contacto")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Figura 2.
                span Ejemplo activación de herramientas de contacto
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/t2/img20.png', alt='Ejemplo de una página empresarial en Facebook con herramientas de interacción habilitadas, incluyendo botones para enviar mensajes, indicar "Me gusta", seguir la página, compartir contenido y acceder a opciones de contacto como llamada telefónica, correo electrónico y ubicación. ').m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Activación de herramientas de contacto
              p.mb-0 Incorporar botones de contacto, mensajería directa, enlaces rápidos o formularios de consulta que faciliten la comunicación inmediata con los usuarios. Estas herramientas reducen barreras de interacción y favorecen una atención más accesible y eficiente.
        .py-3.py-md-4(titulo="Configuración de respuestas automáticas")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Figura 3.
                span Ejemplo configuración de respuestas automáticas
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/t2/img21.png', alt='Ejemplo de la configuración de respuestas automáticas en una plataforma de mensajería empresarial, con opciones para activar mensajes de bienvenida, definir horarios de funcionamiento y gestionar respuestas predefinidas desde dispositivos de escritorio y móviles. ').m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Configuración de respuestas automáticas
              p.mb-0 Confirmar la recepción de mensajes, orientar consultas frecuentes e informar horarios de atención mediante mensajes predefinidos. Esta estrategia mejora la experiencia del usuario, optimiza los tiempos de respuesta y transmite una imagen de organización y disponibilidad.
        .py-3.py-md-4(titulo="Coherencia visual e institucional")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Figura 4.
                span Ejemplo coherencia visual e institucional
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/t2/img22.png', alt='Ejemplo de una página empresarial que integra de manera consistente elementos de identidad visual, como logotipo, paleta de colores corporativos, tipografía institucional y recursos gráficos alineados con la imagen de marca. ').m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Coherencia visual e institucional
              p.mb-0 Mantener el uso consistente del logotipo, los colores corporativos, la tipografía y el estilo comunicativo en todos los canales digitales. La uniformidad fortalece la identidad de marca, incrementa el reconocimiento y proyecta profesionalismo y confianza.
        .py-3.py-md-4(titulo="Actualización periódica")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Figura 5.
                span Ejemplo actualización juridica 
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/temas/t2/img23.png', alt='Ejemplo de una publicación empresarial en Facebook que ejemplifica la actualización constante de contenidos y servicios, acompañada de elementos visuales y opciones de interacción para mantener informada a la audiencia sobre novedades, productos o cambios relevantes. ').m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Actualización periódica
              p.mb-0 Revisar y actualizar de manera constante datos de contacto, horarios de atención, servicios ofrecidos, enlaces e información descriptiva. Mantener contenidos vigentes evita confusiones, mejora la credibilidad institucional y garantiza que los usuarios accedan a información precisa y útil.
      p.mb-0 Una adecuada optimización mejora la experiencia del usuario y fortalece la presencia digital de la organización.
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Catálogos digitales, difusión y herramientas de interacción
      p.mb-5 Las redes sociales ofrecen múltiples recursos que fortalecen la comunicación empresarial y facilitan el relacionamiento con los clientes. Entre los más relevantes se encuentran los catálogos digitales, los mecanismos de difusión y las herramientas de interacción.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img35.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Catálogos digitales
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img24.jpg')})` }")
        .bloque-texto-g__texto.p-4
          p Los catálogos digitales permiten presentar productos o servicios de manera estructurada dentro de un entorno digital. Su propósito es facilitar el acceso a información comercial relevante y mejorar la experiencia del usuario durante los procesos de consulta.
          br
          ul.fa-ul.mb-0
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Identificación del producto o servicio:] nombre del producto o servicio ofrecido.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Descripción:] características o información relevante.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Recursos visuales:] imágenes asociadas a la oferta comercial.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Precio:] valor comercial, cuando corresponda.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Disponibilidad:] información sobre existencia o acceso.
            li.mb-0.ajuste---li.d-flex
              span.fa-li
                i.fas.fa-check-circle
              | 
              p.mb-0 #[b Datos de contacto:] canales para ampliar información o concretar solicitudes.
      p.mb-5 Entre sus principales beneficios se encuentran la organización de la oferta comercial, el acceso rápido a la información, la reducción de consultas repetitivas, el apoyo a la toma de decisiones y el fortalecimiento de la imagen profesional.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img35.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Difusión de contenidos
      p.mb-5 La difusión digital corresponde al conjunto de acciones orientadas a ampliar el alcance de los mensajes empresariales y aumentar su visibilidad frente a la audiencia.
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img25.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Publicaciones informativas
              p.mb-0.text-center Compartir contenidos de interés para la audiencia.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img26.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Contenidos promocionales
              p.mb-0.text-center Difundir productos, servicios o campañas.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img27.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Historias
              p.mb-0.text-center Comunicar mensajes breves y de actualización constante.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img28.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Enlaces compartidos
              p.mb-0.text-center Redirigir a otros recursos o plataformas institucionales.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img29.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Mensajes dirigidos
              p.mb-0.text-center Orientar información hacia segmentos específicos.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t2/img30.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Actualizaciones comerciales
              p.mb-0.text-center Informar novedades relevantes para los usuarios.
          p.mb-5 Una difusión efectiva requiere mensajes claros, coherencia con la audiencia y una frecuencia de comunicación acorde con los objetivos organizacionales.
          .titulo-tercer-nivel.mb-5(data-aos="fade-right")
            img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t1/img35.svg')
            h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Herramientas de interacción
          p.mb-5 Uno de los principales beneficios de las redes sociales es la posibilidad de establecer comunicación directa con los usuarios mediante diferentes herramientas de interacción.
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Comentarios
                  p.mb-0 Facilitar el intercambio público de opiniones, consultas y experiencias entre los usuarios y la organización. Esta herramienta permite conocer percepciones, resolver inquietudes visibles para la comunidad y promover la participación activa de la audiencia.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img31.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Mensajes directos
                  p.mb-0 Permitir una atención personalizada y confidencial mediante conversaciones individuales. Su uso favorece la resolución de casos específicos, fortalece la relación con los clientes y mejora la calidad del servicio ofrecido.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img32.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Formularios
                  p.mb-0 Recopilar solicitudes, sugerencias, cotizaciones o requerimientos específicos de manera organizada. La información obtenida facilita el seguimiento de las necesidades de los usuarios y contribuye a optimizar los procesos de atención y respuesta.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img33.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Respuestas rápidas
                  p.mb-0 Agilizar la atención de preguntas frecuentes mediante mensajes prediseñados que ofrecen información inmediata. Esta funcionalidad optimiza el tiempo de gestión, mejora la eficiencia operativa y garantiza respuestas consistentes.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img34.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Botones de contacto
                  p.mb-0 Facilitar el acceso directo a canales de comunicación como llamadas telefónicas, correos electrónicos o servicios de mensajería. Su implementación reduce los pasos necesarios para contactar a la organización y favorece una interacción más sencilla y efectiva.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img35.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Enlaces de mensajería inmediata
                  p.mb-0 Favorecer la interacción oportuna con los usuarios al dirigirlos rápidamente hacia aplicaciones de mensajería instantánea. Esto permite una comunicación ágil, incrementa la capacidad de respuesta y mejora la experiencia de atención al cliente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img36.png', alt='' style="max-width: 500px").m-auto
      p Cuando son gestionadas correctamente, estas herramientas fortalecen la atención al cliente, mejoran los tiempos de respuesta y contribuyen a una experiencia más satisfactoria para la audiencia.
      p.mb-0 En conjunto, los catálogos digitales, la difusión estratégica y las herramientas de interacción convierten las redes sociales en canales efectivos de comunicación, atención y relacionamiento comercial.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
