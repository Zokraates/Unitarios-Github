# Resultados de verificación

**Resultado:** 12 verificaciones incluidas aprobadas. La batería integral de trabajo de los dos sitios obtuvo 29 verificaciones aprobadas antes del empaquetado; algunas cubren recorridos equivalentes y no se suman como casos independientes.

## Cobertura

- Inicio vacío y ausencia de tasas/precios predefinidos.
- APU con decimales exactos, cantidad y recargos en las bases publicadas.
- Faltantes distintos de cero; conceptos incompletos fuera del total parcial.
- CSV con comillas, delimitadores y validación; retorno de conceptos sin componentes.
- Rechazo de códigos repetidos, cifras inválidas, fechas imposibles y URL inseguras.
- Escapado HTML y protección de campos textuales CSV.
- Crear/editar conceptos y componentes sobre el DOM real.
- Vista previa y confirmación de CSV y respaldo completo; error conserva estado.
- Descarga de HTML y JSON, solicitud de impresión, menú ARIA.
- Guardado local fallido conserva el trabajo en memoria y avisa.

## Método y límites

Verificación ejecutada el 25 de noviembre de 2026 sobre los JavaScript entregados. Se usó Node VM y un DOM instrumentado construido a partir del HTML real; las descargas se inspeccionaron como Blob y se probó la continuidad en memoria al fallar localStorage. Las entradas de prueba son sintéticas y están únicamente en pruebas; la aplicación empieza vacía.

No se abrió un navegador, no se ejecutó Playwright/CUA/CDP, no se levantó un servidor y no se tomó ninguna captura. La sesión tenía una restricción explícita contra la vista de archivos locales en navegador. El DOM de pruebas no comprueba la composición visual ni el motor real de impresión/decodificación; su alcance es lógica, eventos, estado y archivos. El test de impresión verifica que se invoque el diálogo, no una impresora real. La decodificación de imagen se simula en el entorno de pruebas para ejercitar tanto éxito como rechazo; la aplicación llama al decodificador del navegador al usarse.

La revisión estática confirma cinco HTML, rutas internas y anclas existentes, IDs únicos, CSS/JS separados y recursos locales. Se revisaron reglas responsive, tamaños legibles, foco visible, reduced motion y scroll local de tablas mediante código; no se afirma inspección visual a 320 px. No se publicó ni envió ningún archivo.

## Repetir las pruebas incluidas

Con Node instalado, desde esta carpeta:

```sh
node pruebas/verificar.cjs
```

El harness usa assets/app.js, assets/core.js y assets/workspace.js del sitio actual. La fixture herramientas-dom.json se generó de esta versión de herramientas.html. Si se modifica el HTML, también se debe regenerar la fixture para probar la estructura nueva. No hay dependencia de otra carpeta de alumno.


## Revisión del 26 de noviembre de 2026

Resultado vigente: **14 grupos aprobados** en las pruebas incluidas del sitio. Se añadieron regresiones para los fallos observados en esta revisión.

Los conceptos/componentes nuevos y los datos del proyecto muestran un control para descartar cambios sin guardar. La vista indica cuándo está pendiente de actualizarse. Al descargar o imprimir se genera la versión actual guardada; los cambios de formulario deben guardarse o descartarse primero. Los respaldos conservan el mismo formato versión 1.

Se regeneró la fixture DOM desde herramientas.html después de añadir los controles. Se verificaron rutas, anclas, IDs, navegación activa, fuentes locales y sintaxis de estilos por código. Sin navegador, renderizador, servidor, despliegue ni envío de mensajes.


### Respaldo recuperable — revisión del 26 de noviembre

Antes de guardar se mide el JSON completo en UTF-8 con el mismo formato de descarga. Si excede 3,1 MB, se rechaza el cambio antes de reemplazar los datos y se muestra una explicación. El esquema de respaldo se conserva; la lectura y exportación de datos anteriores siguen disponibles. Verificación adicional de este caso en el informe general.
