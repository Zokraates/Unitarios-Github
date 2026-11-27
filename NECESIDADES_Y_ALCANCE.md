# Carlos Francisco Reyna Cota · análisis y alcance

## Punto de partida recibido

Respuesta del 24/11/2026 a las 7:44:16 p. m. País: México. Experiencia declarada: principiante. Correo: francisco_10995@hotmail.com.

Solicitó hacer o revisar propuestas técnicas/económicas, elaborar precios unitarios, localizar información de materiales que no conoce todavía y automatizar el llenado de reportes y campos de una página. Indicó que ya tiene una web local. No aportó su código, dirección, plantillas ni archivos concretos.

## Necesidad interpretada

La primera dificultad no es presentar un catálogo comercial: es reunir datos coherentes y trazables que puedan alimentar varios documentos. Se construyó una mesa de propuestas independiente, pensada para practicar con un concepto real y ampliar luego la integración.

La inferencia de diseño es que un APU estructurado y una propuesta autocontenida permiten revisar mejor los datos que un formulario que solo redacte texto. Esta es una decisión de producto; no se afirma que reproduzca los requisitos de un cliente o licitación no proporcionados.

## Función entregada

- Cuatro páginas útiles y una página 404, con identidad técnica grafito/naranja y composición conceptual de un despiece de propuesta.
- Datos del proyecto: cliente, folio, fecha, moneda, descripción técnica, alcance, exclusiones, plazo, pago y vigencia.
- Conceptos con código único, unidad, cantidad y nota; componentes de material, mano de obra, equipo u otro.
- Consumo y precio por unidad con hasta cuatro decimales. Los precios pendientes permanecen pendientes; cero es un dato explícito.
- Indirectos, utilidad e impuestos opcionales. No hay tasas fiscales ni precios de mercado predefinidos.
- Fuente HTTPS, fecha y referencia manual por componente. No se afirma que el enlace haya sido verificado.
- Cálculo mediante enteros escalados y reglas de redondeo publicadas.
- CSV con validación, vista previa y confirmación; modo agregar o reemplazar conceptos. Un error conserva el estado actual.
- Recuperación completa desde JSON después de revisar un resumen. Los datos importados se reconstruyen a partir de campos admitidos.
- Propuesta HTML autónoma, impresión y descarga CSV/JSON. Los datos de usuario se escapan en HTML y los campos textuales se protegen en CSV.
- Guardado en este navegador con aviso de fallo y continuidad en memoria.

## Lo que falta para la fase conectada

| Objetivo declarado | Se entrega ahora | Dato o acceso pendiente |
| --- | --- | --- |
| Revisar archivos de propuesta | Desglose, campos y salida revisable | Formato real y criterios de aprobación |
| Completar reportes originales | Modelo de datos y mapeo descargable | Archivo de origen, versión y campos |
| Buscar materiales/precios | Registro manual de fuente, fecha y referencia | Proveedores, especificaciones, región y método de consulta autorizado |
| Rellenar la web automáticamente | Guía de integración y matriz de campos | URL exacta, flujo, cuenta autorizada y decisión sobre cada envío |
| Integrar la web local existente | Sitio local autónomo | Código actual, estructura y punto de integración |

No se incluye envío de documentos, acceso a cuentas, raspado web, credenciales, consulta de proveedores, OCR ni IA conectada. El cálculo no valida requisitos técnicos, contractuales o fiscales.

## Primer ejercicio

Elige un concepto real, su unidad y cantidad. Registra un insumo respaldado por una cotización y otro con precio pendiente. Verifica que el documento marque el concepto como pendiente y no lo incorpore al total. Completa después el precio faltante, registra fuente/fecha, define alcance y genera el documento nuevamente. Conserva el respaldo.

## Criterios concretos de aceptación

1. Se puede seguir cada costo hasta consumo, precio y fuente de un componente.
2. El cambio de cantidad actualiza el importe según el APU definido.
3. Un precio vacío no se confunde con cero ni completa el costo del concepto.
4. Los recargos tienen bases explícitas y están vacíos al comenzar.
5. CSV o JSON inválidos no sustituyen el trabajo actual; los válidos requieren confirmación.
6. Un respaldo JSON conserva datos y condiciones y permite recuperar la propuesta.
7. El HTML descargado abre sin dependencias externas y presenta sus faltantes.
8. Los textos importados se muestran como texto, sin ejecutar etiquetas o fórmulas.

## Verificación y límite

Se probaron cálculos, entradas inválidas, CRUD, importación, restauración, exportación, impresión solicitada al navegador, memoria cuando falla localStorage y navegación ARIA mediante Node VM y un DOM instrumentado del HTML real. No se inspeccionó el resultado en navegador ni se comprobó una impresora o un despliegue. El proyecto permanece local.

## Concordancia revisada el 26 de noviembre

El APU y la creación de una propuesta propia están cubiertos localmente. La revisión consiste en comprobar importes, fuentes y faltantes de los datos cargados; no interpreta requisitos técnicos de un documento original. El objetivo de completar los archivos que Carlos ya utiliza y rellenar su página externa sigue pendiente de recibir esas plantillas y la URL. La búsqueda de información de materiales también está pendiente: registrar una fuente no equivale a buscarla automáticamente. Trazo se entrega como herramienta independiente porque no se recibió el código de su web local.
