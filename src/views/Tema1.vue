<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Titulo de primer nivel
    
    .d-flex.flex-wrap.align-items-start.mb-5.position-relative
      img.col-lg-4.col-xl-5.mx-auto.mb-4(src="@/assets/curso/temas/tema1/img-1.png" style="max-width: 505px;" data-aos="fade-right")
      .col-lg-8.col-xl-7.ps-lg-4
        p Se denominan costos en la gestión logística y/o costos operativos, aquellos que se incurren en la operación de los macroprocesos, procesos, subprocesos, actividades y tareas que se realizan a lo largo de toda la cadena de suministro (logística entrada-interna-salida) y que hacen parte importante del costo final del producto y/o servicio. 
        .bloque-texto-d.color-primario.p-4(style="border-top: 1px solid #12263F")
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left(style="color: #91B3FA")
            p.mb-0 Para las empresas, los costos logísticos tienen un rango desde el 4% hasta un 30% de las ventas. Los resultados de un reciente estudio mostrados en tabla 3, aunque los costos de la distribución física están cerca del 8% de las ventas, esta investigación no incluye costos de abastecimiento físico.
            i.w-100.fas.fa-quote-right(style="color: #91B3FA")
          .bloque-texto-d__autor 
            .h5.mb-0 - Mora (2012)

    .cajon.color-secundario.p-4.mb-4(data-aos="fade-left" style="background-color: #E0F4FE")
      p.mb-0 Los costos constituyen un rubro importante dentro del desarrollo de la cadena de abastecimiento y el impacto sobre los costos finales y utilidad de organización son importantes, para replantear objetivos hacia el cumplimiento de la misión y visión, a continuación, los costos relacionados con los procesos:

    .d-flex.flex-wrap.justify-content-center.mb-5
      .col-xxl.col-xl-2.col-lg-3.tarjeta-edit-1
        span.number-tj 01
        img.mx-auto.mb-4(src="@/assets/curso/temas/tema1/tj-1.svg" style="max-width: 152px")
        h5.mb-0.text-center Transporte
      
      .col-xxl.col-xl-2.col-lg-3.tarjeta-edit-1
        span.number-tj 02
        img.mx-auto.mb-4(src="@/assets/curso/temas/tema1/tj-2.svg" style="max-width: 152px")
        h5.mb-0.text-center Almacenamiento
      
      .col-xxl.col-xl-2.col-lg-3.tarjeta-edit-1
        span.number-tj 03
        img.mx-auto.mb-4(src="@/assets/curso/temas/tema1/tj-3.svg" style="max-width: 152px")
        h5.mb-0.text-center Inventarios
      
      .col-xxl.col-xl-2.col-lg-3.tarjeta-edit-1
        span.number-tj 04
        img.mx-auto.mb-4(src="@/assets/curso/temas/tema1/tj-4.svg" style="max-width: 152px")
        h5.mb-0.text-center Administración
      
      .col-xxl.col-xl-2.col-lg-3.tarjeta-edit-1
        span.number-tj 05
        img.mx-auto.mb-4(src="@/assets/curso/temas/tema1/tj-5.svg" style="max-width: 152px")
        h5.mb-0.text-center Procesamiento de <br>ordenes-pedidos
      
      .col-xxl.col-xl-2.col-lg-3.tarjeta-edit-1
        span.number-tj 06
        img.mx-auto.mb-4(src="@/assets/curso/temas/tema1/tj-6.svg" style="max-width: 152px")
        h5.mb-0.text-center Costos laborales
    
    Separador 

    .titulo-segundo.color-acento-botones
      h2#t_1_1 1.1 Introducción a la administración de los costos
    
    .container-100.py-5(
      style="background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(233,255,254,1) 50%, rgba(255,255,255,1) 100%);"
    )
      figure.col-xl-10.mx-auto(data-aos="fade-left")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    Separador 

    .titulo-segundo.color-acento-botones
      h2#t_1_2 1.2 Clasificación de los costos
    
    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-2.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 La empresa cuenta con una gran variedad de generadores de costos en los que incurre en su operación diaria de producción, comercialización o prestación de servicios; a su vez deben ser clasificados, con el objetivo de ser asignado a un centro o grupo de costo, y deberá asumirlo en su presupuesto, contablemente (Sáez M., R., 2007).

    p.mb-5 Un concepto claro sobre el costo según Sánchez (2014), es “COSTO: se define como el valor sacrificado de unidades monetarias para adquirir bienes o servicios con el fin de obtener beneficios presentes o futuros”.

    h4 Los costos se clasifican en: 

    .d-flex.flex-wrap.align-items-start.mb-5.position-relative
      img.col-lg-4.col-xl-4.mx-auto.mb-4(src="@/assets/curso/temas/tema1/img-3.svg" style="max-width: 388px;" data-aos="fade-right")
      .col-lg-8.col-xl-8.ps-lg-4
        LineaTiempoD.color-secundario(data-aos="fade-right")
          div(numero="1" titulo="De acuerdo con la función")
            p <b>Costos de Producción:</b> conciernen a aquellos costos generados en el proceso de transformación de la materia prima en productos terminados. Estos están divididos en:
            ul.lista-ul--separador
              li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed")
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                p.mb-0 <b>Costos de materia prima:</b> es el costo de materiales involucrados al producto.
              li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed")
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                p.mb-0 <b>Costos de mano de obra:</b> es el costo involucrado directamente en la transformación del producto.
              li.d-flex.align-items-start.pb-2.mb-2
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                p.mb-0 <b>Gastos indirectos de fabricación:</b> son los costos generados en la transformación de los productos, sin contar con la materia prima y la mano de obra directa.
            p.mb-0 <b>Costos de administración:</b> son aquellos originados en el departamento administrativo, como salarios, servicios públicos, arriendos, etc. Los costos administrativos reúnen los costos de acuerdo con su función, con el fin de producir un análisis más detallado. 
          div(numero="2" titulo="De acuerdo con su comportamiento ")
            ul.lista-ul--separador
              li.pb-2.mb-2(style="border-bottom-style: dashed")
                i.fas.fa-angle-right(style="color: #57DBD8; font-size: 20px")
                | <b>Costos fijos:</b> son aquellos generados a partir de la actividad productiva o comercial que realice la empresa, aún si no hay actividades en la compañía los costos se generan: Arriendos, seguros, servicios públicos, vehículos entre otros.
              li.pb-2.mb-2(style="border-bottom-style: dashed")
                i.fas.fa-angle-right(style="color: #57DBD8; font-size: 20px")
                | <b>Costos Variables:</b> se generan y tiene variación a partir de la cantidad de producción que se genere en la empresa: materia prima, transporte, impuestos, comisiones sobre ventas.
              li.pb-2.mb-2
                i.fas.fa-angle-right(style="color: #57DBD8; font-size: 20px")
                | <b>Costos semi-variables:</b> son aquellos que tienen un componente fijo, pero a su vez varía de acuerdo con modificaciones bruscas, tanto en el proceso de producción como en la venta.
          div(numero="3" titulo="De acuerdo con su identificación con una actividad, departamento o producto")
            ul.lista-ul--separador
              li.pb-2.mb-2(style="border-bottom-style: dashed")
                i.fas.fa-angle-right(style="color: #57DBD8; font-size: 20px")
                | <b>Costos directos:</b> son aquellos que intervienen directamente en la creación de un bien o servicio; materia prima, mano de obra, etc.
              li.pb-2.mb-2
                i.fas.fa-angle-right(style="color: #57DBD8; font-size: 20px")
                | <b>Costos Indirectos:</b> estos costos apoyan a la fabricación de la mercancía o prestación del servicio; servicios públicos.
          div(numero="4" titulo="De acuerdo con el tiempo en el que fueron calculados")
            ul.lista-ul--separador
              li.pb-2.mb-2(style="border-bottom-style: dashed")
                i.fas.fa-angle-right(style="color: #57DBD8; font-size: 20px")
                | <b>Costos históricos:</b> son aquellos producidos en un momento específico, como los costos de los productos vendidos o de los que están proceso. Permiten pronosticar el comportamiento de los costos predeterminados.
              li.pb-2.mb-2
                i.fas.fa-angle-right(style="color: #57DBD8; font-size: 20px")
                | <b>Costos predeterminados:</b> son todos aquellos costos estimados con datos estadísticos y son usado en el desarrollo de los presupuestos.

    .tarjeta-avatar-b.col-xl-11.me-xl-auto
      .tarjeta-avatar-b__img
        img.mx-auto(src='@/assets/curso/temas/img-2.svg' style="max-width: 104px")
      .tarjeta.tarjeta--azul.ps-lg-5(style="background-color: #F6F6F6")
        .p-4.py-md-3.d-flex.flex-wrap.align-items-center
          p.mb-0.order-2.order-md-1.col-md.pe-md-4(data-aos="fade-right") La anterior clasificación son las más utilizadas por las empresas y entes reguladores, sin embargo pueden existir otras dependiendo de la orientación o ámbito en el que se desarrollan.
          img.mx-auto.mb-4.mb-md-auto.order-1.order-md-2.mx-lg-5(src="@/assets/curso/temas/tema1/img-4.svg" style="max-width: 135px;" data-aos="fade-left")

    Separador 

    .titulo-segundo.color-acento-botones
      h2#t_1_3 1.3 Distribución de costos en los procesos logísticos
    
    .d-flex.flex-wrap.align-items-start.mb-5.position-relative.mb-5
      img.col-lg-4.mx-auto.mb-4(src="@/assets/curso/temas/tema1/img-5.png" style="max-width: 400px;" data-aos="fade-right")
      .col-lg-8.ps-lg-4
        .bloque-texto-d.color-primario.px-4.mb-3(style="border-top: none")
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left(style="color: #91B3FA")
            p.mb-0 Los costos hacen un recorrido a lo largo de la cadena de suministros “El flujo y el almacenamiento del producto determinan el costo transversal de la cadena de suministro”.
            i.w-100.fas.fa-quote-right(style="color: #91B3FA")
          .bloque-texto-d__autor 
            .h5.mb-0 - Costro (2016)
        .cajon.color-primario.p-4.mb-3(data-aos="fade-left" style="background-color: #E0F4FE")
          p.mb-0 Los costos logísticos se encuentran distribuidos al largo de toda la cadena de abastecimiento y abarcan cada uno de los procesos, subprocesos, actividades y tareas relacionadas con los procesos, logísticas que a su vez agregan valor al producto o servicio. 
        p.mb-0 Se puede ver esta distribución de costos en los diferentes procesos:

    .slyderB_bg_01.px-5.py-3.mb-5
      SlyderA(tipo="b")
        .d-flex.flex-wrap.justify-content-center.align-items-center
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative.pe-lg-4
            .number(data-number="01")
              h4.ps-4 Costos en los procesos logísticos.
              p.ps-4 La logística de entrada empieza con el proceso de aprovisionamiento, comprende una serie de actividades interrelacionadas que requieren insumos, recursos de personal para la adquisición de: materia prima, insumos, productos terminados, maquinaria, además. 
                br
                |Incluyen estas actividades:
              ul.lista-ul--separador.ps-4.ps-lg-5
                li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed")
                  img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                  p.mb-0 Selección proveedores.
                li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed")
                  img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                  p.mb-0 Compra de insumos y materias primas.
                li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed")
                  img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                  p.mb-0 Certificación de calidad de las materias primas.
                li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed")
                  img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                  p.mb-0 Negociación de precios, términos de negociación.
                li.d-flex.align-items-start.pb-2.mb-2
                  img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                  p.mb-0 <em>Stock</em> mínimos y máximos de inventarios de materia primas
          .col-6.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema1/img-6.svg')
        .d-flex.flex-wrap.justify-content-center.align-items-center
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative.pe-lg-4
            .number(data-number="02")
              h4.ps-4 Costos en los procesos logísticos.
              p.ps-4 La logística de entrada empieza con el proceso de aprovisionamiento, comprende una serie de actividades interrelacionadas que requieren insumos, recursos de personal para la adquisición de: materia prima, insumos, productos terminados, maquinaria, además. 
                br
                |Incluyen estas actividades:
              ul.lista-ul--separador.ps-4.ps-lg-5
                li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed")
                  img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                  p.mb-0 Selección proveedores.
                li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed")
                  img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                  p.mb-0 Compra de insumos y materias primas.
                li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed")
                  img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                  p.mb-0 Certificación de calidad de las materias primas.
                li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed")
                  img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                  p.mb-0 Negociación de precios, términos de negociación.
                li.d-flex.align-items-start.pb-2.mb-2
                  img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                  p.mb-0 <em>Stock</em> mínimos y máximos de inventarios de materia primas
          .col-6.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema1/img-7.svg')
        .d-flex.flex-wrap.justify-content-center.align-items-center
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative.pe-lg-4
            .number(data-number="03")
              h4.ps-4 Costos en los procesos logísticos.
              p.ps-4 La logística de entrada empieza con el proceso de aprovisionamiento, comprende una serie de actividades interrelacionadas que requieren insumos, recursos de personal para la adquisición de: materia prima, insumos, productos terminados, maquinaria, además. 
                br
                |Incluyen estas actividades:
              ul.lista-ul--separador.ps-4.ps-lg-5
                li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed")
                  img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                  p.mb-0 Selección proveedores.
                li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed")
                  img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                  p.mb-0 Compra de insumos y materias primas.
                li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed")
                  img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                  p.mb-0 Certificación de calidad de las materias primas.
                li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed")
                  img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                  p.mb-0 Negociación de precios, términos de negociación.
                li.d-flex.align-items-start.pb-2.mb-2
                  img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                  p.mb-0 <em>Stock</em> mínimos y máximos de inventarios de materia primas
          .col-6.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema1/img-8.svg')
        .d-flex.flex-wrap.justify-content-center.align-items-center
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative.pe-lg-4
            .number(data-number="04")
              h4.ps-4 Costos en los procesos logísticos.
              p.ps-4 La logística de entrada empieza con el proceso de aprovisionamiento, comprende una serie de actividades interrelacionadas que requieren insumos, recursos de personal para la adquisición de: materia prima, insumos, productos terminados, maquinaria, además. 
                br
                |Incluyen estas actividades:
              ul.lista-ul--separador.ps-4.ps-lg-5
                li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed")
                  img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                  p.mb-0 Selección proveedores.
                li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed")
                  img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                  p.mb-0 Compra de insumos y materias primas.
                li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed")
                  img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                  p.mb-0 Certificación de calidad de las materias primas.
                li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed")
                  img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                  p.mb-0 Negociación de precios, términos de negociación.
                li.d-flex.align-items-start.pb-2.mb-2
                  img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                  p.mb-0 <em>Stock</em> mínimos y máximos de inventarios de materia primas
          .col-6.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema1/img-9.svg')




    //- .d-flex.flex-wrap.align-items-start.mb-5.position-relative
    //-   img.order-1.order-lg-2.col-lg-4.col-xl-4.mx-auto.mb-4(src="@/assets/curso/temas/tema1/img-3.svg" style="max-width: 388px;" data-aos="fade-right")
    //-   .order-2.order-lg-1.col-lg-8.col-xl-8.pe-lg-4
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
