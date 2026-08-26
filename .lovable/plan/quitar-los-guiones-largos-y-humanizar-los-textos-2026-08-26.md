# Quitar los guiones largos y humanizar los textos

El símbolo "—" aparece en títulos, metadatos y textos del sitio y del CRM. Se elimina por completo del proyecto y se reescriben esas frases con puntuación natural (comas, puntos, dos puntos o paréntesis), de modo que el texto suene escrito por una persona y no generado.

## Dónde está y cómo queda

**Página principal y SEO**
- Título, og:title y twitter:title: "Nutrióloga en Playa del Carmen y en línea — Susana Wignall" pasa a "Susana Wignall, nutrióloga en Playa del Carmen y en línea".
- Hero: el H1 termina con "Susana Wignall" sin guion inicial, y la frase "sin dietas extremas" se une con coma.

**Secciones de la landing**
- Promoción de lanzamiento: "orientación nutricional personalizada, sin compromiso".
- Cómo trabajamos: "con tus horarios, presupuesto y gustos reales, no una dieta genérica".
- Página de nutrióloga en línea: la respuesta con guiones intercalados se reescribe usando paréntesis.

**CRM y pantalla de acceso**
- Títulos de las páginas del CRM (pacientes, agenda, consulta, acceso) pierden el guion y usan dos puntos o coma. La pantalla de acceso además queda como "Acceso al CRM clínico, Susana Wignall" (sin el prefijo "LN", coherente con el resto del sitio).

**Además**
- Se revisan los comentarios y textos internos que usan "—" para dejar el proyecto libre del símbolo.
- Se mantiene el separador "·" que se usa en los eyebrows y datos de contacto, ya que es parte del estilo editorial actual y no es un guion.

## Detalle técnico

- Archivos afectados: `src/routes/index.tsx`, `src/routes/__root.tsx`, `src/routes/auth.tsx`, `src/routes/nutriologa-en-linea.tsx`, `src/components/landing/Hero.tsx`, `src/components/landing/LaunchPromo.tsx`, `src/components/landing/Testimonials.tsx`, las páginas bajo `src/routes/_authenticated/crm.*`, y los comentarios en `src/lib/config.server.ts`, `src/lib/api/example.functions.ts`, `src/server.ts`, `src/styles.css`, `src/routes/README.md`.
- Solo cambios de copy y puntuación: sin tocar estructura, estilos, lógica ni datos estructurados (más allá de los títulos de metadatos que se reescriben).
- Al terminar se verifica que no quede ningún "—" ni "–" en `src/` y que el build siga pasando.
