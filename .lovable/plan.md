## Ajuste del Hero — Separar CTA principal de la promo de julio

### Cambios en `src/components/landing/Hero.tsx`

1. **Texto del botón principal (línea 47)**
   - Reemplazar: `Agendar mi consulta gratis por WhatsApp`
   - Por: `Agendar mi consulta →`
   - Se reemplaza el icono `<ArrowRight />` por el texto `→` al final del label, o se mantiene el icono si se prefiere la coherencia visual. Dado el pedido literal, se usará el texto `→` como parte del label.

2. **Nueva línea debajo del botón (después de la fila de botones, líneas 39-56)**
   - Agregar un `<p>` con clase de texto secundario (más pequeño, color suave) que diga exactamente:
     > 🎁 Julio: primera consulta sin costo · Solo 10 lugares
   - Estilo propuesto: `text-sm text-muted-foreground mt-2` (o equivalente temático del proyecto).

3. **Chip de promo sobre el H1 (líneas 24-27)**
   - Sin cambios. Se mantiene: "Julio · Primera consulta GRATIS · 10 lugares"

### Alcance
- Solo edición del componente `Hero.tsx`.
- Sin cambios en diseño, colores, imágenes, rutas ni otros componentes.
