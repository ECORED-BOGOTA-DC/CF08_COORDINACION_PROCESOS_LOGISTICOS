<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5(data-aos="fade-right") La administración de costos representa un aspecto muy importante para las organizaciones en el mundo de hoy, cualquier nivel administrativo de una organización depende estrechamente de la información que le proporciona la administración de costos, ya que genera acumulación de información para uso interno.

    .container-100.py-5(
      style="background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(233,255,254,1) 50%, rgba(255,255,255,1) 100%);"
    )
      figure.col-xl-10.mx-auto(data-aos="fade-left")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .tarjeta-avatar-b.col-xl-11.me-xl-auto
      .tarjeta-avatar-b__img(data-aos="fade-right")
        img.mx-auto(src='@/assets/curso/temas/img-2.svg' style="max-width: 104px" alt="Imagen decorativa")
      .tarjeta.tarjeta--azul.ps-lg-5(style="background-color: #F6F6F6" data-aos="fade-left")
        .p-4.py-md-3.d-flex.flex-wrap.align-items-center
          p.mb-0.order-2.order-md-1.col-md.pe-md-4(data-aos="fade-right") La administración de costos representa un aspecto muy importante para las organizaciones en el mundo de hoy. Cualquier nivel administrativo de una organización depende estrechamente de la información que le proporciona la administración de costos, ya que genera acumulación de información para uso interno y externo.
          img.mx-auto.mb-4.mb-md-auto.order-1.order-md-2.mx-lg-5(src="@/assets/curso/temas/img-1.svg" style="max-width: 169px;" data-aos="fade-left" alt="Imagen decorativa")
    
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
