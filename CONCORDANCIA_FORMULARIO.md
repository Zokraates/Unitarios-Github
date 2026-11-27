# CARLOS FRANCISCO REYNA COTA · Trazo

**Contexto del formulario:** México; nivel principiante; situación web declarada: `si_tengo`.

El enfoque de propuestas/APU concuerda con el formulario. La automatización de archivos, búsqueda de información y página externa permanece pendiente; no equivale a una solución completa de todas las solicitudes.

| Solicitud del formulario | Correspondencia comprobada | Estado | Qué falta o debe validarse |
| --- | --- | --- | --- |
| **Crear propuestas técnicas y económicas desde su información.** — «Hacer y/o revisar propuestas técnicas y económicas con ciertos archivos» | Permite registrar los datos técnicos y comerciales del proyecto y reunirlos con el presupuesto en una propuesta HTML descargable. Trabaja con los campos y datos cargados en Trazo. | Cubierto parcialmente | La herramienta genera su propio HTML desde campos y CSV. Faltan los archivos originales, su estructura y un ejemplo aprobado para reproducirlos. |
| **Revisar las propuestas y detectar faltantes.** — «Hacer y/o revisar propuestas técnicas y económicas con ciertos archivos» | Comprueba importes y señala precios, referencias, fechas y datos generales que faltan. Presenta esas advertencias junto al presupuesto para su revisión. | Cubierto parcialmente | No interpreta documentos externos ni valida requisitos técnicos, contractuales o de licitación; faltan archivos y criterios de revisión. |
| **Desglosar y calcular precios unitarios.** — «también realizar precios unitarios» | Desglosa cada concepto en componentes, consumos y precios por unidad, calcula sus importes y aplica los porcentajes introducidos. Las bases de cálculo y los redondeos están documentados. | Disponible localmente | Los rendimientos, especificaciones, cotizaciones y porcentajes deben provenir del trabajo de Carlos; no hay datos inventados. |
| **Buscar información de materiales e insumos faltantes.** — «me pudiera buscar información que necesito para realizar el trabajo» | Permite guardar por componente una referencia, un enlace y la fecha de la fuente del precio. La búsqueda y comprobación de esa información siguen siendo manuales. | Requiere insumo o conexión | Proveedores o fuentes autorizadas, materiales y especificaciones, región, moneda y criterio de vigencia. Registrar una URL no realiza una búsqueda. |
| **Completar una página externa automáticamente.** — «llenar campos en una página pero quisiera que fuera por automático» | Incluye una matriz para relacionar los datos de la propuesta con los campos de una página y una guía para preparar la integración. No ejecuta el llenado de una página externa. | Requiere insumo o conexión | URL exacta, flujo, campos, cuenta autorizada y reglas de preparación/envío. No hay robot ni conexión externa activa. |
| **Llenar reportes y formatos originales.** — «especialmente el llenado de archivos que me piden como reportes o así» | Genera una propuesta HTML propia y exporta tablas CSV y respaldos JSON. Todavía no completa los formatos originales de reportes que utiliza Carlos. | Requiere insumo o conexión | Plantillas originales Word/Excel/PDF u otros formatos, versiones, campos y reglas de salida. La descarga de un HTML nuevo no rellena esos archivos. |
| **Considerar la web local ya existente.** — «ahorita tengo una pero local» | Trazo se entrega como herramienta independiente que puede abrirse localmente. La web que Carlos ya tenía no fue modificada ni integrada. | Sin requisito concreto declarado | No se recibió código o dirección ni se especificó un rediseño de esa web. Su integración requiere el proyecto original y el punto de incorporación. |

### Ajustes realizados en esta revisión

- La portada ahora dice «De tus datos a una propuesta revisable», evitando sugerir una lectura completa de archivos originales.
- La introducción distingue datos verificados, cálculo y revisión del documento.
- Ayudas de tamaño alineadas con los límites vigentes: CSV 2,1 MB y JSON 3,1 MB. No cambió la regla.
- Generador añadido y fixture regenerada desde el HTML exacto después del cambio de ayudas.
- Se añade conclusión de concordancia y distinción de funciones pendientes.

### Evidencia y verificación dirigida

- Lectura completa de formulario, contenido visible, guías y funciones analyze/importCSV/documentBody.
- Sintaxis core.js: node --check PASS.
- Contraste de hash confirma que el único cambio JS es el texto de ayuda del límite.
- IDs, enlaces y fragmentos locales PASS; fixture con SHA del HTML vigente.

**Documentación del proyecto:** [Ficha de necesidades y alcance](NECESIDADES_Y_ALCANCE.md) · [Instrucciones](LEEME.txt).
