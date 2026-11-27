# Siguiente fase · completar documentos y formularios

Esta guía prepara una integración. No contiene un robot activo ni código para acceder a una web externa.

## Material de entrada

Reúne un formato vacío original, una versión completada y aprobada sin datos sensibles, la URL exacta del formulario, los campos obligatorios y quién autoriza el acceso. Para tu web local, añade el código y las instrucciones de apertura. No incluyas contraseñas en CSV, JSON, JavaScript ni correos de proyecto.

## Matriz de campos

Completa MAPEO_AUTOMATIZACION.csv: nombre exacto del campo de destino, documento/URL, origen en la propuesta, transformación esperada, regla de revisión y estado. Las filas precargadas solo nombran rutas de datos de Trazo; el destino sigue vacío porque no fue proporcionado.

Distingue campos copiados, calculados y revisados manualmente. Los importes calculados deben provenir del motor y sus reglas; no se rellenan inventando precios ni usando texto generado sin respaldo. Define qué ocurre con un campo sin dato: detener, marcar pendiente o pedir revisión.

## Secuencia propuesta

1. Validar el JSON de la propuesta y las versiones de las plantillas de destino.
2. Extraer únicamente los campos aprobados de la matriz.
3. Preparar una copia del archivo o un borrador del formulario.
4. Comparar cantidades, fuentes e importes contra la propuesta de origen.
5. Mostrar una vista de los valores que se escribirían.
6. Aplicar cambios solo en el destino autorizado; conservar el original.
7. Revisar el resultado. El envío final es una acción separada y autorizada.

Para Word, Excel o PDF debe seleccionarse una biblioteca o API adecuada al formato real. Para una web debe preferirse su API documentada, si existe, o una automatización del flujo autorizado. No se asume que una página permita automatización ni que sus campos sean estables.

## Criterio para empezar a conectar

Un ejemplo real puede completarse de forma manual desde el JSON sin ambigüedad. Cada campo tiene origen, tipo y responsable. La copia de salida se puede revisar antes de cualquier envío. Cuando esa prueba sea consistente, se puede automatizar el mismo recorrido.
