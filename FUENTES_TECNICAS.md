# Fuentes técnicas

Fuentes técnicas consultadas el 25 de noviembre de 2026

- MDN, Window.localStorage: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
  El almacenamiento pertenece al origen y puede fallar. En archivos file: su comportamiento depende del navegador. Por eso cada herramienta avisa y permite respaldar.
- MDN, BigInt: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt
  Se emplean enteros de precisión arbitraria para el cálculo. El respaldo conserva las entradas como texto decimal y no serializa BigInt directamente.
- MDN, serialización de BigInt: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Errors/BigInt_not_serializable
  Contexto técnico del diseño de respaldos JSON.
- Netlify, configuración por archivo: https://docs.netlify.com/build/configure-builds/file-based-configuration/
  Se incluye netlify.toml con publicación del directorio actual. Esta entrega no registra ni publica ningún sitio.
