<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="fade-right") En resumen, el costeo de procesos logísticos es esencial para gestionar los costos operativos en la cadena de suministro. La contabilidad de costos asigna los costos de forma precisa, distinguiendo entre costos fijos y variables. Los presupuestos planifican ingresos y gastos, garantizando el cumplimiento de metas y la alineación estratégica. Los estados financieros oficiales reflejan la salud financiera y son importantes para declaraciones y stakeholders. A continuación, se presenta un esquema que aborda estos aspectos.

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Resumen que se hace mediante un mapa conceptual los temas abordados en el componente y que son necesarios conocer y manejar para gestionar los costos operativos en la cadena de suministro que implica conocer de costos, planeación de presupuestos, estados financieros entre otros temas.")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
