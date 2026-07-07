## Plan: Sección de promoción de lanzamiento

### Objetivo
Agregar una sección promocional visible y llamativa justo debajo del Hero (antes de Beneficios/Servicios) para anunciar la primera consulta gratuita por lanzamiento.

### Cambios

#### 1. Nuevo componente: `src/components/landing/LaunchPromo.tsx`
- **Diseño**: banner de ancho completo con fondo verde profundo (token nuevo `--promo-bg`, aproximando el `#0F3D24` en oklch) y texto blanco/crème.
- **Contenido**:
  - Título: "🎉 Lanzamiento: Primera consulta GRATIS"
  - Subtítulo: "Válido para las primeras 20 personas. Sin compromisos."
  - Descripción: "Es tu oportunidad de conocerme, hablar de tus objetivos y recibir orientación nutricional personalizada — sin costo."
  - Contador estático: "Lugares disponibles: 20 de 20"
  - Badge visual tipo "GRATIS" o "LIMITADO" (usando un ícono/badge estilizado).
- **CTA**: botón "Quiero mi consulta gratis" que abre WhatsApp (`https://wa.me/529842799652?text=...`) con el mensaje exacto solicitado.
- **Estilo**: aspecto de oferta limitada y urgente. Usa `font-display` para el título, layout centrado, padding generoso, y posible borde sutil o sombra para separar del Hero.

#### 2. Ajuste de diseño (`src/styles.css`)
- Agregar token semántico `--promo-bg` en `@theme inline` (mapeado a oklch equivalente de `#0F3D24`) para que Tailwind genere `bg-promo-bg` sin romper el sistema de tokens.
- Opcionalmente agregar `--promo-foreground` para el texto blanco sobre fondo oscuro (puede reusar `text-cream` o `text-primary-foreground`).

#### 3. Integración en la landing (`src/routes/index.tsx`)
- Importar `<LaunchPromo />`.
- Insertarlo entre `<Hero />` y `<Benefits />`.

#### 4. Verificación
- Correr `bun run build` para confirmar que no hay errores de TypeScript ni de Tailwind.
- Revisar en preview que se vea correctamente en desktop y mobile.

### Notas técnicas
- Se respetará el sistema de tokens de diseño existente: el color exacto `#0F3D24` se registrará como variable CSS/oklch en `styles.css`, no como clase arbitraria en el componente.
- El contador será texto estático por ahora; el usuario lo actualizará manualmente más adelante.
- El enlace de WhatsApp se construirá como constante inline o en `src/lib/whatsapp.ts` con el mensaje de lanzamiento codificado.