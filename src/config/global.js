export default {
  global: {
    componenteFormativo: 'Costeo de procesos logísticos',
    descripcionCurso:
      'La administración eficiente de costos es esencial para lograr precios competitivos y mantener la calidad en un mercado volátil. La contabilidad de costos en procesos logísticos revela costos en la cadena de suministro. El capítulo de presupuestos proporciona herramientas para proyectar los recursos económicos de la organización. Este componente formativo brinda conocimientos sólidos sobre la salud financiera a través de los estados financieros y los indicadores de gestión financiera.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/float-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/float-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Costos en la gestión logística',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Introducción a la administración de los costos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Clasificación de los costos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Distribución de costos en los procesos logísticos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Logística inversa o reversa',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Costos ocultos',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Costos de calidad',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Conceptos básicos de economía',
            hash: 't_1_7',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Contabilidad de costos y costeo de los procesos logísticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Clasificación sistemas de costo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Diferencia entre costo y gastos de los procesos logísticos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Los presupuestos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Presupuesto maestro',
            hash: 't_2_1',
          },
          {
            numero: '3.2',
            titulo: 'Presupuestos en los procesos Logísticos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Estados Financieros',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Estado de la situación financiera - balance general',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Estado de resultados',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Estado de costo producción y venta',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Normas Internacionales de Información Financiera - NIIF',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Análisis financiero',
            hash: 't_4_5',
          },
          {
            numero: '4.6',
            titulo: 'Indicadores de gestión financieras',
            hash: 't_4_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/121523_CF08_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '',
      referencia:
        'Granada José Ivan. (2020). Logística inversa, más que un costo en la SCM. Revista zona logística.',
      tipo: 'Articulo web',
      link:
        'https://zonalogistica.com/logistica-inversa-mas-que-un-costo-en-la-scm/',
    },
    {
      tema: '',
      referencia:
        'Instituto Nacional de Contadores públicos de Colombia. (2020). Principales indicadores financieros y de gestión.',
      tipo: 'PDF',
      link: 'https://incp.org.co/Site/2012/agenda/7-if.pdf',
    },
    {
      tema: '',
      referencia:
        'Martínez Pardo, K. (2017). Impacto operativo en el proceso de convergencia a las NICSP para las entidades de gobierno en Colombia. Universidad Militar nueva Granada.',
      tipo: 'PDF',
      link:
        'https://repository.unimilitar.edu.co/bitstream/handle/10654/16270/MartinezPardoKirthaMaitea2017.pdf?sequence=1&isAllowed=y',
    },
    {
      tema: '',
      referencia: 'Rosario J. (2020). Estructura de costos [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=2kNhyeWe1kE',
    },
    {
      tema: '',
      referencia:
        'Siguenza J. (2019). Estado de costo de producción y ventas y su incidencia en la mano de obra. [Trabajo de titulación, Universidad Técnica de machala].',
      tipo: 'PDF',
      link: 'http://repositorio.utmachala.edu.ec/handle/48000/14977',
    },
    {
      tema: '',
      referencia:
        'Solo Contabilidad (s.f.). Práctica, Ejercicio de Presupuesto Maestro.',
      tipo: 'Página Web',
      link:
        'https://www.solocontabilidad.com/costos-ejercicios/practica-ejercicio-de-presupuesto-maestro-costos-presupuesto',
    },
  ],
  glosario: [
    {
      termino: 'Análisis financiero',
      significado:
        'el análisis financiero es el estudio e interpretación de la información contable de una empresa u organización con el fin de diagnosticar su situación actual y proyectar su desenvolvimiento futuro.',
    },
    {
      termino: 'Aprovisionamiento',
      significado:
        'la logística de aprovisionamiento se encarga de optimizar el pedido y recepción de todos los elementos que una empresa necesita para su producción.',
    },
    {
      termino: 'Balance general',
      significado:
        'el balance general, también conocido como balance de situación, balance contable o estado de situación patrimonial, es un estado financiero que refleja en un momento determinado la información económica y financiera de una empresa, separadas en tres masas patrimoniales: activo, pasivo y patrimonio neto.',
    },
    {
      termino: 'Compras',
      significado:
        'la compra es la acción mediante la que un agente (el comprador), adquiere un bien o un servicio de otro agente (el vendedor), a cambio de una contraprestación monetaria o en especie.',
    },
    {
      termino: 'Costo ABC',
      significado:
        'es un modelo que permite la asignación y distribución de los diferentes costos indirectos, de acuerdo a las actividades realizadas, pues son éstas las que realmente generan costes.',
    },
    {
      termino: 'Costo logístico',
      significado:
        'el coste logístico, o costo logístico, es la suma de aquellos costos ocultos que se producen por la sucesión de actividades como el almacenaje o el transporte de un bien, desde el productor hasta el comprador final.',
    },
    {
      termino: 'Costo oculto',
      significado:
        'los costes ocultos son señal de ineficiencia que acaba provocando un gasto innecesario por dejadez, poca planificación o mal uso de los recursos.',
    },
    {
      termino: 'Gasto',
      significado:
        'gasto es la utilización o consumo de un bien o servicio a cambio de una contraprestación, se suele realizar mediante una cantidad saliente de dinero.',
    },
    {
      termino: 'Indicador de eficiencia',
      significado:
        'el indicador de eficiencia mide el logro de los resultados propuestos. Indica si se hicieron las cosas que se debían hacer, los aspectos correctos del proceso.',
    },
    {
      termino: 'Indicador de endeudamiento',
      significado:
        'los indicadores de endeudamiento (estructura de capital) son una herramienta utilizada para medir el nivel de obligaciones que tiene la empresa; el financiamiento de la entidad se puede obtener de dos fuentes: interna y externa.',
    },
    {
      termino: 'Indicador de gestión',
      significado:
        'un indicador de gestión es la expresión cuantitativa del comportamiento y desempeño de un proceso, cuya magnitud, al ser comparada con algún nivel de referencia, puede estar señalando una desviación sobre la cual se toman acciones correctivas o preventivas según el caso.',
    },
    {
      termino: 'Indicador de rentabilidad',
      significado:
        'los indicadores de rentabilidad permiten realizar un adecuado seguimiento a la situación financiera de la empresa, en especial para determinar la manera en que las ventas se convierten en utilidades.',
    },
    {
      termino: 'Logística inversa',
      significado:
        'la logística inversa es un tipo de logística que se encarga de la gestión de los residuos o desechos que se generan durante toda la cadena de suministro. Esto, con el objetivo de reciclar o destruir dicho material.',
    },
  ],
  referencias: [
    {
      referencia:
        'Blocher, E. J., Stout, D. E., Cokins, G., & Chen, K. H. (2008). Administración de costos. McGraw Hill.',
      link: '',
    },
    {
      referencia:
        'Castro, J. A. O., Camelo, N. S., & Ospina, Y. I. C. (2016). Costos logísticos y metodologías para el costeo en cadenas de suministro: una revisión de la literatura. Cuadernos de contabilidad, 17(44), 377-420.',
      link:
        'https://revistas.javeriana.edu.co/index.php/cuacont/article/view/19107',
    },
    {
      referencia:
        'Camacho, H., Gómez, K. L., & Monroy, C. A. (2012). Importancia de la cadena de suministros en las organizaciones. Tenth LACCEI Latin American and Caribbean Conference (LACCEI’2012).',
      link: 'http://www.laccei.org/LACCEI2012-Panama/RefereedPapers/RP200.pdf',
    },
    {
      referencia: 'Colin, G. (2014). Contabilidad de costos. Mc Graw-Hill.',
      link: '',
    },
    {
      referencia:
        'Cure Vellojín, L., Meza González, J. C., & Amaya Mier, R. (2011). Logística Inversa: una herramienta de apoyo a la competitividad de las organizaciones. Revista Científica Ingeniería y Desarrollo, 20(20), 184-202.',
      link:
        'https://rcientificas.uninorte.edu.co/index.php/ingenieria/article/view/2801',
    },
    {
      referencia:
        'Gillezeau, P., & Romero, S. (2004). Sistema de costos de calidad como proceso de mejoramiento continuo. Revista ágora, 13, 17-42.',
      link:
        'http://www.revencyt.ula.ve/storage/repo/ArchivoDocumento/agora/v7n13/articulo2.pdf',
    },
    {
      referencia:
        'Parra Acosta, J. & Peña-González, Y. (2014). La teoría de los costos-desempeños ocultos: una aproximación teórica [número especial: Contabilidad Gerencial]. Cuadernos de Contabilidad, 15 (39), 725-743.',
      link: 'http://dx.doi.org/10.11144/Javeriana.cc15-39.tcdo',
    },
    {
      referencia:
        'Salcido, M. H. T., & Jaime, A. G. (2015). El presupuesto maestro como guía y horizonte de crecimiento de una empresa. Cultura Científica y Tecnológica, (37).',
      link: 'http://erevistas.uacj.mx/ojs/index.php/culcyt/article/view/298',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Gloria Lida Alzáte Suarez',
          cargo: 'Adecuación instruccional',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Rodríguez Cuéllar',
          cargo: 'Instructor ',
          centro:
            'Regional Huila - Centro de la industria, la empresa y los servicios',
        },
        {
          nombre: 'Luis Fernando Botero Mendoza',
          cargo: 'Diseñador Instruccional',
          centro:
            'Regional Distrito Capital, Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Rafael Neftali Lizcano Reyes',
          cargo: 'Asesor Pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luz Aída Quintero Velásquez',
          cargo: 'Diseñadora instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro: 'Regional Distrito Capital- Centro de Diseño y Metrología ',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñador y evaluador instruccional',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jesús Antonio Vecino Valero',
          cargo: 'Diseño web',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Jhon Edinson Castañeda Oviedo',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
