# Cambiar todos los acentos café a verde

Hoy los detalles decorativos (acentos manuscritos, números de sección, etiquetas "Explora", badge "Más elegido", comillas de testimonios, iconos de FAQ) usan un tono terracota/café. Los pasamos a verde para una identidad totalmente verde-crema.

## Qué cambia visualmente
- Acentos manuscritos del logo, hero, beneficios y servicios: verde salvia en lugar de café.
- Numeración de secciones, eyebrows y iconos pequeños: verde.
- Badge destacado de paquetes y bloque de precio: verde en lugar de terracota.
- Cita manuscrita en "Sobre mí" y comillas de testimonios: verde.

## Cómo se hace
Un solo cambio en el sistema de diseño, sin tocar componentes: en `src/styles.css` redefinir el token `--clay` de terracota a un verde salvia medio (aprox. `oklch(0.5 0.045 140)`), lo bastante distinto del `--olive` y `--sage` para que los acentos sigan leyéndose como acento y mantengan buen contraste sobre crema.

Verificación: revisar en el preview hero, beneficios, servicios, paquetes, testimonios, FAQ y las páginas SEO para confirmar que no queda ningún rastro café.
