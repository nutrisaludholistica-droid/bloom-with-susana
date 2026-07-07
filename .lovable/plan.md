## Plan: Actualizar sección de promoción (LaunchPromo)

### Cambios a aplicar en `src/components/landing/LaunchPromo.tsx`:

1. **Título**
   - Reemplazar: `🎉 Lanzamiento: Primera consulta GRATIS`
   - Por: `Julio: Primera consulta GRATIS`
   - Eliminar el emoji del título (quitar `<span className="font-sans">🎉</span>`).

2. **Badge**
   - Reemplazar: `Oferta limitada`
   - Por: `PROMO JULIO`

3. **Contador**
   - Reemplazar: `20 de 20`
   - Por: `10 de 10`

4. **Subtítulo**
   - Reemplazar: `Válido para las primeras 20 personas. Sin compromisos.`
   - Por: `Válido para las primeras 10 personas. Solo este mes.`

5. **Texto adicional debajo del botón CTA**
   - Agregar debajo del `<a>` del botón un párrafo en texto pequeño y gris claro:
     - Texto: `Consulta presencial en Playa del Carmen o en línea · Sin costo, sin compromiso`
   - Estilo sugerido: `text-xs text-cream/50 mt-3`

6. **Diseño**
   - Mantener fondo verde oscuro (`bg-promo-bg`) y estilos actuales sin cambios.

### Archivo afectado
- `src/components/landing/LaunchPromo.tsx`