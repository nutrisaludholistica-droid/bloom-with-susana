# SEO: datos estructurados, encabezados y FAQ long-tail

Objetivo: reforzar la señal "nutrióloga + Playa del Carmen + en línea" en Google y convertir la sección de preguntas frecuentes en un motor de clics a WhatsApp.

## 1. Datos estructurados

La home ya incluye un bloque `MedicalBusiness` con dirección, geo, horarios, catálogo de servicios y precios. Lo que falta y se agregará:

- Añadir `LocalBusiness` al `@type` (`["MedicalBusiness", "LocalBusiness"]`) para que Google lo interprete también como negocio local.
- Añadir `Physician`/`Person` reforzado: `jobTitle: "Nutrióloga"`, `knowsAbout` (recomposición corporal, salud digestiva, nutrición clínica) y cédula profesional.
- Añadir `sameAs` con redes sociales (necesito los enlaces, ver pregunta al final).
- Mantener un solo `FAQPage` en la home, regenerado a partir de las nuevas preguntas.
- Añadir `makesOffer` con las modalidades presencial y en línea vía `serviceType` + `availableChannel` (URL de WhatsApp).

## 2. H1 y H2

- Hero H1: pasar a "Nutrióloga en Playa del Carmen y en línea" como frase principal, con el mensaje de transformación como subtítulo, para que la keyword abra el encabezado sin sonar forzado.
- Ajustar H2 de secciones clave para incluir contexto de búsqueda natural:
  - Servicios: "Consulta con nutrióloga en Playa del Carmen o en línea"
  - Cómo trabajamos: "Acompañamiento nutricional paso a paso"
  - Sobre mí: "Susana Wignall, nutrióloga clínica en Playa del Carmen"
  - Ubicación: "Consultorio de nutrición en Playa del Carmen"
- Se conserva un único H1 en la home; el resto quedan como H2 con la jerarquía visual actual (sin cambios de diseño).

## 3. Preguntas frecuentes reescritas

Nuevo set orientado a long-tail y a la conversión, cada respuesta cierra con una invitación clara a escribir por WhatsApp:

- ¿Trabajas como nutrióloga para recomposición corporal?
- ¿Puedes ayudarme con nutrición para salud digestiva (inflamación, colitis, SII)?
- ¿Atiendes en línea si no vivo en Playa del Carmen?
- ¿Cuánto cuesta la consulta con nutrióloga en Playa del Carmen?
- ¿Qué incluye la primera consulta de nutrición?
- ¿Qué es la bioimpedancia de 8 electrodos y para qué sirve?
- ¿Necesito experiencia previa con dietas o ejercicio?
- ¿Cómo funciona el seguimiento por WhatsApp?
- ¿Cómo agendo mi consulta?

Se elimina la pregunta actual "¿Se muestran precios en la landing?" porque ya contradice los precios publicados ($1,200 inicial / $1,000 seguimiento).

Además: cada respuesta con intención comercial incluirá un enlace inline a WhatsApp con mensaje pre-cargado según el tema (recomposición, digestivo, en línea), rastreado con GA4.

## 4. Verificación en Search Console

Después de aplicar los cambios reviso en Search Console: estado de indexación y título de la home, y el estado del sitemap con `lastmod`. Si la propiedad no está conectada o hay varias, te pediré elegir. Google puede tardar días en refrescar el título; te reporto el estado real, no una promesa.

## Notas técnicas

- Archivos: `src/routes/index.tsx` (JSON-LD), `src/components/landing/Hero.tsx`, `Services.tsx`, `About.tsx`, `Location.tsx`, `HowItWorks.tsx` (H2), `faq-data.ts` (nuevas FAQ con enlaces), `FAQ.tsx` (soporte de enlace inline), `src/lib/whatsapp.ts` (mensajes nuevos).
- El `lastmod` del sitemap se actualiza a la fecha de este cambio.
- Sin cambios en paleta, tipografía ni layout.

## Una pregunta

Para `sameAs` necesito tus enlaces de Instagram/Facebook y tu número de cédula profesional si quieres incluirlo en los datos estructurados; si no me los das, omito esos campos.
