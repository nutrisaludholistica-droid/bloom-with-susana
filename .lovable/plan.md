# Unificar el berenjena claro en todo el diseño

Hoy hay dos morados distintos conviviendo: el berenjena claro (`--eggplant`, usado en el fondo de Servicios, la banda decorativa, el badge "Más elegido" y los acentos manuscritos) y un ciruela más apagado y oscuro (`--clay`, usado en eyebrows, comillas de "Sobre mí", el "nutrición" del header, iconos de FAQ y las páginas SEO). El resultado se siente inconsistente y en algunos puntos más pesado de lo deseado.

## Qué se va a hacer

1. Unificar la familia morada en un solo tono berenjena claro, y usarlo en todos los lugares donde hoy aparece `clay` o `plum`, para que el sitio tenga un único acento morado coherente.
2. Bajar un poco más la intensidad general: subir la luminosidad del berenjena y reducir ligeramente la saturación, de modo que el conjunto quede en tonos bajos y suaves (nada saturado ni oscuro).
3. Para el fondo de la sección de Servicios (donde el berenjena cubre gran superficie con texto crema encima), usar una variante ligeramente más profunda del mismo tono para que el texto crema siga siendo perfectamente legible, sin romper la unidad de color.
4. Revisar los usos sobre fondo crema (eyebrows, números de sección, comillas, iconos, badge) para confirmar que el nuevo tono más claro sigue teniendo contraste suficiente y ajustar sólo donde haga falta.
5. Aplicar la misma lógica en modo oscuro (CRM) para que ambos temas queden alineados.

## Detalle técnico

- Archivo principal: `src/styles.css`.
  - Aclarar `--eggplant` (aprox. `oklch(0.58 0.045 335)`) y añadir/ajustar una variante de superficie más profunda para fondos amplios (aprox. `oklch(0.46 0.05 335)`), expuesta como token en `@theme inline`.
  - Alinear `--clay` y `--plum` al nuevo berenjena para eliminar los dos morados distintos.
  - Coherencia equivalente en el bloque `.dark`.
- `src/components/landing/Services.tsx`: usar el token de superficie berenjena para el fondo de la sección.
- No se cambia estructura, copy ni lógica: sólo color y presentación.
