# Trazo · datos, fórmulas y límites

## CSV de componentes

Archivo inicial: `plantillas/componentes.csv`. Está vacío salvo por los encabezados; completa datos reales antes de importarlo. Se aceptan UTF-8 con o sin BOM, coma o punto y coma, texto entre comillas dobles, comillas escapadas dobles y saltos de línea en campos citados. El parser valida ancho de filas y encabezados no repetidos.

| Columna | Significado | Regla |
| --- | --- | --- |
| concepto | Código único | Hasta 40 caracteres; comparación sin distinguir mayúsculas |
| descripcion | Trabajo cotizado | Obligatorio, hasta 1200 caracteres |
| unidad_concepto | Unidad de medición | Obligatoria, hasta 24 caracteres |
| cantidad | Cantidad total del concepto | Positiva, hasta 4 decimales |
| componente | Nombre del insumo | Obligatorio salvo fila de concepto sin componentes |
| tipo | Clasificación | material, manoobra, equipo u otro |
| unidad_componente | Unidad del insumo | Obligatoria |
| consumo | Insumo por una unidad del concepto | Positivo, hasta 4 decimales |
| precio | Precio de una unidad de insumo | No negativo, hasta 4 decimales; vacío significa pendiente |
| fuente | Enlace de referencia | Opcional, solo HTTPS sin credenciales |
| fecha_fuente | Fecha del precio o consulta | Opcional, AAAA-MM-DD válida |
| referencia | Proveedor, cotización o registro | Opcional, hasta 300 caracteres |
| notas_concepto | Especificación | Opcional, hasta 1200 caracteres |

Una fila por componente. Si varias filas comparten código, sus datos de concepto deben coincidir; de lo contrario se rechaza el archivo. Si un concepto aún no tiene componentes, deja vacíos TODOS los campos de componente de esa fila. Los nueve primeros encabezados deben estar presentes. Los cuatro últimos son opcionales. Los encabezados desconocidos no se utilizan.

No uses separadores de miles, símbolo monetario ni coma decimal. Los números admiten hasta 12 dígitos enteros y 4 decimales. La moneda se define una vez por propuesta; no hay conversión de divisas. Fechas válidas entre 1900 y 2199.

Límites: CSV hasta 2,1 MB (2.100.000 bytes); 200 conceptos; 2000 componentes en total; hasta 1000 por concepto. El archivo completo se valida antes de aplicar. Agregar rechaza códigos que ya existen. Reemplazar sustituye conceptos, conservando datos de proyecto y recargos.

## Cálculo exacto

Cada cantidad, consumo, precio y porcentaje se conserva como texto decimal. Para calcular, se convierte a un entero multiplicado por 10 000. No se usan aproximaciones binarias de decimales para los importes.

1. Directo unitario interno = suma de consumo × precio, conservando hasta ocho decimales producto.
2. Importe del concepto = directo unitario interno × cantidad total; se redondea a dos decimales.
3. Directo total = suma de importes de conceptos completos.
4. Indirectos = directo total × porcentaje / 100; redondeo a centavos.
5. Utilidad = (directo + indirectos) × porcentaje / 100; redondeo a centavos.
6. Impuestos = (directo + indirectos + utilidad) × porcentaje / 100; redondeo a centavos.
7. Total = suma del directo y los tres recargos ya redondeados.

El redondeo es al más cercano; medio centavo se redondea alejándose de cero. Los importes admitidos son no negativos. El unitario mostrado usa cuatro decimales, pero el importe se calcula con la precisión interna completa. Por ello multiplicar manualmente el unitario mostrado puede diferir en un centavo frente al cálculo interno si existen más de cuatro decimales de producto.

Un porcentaje vacío significa no aplicado. Un porcentaje cero sí fue escrito como cero. Se aceptan de 0 a 1000 %. No se determina si el recargo corresponde a una norma, contrato o régimen fiscal. Los campos de impuestos y bases son una regla configurable de este modelo; no reproducen automáticamente un formato normativo o una licitación.

## Faltantes y revisión

Un concepto sin componentes o con algún precio vacío queda pendiente y sin importe. No se suma parcialmente su costo al directo. La hoja de control y el documento identifican que el total es parcial y solo suma conceptos completos.

La ausencia de nombre de proyecto, cliente, alcance o fecha genera advertencias; también la ausencia de referencia/fuente o fecha por componente. Un precio igual a cero es válido si se introdujo explícitamente. Se recomienda justificarlo en la referencia.

## Exportación y recuperación

- HTML: documento autónomo con CSS integrado, presupuesto, condiciones, APU y fuentes. Puede imprimirse desde la herramienta o desde el archivo descargado.
- CSV: conceptos y componentes; no contiene datos del cliente, condiciones o porcentajes.
- JSON: propuesta completa. Formato app=`trazo-carlos`, version=1, project y concepts. Los números se guardan como cadenas decimales; no se serializa BigInt.

Los campos de texto CSV que podrían iniciar fórmulas reciben un apóstrofo protector. Esto puede ser visible en algunos lectores o al reimportar. JSON es el respaldo fiel recomendado. Los números válidos se exportan como números textuales sin fórmulas.

El estado se guarda con la clave `ibero-carlos-trazo-v1`. No se almacenan claves de acceso ni se envían datos. El espacio o bloqueo del navegador puede impedir la persistencia: se avisa y se conserva el estado en memoria hasta cerrar. Consulta las fuentes técnicas en FUENTES_TECNICAS.md.
