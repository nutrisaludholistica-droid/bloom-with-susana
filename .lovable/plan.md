# Unificar berenjena claro, reforzar el verde y suavizar los fondos

Hoy hay dos morados distintos conviviendo (berenjena claro `--eggplant` y ciruela apagado `--clay`), y el contraste principal usa un blanco crema cálido (`--cream`). La usuaria quiere: un solo berenjena clarito, el verde milpa con más protagonismo, y tonos bajos en general, cambiando el crema por algo más gris-blanco.

## Qué se va a hacer

1. **Un solo berenjena claro:** unificar `--clay` y `--plum` al tono berenjena más claro y menos saturado (aprox. `oklch(0.58 0.04 335)`), de modo que todo el sitio use un único acento morado consistente (eyebrows, comillas, "nutrición" del header, iconos, acentos manuscritos, páginas SEO).
2. **Verde milpa como color de peso:** mantener el verde como primary y aumentar su presencia en acentos de sección donde hoy domina el morado (por ejemplo: números de sección y detalles en Servicios, bordes o marcas decorativas), para que la identidad verde-berenjena quede equilibrada.
3. **Fondos más neutros y bajos:** llevar `--cream` (y el fondo general) de un crema cálido hacia un blanco grisáceo suave (menos saturación amarillenta, manteniendo luminosidad alta) para que la página se sienta más serena y moderna, y el berenjena destaque con elegancia.
4. **Sección de Servicios:** sobre el fondo berenjena, usar texto blanco grisáceo suave en lugar de crema cálido, y ámbar sólo en micro-acentos; el berenjena de fondo se aclara un poco más cuidando el contraste del texto.
5. **Revisión de contraste:** verificar legibilidad del nuevo berenjena claro sobre fondo claro (eyebrows, badge "Más elegido") y ajustar solo donde sea necesario.
6. **Modo oscuro (CRM):** aplicar la misma lógica de unificación y suavidad para que ambos temas queden alineados.

## Detalle técnico

- Archivo principal: `src/styles.css`.
  - Ajustar `--cream`, `--background` y tokens afines hacia blanco grisáceo de baja saturación.
  - Unificar `--clay`/`--plum` con `--eggplant` aclarado; añadir una variante de superficie berenjena algo más profunda para fondos amplios, expuesta en `@theme inline`.
  - Ajustes equivalentes en el bloque `.dark`.
- `src/components/landing/Services.tsx`: fondo con el token de superficie berenjena y numeración/acentos en verde suave donde convenga.
- Posibles retoques puntuales de acento en `Benefits.tsx`, `Packages.tsx`, `About.tsx` sólo si el contraste lo requiere.
- Sin cambios de estructura, copy ni lógica: sólo color y presentación.
