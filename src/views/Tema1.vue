<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Costos en la gestión logística
    
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
            ul.lista-ul--separador.mt-4
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
                | <b>Costos predeterminados:</b> son todos aquellos costos estimados con datos estadísticos y son usados en el desarrollo de los presupuestos.

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
            .h5.mb-0 - Castro (2016)
        .cajon.color-primario.p-4.mb-3(data-aos="fade-left" style="background-color: #E0F4FE")
          p.mb-0 Los costos logísticos se encuentran distribuidos al largo de toda la cadena de abastecimiento y abarcan cada uno de los procesos, subprocesos, actividades y tareas relacionadas con los procesos, logísticas que a su vez agregan valor al producto o servicio. 
        p.mb-0 Se puede ver esta distribución de costos en los diferentes procesos:

    .slyderB_bg_01.px-5.py-3.mb-5
      SlyderA(tipo="b")
        .d-flex.flex-wrap.justify-content-center.align-items-center
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative.pe-lg-4
            .number(data-number="01")
              h4.ps-4 Costos en los procesos logísticos
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
                  p.mb-0 <em>Stock</em> mínimos y máximos de inventarios de materia primas.
          .col-6.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema1/img-6.svg')
        .d-flex.flex-wrap.justify-content-center.align-items-center
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative.pe-lg-4
            .number(data-number="02")
              h4.ps-4 Costos en la gestión de Inventarios
              p.ps-4 La logística interna se ve reflejada en la gestión de inventarios que genera unas actividades y costos relacionados con su actividad. Para ello requiere recursos, insumos y personal para su importante actividad dentro de los procesos logísticos, que incluyen estas actividades; es importante hacer claridad que en el inventario se encuentra la mayor cantidad de recursos de la empresa, que debe ser administrado de manera correcta:
              .d-flex.flex-wrap
                ul.lista-ul--separador.ps-4.ps-lg-5.col-lg-6.px-2
                  li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed")
                    img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                    p.mb-0 Recibo de mercancías.
                  li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed")
                    img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                    p.mb-0 Administración de Inventarios.
                  li.d-flex.align-items-start.pb-2.mb-2
                    img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                    p.mb-0 Preparación de pedidos.
                ul.lista-ul--separador.ps-4.ps-lg-2.col-lg-6.px-2
                  li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed")
                    img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                    p.mb-0 Mantenimiento de inventarios.
                  li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed")
                    img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                    p.mb-0 Rotación de mercancías.
                  li.d-flex.align-items-start.pb-2.mb-2
                    img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                    p.mb-0 Evitar pérdidas y faltantes.
          .col-6.col-lg-4
            figure
              img(src='@/assets/curso/temas/tema1/img-7.svg')
        .d-flex.flex-wrap.justify-content-center.align-items-center
          .col-lg-8.mb-4.mb-lg-0.pt-5.pt-0.position-relative.pe-lg-4
            .number(data-number="03")
              h4.ps-4 Costos de Distribución
              p.ps-4 La logística de salida enmarca los procesos de transporte y distribución física de las mercancías y productos; es el último eslabón de la cadena hacia el consumidor final. Requiere recursos, insumos y personal para su importante actividad dentro de los procesos logísticos; representan un porcentaje alto, del total de los costos de la cadena de abastecimiento:
              ul.lista-ul--separador.ps-4.ps-lg-5
                li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed")
                  img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                  p.mb-0 Administración del transporte (aéreo-marítimo-fluvial-terrestre).
                li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed")
                  img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                  p.mb-0 Distribución física de mercancías.
                li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed")
                  img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                  p.mb-0 Programación de rutas y recorridos.
                li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed")
                  img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                  p.mb-0 Normatividad aplicada al transporte.
                li.d-flex.align-items-start.pb-2.mb-2
                  img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                  p.mb-0 Entre otras.
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
    
    Separador 

    .titulo-segundo.color-acento-botones
      h2#t_1_4 1.4 Logística inversa o reversa
    
    p.mb-5 Tiene como función el reciclaje y recuperación de los empaques, envases y residuos peligrosos, de la misma manera, del retorno de mercancías no conformes de acuerdo con los requerimientos pactados con el cliente. Es una forma de retorno de materiales que reutilizan, reciclan o destruyen, ver figura 1.

    .mx-auto.col-lg-10.col-xl-8.mb-5
      .titulo-sexto.color-acento-botones(data-aos="fade-right")
        h5 Figura 1.
        span Logística Inversa
      figure
        img.mx-auto.mb-4(src="@/assets/curso/temas/tema1/img-10.svg" style="max-width: 825px;" data-aos="fade-left")
        figcaption(style="font-weight: normal") <b>Nota.</b> Adaptado de Operación de logística inversa.

    .d-flex.flex-wrap.mb-5
      .col-lg-6.pe-lg-3.mb-4.d-flex
        .container-tarjeta-edit-2(style="background-color: #91B3FA")
          img(src="@/assets/curso/temas/tema1/img-11.jpg")
          img.img-decorativa(src="@/assets/curso/temas/decorador-4.svg" data-aos="zoom-in")
          .container-data
            h5 Ventajas
            ul.lista-ul--separador
              li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed; border-color: black")
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                p.mb-0 Reduce el impacto con el ambiente de los efectos asociados a la producción.
              li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed; border-color: black")
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                p.mb-0 Reducción de costos al poder reciclar materias desechas en el proceso productivo.
              li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed; border-color: black")
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                p.mb-0 Reducción en el consumo de recursos para minimizar la compra y abastecimiento de nuevas materias primas.
              li.d-flex.align-items-start.pb-2.mb-2
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                p.mb-0 Incrementa valor en la relación cliente-empresa.
      .col-lg-6.ps-lg-3.mb-4.d-flex
        .container-tarjeta-edit-2(style="background-color: #57DBD8")
          img(src="@/assets/curso/temas/tema1/img-12.jpg")
          img.img-decorativa(src="@/assets/curso/temas/decorador-4.svg" data-aos="zoom-in")
          .container-data
            h5 Desventajas
            ul.lista-ul--separador
              li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed; border-color: black")
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-3.svg" style="max-width: 15px;" data-aos="fade-right")
                p.mb-0 Incremento de actividades laborales debido a la complejidad en la administración de la cadena de suministro; con más personal y tiempo utilizado para el retorno de las mercancías al lugar de producción.
              li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed; border-color: black")
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-3.svg" style="max-width: 15px;" data-aos="fade-right")
                p.mb-0 Participación de todos los departamentos de la empresa.
              li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed; border-color: black")
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-3.svg" style="max-width: 15px;" data-aos="fade-right")
                p.mb-0 Seguimiento de los productos devueltos por personal especializado en inspección de materiales.
              li.d-flex.align-items-start.pb-2.mb-2
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-3.svg" style="max-width: 15px;" data-aos="fade-right")
                p.mb-0 Devolución parcial de la mercancía que no permite amortizar correctamente el costo de la logística inversa.

    .d-flex.flex-wrap.align-items-start.mb-5.position-relative
      img.col-lg-4.mx-auto.mb-4(src="@/assets/curso/temas/tema1/img-13.svg" style="max-width: 400px;" data-aos="fade-right")
      .col-lg-8.ps-lg-4
        p Dentro del ideal de la operación logística en las organizaciones no debería existir La logística inversa, se ha convertido en un cuello de botella y un costo que incremente y preocupa día a día a la cadena de suministros (especialmente en épocas de crisis y de emergencias). Las devoluciones como comúnmente se denominan, cuentan con un área específica y personal para su respectiva atención.
        p Este reproceso ha tenido un aumento creciente en estos tiempos del e-comerce por las dificultades que tiene el cliente para ver físicamente el producto, lo que ocasiona incertidumbre al momento de la compra, puesto que no está seguro de la compra, como lo haría tradicionalmente en un almacén de manera presencial. 
        .cajon.color-secundario.p-4.mb-4(data-aos="fade-left" style="background-color: #E0F4FE")
          p.mb-0 Es importante hacer claridad que logística inversa se le denomina también a la reutilización de los desechos generados en los procesos de devolución de mercancías y disminución del impacto ambiental. 

    .bloque-texto-d.color-primario.p-4.col-lg-10.mx-auto.mb-5(style="border-top: 1px solid #12263F")
      .bloque-texto-d__texto.mb-2
        i.fas.fa-quote-left(style="color: #91B3FA")
        p.mb-0 La Confianza entre el consumidor y el cliente se establece a través de cómo se administren las devoluciones. La retroalimentación con el cliente es un factor clave en el desarrollo de actividades de logística inversa, así las cosas, el cliente decidirá comprar nuevamente el producto.
        i.w-100.fas.fa-quote-right(style="color: #91B3FA")
      .bloque-texto-d__autor 
        .h5.mb-0 - Cure (2011)
    

    .tarjeta.color-primario.p-3.col-lg-10.mx-auto(style="background: linear-gradient(180deg, rgba(86,140,253,1) 0%, rgba(26,15,145,1) 100%);")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/decorador-5.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.texto-blanco
              h3.mb-1 Logística inversa, más que un costo en la SCM
              p.text-small Con la siguiente lectura complementaría se obtendrá un enfoque adicional de la importancia que tiene la logística inversa para la administración de la cadena de suministro o Supply Chain Management por su origen anglosajón.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://zonalogistica.com/logistica-inversa-mas-que-un-c-en-la-scm/" target="_blank" style="background-color: #E6B046")
                span Ir a página
                i.fas.fa-link

    Separador 

    .titulo-segundo.color-acento-botones
      h2#t_1_5 1.5 Costos ocultos
    
    p.mb-5 Los costos ocultos se generan por fallas de las empresas y la cadena de suministros no es ajena; los administradores de la operación logística son los que deben estar atentos a que esto no ocurra y corregir a tiempo. <b>Lo anterior, genera pérdidas económicas, incrementan los costos de la operación y tiene injerencia en la calidad en el servicio, ver figura 2.</b>

    .mx-auto.col-lg-10.col-xl-8.mb-5
      .titulo-sexto.color-acento-botones(data-aos="fade-right")
        h5 Figura 2.
        span Costos ocultos
      figure
        img.mx-auto.mb-4(src="@/assets/curso/temas/tema1/img-14.svg" style="max-width: 816px;" data-aos="fade-left")
        figcaption(style="font-weight: normal") <b>Nota.</b> Adaptado de Ejemplo de hilera de disfuncionamientos (2014).

    .d-flex.flex-wrap.align-items-center.p-3.mb-5(style="background: linear-gradient(90deg, rgba(244,244,244,1) 0%, rgba(255,255,255,1) 79%);")
      img.mb-4.mb-md-auto.mx-auto.mb-4(src="@/assets/curso/temas/tema1/img-15.svg" style="max-width: 136px;" data-aos="fade-right")
      p.col-md.ps-md-4.fw-bold.mb-0 Para Parra (2014) “Los costos ocultos están presentes en todos los departamentos de la organización, por lo cual, se debe corregir con todos los actores involucrados en los procesos productivos”. También son generados en la duplicidad de funciones, derroche y desperdicio de recursos, error en la identificación y clasificación de la mercancía.

    p.mb-5 En la siguiente gráfica se observa algunos de los aspectos que generan costos ocultos en las organizaciones, se debe realizar un trabajo de investigación para disminuir esos egresos innecesarios, ver figura 3.

    .mx-auto.col-lg-10.col-xl-8.mb-5
      .titulo-sexto.color-acento-botones(data-aos="fade-right")
        h5 Figura 3.
        span Método de costos ocultos
      figure
        img.mx-auto.mb-4(src="@/assets/curso/temas/tema1/img-16.svg" style="max-width: 821px;" data-aos="fade-left")
        figcaption(style="font-weight: normal") <b>Nota.</b> Adaptado de Campos de acción del método de los costos ocultos (2014).

    Separador 

    .titulo-segundo.color-acento-botones
      h2#t_1_6 1.6 Costos de calidad

    .bloque-texto-g.bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-17.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 Son los costos generados por la organización en su proceso de garantizar la calidad de los productos y servicios al cliente, prestado en las mejores condiciones posibles. Según Gillezeau, P., y Romero, S. (2004) <b>“La calidad se define como la perfección, la consistencia, eliminación del residuo, agilidad en la entrega, suministro de productos conformes, satisfacer al cliente”</b>. La integración de las características anteriores a los procesos logísticos mejora los índices de desempeño no solo en lo operativo, sino que también aumenta los indicadores de eficiencia del departamento financiero.

    .d-flex.justify-content-center
      h3.titulo-edit-1(data-aos="fade-right") Los costos pueden clasificarse en dos apartados:
    .col-xl-10.mx-auto
      img.d-none.d-lg-flex(src="@/assets/curso/temas/tema1/img-18.svg" data-aos="fade-left")
      .d-flex.flex-wrap
        .col-lg-6.pe-lg-3.d-flex.flex-wrap
          img.d-flex.d-lg-none(src="@/assets/curso/temas/tema1/img-19.svg" data-aos="fade-rigth")
          .tarjeta-edit-2(style="background-color: #6F88DA")
            h3.text-center Costos tangibles
            p.mb-0 Son los costos que se calculan de forma directa, objetiva y normalmente están asociados al manejo de dinero en efectivo. Estos costos abarcan la mano de obra o materia prima producida por un error en el proceso productivo.
        .col-lg-6.ps-lg-3.d-flex.flex-wrap
          img.d-flex.d-lg-none(src="@/assets/curso/temas/tema1/img-20.svg" data-aos="fade-left")
          .tarjeta-edit-2(style="background-color: #4ADBD1")
            h3.text-center Costos intangibles
            p.mb-0 Son los costos generados por errores en la cadena de valor de la organización, es decir, son los costos producidos por fallas en el proceso productivo, las cuales generan un bien o servicio no conforme con las expectativas del cliente. Estos costos tangibles son calculados con criterios subjetivos (escala cualificable) como la ausencia de motivación en el personal por las continuas quejas de los clientes.
    
    .cajon.color-secundario.p-4.mb-4(data-aos="fade-left" style="background-color: #E0F4FE")
      p.mb-0 Los costos de calidad son una herramienta para descubrir oportunidades que conduzcan a procesos de mejora continua. Se deben considerar como una inversión a largo plazo, constante 24/7, para garantizar las condiciones y que el cliente se sienta a gusto con la organización. Esto se logra por medio de programas asumidos por las directivas para lograr mayor competitividad.
    
    p.mb-5 En la siguiente figura 4 se observa cuales conceptos hacen parte de los costos de calidad. Gillezeau, P., & Romero, S. (2004):

    .mx-auto.col-lg-10.mb-5
      .titulo-sexto.color-acento-botones(data-aos="fade-right")
        h5 Figura 4.
        span Costos de calidad
      figure
        img.mx-auto.mb-4(src="@/assets/curso/temas/tema1/img-21.svg" style="max-width: 1038px;" data-aos="fade-left")
        figcaption(style="font-weight: normal") <b>Nota.</b> Adaptado de La estructura de costos de la calidad (2018).

    Separador 

    .titulo-segundo.color-acento-botones
      h2#t_1_7 1.7 Conceptos básicos de economía
    
    p.mb-5 La economía es la encargada del análisis de las diferentes variables y comportamiento de los mercados económicos en el mundo. La economía se describe a dos niveles: macroeconomía y microeconomía, y se encarga de estudiar, clasificar e interpretar los diferentes movimientos, además de los conceptos con respecto al movimiento de productos y servicios que se genera, así como el intercambio por dinero al satisfacer una necesidad especifica. 

    .d-flex.flex-wrap.align-items-center.p-3.mb-5(style="background: linear-gradient(90deg, rgba(244,244,244,1) 0%, rgba(255,255,255,1) 79%);")
      img.mb-4.mb-md-auto.mx-auto.mb-4(src="@/assets/curso/temas/tema1/img-22.svg" style="max-width: 136px;" data-aos="fade-right")
      p.col-md.ps-md-4.fw-bold.mb-0 Según Economipedia (2020) “La economía es una ciencia social que estudia la forma de administrar los recursos disponibles para satisfacer las necesidades humanas. Además, también estudia el comportamiento y las acciones de los seres humanos”. Estudia la ley de la oferta y la demanda, fija los precios del mercado de oferta y demanda del sector productivo de los países, ver figura 5. 

    .mx-auto.col-lg-10.col-xl-8.mb-5
      .titulo-sexto.color-acento-botones(data-aos="fade-right")
        h5 Figura 5.
        span Colores de la economía
      ImagenInfografica.color-secundario.mb-5.w-100.d-none.d-md-block
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema1/img-23.svg')
            figcaption(style="font-weight: normal") <b>Nota.</b> Adaptado de Los sectores de la economía (2019).

        .tarjeta.tarjeta-infografia.text-white.p-3(x="59%" y="10%" numero="+" style="background-color: #12263F")
          span.number-edit 01
          p Hace referencia al consumismo como el centro del crecimiento económico.
        .tarjeta.tarjeta-infografia.text-white.p-3(x="82%" y="21%" numero="+" style="background-color: #12263F")
          span.number-edit 02
          p Toma en cuenta el avance tecnológico sin dejar a un lado el cuidado del medio ambiente.
        .tarjeta.tarjeta-infografia.text-white.p-3(x="87%" y="53%" numero="+" style="background-color: #12263F")
          span.number-edit 03
          p Consiste en englobar todos los ingresos de las artes y todos aquellos productos y servicios de la actividad artística y cultural.
        .tarjeta.tarjeta-infografia.text-white.p-3(x="71.5%" y="74%" numero="+" style="background-color: #12263F")
          span.number-edit 04
          p Hace referencia a la economía ilegal, a las actividades que están prohibidas.
        .tarjeta.tarjeta-infografia.text-white.p-3(x="46%" y="74%" numero="+" style="background-color: #12263F")
          span.number-edit 05
          p Hace referencia a todas las actividades que son legales, pero están ocultas ante el Estado para evitar el pago de impuestos.
        .tarjeta.tarjeta-infografia.text-white.p-3(x="31%" y="53%" numero="+" style="background-color: #12263F")
          span.number-edit 06
          p Está enfocada en los productos de alta tecnología y de la ciencia.
        .tarjeta.tarjeta-infografia.text-white.p-3(x="36%" y="20%" numero="+" style="background-color: #12263F")
          span.number-edit 07
          p Busca cuidar el planeta aprovechando al máximo los recursos e infraestructuras que se poseen actualmente.
      p.d-block.d-md-none La economía es una ciencia social que además de poder ser analizada desde distintos sectores también se puede analizar a través de los colores, tomando en cuenta que los elementos comunes de cada sector, para así observar los productos que se obtienen en cada área o actividad realizada.

      ImagenInfografica.color-secundario.mb-5.w-100.d-block.d-md-none
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema1/img-23_1.svg')
            figcaption(style="font-weight: normal") <b>Nota.</b> Adaptado de Los sectores de la economía (2019).

        .tarjeta.tarjeta-infografia.text-white.p-3(x="50%" y="9%" numero="+" style="background-color: #12263F")
          span.number-edit 01
          p Hace referencia al consumismo como el centro del crecimiento económico.
        .tarjeta.tarjeta-infografia.text-white.p-3(x="78%" y="19%" numero="+" style="background-color: #12263F")
          span.number-edit 02
          p Toma en cuenta el avance tecnológico sin dejar a un lado el cuidado del medio ambiente.
        .tarjeta.tarjeta-infografia.text-white.p-3(x="83.5%" y="45%" numero="+" style="background-color: #12263F")
          span.number-edit 03
          p Consiste en englobar todos los ingresos de las artes y todos aquellos productos y servicios de la actividad artística y cultural.
        .tarjeta.tarjeta-infografia.text-white.p-3(x="65.5%" y="65%" numero="+" style="background-color: #12263F")
          span.number-edit 04
          p Hace referencia a la economía ilegal, a las actividades que están prohibidas.
        .tarjeta.tarjeta-infografia.text-white.p-3(x="33.5%" y="65%" numero="+" style="background-color: #12263F")
          span.number-edit 05
          p Hace referencia a todas las actividades que son legales, pero están ocultas ante el Estado para evitar el pago de impuestos.
        .tarjeta.tarjeta-infografia.text-white.p-3(x="16%" y="47%" numero="+" style="background-color: #12263F")
          span.number-edit 06
          p Está enfocada en los productos de alta tecnología y de la ciencia.
        .tarjeta.tarjeta-infografia.text-white.p-3(x="22%" y="19%" numero="+" style="background-color: #12263F")
          span.number-edit 07
          p Busca cuidar el planeta aprovechando al máximo los recursos e infraestructuras que se poseen actualmente.


    p.mb-5 La economía tiene dos ramas, centradas en el estudio de la economía y sus diferentes variables según Economipedia (2020), ver figura 6:

    .d-flex.flex-wrap.mb-5
      .col-lg-6.pe-lg-3.d-flex
        .tarjeta-avatar-b.col-xl-11.me-xl-auto
          .tarjeta-avatar-b__img
            img.mx-auto(src='@/assets/curso/temas/tema1/img-24.svg' style="max-width: 104px")
          .tarjeta.tarjeta--azul.ps-lg-5(style="background-color: #F6F6F6; box-shadow: 0 2px 4px 4px #00000010")
            .p-4.py-md-3.d-flex.flex-wrap.align-items-center
              p.w-100.fw-bold Microeconomía
              p.mb-0.order-2.order-md-1.col-md.pe-md-4(data-aos="fade-right") Es el estudio orientado a los hábitos económicos de hogares, empresas y personas y la relación con los mercados.
      .col-lg-6.ps-lg-3.d-flex
        .tarjeta-avatar-b.col-xl-11.me-xl-auto
          .tarjeta-avatar-b__img
            img.mx-auto(src='@/assets/curso/temas/tema1/img-25.svg' style="max-width: 104px")
          .tarjeta.tarjeta--azul.ps-lg-5(style="background-color: #F6F6F6; box-shadow: 0 2px 4px 4px #00000010")
            .p-4.py-md-3.d-flex.flex-wrap.align-items-center
              p.w-100.fw-bold Macroeconomía
              p.mb-0.order-2.order-md-1.col-md.pe-md-4(data-aos="fade-right") Analiza la dinámica mundial de la economía de manera holística, de tal manera explica el desarrollo de los diferentes factores económicos.

    .mx-auto.col-lg-10.col-xl-8
      .titulo-sexto.color-acento-botones(data-aos="fade-right")
        h5 Figura 6.
        span Diferencias entre micro y macroeconomía
      figure
        img.mx-auto.mb-4(src="@/assets/curso/temas/tema1/img-26.svg" style="max-width: 821px;" data-aos="fade-left")
        figcaption(style="font-weight: normal") <b>Nota.</b> Adaptado de Diferencias entre los dos conceptos de macroeconomía y microeconomía (s.f.).
      
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
