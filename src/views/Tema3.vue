<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Los presupuestos 
    
    .d-flex.flex-wrap.align-items-start.mb-5.position-relative
      img.col-lg-4.col-xl-5.mx-auto.mb-4(src="@/assets/curso/temas/tema3/img-1.png" style="max-width: 505px;" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-8.col-xl-7.ps-lg-4
        p(data-aos="fade-left") Son considerados la mayor planificación anticipada de ingresos y egresos de una organización empresarial y se realiza con el objetivo cumplir con las metas establecidas, los responsables y monitoreo constante de las diferentes áreas comprometidas, pero especialmente en estar comprometidos con la alta dirección estratégica de la organización.
        .cajon.color-primario.p-4.mb-4(data-aos="fade-left" style="background-color: #E0F4FE")
          p.mb-0 El presupuesto tiene unas fases que se deben abordar en las empresas, para finalmente lograr su respectiva aprobación: elaboración, aprobación, ejecución, control y evaluación; esta última fase con la responsabilidad de evaluar los resultados obtenidos.
    
    .tarjeta-avatar-b.col-xl-11.me-xl-auto.mb-5
      .tarjeta-avatar-b__img(data-aos="fade-right")
        img.mx-auto(src='@/assets/curso/temas/img-2.svg' style="max-width: 104px" alt="Imagen decorativa")
      .tarjeta.tarjeta--azul.ps-lg-5(style="background-color: #F6F6F6")
        .p-4.py-md-3.d-flex.flex-wrap.align-items-center
          p.mb-0.order-2.order-md-1.col-md.pe-md-4(data-aos="fade-right") <b>Importante:</b> tener una hoja de ruta planeada y organizada, con responsables de cada rubro para hacer seguimiento y control, para que este se ejecute según lo planeado en ingresos y egresos.
          img.mx-auto.mb-4.mb-md-auto.order-1.order-md-2.mx-lg-5(src="@/assets/curso/temas/tema3/img-2.svg" style="max-width: 135px;" data-aos="fade-left" alt="Imagen decorativa")

    .d-flex.flex-wrap.align-items-start.mb-5.position-relative
      .col-lg-8.pe-lg-4.order-2.order-lg-1
        p(data-aos="fade-right") Las empresas proyectan la duración de los presupuestos, de acuerdo a la necesidad que tengan de control, seguimiento y ejecución; las fechas de corte se pueden realizar de la siguiente manera:
        .d-flex.flex-wrap.justify-content-center.mb-3
          .d-flex.mb-4.mx-2(data-aos="flip-up")
            span.number-edit 01
            p.text-edit-t3.px-4 Trimestrales
          .d-flex.mb-4.mx-2(data-aos="flip-up")
            span.number-edit 02
            p.text-edit-t3.px-4 Semestrales
          .d-flex.mb-4.mx-2(data-aos="flip-up")
            span.number-edit 03
            p.text-edit-t3.px-4 Anuales
        .bloque-texto-d.color-primario.p-4(style="border-top: 1px solid #12263F" data-aos="fade-right")
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left(style="color: #91B3FA")
            p.mb-0 El presupuesto hace referencia al dinero requerido en el desarrollo de un proyecto, es una cantidad prevista para cumplir con el objetivo propuesto. 
            i.w-100.fas.fa-quote-right(style="color: #91B3FA")
          .bloque-texto-d__autor 
            .h5.mb-0 - Economipedia (2020)
      img.col-lg-4.mx-auto.order-1.order-lg-2.mb-4(src="@/assets/curso/temas/tema3/img-3.png" style="max-width: 400px;" data-aos="fade-left" alt="Imagen decorativa")
    p.mb-4(data-aos="fade-right") Los presupuestos y la planeación se hacen cada vez más estrictos. En los nuevos mercados, se debe tener muy claro el presupuesto de ingresos (ventas) antes de realizar los otros presupuestos.

    Separador 

    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_3_1 3.1 Presupuesto maestro
    
    .bloque-texto-g.bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img-4.jpg')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Se considera la mayor consolidación de la apuesta financiera de la empresa, hacia un futuro económico incierto y que es trazado en términos financieros, sobre los posibles ingresos y egresos que tendría la entidad en un período de tiempo determinado, frecuentemente de un año.
    
    .bloque-texto-d.color-primario.col-xl-10.mx-auto.p-4.mb-5(style="border-top: 1px solid #12263F")
      .bloque-texto-d__texto.mb-2(data-aos="fade-right")
        i.fas.fa-quote-left(style="color: #91B3FA")
        p.mb-0 El presupuesto maestro enmarca todos los presupuestos de la organización, con sus respectivos objetivos presupuestos de operación y financiero. A través del presupuesto se traza el rumbo de una empresa al describir los planes del negocio en términos financieros.
        i.w-100.fas.fa-quote-right(style="color: #91B3FA")
      .bloque-texto-d__autor(data-aos="fade-left")
        .h5.mb-0 - Salcido (2015)
    p.mb-5(data-aos="fade-right") De acuerdo con la siguiente figura 10, una estructura del presupuesto maestro y el orden respectivo en que se realiza cada uno.

    .mx-auto.col-lg-10.mb-5
      .titulo-sexto.color-acento-botones(data-aos="fade-right")
        h5 Figura 10.
        span Estructura del presupuesto maestro
      figure
        img.mx-auto.mb-4(src="@/assets/curso/temas/tema3/img-5.svg" style="max-width: 798px;" data-aos="fade-left" alt="Figura 10. describe la estructura de un presupuesto maestro que viene de manera descendente en orden así:  Presupuesto de operación presupuesto de ventas Presupuesto de producción En la misma línea viene: presupuesto de materia prima, mano de obra y de gastos indirectos de fabricación. Continúa hacia abajo así: Costos de producción Gastos de ventas y administrativos presupuesto financiero y finalmente sobre la misma línea: Estado de resultados Estado de flujo de efectivo balance general presupuestado.")
        figcaption(style="font-weight: normal") <b>Nota.</b> Presupuesto Maestro como guía y horizonte. Adaptada de Escobar S. (2019).
    
    img.mb-4.mb-md-auto(src="@/assets/curso/temas/tema3/img-6.png" data-aos="fade-right" alt="Imagen decorativa")
    .tarjeta.tarjeta-edit-2.col-xl-10.mx-auto.mb-5(data-aos="fade-right")
      p.mb-0 Los principales recursos base para la elaboración del presupuesto maestro son: los presupuestos de ventas y presupuestos de producción, en los cuales están incluidos los procesos logísticos.
    
    .tarjeta.color-primario.p-3.col-lg-10.mx-auto.mb-4(style="background: linear-gradient(180deg, #2C6AEB 0%, rgba(26,15,145,1) 100%);" data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema3/img-7.svg" alt="Imagen decorativa")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.texto-blanco
              h3.mb-1 ¿Qué es un presupuesto? Conoce los tipos de presupuesto y ejemplos para su cálculo
              p.text-small Para una ampliación del tema sobre presupuestos, visitar la página Gestion.Org. 
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.gestion.org/que-es-un-presupuesto/" target="_blank" style="background-color: #E6B046")
                span Ver video
                i.fas.fa-link
      
    .tarjeta.color-primario.p-3.col-lg-10.mx-auto.mb-4(style="background: linear-gradient(180deg, #2C6AEB 0%, rgba(26,15,145,1) 100%);" data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema3/img-8.svg" alt="Imagen decorativa")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.texto-blanco
              h3.mb-1 Práctica, ejercicio de presupuesto maestro
              p.text-small Ver ejercicios prácticos de presupuesto maestro en el siguiente enlace, Solo Contabilidad. 
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.solocontabilidad.com/costos-ejercicios/practica-ejercicio-de-presupuesto-maestro-costos-presupuesto" target="_blank" style="background-color: #E6B046")
                span Ver video
                i.fas.fa-link

    Separador 

    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_3_2 3.2 Presupuestos en los procesos logísticos
    
    p.mb-5 Se realizan los presupuestos en todos los niveles: estratégico, táctico y operativo. Empiezan desde la alta dirección con las metas y objetivos organizacionales trazados y son importantes para la toma de decisiones en las empresas, negocio o idea de un proyecto. 

    .d-flex.flex-wrap.mb-4
      .col-lg-6.pe-lg-3.mb-4.d-flex
        .container-tarjeta-edit-2(style="background-color: #91B3FA")
          img(src="@/assets/curso/temas/tema3/img-9.jpg" alt="Imagen decorativa")
          img.img-decorativa(src="@/assets/curso/temas/decorador-4.svg" data-aos="zoom-in" alt="Imagen decorativa")
          .container-data(data-aos="fade-right")
            h5 Presupuesto de egresos
            p Los presupuestos de costos y gastos, están compuestos por otros presupuestos más pequeños por departamentos, que se van a integrar al presupuesto de producción, para realizar el gran presupuesto maestro de la organización.
      .col-lg-6.ps-lg-3.mb-4.d-flex
        .container-tarjeta-edit-2(style="background-color: #57DBD8")
          img(src="@/assets/curso/temas/tema3/img-10.jpg" alt="Imagen decorativa")
          img.img-decorativa(src="@/assets/curso/temas/decorador-4.svg" data-aos="zoom-in" alt="Imagen decorativa")
          .container-data
            h5 Presupuestos de la cadena de suministros
            p Los presupuestos de los procesos operativos de costos y gastos que hacen parte de la cadena de suministros, son:
            ul.lista-ul--separador
              li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed; border-color: black" data-aos="fade-right")
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-3.svg" style="max-width: 15px;")
                p.mb-0 Presupuesto costos compras y aprovisionamiento.
              li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed; border-color: black" data-aos="fade-right")
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-3.svg" style="max-width: 15px;")
                p.mb-0 Presupuesto costos almacenamiento.
              li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed; border-color: black" data-aos="fade-right")
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-3.svg" style="max-width: 15px;")
                p.mb-0 Presupuestos costo inventarios.
              li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed; border-color: black" data-aos="fade-right")
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-3.svg" style="max-width: 15px;")
                p.mb-0 Presupuesto costos transporte y distribución física.
              li.d-flex.align-items-start.pb-2.mb-2(data-aos="fade-right")
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-3.svg" style="max-width: 15px;")
                p.mb-0 Presupuesto costos servicio al cliente.

    p.mb-5(data-aos="fade-right") Los presupuestos son considerados una herramienta interna de planeación y proyección financiera a largo plazo.

</template>

<script>
export default {
  name: 'Tema3',
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

<style lang="sass">
.number-edit
  background-color: #57DBD8
  font-size: 21px
  min-height: 60px
  min-width: 60px
  display: flex
  justify-content: center
  align-items: center
  font-weight: bold
.text-edit-t3
  display: flex
  align-items: center
  font-weight: bold
  min-width: 140px
  margin-bottom: 0
  border-top-right-radius: 6px
  border-bottom-right-radius: 6px
  background: linear-gradient(0deg, rgba(222,222,222,1) 0%, rgba(255,255,255,1) 49%, rgba(222,222,222,1) 100%)
</style>
