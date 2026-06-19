## Reemplazar foto del Hero con retrato de Susana

1. Subir `susana-wignall.png` al CDN con `lovable-assets create` y guardar el pointer en `src/assets/hero-susana.png.asset.json`.
2. Editar `src/components/landing/Hero.tsx`:
   - Cambiar import: `heroImg` → `src/assets/hero-susana.png.asset.json`
   - Actualizar `alt` a "LN Susana Wignall, nutrióloga en Playa del Carmen"
   - Ajustar `width`/`height` a las dimensiones reales del retrato
3. Eliminar el viejo pointer `src/assets/hero-mangos.jpg.asset.json` (ya no se referencia).
4. Verificar visualmente la preview.