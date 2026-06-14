# Landing Page — LN Susana Wignall

Landing one-page mobile-first, estética wellness premium (verde salvia + crema + terracota), enfocada 100% en conversión a WhatsApp. Sin backend, sin formularios, sin precios.

## Decisiones confirmadas

- **Mapa:** iframe de Google Maps embebido en sección Ubicación + botón "Ver en Google Maps".
- **Tipografía:** Fraunces (títulos, serif cálida) + Inter (cuerpo).
- **Marca:** monograma "SW" provisional (reemplazable después por logo).
- **CTA universal:** todos los botones llevan a `https://wa.me/529842799652?text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20para%20reservar.`

## Estructura (una sola ruta `/`)

1. **Header fijo** — monograma SW + nav (Inicio, Paquetes, Sobre mí, Talleres, Testimonios, FAQs, Ubicación) + botón "Reservar". En móvil: hamburguesa.
2. **Hero** — nombre profesional, título, subtítulo, CTA principal, imagen generada wellness.
3. **Beneficios / problema** — texto introductorio + 7 beneficios con íconos sutiles.
4. **Servicios** — 4 tarjetas (consulta personalizada, recomposición, salud digestiva, hábitos).
5. **Paquetes** — 3 tarjetas comparativas (Básico 3m, Transformación 6m destacado como recomendado, Reconexión 9m). Lista de incluye, nota "No incluye insumos", CTA WhatsApp en cada uno. Sin precios.
6. **Sobre mí** — bio + cédula 156228944 + formación/logros + imagen wellness.
7. **Cursos y talleres** (secundario, visualmente más discreto) — 4 tarjetas: Fermentos, Kéfir desde cero, Hagamos el súper saludable, Aprende a leer etiquetas. CTA "Solicitar información".
8. **Testimonios** — 2 reseñas + 1 caso de transformación, con badge "Testimonio provisional" para que sea fácil reemplazarlos.
9. **FAQs** — acordeón con las 11 preguntas.
10. **Ubicación** — dirección Hea'n Clinic, teléfono 984 367 7627, iframe Google Maps, botón "Ver en Google Maps".
11. **CTA final** — bloque grande con título de cierre y botón WhatsApp.
12. **Footer** — nombre, cédula, teléfonos, copyright, estructura preparada (oculta) para redes sociales futuras.
13. **Botón flotante WhatsApp** — siempre visible en móvil y desktop.

## Detalles técnicos

- Stack del proyecto: TanStack Start + React 19 + Tailwind v4 (ya configurado). Construyo en `src/routes/index.tsx` con componentes en `src/components/landing/`.
- **Design system** en `src/styles.css`: tokens oklch para paleta wellness (salvia, crema, terracota, oliva oscuro, blanco cálido) en `:root` + `@theme inline`. Tipografías via `<link>` en `__root.tsx` head, tokens `--font-display` (Fraunces) y `--font-sans` (Inter).
- **Imágenes generadas** (5 en total, guardadas en `src/assets/`):
  - Hero: nutrióloga en escena de consulta cálida y natural
  - Sobre mí: retrato editorial wellness
  - Servicios/paquetes: bowl con alimentos frescos y orgánicos
  - Talleres: escena de cocina saludable casera
  - Decorativa secundaria: ingredientes / frutas frescas
- **SEO** en el `head` de la ruta: title, description, og:title, og:description, og:image (hero), twitter card, lang="es".
- **Accesibilidad:** contraste AA, alt text en todas las imágenes, navegación por teclado en menú móvil y acordeón FAQ, `aria-label` en botones de icono.
- **Performance:** imágenes `loading="lazy"` excepto hero, scroll suave entre secciones, sin librerías pesadas (solo lucide-react ya disponible).
- **Animaciones sutiles:** fade-in al hacer scroll en secciones, hover suave en tarjetas. Nada exagerado.
- **Mobile-first:** breakpoints sm/md/lg, menú colapsable, paquetes en stack vertical en móvil → 3 columnas en desktop, botón flotante WhatsApp visible siempre.

## Fuera de alcance (confirmado)

Sin pagos, sin formulario, sin login, sin base de datos, sin blog, sin agenda, sin CRM, sin precios visibles, sin redes sociales activas.
