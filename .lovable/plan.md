# Estudio de keywords real y plan para ser #1 en "nutrióloga"

## Lo que dicen los datos reales (Semrush, base México)

| Keyword | Volumen | Dificultad | Lectura |
|---|---|---|---|
| nutrióloga | 49,500/mes | 41/100 | Enorme demanda, pero es nacional y genérica: la ocupan directorios y grandes portales |
| nutriólogo playa del carmen | 390/mes | 26/100 | Ganable. Ojo: la variante masculina tiene 4x más búsquedas que la femenina |
| nutrióloga en línea | 390/mes | 18/100 | Fácil y con intención de compra alta (CPC $0.63) |
| nutrióloga cerca de mí | 320/mes | 21/100 | Se gana con Perfil de Empresa de Google + señales locales |
| nutrióloga playa del carmen | 90/mes | 19/100 | Fácil, tu keyword ancla |
| nutriólogo cerca de mí | 2,400/mes | — | Alto volumen, se captura con presencia local fuerte |
| consulta nutricional / consulta de nutrición | 720 + 390/mes | — | Ya tienes página para esto |
| consultorio de nutrición | 1,300/mes | — | Oportunidad de contenido local |

Conclusión honesta: "nutrióloga" a secas (49.5K/mes) no se gana con una landing local; se gana acumulando autoridad temática. La ruta realista para ser #1 es dominar primero el racimo local + en línea (dificultad 18–26, casi sin competencia, como intuyes) y desde ahí escalar a los términos genéricos de alto volumen.

## Estrategia en 3 anillos

**Anillo 1 — Local (ganar en 4–8 semanas)**
- `/` → nutrióloga en Playa del Carmen y en línea
- `/nutriologa-playa-del-carmen` → nutrióloga/nutriólogo en Playa del Carmen (incluir la variante masculina en el cuerpo, es donde está el volumen)
- Nueva `/nutriologa-cerca-de-mi` no hace falta: se resuelve con datos estructurados + Perfil de Empresa de Google

**Anillo 2 — Servicio e intención (2–3 meses)**
- `/nutriologa-en-linea` → nutrióloga en línea (dificultad 18, la más fácil con intención comercial)
- `/consulta-nutricional` → consulta nutricional / consulta de nutrición / cuánto cuesta
- `/analisis-corporal-tanita` → bioimpedancia y composición corporal

**Anillo 3 — Autoridad temática hacia "nutrióloga" (3–9 meses)**
Páginas nuevas long-tail, una por intención, que alimentan la autoridad del término maestro:
- nutrióloga para recomposición corporal
- nutrición para salud digestiva (inflamación, colitis, SII)
- nutrióloga para pérdida de grasa sin dietas restrictivas
- qué hace una nutrióloga y en qué se diferencia de un nutricionista

## Lo que implemento en este cambio

1. **Datos estructurados**: añadir `LocalBusiness` al `@type` del bloque `MedicalBusiness` de la home, `jobTitle: "Nutrióloga"` en el `Person`, y `availableChannel` con la URL de WhatsApp en los servicios (presencial y en línea).
2. **H1/H2**: H1 del hero abre con "Nutrióloga en Playa del Carmen y en línea" y el mensaje de transformación pasa a subtítulo. H2 ajustados en Servicios, Sobre mí, Ubicación y Cómo trabajamos para incluir la keyword de forma natural, sin cambiar diseño.
3. **FAQ reescrita a long-tail**, con enlace inline a WhatsApp y mensaje pre-cargado por tema, rastreado en GA4:
   - ¿Trabajas como nutrióloga para recomposición corporal?
   - ¿Puedes ayudarme con nutrición para salud digestiva?
   - ¿Atiendes en línea si no vivo en Playa del Carmen?
   - ¿Cuánto cuesta la consulta con nutrióloga en Playa del Carmen?
   - ¿Qué incluye la primera consulta?
   - ¿Qué es la bioimpedancia de 8 electrodos?
   - ¿Cómo funciona el seguimiento por WhatsApp?
   - ¿Cómo agendo mi consulta?
   Se elimina "¿Se muestran precios en la landing?" porque contradice los precios ya publicados.
4. **Sitemap**: `lastmod` actualizado a la fecha de este cambio.
5. **Search Console**: reviso indexación y título de la home y estado del sitemap; te reporto el estado real (Google puede tardar días en refrescar el título).

## Lo que depende de ti (mueve más que el código)

- Perfil de Empresa de Google con categoría "Nutricionista", nombre "Nutrióloga Susana Wignall", fotos y reseñas. En búsquedas locales esto pesa más que la landing.
- Reseñas: 10–15 reseñas reales mueven "nutrióloga cerca de mí" más que cualquier ajuste técnico.
- Nombre idéntico en Instagram, Facebook, Doctoralia y Perfil de Empresa.

## Notas técnicas

Archivos a tocar: `src/routes/index.tsx` (JSON-LD), `Hero.tsx`, `Services.tsx`, `About.tsx`, `Location.tsx`, `HowItWorks.tsx`, `faq-data.ts`, `FAQ.tsx`, `src/lib/whatsapp.ts`, `src/routes/sitemap[.]xml.ts`. Sin cambios de paleta, tipografía ni layout. Las páginas del Anillo 3 son fase siguiente, no entran aquí.

Fuente de los datos de keywords: Semrush (base México).
