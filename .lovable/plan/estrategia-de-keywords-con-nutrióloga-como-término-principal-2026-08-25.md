# Estrategia de keywords con "nutrióloga" como término principal

## 1. Qué está pasando con el resultado de Google

En el código la home ya tiene el título "Nutrióloga en Playa del Carmen y en línea — Susana Wignall", pero el resultado que ves en Google todavía dice "LN Susana Wignall — Nutrióloga en Playa del Carmen y en …". Dos causas reales:

- Google guarda en caché el título hasta que vuelve a rastrear la página.
- Varias etiquetas globales siguen usando "LN Susana Wignall" como marca: el título y `og:site_name` en `__root.tsx`, `twitter:title`, el nombre del negocio en el marcado estructurado, footer y "Sobre mí". Google mezcla esas señales al elegir el título que muestra.

Solución: eliminar "LN" de todas las señales públicas y dejar "Nutrióloga" al inicio en cada una.

## 2. Arquitectura de keywords

| Página | Keyword principal | Keywords de apoyo |
|---|---|---|
| `/` (home) | nutrióloga Playa del Carmen | nutriólogo Playa del Carmen, nutrióloga cerca de mí, consulta de nutrición |
| `/nutriologa-playa-del-carmen` | nutrióloga en Playa del Carmen | nutriólogo en Playa del Carmen, nutrición clínica Playa del Carmen |
| `/consulta-nutricional` | consulta nutricional | consulta de nutrición, cuánto cuesta una consulta con nutrióloga, precio consulta nutrición |
| `/nutriologa-en-linea` | nutrióloga en línea | nutriólogo online México, consulta de nutrición por videollamada |
| `/analisis-corporal-tanita` | análisis de composición corporal | bioimpedancia Playa del Carmen, porcentaje de grasa corporal |

Regla: una keyword principal por página, sin repetir la misma en dos páginas (evita canibalización). "Nutrióloga" en femenino es la forma que usarás siempre en títulos y H1; "nutriólogo" se cubre dentro del texto de forma natural, porque mucha gente busca así.

## 3. Cambios concretos que implemento

**Quitar "LN" y poner "nutrióloga" al frente**
- `src/routes/__root.tsx`: título por defecto, `og:title`, `og:site_name`, `author`, `twitter:title` y el nombre del negocio en el marcado estructurado pasan a "Susana Wignall · Nutrióloga" / "Nutrióloga Susana Wignall".
- `src/routes/index.tsx`: nombre del negocio en el JSON-LD sin "LN".
- `src/routes/nutriologa-playa-del-carmen.tsx`: `businessName` sin "LN".
- `src/components/landing/Footer.tsx` y `About.tsx`: "Susana Wignall · Nutrióloga · Céd. 156228944".
- Descripciones de `/consulta-nutricional` y `/nutriologa-en-linea`: cambiar "con LN Susana Wignall" por "con la nutrióloga Susana Wignall".
- El CRM y `/auth` son privados: ahí se puede quedar el nombre interno, sin impacto SEO.

**Reforzar la keyword en cada página**
- Revisar que cada página tenga un solo H1 que empiece por su keyword principal.
- Ajustar títulos a menos de 60 caracteres y descripciones a menos de 160, con la keyword en los primeros 40 caracteres.
- Añadir la variante "nutriólogo" una vez en el cuerpo de la home y de la página local, redactada de forma natural.
- Enlaces internos con texto ancla descriptivo ("nutrióloga en línea", "consulta nutricional") en lugar de "ver más".

**Señales de marca**
- `alternateName` en el marcado estructurado con "Nutrióloga Susana Wignall" y "Susana Wignall Nutrición" para que Google entienda la marca.
- `sitemap.xml` con `lastmod` actualizado en las páginas modificadas, para acelerar el nuevo rastreo.

## 4. Lo que depende de ti (no es código)

- El título en Google se actualiza cuando Google vuelve a rastrear: puede tardar días. Puedes acelerarlo pidiendo indexación de la home en Search Console (Inspección de URL → Solicitar indexación).
- Usa "Nutrióloga Susana Wignall" (sin "LN") de forma idéntica en el Perfil de Empresa de Google, Instagram, Facebook, Doctoralia y Avena Health. La consistencia del nombre es lo que hace que Google deje de mostrar la versión antigua.

## 5. No incluye

- Páginas nuevas ni artículos de blog (siguiente fase).
- Precios o datos que no me hayas confirmado.
