# Estrategia SEO: ser #1 en "nutrióloga Playa del Carmen"

## Dónde estamos (datos reales)

- **Search Console (26 jul – 22 ago):** 0 clics, 9 impresiones. La home aparece en posición media 9; la consulta "nutriologo playa del carmen" apareció en posición 39. La home está indexada y canónica correcta.
- **Semrush (base MX):** "nutriologa playa del carmen" ~90 búsquedas/mes, dificultad 19/100 (fácil). "nutriologo playa del carmen" ~390/mes, competencia 0.02. Términos vecinos con más demanda: "nutriologo cerca de mi" (2,400), "consulta nutricional" (720), "asesoria nutricional" (590).
- **Problema detectado:** `/auth` (acceso al CRM) está recibiendo impresiones en Google — no debería aparecer nunca.

Conclusión: la palabra clave es alcanzable (dificultad baja), pero hoy el sitio tiene una sola página real de contenido y casi nada de señales locales. En búsquedas "nutrióloga + ciudad" la mayoría de los clics se los lleva el mapa de Google, no los resultados azules.

## Las tres palancas, en orden de impacto

### 1. Perfil de Empresa en Google (fuera del sitio, el más importante)
Sin esto no se gana una búsqueda local. Requiere acción tuya, no código:
- Crear/reclamar el perfil como "Nutricionista" en Playa del Carmen, con dirección del consultorio, horarios, teléfono y WhatsApp.
- Categoría principal: Nutricionista; secundarias: Consultorio médico, Servicio de asesoría nutricional.
- Subir 10–15 fotos reales (consultorio, Tanita, tú atendiendo).
- Pedir reseñas: meta inicial 10 reseñas con la frase "nutrióloga en Playa del Carmen" en el texto natural del paciente.
- Publicar 1 novedad al mes (promo de lanzamiento, talleres).

### 2. Contenido: pasar de 1 página a un grupo de páginas que cubran la intención
Ahora existe la home y `/nutriologa-playa-del-carmen`. Añadir páginas de servicio y de resolución de dudas, cada una con su propio título, descripción y enlace interno:

| Página nueva | Intención que captura |
|---|---|
| `/consulta-nutricional` | "consulta nutricional", "consulta de nutrición", precios y qué incluye |
| `/nutriologa-en-linea` | "nutriólogo en línea", pacientes fuera de Playa |
| `/analisis-corporal-tanita` | "bioimpedancia", "inbody / análisis de composición corporal" — diferenciador real tuyo |
| `/precios` | "cuánto cuesta un nutriólogo" (búsqueda de decisión, alta conversión) |
| `/blog/...` (2 artículos para empezar) | dudas locales: alimentación en clima del Caribe, comer fuera en Playa sin descarrilar el plan |

Cada página: un solo H1, 600–900 palabras con información verificable (tu cédula 156228944, formación, qué incluye cada consulta), FAQ propia y CTA a WhatsApp con mensaje precargado.

### 3. Higiene técnica y señales locales
- Sacar `/auth` y `/crm` del índice con `noindex` real en la etiqueta (hoy solo están en robots.txt, y eso no impide que aparezcan).
- Añadir cada página nueva al `sitemap.xml`.
- Mantener el marcado `MedicalBusiness` y agregar `Service` en cada página de servicio.
- NAP idéntico (nombre, dirección, teléfono) en el sitio, el perfil de Google, Instagram y Doctoralia.
- Alta en directorios locales: Doctoralia, Guía Roja / Sección Amarilla, cámara de comercio de Playa, colegios de nutrición.
- Retomar el rendimiento móvil (pendiente de la sesión anterior): en local, la velocidad es factor de desempate.

## Expectativa realista

- Mes 1: perfil de Google activo + 3 páginas nuevas → aparición en el mapa local.
- Mes 2–3: primeras posiciones de página 1 para "nutrióloga Playa del Carmen" y variantes largas.
- Mes 3–6: top 3 sostenido, dependiendo del volumen de reseñas.

El volumen es modesto (90–390 búsquedas/mes), así que el valor está en la intención: quien busca eso quiere agendar. Por eso el objetivo real es clics a WhatsApp, no impresiones.

## Detalles técnicos de la primera entrega

Si apruebas, en este primer paso implemento:
1. `noindex, nofollow` en `auth.tsx` y en las rutas del CRM (ya tienen título propio; falta que la etiqueta robots sea efectiva).
2. Tres páginas nuevas: `/consulta-nutricional`, `/nutriologa-en-linea`, `/analisis-corporal-tanita`, cada una con `head()` propio (title < 60 car., description < 160), H1 único, contenido en español de México, FAQ y CTA a WhatsApp con mensaje precargado y evento GA4.
3. Enlaces internos desde el header/footer y desde la home hacia las tres páginas.
4. `sitemap[.]xml.ts` actualizado con las nuevas rutas.
5. Schema `Service` por página, vinculado con `@id` al `MedicalBusiness` existente.

No inventaré precios, testimonios ni credenciales: para `/precios` y datos del consultorio necesito que me pases los valores reales.
