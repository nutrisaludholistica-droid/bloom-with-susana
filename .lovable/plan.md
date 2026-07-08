## Objetivo
Rediseñar la sección `LaunchPromo` para que se sienta como una invitación elegante, no una oferta agresiva.

## Alcance
Solo el componente `src/components/landing/LaunchPromo.tsx`. Sin cambios en contenido visible de otras secciones.

## Cambios

### 1. Fondo
- Reemplazar `bg-promo-bg` (verde oscuro) por `bg-background` (crema/beige del hero).
- Eliminar los círculos decorativos de blur blanco (no tienen sentido sobre fondo claro).

### 2. Tipografía y jerarquía
- **Chip superior:** reemplazar `"PROMO JULIO"` por `"Julio 2026"`.
  - Estilo: chip sutil con fondo `bg-clay/10`, texto `text-clay`, borde `border-clay/20`, sin uppercase, sin `font-semibold`, tamaño `text-xs`.
- **Título:** reemplazar `"Julio: Primera consulta GRATIS"` por `"Primera consulta sin costo — solo julio"`.
  - Estilo: `font-display text-olive text-2xl sm:text-4xl`, sin mayúsculas forzadas, sin span con `text-sage-soft`.
- **Subtítulo:** mantener la línea de validación pero con color `text-foreground/70` en lugar de `text-cream/80`.
- **Descripción:** mantener el párrafo explicativo con `text-foreground/60`.

### 3. Botón CTA
- Texto: `"Apartar mi lugar por WhatsApp →"`.
- Estilo: igual al botón principal del hero (`bg-primary text-primary-foreground rounded-full px-7 py-3.5 font-medium shadow-sm hover:bg-primary/90`).
- Seguir usando `waUrl(WA_MSG.promoGratis)` y `trackWaClick("whatsapp_click_promo")`.

### 4. Contador de lugares
- Reemplazar el badge destacado (`inline-flex rounded-2xl border bg-white/8 backdrop-blur-sm`) por una simple línea de texto:
  - `"Lugares disponibles: 10 de 10"`
  - Clases: `text-sm text-muted-foreground`.

### 5. Pie de sección
- Mantener la línea `"Consulta presencial en Playa del Carmen o en línea · Sin costo, sin compromiso"`.
- Cambiar color a `text-muted-foreground` para armonizar con fondo claro.

## Tokens de diseño a usar
- Fondo: `bg-background` (ya existe en `src/styles.css`).
- Texto principal: `text-olive`, `font-display`.
- Texto secundario: `text-muted-foreground`, `text-foreground/70`.
- Botón: `bg-primary text-primary-foreground`.
- Chip: `bg-clay/10 text-clay border-clay/20`.

## Nota técnica
No se requieren nuevos tokens CSS ni dependencias adicionales. Todos los valores están disponibles en el design system actual.