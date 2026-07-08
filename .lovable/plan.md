## Plan: Tarjeta sutil para la promo de julio

### Cambios en `src/components/landing/LaunchPromo.tsx`

1. **Estructura**: envolver el contenido interior de la sección (`<div className="flex flex-col items-center text-center">`) en una tarjeta contenedora (`<div>`) para separarla visualmente del fondo general.
2. **Fondo de tarjeta**: aplicar un color ligeramente distinto al fondo general del sitio, por ejemplo `bg-[oklch(0.97_0.01_85)]` (un tono crema/beige sutilmente más oscuro/claro que el `bg-background` actual) para que la promo destaque sin romper la armonía.
3. **Borde redondeado**: aplicar `rounded-2xl` o `rounded-3xl` para suavizar los bordes.
4. **Sombra suave**: agregar `shadow-md` o una sombra sutil con color del tema para crear profundidad sin agresividad.
5. **Padding interno**: agregar `px-6 py-10 sm:px-10 sm:py-14` para que el contenido respire dentro de la tarjeta.
6. **Margen externo**: mantener el contenedor `container-prose` y la sección `section` sin cambios mayores; la diferenciación viene de la tarjeta interna.

### No se modifica
- Tipografía, colores de texto, botón, chip, ni contador.
- Fondo de la sección (`bg-background`) se mantiene para que la tarjeta flote sobre él.

### Verificación
- Compilar (`bun run build`) para confirmar que no hay errores.
- Revisar visualmente que la tarjeta se destaque sutilmente del resto del sitio.