# Rediseño del bloque "Sobre mí"

El bloque actual mete todo (foto, historia larga, formación y botón) en dos columnas apretadas, y el CTA queda perdido entre párrafos. Se redistribuye la información y el recuadro para agendar se vuelve grande y visible.

## Nueva distribución

```text
[ ancho completo con fondo suave ]
  Sobre mí
  Soy Susana Wignall, nutrióloga y chef
  ------------------------------------------------
  |  FOTO (vertical)  |  "Ahora entiendo mi cuerpo"
  |                   |  historia en 4 párrafos, en 2 columnas
  |  Céd. 156228944   |  cierre en verde milpa
  ------------------------------------------------
  |  FORMACIÓN Y LOGROS: 10 items en 2 o 3 columnas |
  ------------------------------------------------
  |  RECUADRO CTA grande, borde berenjena marcado   |
  |  "Agendemos tu consulta" + botón berenjena      |
```

- La sección deja de estar contenida en el ancho estrecho: se extiende al ancho completo con una banda de fondo suave, y el contenido respira con más aire.
- La foto se mantiene a la izquierda con su cédula profesional debajo, pero más grande y alineada al inicio del texto.
- La historia se reparte en dos columnas de lectura en escritorio (una sola en móvil) para que no se vea como un muro de texto.
- La cita manuscrita "Ahora entiendo mi cuerpo" se destaca arriba del texto, más grande.
- "Formación y logros" pasa a una franja propia, separada por una línea, en 2 columnas (3 en pantallas grandes).

## Recuadro para agendar

- Recuadro propio al final del bloque, ancho completo, con borde berenjena marcado (2px) y fondo muy claro.
- Mucho más grande: título corto ("Agendemos tu consulta"), una línea de apoyo (presencial en Playa del Carmen o en línea) y el botón.
- Botón en tono berenjena con texto crema, tamaño mayor que el actual, mismo enlace de WhatsApp y mismo evento de seguimiento en GA4.
- En móvil el recuadro se apila y el botón queda a ancho completo.

## Detalle técnico

- Solo se edita `src/components/landing/About.tsx` (maquetación y presentación).
- Se usan tokens existentes (`eggplant`, `olive`, `cream`, `border`); sin colores nuevos ni cambios en `src/styles.css`.
- Se conservan el CTA de WhatsApp (`WA_MSG.trust`), el evento `whatsapp_click_about`, la imagen con `loading="lazy"` y su `alt`.
- Sin cambios de lógica, datos ni orden de secciones en `src/routes/index.tsx`.
