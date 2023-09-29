<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Estados financieros
    
    .bloque-texto-g.bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img-1.jpg')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Se consideran la representación de la salud financiera de las organizaciones y personas naturales o jurídicas, en donde se refleja información que se debe presentar de manera oficial para declaración de renta y terceros interesados en la información como son: proveedores, clientes, accionistas y se denominan estados financieros oficiales, en Colombia son:
    
    .d-flex.flex-wrap.justify-content-center.mb-5
      .col-12.col-sm-5.col-lg-3.tarjeta-edit-1(data-aos="fade-right")
        span.number-tj(style="left: .5rem; right: auto;") 01
        img.mx-auto.mb-4(src="@/assets/curso/temas/tema4/img-2.svg" style="max-width: 93px" alt="Imagen decorativa")
        h5.mb-0.text-center(style="font-weight: normal") Balance general o Estado de cambio en la situación financiera.
      .col-12.col-sm-5.col-lg-3.tarjeta-edit-1(data-aos="flip-up")
        span.number-tj(style="left: .5rem; right: auto;") 02
        img.mx-auto.mb-4(src="@/assets/curso/temas/tema4/img-3.svg" style="max-width: 93px" alt="Imagen decorativa")
        h5.mb-0.text-center(style="font-weight: normal") Estado de resultados.
      .col-12.col-sm-5.col-lg-3.tarjeta-edit-1(data-aos="fade-left")
        span.number-tj(style="left: .5rem; right: auto;") 03
        img.mx-auto.mb-4(src="@/assets/curso/temas/tema4/img-4.svg" style="max-width: 93px" alt="Imagen decorativa")
        h5.mb-0.text-center(style="font-weight: normal") Estado de cambio en el patrimonio.

    .cajon.color-primario.p-4.mb-4(data-aos="fade-left" style="background-color: #E0F4FE")
      p.mb-0 El estado de costo producción y venta es un estado financiero interno no oficial,  que refleja los costos de producción de los productos vendidos.
    
    h4.mb-5.text-center(data-aos="fade-right") La información que se ve reflejada en los estados financieros es:

    .col-xl-10.mx-auto.d-flex.flex-wrap.justify-content-center.mb-5
      .col-xxl.col-xl-2.col-lg-3.tarjeta-edit-1(data-aos="fade-right")
        span.number-tj 01
        img.mx-auto.mb-4(src="@/assets/curso/temas/tema4/tj-1.svg" style="max-width: 152px" alt="Imagen decorativa")
        h5.mb-0.text-center Estado financiero actual de la entidad
      
      .col-xxl.col-xl-2.col-lg-3.tarjeta-edit-1(data-aos="fade-right")
        span.number-tj 02
        img.mx-auto.mb-4(src="@/assets/curso/temas/tema4/tj-2.svg" style="max-width: 152px" alt="Imagen decorativa")
        h5.mb-0.text-center Resultados de las operaciones en un periodo
      
      .col-xxl.col-xl-2.col-lg-3.tarjeta-edit-1(data-aos="flip-up")
        span.number-tj 03
        img.mx-auto.mb-4(src="@/assets/curso/temas/tema4/tj-3.svg" style="max-width: 152px" alt="Imagen decorativa")
        h5.mb-0.text-center Los cambios de la inversión
      
      .col-xxl.col-xl-2.col-lg-3.tarjeta-edit-1(data-aos="fade-left")
        span.number-tj 04
        img.mx-auto.mb-4(src="@/assets/curso/temas/tema4/tj-4.svg" style="max-width: 152px" alt="Imagen decorativa")
        h5.mb-0.text-center Los movimientos de dinero entre cuentas de la empresa
      
      .col-xxl.col-xl-2.col-lg-3.tarjeta-edit-1(data-aos="fade-left")
        span.number-tj 05
        img.mx-auto.mb-4(src="@/assets/curso/temas/tema4/tj-5.svg" style="max-width: 152px" alt="Imagen decorativa")
        h5.mb-0.text-center Cambios de la inversión de los propietarios
    
    .tarjeta-avatar-b.col-xl-10.me-xl-auto.mb-5
      .tarjeta-avatar-b__img(data-aos="fade-right")
        img.mx-auto(src='@/assets/curso/temas/img-2.svg' style="max-width: 104px" alt="Imagen decorativa")
      .tarjeta.tarjeta--azul.ps-lg-5(style="background-color: #F6F6F6")
        .p-4.py-md-3.d-flex.flex-wrap.align-items-center
          p.mb-0.order-2.order-md-1.col-md.pe-md-4(data-aos="fade-right") Los Estados financieros, cuentas anuales o informes financieros para Economipedia (2020) <b>“Son la radiografía de la contabilidad de una organización, donde se puede observar las condiciones financieras actuales de la empresa durante un período de tiempo específico”.</b>
          img.mx-auto.mb-4.mb-md-auto.order-1.order-md-2.mx-lg-5(src="@/assets/curso/temas/tema1/img-4.svg" style="max-width: 135px;" data-aos="fade-left" alt="Imagen decorativa")
    
    Separador 

    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_4_1 4.1 Estado de la situación financiera - balance general
    
    p(data-aos="fade-right") El estado de la situación financiera, también llamado balance general lo componen tres (3) grandes cuentas que están representadas así:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5(style="background-color: #C4F2F1" data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema4/img-5.svg' alt="Imagen decorativa")
          
        h4 Activos
        p Lo que posee la empresa y se componen de activos corrientes y activos fijos.

      .col-md.tarjeta.color-acento-botones.p-5(style="background-color: #D8E4FD" data-aos="flip-up")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema4/img-6.svg' alt="Imagen decorativa")
          
        h4 Pasivos
        p Son las deudas de la empresa a corto, mediano y largo plazo.

      .col-md.tarjeta.color-acento-contenido.p-5(style="background-color: #C4F2F1" data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema4/img-7.svg' alt="Imagen decorativa")
          
        h4 Patrimonio
        p Diferencia entre la resta de los activos - pasivos. 
    
    .cajon.color-primario.p-4.mb-4(data-aos="fade-left" style="background-color: #E0F4FE")
      p.mb-0 Dentro de sus objetivos está mostrar el estado actual de la situación financiera de la empresa, el valor de sus activos y pasivos y en qué están representados, el capital actual, los excedentes de la empresa, entre otros. Este balance general, ver figura 11, se realiza en periodos anuales contables de conformidad con la Ley Estatutaria.
    
    .mx-auto.col-lg-10.mb-5
      .titulo-sexto.color-acento-botones(data-aos="fade-right")
        h5 Figura 11.
        span Ejemplo del Balance General de una Empresa
      .tabla-a.color-primario.mb-3
        table
          thead
            tr(style="background-color: #E9F0FE" data-aos="fade-right")
              th(colspan="4") Balance general en forma de cuenta
          tbody(style="background-color: white;")
            tr(data-aos="fade-right")
              td
                p.fw-bold Activo
                
              td
                p.fw-bold $113.053.092,82
                
              td
                p.fw-bold Pasivo
                
              td
                p.fw-bold $42.894.673,76

            tr(data-aos="fade-right")
              td
                p.fw-bold Activo corriente
                
              td
                p.fw-bold $22.988.088,42
                
              td
                p.fw-bold Pasivo corriente
                
              td
                p.fw-bold $11.666.184,36

            tr(data-aos="fade-right")
              td
                p Caja
                
              td
                p.fw-bold $201,00
                
              td
                p Documentos por pagar a bancos
                
              td
                p.fw-bold $1.500.000,00

            tr(data-aos="fade-right")
              td
                p Instituciones financieras
                
              td
                p.fw-bold $4.762.000,12
                
              td
                p Cuentas por pagar a proveedores
                
              td
                p.fw-bold $5.321.438,76

            tr(data-aos="fade-right")
              td
                p Inversiones disponibles para la venta
                
              td
                p.fw-bold $230.796,24
                
              td
                p Otros pasivos corrientes
                
              td
                p.fw-bold $4.844.745,60

            tr(data-aos="fade-right")
              td
                p Documentos por cobrar comerciales
                
              td
                p.fw-bold $1.264.215,74
                
              td
                p
                
              td
                p.fw-bold 

            tr(data-aos="fade-right")
              td
                p Inversiones mantenidas hasta el vencimiento
                
              td
                p.fw-bold $7.140.369,46
                
              td
                p Pasivo no corriente
                
              td
                p.fw-bold $31.228.489,40

            tr(data-aos="fade-right")
              td
                p Inventarios
                
              td
                p.fw-bold $9.590.505,86
                
              td
                p Documentos por pagar a relacionados
                
              td
                p.fw-bold $5.824.035,75


            tr(data-aos="fade-right")
              td
                p 
                
              td
                p.fw-bold 
                
              td
                p Documentos por pagar a bancos
                
              td
                p.fw-bold $22.994.065,93


            tr(data-aos="fade-right")
              td
                p.fw-bold Activo no corriente
                
              td
                p.fw-bold $90.065.004,40
                
              td
                p.fw-bold Otros pasivos no corriente
                
              td
                p.fw-bold $2.410.387,72

            tr(data-aos="fade-right")
              td
                p Edificios
                
              td
                p.fw-bold $60.879.546,00
                
              td
                p.fw-bold 
                
              td
                p.fw-bold 

            tr(data-aos="fade-right")
              td
                p Vehiculos
                
              td
                p.fw-bold $7.689.432,00
                
              td
                p.fw-bold PATRIMONIO
                
              td
                p.fw-bold $70.158.419,06

            tr(data-aos="fade-right")
              td
                p Maquinaria
                
              td
                p.fw-bold $14.587.019,92
                
              td
                p Capital
                
              td
                p.fw-bold $31.571.288,58

            tr(data-aos="fade-right")
              td
                p Propiedad, planta y equipo
                
              td
                p.fw-bold $83.155.997,92
                
              td
                p Reserva legal
                
              td
                p.fw-bold $3.157.128,86

            tr(data-aos="fade-right")
              td
                p Inversiones de largo plazo
                
              td
                p.fw-bold $266.659,69
                
              td
                p Reserva facultativa
                
              td
                p.fw-bold $2.104.752,57

            tr(data-aos="fade-right")
              td
                p Otros activos no corrientes
                
              td
                p.fw-bold $6.245.671,59
                
              td
                p Utilidades acumuladas
                
              td
                p.fw-bold $21.047.525,72

            tr(data-aos="fade-right")
              td
                p Activo diferido
                
              td
                p.fw-bold $396.675,20
                
              td
                p Utilidades del ejercicio
                
              td
                p.fw-bold $12.277.723,34



      figcaption(style="font-weight: normal") <b>Nota.</b> Adaptado de Ejemplo del Estado de Situación Financiera de una empresa (2020).

    Separador 
    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_4_2 4.2 Estado de resultados
    
    .d-flex.flex-wrap.align-items-start.mb-5.position-relative
      img.col-lg-4.col-xl-5.mx-auto.mb-4(src="@/assets/curso/temas/tema4/img-8.png" style="max-width: 505px;" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-8.col-xl-7.ps-lg-4
        p(data-aos="fade-right") Refleja el comportamiento de los ingresos y egresos de la entidad; según la actividad comercial a que se dedique; la información presentada es de acuerdo con el periodo de tiempo que se elija para presentar este informe financiero. De igual manera nos brinda una información sobre los ingresos y egresos de la empresa, si se ha perdido o se ha ganado durante el periodo de tiempo que se está procesando la información; se realiza luego de procesar la información contable.
        p(data-aos="fade-right") Los conceptos que hacen parte del estado de resultados son, ver figura 12:
        .d-flex.flex-wrap
          ul.lista-ul--separador.mb-0.col-lg-6.pe-lg-3
            li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed; border-color: black" data-aos="fade-right")
              img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;")
              p.mb-0 Ingresos totales.
            li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed; border-color: black" data-aos="fade-right")
              img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;")
              p.mb-0 Ingresos netos.
            li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed; border-color: black" data-aos="fade-right")
              img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;")
              p.mb-0 Compras totales.
            li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed; border-color: black" data-aos="fade-right")
              img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;")
              p.mb-0 Compras netas.
            li.d-flex.align-items-start.pb-2.mb-2(data-aos="fade-right")
              img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;")
              p.mb-0 Costos.
          ul.lista-ul--separador.mb-0.col-lg-6.ps-lg-3
            li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed; border-color: black" data-aos="fade-right")
              img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;")
              p.mb-0 Gastos.
            li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed; border-color: black" data-aos="fade-right")
              img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;")
              p.mb-0 Utilidad.
            li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed; border-color: black" data-aos="fade-right")
              img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;")
              p.mb-0 Pérdidas.
            li.d-flex.align-items-start.pb-2.mb-2(data-aos="fade-right")
              img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;")
              p.mb-0 Utilidad neta, o pérdida neta.

    .mx-auto.col-lg-10.mb-5
      .titulo-sexto.color-acento-botones(data-aos="fade-right")
        h5 Figura 12.
        span Ejemplo Estructura básica del estado de resultados
      img.mx-auto.mb-3(src="@/assets/curso/temas/tema4/img-19.svg" style="max-width: 1030px" data-aos="zoom-in" alt="Figura 12. Muestra el ejemplo de la estructura básica del estado de resultados de una empresa donde en la columna a mano izquierda se ubican todos los ingresos.")
      figcaption(style="font-weight: normal") <b>Nota.</b> Adaptado de Modelo de estado de resultados (s.f.).
    
    .cajon.color-primario.p-4.mb-4(data-aos="fade-left" style="background-color: #E0F4FE")
      p.mb-0 Para los propietarios, inversionistas (futuros inversores) y comunidad en general siempre va a ser muy interesante saber si una empresa, tiene utilidades o perdidas, ello contribuye a mejorar su imagen en el mercado.
    
    Separador 

    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_4_3 4.3 Estado de costo producción y venta
    
    .bloque-texto-g.bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img-9.jpg')})`}" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 El estado de costo producción y venta es generado por la necesidad de conocer exactamente los costos de producción y venta en un período específico. Es importante dar claridad que no es un estado financiero básico, ni oficial, es de uso estrictamente interno de las organizaciones, se genera en la parte contable luego de procesar la información relacionada, ver figura 13.
    
    .mx-auto.col-lg-10.mb-5
      .titulo-sexto.color-acento-botones(data-aos="fade-right")
        h5 Figura 13.
        span Ejemplo de estructura del estado de costo, producción y venta
      .tabla-a.color-primario.mb-3
        table
          thead
            tr(style="background-color: #E9F0FE" data-aos="fade-right")
              th Descripción
              th Parcial
              th Total
          tbody(style="background-color: white;")
            tr(data-aos="fade-right")
              td.fw-bold Costos incurridos en la producción
              td
              td
            tr(style="background-color: #F9FBFF" data-aos="fade-right")
              td Materias primas
              td
              td
            tr(data-aos="fade-right")
              td Inventario inicial de materia prima
              td.fw-bold.text-end 75.000
              td
            tr(style="background-color: #F9FBFF" data-aos="fade-right")
              td + Compras netas de materia prima
              td.fw-bold.text-end 43.500
              td
            tr(data-aos="fade-right")
              td Total de la materia prima disponible
              td.fw-bold.text-end 118.500
              td
            tr(style="background-color: #F9FBFF" data-aos="fade-right")
              td - Inventario final de materia prima
              td.fw-bold.text-end (31.500)
              td
            tr(data-aos="fade-right")
              td Costo de materia prima utilizada
              td.fw-bold.text-end 87.000
              td
            tr(style="background-color: #F9FBFF" data-aos="fade-right")
              td - Materia prima indirecta utilizada
              td.fw-bold.text-end (12.000)
              td
            tr(data-aos="fade-right")
              td Materia prima directa utilizada
              td.fw-bold.text-end 75.000
              td
            tr(style="background-color: #F9FBFF" data-aos="fade-right")
              td + Mano de obra directa
              td.fw-bold.text-end 45.000
              td
            tr(data-aos="fade-right")
              td.fw-bold Costo primo
              td.fw-bold.text-end 120.000
              td
            tr(style="background-color: #F9FBFF" data-aos="fade-right")
              td + Gastos indirectos de fabricación
              td.fw-bold.text-end 55.500
              td
            tr(data-aos="fade-right")
              td Costo de la producción del periodo
              td
              td.fw-bold.text-end 175.500
            tr(style="background-color: #F9FBFF" data-aos="fade-right")
              td + Inventario inicial de producción en proceso
              td
              td.fw-bold.text-end 35.000
            tr(data-aos="fade-right")
              td Total de la producción en proceso disponible
              td
              td.fw-bold.text-end 210.500
            tr(style="background-color: #F9FBFF" data-aos="fade-right")
              td - Inventario final de producción en proceso
              td
              td.fw-bold.text-end (42.500)
            tr(data-aos="fade-right")
              td Costo de la producción terminada del periodo
              td
              td.fw-bold.text-end 168.000
            tr(style="background-color: #F9FBFF" data-aos="fade-right")
              td + Inventario inicial de artículos terminados
              td
              td.fw-bold.text-end 30.000
            tr(data-aos="fade-right")
              td Total de los artículos terminados disponibles
              td
              td.fw-bold.text-end 198.000
            tr(style="background-color: #F9FBFF" data-aos="fade-right")
              td - Inventario final de artículos terminados
              td
              td.fw-bold.text-end (10.000)
            tr(data-aos="fade-right")
              td.fw-bold  Costo de ventas 
              td
              td.fw-bold.text-end 188.000
      figcaption(style="font-weight: normal") <b>Nota.</b> Adaptado de Contaestudio (2020).
    
    .bloque-texto-d.color-primario.p-4.col-lg-10.mx-auto.mb-5(style="border-top: 1px solid #12263F")
      .bloque-texto-d__texto.mb-2(data-aos="fade-right")
        i.fas.fa-quote-left(style="color: #91B3FA")
        p.mb-0 El costo de producción o costo de operación es el gasto necesario para fabricar un bien o servicio
        i.w-100.fas.fa-quote-right(style="color: #91B3FA")
      .bloque-texto-d__autor(data-aos="fade-left")
        .h5.mb-0 - Economipedia (2020)

    .d-flex.flex-wrap.align-items-center.p-3.mb-5(style="background: linear-gradient(90deg, rgba(244,244,244,1) 0%, rgba(255,255,255,1) 79%);")
      img.mb-4.mb-md-auto.mx-auto.mb-4(src="@/assets/curso/temas/tema4/img-10.svg" style="max-width: 136px;" data-aos="fade-right" alt="Imagen decorativa")
      .col-md.ps-md-4(data-aos="fade-left")
        p.fw-bold.mb-0 “A través del estado de costos de producción y ventas se obtiene información del consumo de materia prima usada, mano de obra empleada, el proceso de producción y costos necesarios en la producción para establecer el precio en el mercado”.
        .d-flex.justify-content-end.align-items-center
          span(style="min-width: 18px; min-height: 18px; max-height: 18px; background-color: #4ADBD1")
          p.mb-0.ps-2.fw-bold Singuenza (2019)

    .tarjeta.color-primario.p-3.col-lg-10.mx-auto.mb-5(style="background: linear-gradient(180deg, #2C6AEB 0%, rgba(26,15,145,1) 100%);" data-aos="flip-up")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/decorador-5.svg" alt="Imagen decorativa")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.texto-blanco
              h3.mb-1 Estado de costo de producción y ventas y su incidencia en la mano de obra
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Estado_de_costo_de_produccion_y_ventas.pdf')" target="_blank" style="background-color: #E6B046")
                span Descargar
                i.fas.fa-file-download
      
    Separador 

    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_4_4 4.4 Normas Internacionales de Información Financiera - NIIF
    
    p.mb-5(data-aos="fade-right") La globalización de la economía no es ajena a la información contable y financiera y por supuesto a los estados financieros de las organizaciones, donde se ven reflejados los resultados de su actividad comercial; es por eso que de acuerdo a esta necesidad, se hace necesario estandarizar y armonizar la información financiera que sea fácil para comprender en cualquier lugar del mundo y a partir de ahí surgen las NIIF.  

    .d-flex.flex-wrap.mb-5
      img.col-lg-4.col-xl-3.col-md-5.mb-4.mb-md-auto.mx-auto(src="@/assets/curso/temas/tema2/img-5.png" style="max-width: 295px;" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-8.col-xl-9.col-md-7.ps-md-4
        .cajon.color-primario.p-4.mb-4(data-aos="fade-left" style="background-color: #E0F4FE")
          p.mb-0  Las normas NIIF para Economipedia (2020) “Son normas técnicas y principios contables con el objetivo homogenizar la reglamentación contable a nivel internacional”. Dichas normas son establecidas por la IASB (International Accounting Standard Board).
        
        p(data-aos="fade-left") Las NIIF, no son de obligatoria adopción para las empresas, sin embargo, un número importante de países las han adoptado, como también las empresas a nivel externo las exigen para entrar a negociar (importar-exportar) productos y servicios. Actualmente las NIIF, las aplican en el sector público y privado (Pequeñas y Medianas Empresas (PYMES), con algunas variaciones.
    
    .tarjeta.color-primario.p-3.col-lg-10.mx-auto.mb-5(style="background: linear-gradient(180deg, #2C6AEB 0%, rgba(26,15,145,1) 100%);" data-aos="flip-up")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/decorador-5.svg" alt="Imagen decorativa")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.texto-blanco
              p.text-small Lectura complementaria <b>impacto operativo en el proceso de convergencia a las NICSP para las entidades de gobierno en Colombia</b>.
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Impacto_de_las_NICSP.pdf')" target="_blank" style="background-color: #E6B046")
                span Descargar
                i.fas.fa-file-download
    
    Separador 
    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_4_5 4.5 Análisis financiero
    
    .d-flex.flex-wrap.align-items-start.mb-5.position-relative.container-100.py-4(style="background-color: #F6F6F6")
      img.col-lg-4.col-xl-5.mx-auto.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema4/img-12.png" style="max-width: 505px;" data-aos="fade-right" alt="Imagen decorativa")
      .col-lg-8.col-xl-7.ps-lg-4(data-aos="fade-left")
        p.mb-0 El análisis o diagnóstico financiero constituye la herramienta más efectiva para evaluar el desempeño económico y financiero de una empresa, a lo largo de un ejercicio específico y para comparar sus resultados con los de otras empresas del mismo ramo que estén bien gerenciadas y que presenten características similares; pues sus fundamentos y objetivos se centran en la obtención de relaciones cuantitativas propias del proceso de toma de decisiones, mediante la aplicación de técnicas sobre datos aportados por la contabilidad, que a su vez, son transformados para ser analizados e interpretados. 
    p.mb-5(data-aos="fade-left") Para realizar el análisis financiero se deben aplicar unas fórmulas matemáticas con razones financieras, las cuales permiten tener diferentes perspectivas y puntos de vista del crecimiento y desarrollo financiero de la empresa. Así mismo, permiten valorar e interpretar la información obtenida que a la postre, será útil en la toma de decisiones a corto, mediano y largo plazo.

    .cajon.color-primario.p-4.mb-4(data-aos="fade-left" style="background-color: #E0F4FE")
      p.mb-0 El análisis financiero es importante en el estudio e interpretación de la información contable obtenida con el objeto de diagnosticar su situación actual y proyectar su futuro desarrollo. Este análisis se puede realizar de dos maneras: vertical y horizontal.
    
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta-edit-acordion" data-aos="zoom-in")
      .d-flex.flex-wrap(titulo="Análisis vertical")
        p.mb-5 Permite analizar el peso porcentual de cada componente de los estados financieros, es decir del balance general y el estado de resultados. Los resultados que arroje el análisis; son presentados en variaciones absolutas y relativas.
        img.mb-2.mx-auto(src="@/assets/curso/temas/tema4/img-17.svg" style="max-width: 800px;" alt="Figura 14. Muestra un análisis vertical donde se describe las cuentas de la empresa los comparativos del año 2012, 2011 la variación y el porcentaje.")
        p.fw-bold.w-100.text-center Ejemplo de análisis vertical
      .d-flex.flex-wrap(titulo="Análisis horizontal")
        p.mb-5 Permite realizar un análisis de manera horizontal a los estados financieros y al balance general en 2 periodos (años) consecutivos para ver sus respectivas variaciones. Según Economipedia (2020) “El análisis horizontal calcula la variación absoluta y relativa que ha tenido cada una de las partidas del balance o la cuenta de resultados, en dos períodos de tiempo consecutivos”. Los resultados que arroje el análisis; son presentados en variaciones absolutas y relativas.
        img.mb-2.mx-auto(src="@/assets/curso/temas/tema4/img-18.svg" style="max-width: 800px;" alt="Figura 15- Expone a través de un ejemplo el análisis horizontal con la descripción de la cuenta de resultados luego año 1 y año 2 acompañado de los valores de la variación absoluta y relativa.")
        p.fw-bold.w-100.text-center Ejemplo de análisis horizontal

    .titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2#t_4_6 4.6 Indicadores de gestión financieras
    
    p(data-aos="fade-right") Son utilizados como herramienta indispensable en la mayoría de las empresas. Mediante el cálculo e interpretación de cifras se logra medir la estabilidad, la capacidad de endeudamiento y capacidad de generar liquidez en una organización, permitiendo potencializar aquellas áreas de mayor rendimiento e identificando aquellas sensibles de mejora.
    .cajon.color-primario.p-4.mb-5(data-aos="fade-left" style="background-color: #E0F4FE")
      p.mb-0 Entre los indicadores de gestión financiera y que deben ser interpretados por personas con conocimiento de la empresa, se destacan los siguientes:

    TabsB.color-primario.mb-5(data-aos="zoom-in")
      .py-4.py-md-5(titulo="Indicadores de<br> liquidez y solvencia" :icono="require('@/assets/curso/temas/tema4/p-1.svg')")
        p Para Economipedia(2020) cada indicador de solvencia y de liquidez tiene una particularidad específica, <b>“La liquidez es la cualidad que tienen los activos financieros para convertirse en dinero, y por tanto, hacer frente a los compromisos de pago más inmediatos en un momento oportuno. Sin embargo, la solvencia es la capacidad que tiene una empresa para realizar sus pagos y cumplir con sus deudas financieras, para ello, hay que contar con los recursos suficientes como respaldo para cumplir con las obligaciones de la empresa”.</b>
        img.ms-auto.me-lg-5(src="@/assets/curso/temas/tema4/img-13.svg" style="max-width: 925px" alt="Imagen que muestra la formula para los indicadores de liquidez y solvencia ")
      .py-4.py-md-5(titulo="Indicadores de<br> eficiencia" :icono="require('@/assets/curso/temas/tema4/p-2.svg')")
        p Nava (2009) <b>“Entre los indicadores de eficiencia o actividad están la rotación de activos totales, rotación de activos fijos, la rotación del inventario, rotación de las cuentas por cobrar, el período promedio de cobro y el período promedio de pago”</b>. Estos indicadores permiten medir la eficiencia de la organización, con el objeto de saber crecer y rendir los recursos disponibles.
        img.ms-auto.me-lg-5(src="@/assets/curso/temas/tema4/img-14.svg" style="max-width: 948px" alt="Imagen que muestra las formulas para el indicador de eficiencia y se describen luego de la imagen.")
      .py-4.py-md-5(titulo="Indicadores de<br> endeudamiento" :icono="require('@/assets/curso/temas/tema4/p-3.svg')")
        p Para Nava (2009) <b>“Los indicadores de endeudamiento más significativos son: razón deuda, razón pasivo circulante y pasivo total, razón pasiva a largo plazo y pasivo total, y razón cobertura de intereses”</b>. Otorga una idea de la capacidad de endeudamiento de la empresa para futuras inversiones.
        img.ms-auto.me-lg-5(src="@/assets/curso/temas/tema4/img-15.svg" style="max-width: 948px" alt="Imagen que describe las fórmulas para el indicador de endeudamiento que se indican  luego de la imagen.")
      .py-4.py-md-5(titulo="Indicadores<br> de rentabilidad" :icono="require('@/assets/curso/temas/tema4/p-4.svg')")
        p Para Nava (2009) <b>”Los indicadores de rentabilidad muestran los retornos netos obtenidos por las ventas y los activos disponibles, midiendo la efectividad del desempeño gerencial. Entre estos indicadores se encuentran el rendimiento sobre las ventas, el rendimiento sobre los activos y el rendimiento sobre el capital aportado por los accionistas”</b>.
        img.mx-auto(src="@/assets/curso/temas/tema4/img-16.svg" style="max-width: 697px" alt="Imagen que muestra un ejemplo de las fórmulas de un indicador de rentabilidad y se describen luego de la imagen.")

    .tarjeta.color-primario.p-3.col-lg-10.mx-auto.mb-5(style="background: linear-gradient(180deg, #2C6AEB 0%, rgba(26,15,145,1) 100%);" data-aos="flip-up")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/decorador-5.svg" alt="Imagen decorativa")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0.texto-blanco
              h3.mb-1 Principales indicadores financieros y de gestión 
              p.text-small Para conocer más sobre los indicadores financieros, descargar el documento sobre: Principales indicadores financieros y de gestión del Instituto Nacional de Contadores Públicos de Colombia (INCPC).
            .col-sm-auto
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/principales_indicadores_financieros.pdf')" target="_blank" style="background-color: #E6B046")
                span Descargar
                i.fas.fa-file-download

    .cajon.color-primario.p-4.mb-4(data-aos="fade-left" style="background-color: #E0F4FE")
      p.mb-0 Como conclusión se puede decir que los análisis financieros, permiten a las organizaciones tener una claridad real sobre la empresa, su situación financiera, proyectar inversiones, inyección de capital, crecimiento y desarrollo, y en dado caso que no sean los resultados esperados, permiten trazar las estrategias para poder corregir. 


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

<style lang="sass"></style>
