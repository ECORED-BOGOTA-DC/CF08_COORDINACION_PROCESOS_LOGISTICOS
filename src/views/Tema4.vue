<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Los Estados Financieros 
    
    .bloque-texto-g.bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img-1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 Se consideran la representación de la salud financiera de las organizaciones y personas naturales o jurídicas, en donde se refleja información que se debe presentar de manera oficial para declaración de renta y terceros interesados en la información como son: proveedores, clientes, accionistas y se denominan estados financieros oficiales, en Colombia son:
    
    .d-flex.flex-wrap.justify-content-center.mb-5
      .col-12.col-sm-5.col-lg-3.tarjeta-edit-1
        span.number-tj(style="left: .5rem; right: auto;") 01
        img.mx-auto.mb-4(src="@/assets/curso/temas/tema4/img-2.svg" style="max-width: 93px")
        h5.mb-0.text-center(style="font-weight: normal") Balance general o Estado de cambio en la situación financiera.
      .col-12.col-sm-5.col-lg-3.tarjeta-edit-1
        span.number-tj(style="left: .5rem; right: auto;") 02
        img.mx-auto.mb-4(src="@/assets/curso/temas/tema4/img-3.svg" style="max-width: 93px")
        h5.mb-0.text-center(style="font-weight: normal") Estado de resultados.
      .col-12.col-sm-5.col-lg-3.tarjeta-edit-1
        span.number-tj(style="left: .5rem; right: auto;") 03
        img.mx-auto.mb-4(src="@/assets/curso/temas/tema4/img-4.svg" style="max-width: 93px")
        h5.mb-0.text-center(style="font-weight: normal") Estado de cambio en el patrimonio.

    .cajon.color-primario.p-4.mb-4(data-aos="fade-left" style="background-color: #E0F4FE")
      p.mb-0 El estado de costo producción y venta es un estado financiero interno no oficial,  que refleja los costos de producción de los productos vendidos.
    
    h4.mb-5.text-center La información se ve reflejada en los estados financieros son:

    .col-xl-10.mx-auto.d-flex.flex-wrap.justify-content-center.mb-5
      .col-xxl.col-xl-2.col-lg-3.tarjeta-edit-1
        span.number-tj 01
        img.mx-auto.mb-4(src="@/assets/curso/temas/tema4/tj-1.svg" style="max-width: 152px")
        h5.mb-0.text-center Estado financiero actual de la entidad
      
      .col-xxl.col-xl-2.col-lg-3.tarjeta-edit-1
        span.number-tj 02
        img.mx-auto.mb-4(src="@/assets/curso/temas/tema4/tj-2.svg" style="max-width: 152px")
        h5.mb-0.text-center Resultados de las operaciones en un periodo
      
      .col-xxl.col-xl-2.col-lg-3.tarjeta-edit-1
        span.number-tj 03
        img.mx-auto.mb-4(src="@/assets/curso/temas/tema4/tj-3.svg" style="max-width: 152px")
        h5.mb-0.text-center Los cambios de la inversión
      
      .col-xxl.col-xl-2.col-lg-3.tarjeta-edit-1
        span.number-tj 04
        img.mx-auto.mb-4(src="@/assets/curso/temas/tema4/tj-4.svg" style="max-width: 152px")
        h5.mb-0.text-center Los movimientos de dinero entre cuentas de la empresa
      
      .col-xxl.col-xl-2.col-lg-3.tarjeta-edit-1
        span.number-tj 05
        img.mx-auto.mb-4(src="@/assets/curso/temas/tema4/tj-5.svg" style="max-width: 152px")
        h5.mb-0.text-center Cambios de la inversión de los propietarios
    
    .tarjeta-avatar-b.col-xl-10.me-xl-auto.mb-5
      .tarjeta-avatar-b__img
        img.mx-auto(src='@/assets/curso/temas/img-2.svg' style="max-width: 104px")
      .tarjeta.tarjeta--azul.ps-lg-5(style="background-color: #F6F6F6")
        .p-4.py-md-3.d-flex.flex-wrap.align-items-center
          p.mb-0.order-2.order-md-1.col-md.pe-md-4(data-aos="fade-right") Los Estados financieros, cuentas anuales o informes financieros para Economipedia (2020) <b>“Son la radiografía de la contabilidad de una organización, donde se puede observar las condiciones financieras actuales de la empresa durante un período de tiempo específico”.</b>
          img.mx-auto.mb-4.mb-md-auto.order-1.order-md-2.mx-lg-5(src="@/assets/curso/temas/tema1/img-4.svg" style="max-width: 135px;" data-aos="fade-left")
    
    Separador 

    .titulo-segundo.color-acento-botones
      h2#t_4_1 4.1 Estado de la situación financiera - balance general
    
    p El estado de la situación financiera, también llamado balance general lo componen tres (3) grandes cuentas que están representadas así:
    
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
