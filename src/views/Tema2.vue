<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Contabilidad de costos y costeo de los procesos logísticos 
    
    .bloque-texto-g.bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img-1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 Una de las preocupaciones que hace parte de la agenda todos los días en las altas directivas de una empresa, son los costos, y para este caso particular los costos de los procesos logísticos. Los sistemas de costeo, y de la mano de la contabilidad, le permite a las organizaciones una correcta distribución y asignación de costo de acuerdo al centro de costos del producto o servicio, teniendo en cuenta si es costo fijo o variable, directo o indirecto, ver figura 7. 

    .bloque-texto-d.color-primario.p-4.col-lg-10.mx-auto.mb-5(style="border-top: 1px solid #12263F")
      .bloque-texto-d__texto.mb-2
        i.fas.fa-quote-left(style="color: #91B3FA")
        p.mb-0 La escala en la operación de los sistemas logísticos dentro de la cadena de suministro, depende de las características del cliente, tamaño de la empresa y productos. Los costos son inherentes a las funciones de la organización, se generan por la gestión del flujo de materiales e información. Se denominan costos operativos y abarcan todos los procesos a lo largo de la cadena de abastecimiento.
        i.w-100.fas.fa-quote-right(style="color: #91B3FA")
      .bloque-texto-d__autor 
        .h5.mb-0 - Castro (2016)
    
    .mx-auto.col-lg-10.mb-5
      .titulo-sexto.color-acento-botones(data-aos="fade-right")
        h5 Figura 7.
        span Taxonomía de las metodologías de costo
      figure
        img.mx-auto.mb-4(src="@/assets/curso/temas/tema2/img-2.svg" style="max-width: 1024px;" data-aos="fade-left")
        figcaption(style="font-weight: normal") <b>Nota.</b> Adaptado de Relación de esta taxonomía con la medición del desempeño en la cadena de Suministro y logística (s.f.).

    .d-flex.flex-wrap.mb-5
      .col-lg-7.order-2.order-lg-1.pe-lg-4
        .cajon.color-secundario.p-4.mb-3(data-aos="fade-right" style="background-color: #E0F4FE")
          p.mb-0 La contabilidad de costos, cumple una función específica de clasificar, acumular y asignar los costos de acuerdo al destino del costo que se generó en la elaboración del producto y/o servicio, y con esta se realizan los estados financieros internos y/o administrativos y con la información que genera, se usa para la toma de decisiones de índole interno. 
      img.mx-auto.mb-4.mb-lg-auto.col-lg-5.order-1.order-lg-2(src="@/assets/curso/temas/tema2/img-3.png" style="max-width: 505px;" data-aos="fade-left")

    .d-flex.flex-wrap.align-items-center.p-3.mb-5(style="background: linear-gradient(90deg, rgba(244,244,244,1) 0%, rgba(255,255,255,1) 79%);")
      img.mb-4.mb-md-auto.mx-auto.mb-4(src="@/assets/curso/temas/tema2/img-4.svg" style="max-width: 136px;" data-aos="fade-right")
      p.col-md.ps-md-4.fw-bold.mb-0 Según Colin (2014), “La contabilidad de costos es un sistema de información empleado para predeterminar, registrar, acumular, controlar, analizar, direccionar, interpretar e informar todo lo relacionado con los costos de producción, distribución, venta, administración y financiamiento”. 
    
    .d-flex.flex-wrap.mb-5
      img.col-lg-4.col-xl-3.col-md-5.mb-4.mb-md-auto.mx-auto(src="@/assets/curso/temas/tema2/img-5.png" style="max-width: 295px;" data-aos="fade-right")
      .col-lg-8.col-xl-9.col-md-7.ps-md-4
        p La contabilidad de costos o contabilidad analítica es una metodología contable con el objetivo de generar información sobe los costos desarrollados en la producción de mercancías o servicios. 
        .d-flex.flex-wrap
          ul.lista-ul--separador.col-lg-6.pe-lg-3.mb-0
            li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed")
              img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
              p.mb-0 Conocer el costo real de los productos o servicios.
            li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed")
              img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
              p.mb-0 Asignar los costos de acuerdo al centro de costos.
            li.d-flex.d-lg-none.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed")
              img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
              p.mb-0 Conocer la utilidad real de productos y servicios.
            li.align-items-start.pb-2.mb-2.d-none.d-lg-flex
              img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
              p.mb-0 Conocer la utilidad real de productos y servicios.
          ul.lista-ul--separador.col-lg-6.ps-lg-3
            li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed")
              img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
              p.mb-0 Control del costo en todos los niveles operativos.
            li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed")
              img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
              p.mb-0 Valor de los inventarios de la empresa.
            li.d-flex.align-items-start.pb-2.mb-2
              img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
              p.mb-0 Clasificar los costos en directos e indirectos.

    .cajon.color-primario.p-4.mb-5(data-aos="fade-right" style="background-color: #E0F4FE")
      p.mb-0 El objetivo final es que todos los costos deben ser asignados de acuerdo a la forma de costeo que se utilice según la actividad de la organización; actividad basada en costos (ABC), procesos, productos, proyectos, ordenes de producción, ver figura 8.          
        
    .mx-auto.col-lg-10.mb-5
      .titulo-sexto.color-acento-botones(data-aos="fade-right")
        h5 Figura 8.
        span  Esquema contabilidad de costos
      figure
        img.mx-auto.mb-4(src="@/assets/curso/temas/tema2/img-6.svg" style="max-width: 1034px;" data-aos="fade-left")
        figcaption(style="font-weight: normal") <b>Nota.</b> Adaptado de Los Costos (s.f.).

    Separador 

    .titulo-segundo.color-acento-botones
      h2#t_2_1 2.1 Clasificación sistemas de costo
    
    img.mb-4.mb-md-auto(src="@/assets/curso/temas/tema2/img-7.png" data-aos="fade-right")
    .tarjeta.tarjeta-edit-2.col-xl-10.mx-auto.mb-5
      p.mb-0 Las clasificaciones de los sistemas de costo son de acuerdo con las actividades relacionadas con la mercancía o servicio ofertado. Se presentan los diferentes tipos de clasificaciones del costo según el manejo que se le quiera dar en el proceso de producción y de asignación del costo. Se puede ver esta clasificación en la siguiente figura 9.
    
    .mb-5
      .titulo-sexto.color-acento-botones(data-aos="fade-right")
        h5 Figura 9.
        span Clasificaciones de los costos
      figure
        img.mx-auto.mb-4(src="@/assets/curso/temas/tema2/img-8.svg" data-aos="fade-left")
        figcaption(style="font-weight: normal") <b>Nota.</b> Adaptado de Cuadro general de los diferentes tipos de clasificaciones del costo (s.f.). 

    .d-flex.flex-wrap.mb-5
      img.col-lg-4.col-xl-3.col-md-5.mb-4.mb-md-auto.mx-auto(src="@/assets/curso/temas/tema2/img-5.png" style="max-width: 295px;" data-aos="fade-right")
      .col-lg-8.col-xl-9.col-md-7.ps-md-4
        p Los sistemas de costeo más relevante, que se aplica en las organizaciones y que los estudiosos del tema, han denominado Actividad Basada en Costos (ABC), permite a las organizaciones asignar los costos de manera proporcional a su participación en la elaboración de productos y servicios y por su precisión es aconsejable su uso. 
        .cajon.color-primario.p-4.mb-3(data-aos="fade-right" style="background-color: #E0F4FE")
          p.mb-0 Según el portal www.gerencie.com el <em>Active Based Costing</em>, por sus siglas en inglés, es un sistema de costos frecuentemente utilizado por las organizaciones actuales, lo cual remplazó los sistemas obsoletos de administración. 
        p.mb-0 La Actividad Basada en Costos (ABC), considerada actualmente el sistema de costeo más moderno del mundo, se puede aplicar de diferente forma:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.p-5(style="background-color: #C4F2F1")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img-9.svg')
          
        h4 Procesos
        p El sistema de costos por procesos permite asignar y acumular los costos a los productos por proceso logísticos. Colin (2014), En economías a escala la asignación de costos por procesos, los costos se reúnen en un determinado espacio de tiempo por cada departamento, proceso o nodo de costo.

      .col-md.tarjeta.color-acento-botones.p-5(style="background-color: #D8E4FD")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img-10.svg')
          
        h4 Proyectos
        p Los costos por proyectos o por contratos, los asigna la empresa o cada uno de manera específica y no guarda relación con otros productos o proyectos; por ejemplo, se utilizan las empresas de construcción, de proyectos especiales, obras civiles en general (edificios, oficinas, represas), eventos, entre otros.

      .col-md.tarjeta.color-acento-contenido.p-5(style="background-color: #C4F2F1")
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/tema2/img-11.svg')
          
        h4 Órdenes específicas de producción
        p Son utilizados en la asignación de costos de producción relacionadas con lotes de un producto específico o cliente determinado. Tiene similitud con los costos por proyectos, la diferencia por órdenes se realiza en una empresa con productos similares. 

    Separador 

    .titulo-segundo.color-acento-botones
      h2#t_2_2 2.2 Diferencia entre costo y gastos de los procesos logísticos
    
    p.mb-5 Se ha presentado un dilema para los estudiosos de procesos logísticos sobre los costos y gastos a lo largo de los tiempos y la necesidad de hacer claridad entre los costos y gastos, diferencias para ser aplicada especialmente en los procesos operativos logísticos y la definición final de los costos incurridos en la elaboración de un producto y la prestación servicio. 

    .d-flex.flex-wrap.mb-5
      img.col-lg-4.col-xl-3.col-md-5.mb-4.mb-md-auto.mx-auto(src="@/assets/curso/temas/tema2/img-12.png" style="max-width: 295px;" data-aos="fade-right")
      .col-lg-8.col-xl-9.col-md-7.ps-md-4
        p Se le denomina gastos, según Economipedia (2020), al uso de un servicio o bien a cambio de dinero o contraprestación de otro bien o servicio. La diferencia entre costos y gastos es importante sobre todo en el momento de la asignación y a qué centro de costo le corresponde y para qué caso particular.
        .cajon.color-primario.p-4.mb-3(data-aos="fade-right" style="background-color: #E0F4FE")
          p.mb-0 Economipedia (2020) indica que costo y gasto como concepto son análogos a valor y precio, sin embargo, presentan diferencias circunstanciales donde se evidencia la división de conceptos.
        p.mb-0 Para García (2014), costo y gasto son lo mismo; aunque tienen algunas diferencias específicas: 
    
    .tarjeta-avatar-b.tarjeta-avatar-b-1.col-xl-11.me-xl-auto.mb-4
      .tarjeta-avatar-b__img
        img.mx-auto(src='@/assets/curso/temas/tema2/img-13.svg' style="max-width: 104px")
      .tarjeta.tarjeta-e-1.tarjeta--azul.ps-lg-5(style="background-color: #F6F6F6; box-shadow: 0 2px 4px 4px #00000010")
        .p-4.py-md-3.d-flex.flex-wrap.align-items-center
          p.mb-0.order-2.order-md-1.col-md.pe-md-4(data-aos="fade-right") <b>La función a la que se les asigna:</b> los gastos están asociados a la administración, financiamiento y ventas, entretanto los costos se relacionan con la producción.
    
    .tarjeta-avatar-b.tarjeta-avatar-b-1.col-xl-11.me-xl-auto.mb-5
      .tarjeta-avatar-b__img
        img.mx-auto(src='@/assets/curso/temas/tema2/img-14.svg' style="max-width: 104px")
      .tarjeta.tarjeta-e-2.tarjeta--azul.ps-lg-5(style="background-color: #F6F6F6; box-shadow: 0 2px 4px 4px #00000010")
        .p-4.py-md-3.d-flex.flex-wrap.align-items-center
          p.mb-0.order-2.order-md-1.col-md.pe-md-4(data-aos="fade-right") <b>Tratamiento Contable:</b> los gastos administrativos, ventas y financieros están fuera del proceso productivo y son cargados al estado de resultados como costos en el período generado y no componen el costo del producto terminado. Mientras que los costos, hacen parte de los inventarios de materias primas, producción en desarrollo y mercancías terminadas, los cuales, se convierten en activos circulantes dentro del balance general.
    
    p.mb-5 Algunos tipos de costos que se dan en las organizaciones son:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta-edit-acordion")
      .d-flex.flex-wrap(titulo="Costos de aprovisionamiento")
        p Es importante hacer claridad que las compras son una parte o componente del proceso de aprovisionamiento. Los costos que se generan son: 
        .d-flex.flex-wrap.mb-4.w-100
          img.col-lg-4.col-xl-3.col-md-5.mb-4.mb-md-auto.mx-auto(src="@/assets/curso/temas/tema2/img-15.png" style="max-width: 298px;")
          .col-lg-8.col-xl-9.col-md-7.ps-md-4
            ul.lista-ul--separador.mb-0
              li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed; border-color: black")
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                p.mb-0 <b>Costos de compra:</b> compra de materia prima y/o artículos terminados incluyendo impuestos.
              li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed; border-color: black")
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                p.mb-0 <b>Costo de ordenar:</b> son los gastos que se generan al momento de realizar un pedido y son gastos administrativos de gestión de pedidos.
              li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed; border-color: black")
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                p.mb-0 <b>Costo de escasez:</b> se incurren por la falta de materia prima que ocasiona el parar la producción, también son perdidas.
              li.d-flex.align-items-start.pb-2.mb-2
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                p.mb-0 <b>Costo de mantener inventario:</b> costo de capital invertido e inmovilizado, almacenamiento, personal, seguros, almacenamiento, transporte interno de materia prima. Este costo se genera además, en varios procesos de la cadena de suministros.
        .tarjeta-avatar-b.col-xl-11.me-xl-auto
          .tarjeta-avatar-b__img
            img.mx-auto(src='@/assets/curso/temas/img-2.svg' style="max-width: 104px")
          .tarjeta.tarjeta--azul.ps-lg-5(style="background-color: white; box-shadow: 0 0 4px 4px #00000010;")
            .p-4.py-md-3.d-flex.flex-wrap.align-items-center
              p.mb-0.order-2.order-md-1.col-md.pe-md-4(data-aos="fade-right") Los anteriores conceptos de costos están relacionados con gastos de personal, insumos, equipos, infraestructura, servicios públicos y depreciación entre otros.
              img.mx-auto.mb-4.mb-md-auto.order-1.order-md-2.mx-lg-5(src="@/assets/curso/temas/tema1/img-4.svg" style="max-width: 135px;" data-aos="fade-left")

      .d-flex.flex-wrap(titulo="Costos de inventarios")
        p Son generados al momento de mantener el <em>stock</em> de inventarios para los procesos administrativos y operativos de la empresa.
        .d-flex.flex-wrap.mb-4.w-100
          img.col-lg-4.col-xl-3.col-md-5.mb-4.mb-md-auto.mx-auto(src="@/assets/curso/temas/tema2/img-15.png" style="max-width: 298px;")
          .col-lg-8.col-xl-9.col-md-7.ps-md-4
            ul.lista-ul--separador.mb-0
              li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed; border-color: black")
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                p.mb-0 <b>Costo de mantenimiento de inventarios:</b> costo de capital invertido e inmovilizado, almacenamiento, personal, seguros, almacenamiento, transporte interno de materia prima y también ser llaman costos de conservación de los inventarios.
              li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed; border-color: black")
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                p.mb-0 <b>Costo de pedidos:</b> son los que incurren en el momento de realizar el reabastecimiento y recompra de materia prima, insumos, maquinaria entre otros.
              li.d-flex.align-items-start.pb-2.mb-2
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
                p.mb-0 <b>Costo de oportunidad:</b> se genera cuando la empresa acude a fuentes de financiación externas por tener un gran capital invertido en inventarios y que solo puede disponer de los mismos para recursos cuando se transforme la materia prima y se oferten como productos.
        ul.lista-ul--separador.mb-4
          li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed; border-color: black")
            img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
            p.mb-0 <b>Costo de agotamiento:</b> se incurren al no poder satisfacer una demanda y pérdida constante de clientes por falta de existencias, en ocasiones el cliente acepta que se le envié el producto tarde o se pierde el cliente y le compra a otra empresa.
          li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed; border-color: black")
            img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
            p.mb-0 <b>Costo manejo y manipulación:</b> se relaciona con el manejo y manipulación constante del inventario y se generan bajas de la mercancía y perdidas por este concepto.
          li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed; border-color: black")
            img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
            p.mb-0 <b>Costos de obsolescencia:</b> se presenta por insolencia y vencimiento de materias primas.
          li.d-flex.align-items-start.pb-2.mb-2
            img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;" data-aos="fade-right")
            p.mb-0 <b>Costos perdidas y faltantes:</b> como su nombre lo indican están asociados a las pérdidas generadas en los inventarios y materias primas por diferentes conceptos.
        .tabla-a.color-primario.mb-5
          table
            thead
              tr(style="background-color: #E9F0FE")
                th Costo de Mantenimiento de inventario
                th Costo de pedido, embarque y recepción de inventario
                th Costo de faltantes de inventario
            tbody(style="background-color: white;")
              tr
                td(style="vertical-align: sub")
                  p <b>1.</b> Interés sobre el capital invertido en:
                    br
                    |- Inventario
                    br
                    |- equipo para almacenamiento
                    br
                    br
                  p <b>2.</b> Espacio de almacenaje:
                    |- Mantenimiento, rentas, impuesto predial
                    br
                    |- Calefacción, costo de servicio auxiliar
                    br
                    |- Limpieza
                    br
                    |- Depreciaciones o amortizaciones
                    br
                    br
                  p <b>3.</b> Costo de servicio de inventario:
                    br
                    |- Seguro de instalaciones e inventario
                    br
                    |- Costo recepción y almacenamiento
                    br
                    |- Robos, deterioro y obsolescencia
                    br
                    |- Registro y control del inventario
                    br
                    br
                  p <b>4.</b> Riesgo del inventario
                    br
                    |- Disminución de precio
                    br
                    |- Cambio de estilo, época
                td(style="vertical-align: sub")
                  p <b>1.</b> Preparar requisición
                  P <b>2.</b> Proceso de investigación y mercado de colocación
                  P <b>3.</b> Activación de orden de compra
                  P <b>4.</b> Análisis e inspección
                  P <b>5.</b> Muestra control de calidad
                  P <b>6.</b> Costo de la orden
                  P <b>7.</b> Recepción y revisión de cuentas por pagar
                  P <b>8.</b> Registro y control de compras
                  P <b>9.</b> Fletes, acarreos, maniobras
                  P <b>10.</b> Teléfono, internet, fax.
                  P <b>11.</b> Contabilidad y auditoria de inventario
                  P <b>12.</b> Costo

                td(style="vertical-align: sub")
                  p <b>1.</b> Disminución de utilidades por ventas perdidas
                  p <b>2.</b> Publicidad y/o promociones no aprovechadas
                  p <b>3.</b> Interrupción de los programas de producción
                  p <b>4.</b> Esfuerzos administrativos especiales
                  p <b>5.</b> Tiempo ocioso del personal y equipo
                  p <b>6.</b> Perdida de clientes
                  p <b>7.</b> Pérdida de crédito mercantil
      .d-flex.flex-wrap(titulo="Costos de almacenamiento")
        .d-flex.flex-wrap.align-items-center.p-3.mb-5(style="background-color: white;")
          img.mb-4.mb-md-auto.mx-auto.mb-4(src="@/assets/curso/temas/tema2/img-4.svg" style="max-width: 136px;" data-aos="fade-right")
          p.col-md.ps-md-4.fw-bold.mb-0 En el almacenamiento, los costos están asociados al movimiento y mantenimiento del inventario. Según la RAE (2020) “El almacenamiento es el proceso o acción de guardar o archivar algo. Un ejemplo, con distintas acepciones, se produce cuando se almacenan mercancías en un depósito”.
        p Entre estos costos tenemos:
        .d-flex.flex-wrap.mb-4.w-100
          img.col-lg-4.col-xl-3.col-md-5.mb-4.mb-md-auto.mx-auto(src="@/assets/curso/temas/tema2/img-17.png" style="max-width: 298px;")
          .col-lg-8.col-xl-9.col-md-7.ps-md-4.d-flex.flex-wrap
            ul.lista-ul--separador.mb-0.col-lg-6.pe-lg-3
              li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed; border-color: black")
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;")
                p.mb-0 Arrendamiento y compra de espacios físicos.
              li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed; border-color: black")
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;")
                p.mb-0 Control de <em>stock</em>.
              li.d-flex.align-items-start.pb-2.mb-2
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;")
                p.mb-0 Custodia y conservación de los inventarios.
            ul.lista-ul--separador.mb-0.col-lg-6.ps-lg-3
              li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed; border-color: black")
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;")
                p.mb-0 Almacenamiento en tránsito.
              li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed; border-color: black")
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;")
                p.mb-0 Depreciación de equipos.
              li.d-flex.align-items-start.pb-2.mb-2
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;")
                p.mb-0 Almacenamiento de equipos.
        p El proceso logístico en mención, se presenta a lo largo de toda la cadena de suministro y operaciones logísticas.
        img(src="@/assets/curso/temas/tema2/img-18.svg")

      .d-flex.flex-wrap(titulo="Costos de Transporte y Producción")
        p Se consideran uno de los recursos a destinar más altos de los procesos logísticos, y se debe realizar el estudio de los costos y beneficios, pros y contras de tener flota propia o arrendarla; ya que implican los siguientes costos asociados:
        .d-flex.flex-wrap.mb-4.w-100
          img.col-lg-4.col-xl-3.col-md-5.mb-4.mb-md-auto.mx-auto(src="@/assets/curso/temas/tema2/img-19.png" style="max-width: 298px;")
          .col-lg-8.col-xl-9.col-md-7.ps-md-4.d-flex.flex-wrap.mb-4
            ul.lista-ul--separador.mb-0.col-lg-6.pe-lg-3
              li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed; border-color: black")
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;")
                p.mb-0 Compra de la flota de transporte.
              li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed; border-color: black")
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;")
                p.mb-0 Arrendamiento flota de transporte.
              li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed; border-color: black")
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;")
                p.mb-0 Mantenimiento flota.
              li.d-flex.align-items-start.pb-2.mb-2
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;")
                p.mb-0 Administración de la flota.
            ul.lista-ul--separador.mb-0.col-lg-6.pe-lg-3
              li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed; border-color: black")
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;")
                p.mb-0 Amortización.
              li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed; border-color: black")
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;")
                p.mb-0 Depreciación de la flota.
              li.d-flex.align-items-start.pb-2.mb-2
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;")
                p.mb-0 Combustible.
          .tarjeta.color-primario.p-3.col-lg-10.mx-auto(style="background: linear-gradient(180deg, rgba(86,140,253,1) 0%, rgba(26,15,145,1) 100%);")
            .row.justify-content-around.align-items-center
              .col-3.col-sm-2.col-lg-1
                img(src="@/assets/curso/temas/tema2/img-20.svg")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0.texto-blanco
                    h3.mb-1 Estructura de costos de transporte
                    p.text-small Ver en material complementario, el video de Jorge Rosario (2020) donde se describen los principales costos que incurre una empresa en el componente del transporte.
                  .col-sm-auto
                    a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=2kNhyeWe1kE" target="_blank" style="background-color: #E6B046")
                      span Ver video
                      i.fas.fa-play
          
      .d-flex.flex-wrap(titulo="Costos logística inversa o reversa")
        p Los costos asociados de logística inversa están representados principalmente en lo que representa la devolución de un producto vendido (cliente) a la empresa nuevamente.
        .d-flex.flex-wrap.mb-4.w-100
          img.col-lg-4.col-xl-3.col-md-5.mb-4.mb-md-auto.mx-auto(src="@/assets/curso/temas/tema2/img-21.png" style="max-width: 298px;")
          .col-lg-8.col-xl-9.col-md-7.ps-md-4.d-flex.flex-wrap.mb-4
            ul.lista-ul--separador.mb-0.col-lg-6.pe-lg-3
              li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed; border-color: black")
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;")
                p.mb-0 Obsolescencia de productos.
              li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed; border-color: black")
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;")
                p.mb-0 Deterioro y daños.
              li.d-flex.align-items-start.pb-2.mb-2
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;")
                p.mb-0 Devoluciones.
            ul.lista-ul--separador.mb-0.col-lg-6.pe-lg-3
              li.d-flex.align-items-start.pb-2.mb-2(style="border-bottom-style: dashed; border-color: black")
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;")
                p.mb-0 Perdidas de mercancías.
              li.d-flex.align-items-start.pb-2.mb-2
                img.pt-1.me-2(src="@/assets/curso/temas/decorador-1.svg" style="max-width: 15px;")
                p.mb-0 Inventarios estacionales.
            .d-flex.flex-wrap.align-items-center.p-3.mb-5(style="background-color: white;")
              img.mb-4.mb-md-auto.mx-auto.mb-4(src="@/assets/curso/temas/tema2/img-22.svg" style="max-width: 136px;" data-aos="fade-right")
              p.col-md.ps-md-4.fw-bold.mb-0 Es de aclarar que la logística inversa o reversa también tiene otra función según Economipedia (2020) “La logística inversa es un tipo de logística encargada de la administración de residuos generados durante toda la cadena de suministro. Esto, con el objetivo de reciclar o destruir dicho material”. Lo que se busca es la reutilización y el mínimo impacto y máximo aprovechamiento medioambiental como consecuencia del desarrollo de los procesos logísticos.

      .d-flex.flex-wrap(titulo="Costos servicio al cliente")
        p La atención y servicio al cliente genera todo un conjunto de costos que la empresa debe cubrir y se basa especialmente en brindar información adicional sobre el producto y/o servicio que se esté vendiendo o prestando. El costo del servicio al cliente depende en gran medida el éxito o el fracaso, de todos los anteriores procesos y costos asociados puesto que representa la comunicación directa con el cliente.
        .tarjeta-avatar-b.col-xl-11.me-xl-auto.mb-4
          .tarjeta-avatar-b__img
            img.mx-auto(src='@/assets/curso/temas/tema2/img-23.svg' style="max-width: 104px")
          .tarjeta.tarjeta--azul.ps-lg-5(style="background-color: #91B3FA; box-shadow: 0 0 4px 4px #00000010; margin-top: auto; margin-bottom: auto")
            .p-4.py-md-3.d-flex.flex-wrap.align-items-center
              p.mb-0.fw-bold.pe-md-4(data-aos="fade-right") «Acércate más que nunca a tus clientes. Tan cerca, de hecho, que puedas decirles qué necesitan antes de que lo sepan por sí mismos». Steve Jobs.

        h4.text-center.w-100 UN MODELO DE SERVICIO AL CLIENTE Y LOS COSTOS PRINCIPALES
        img.mx-auto(src='@/assets/curso/temas/tema2/img-24.svg' style="max-width: 742px")
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

<style lang="sass">
.tarjeta-edit-2
  position: relative
  background: linear-gradient(0deg, rgba(222,222,222,1) 0%, rgba(255,255,255,1) 49%, rgba(222,222,222,1) 100%)
  margin-top: -4rem
  box-shadow: 0 0 3px 4px #00000010
  @media (max-width: 768px)
    margin-top: 0
    box-shadow: 0 0 2px 2px #00000010
</style>
