## Validar y corregir JSON-LD

No hay API oficial del Rich Results Test, así que la validación se hace contra las especificaciones de schema.org / Google Search Central y el validador público (`https://validator.schema.org/`) manualmente si hace falta. Reviso el `@graph` actual en `src/routes/index.tsx` contra las reglas y aplico correcciones.

### Problemas detectados en el JSON-LD actual

**LocalBusiness + MedicalBusiness**
- `medicalSpecialty` incluye strings libres en español (`"Nutriología clínica"`, `"Recomposición corporal"`, `"Salud digestiva"`). Google exige valores del enum `MedicalSpecialty` de schema.org — sólo `"Nutrition"` es válido. Los demás disparan advertencia.
- Falta `openingHoursSpecification` (recomendado por Google para LocalBusiness).
- Falta `geo` (lat/long) — recomendado.
- Falta `areaServed` — útil para negocio local + online.
- `image` apunta a `susanawignall.com/__l5e/...` (ruta interna de preview que puede 404 en producción). Debe usarse una imagen accesible públicamente en el dominio final.
- Falta `sameAs` (redes sociales) — opcional pero mejora entidad.

**Person**
- `identifier` como string suelto genera advertencia — mejor `PropertyValue` con `propertyID: "Cédula Profesional"`.
- `worksFor` referencia por `@id`, correcto.

**FAQPage**
- Las 11 Q&A se generan desde `FAQS`. Verificar que ninguna respuesta contenga HTML sin escapar y que sean únicas — actualmente OK.
- Google requiere que las FAQs sean visibles en la página con el mismo texto — ya lo están (mismo `FAQS` compartido). OK.

### Cambios a aplicar en `src/routes/index.tsx`

1. **LocalBusiness/MedicalBusiness**:
   - `medicalSpecialty: "Nutrition"` (string único, valor del enum).
   - Añadir `openingHoursSpecification` (pendiente de horario real — por defecto Lun-Vie 09:00-18:00, ajustable).
   - Añadir `geo` con lat/long de Playa del Carmen (aproximado sobre la dirección de Hea'n Clinic).
   - Añadir `areaServed: ["Playa del Carmen", "Quintana Roo", "México", "Online"]`.
   - Cambiar `image` a una URL pública estable (usar la imagen del hero servida desde `susanawignall.com` o dejar la URL absoluta del asset R2 que ya usa `og:image` en `__root.tsx`).
   - Añadir `sameAs` sólo si el usuario tiene redes (pendiente confirmar — si no, se omite).

2. **Person**:
   - Reemplazar `identifier: "156228944"` por:
     ```json
     "identifier": {
       "@type": "PropertyValue",
       "propertyID": "Cédula Profesional",
       "value": "156228944"
     }
     ```
   - Añadir `alumniOf` si aplica (omitir si no hay dato).

3. **FAQPage**: sin cambios (ya correcto).

### Preguntas pendientes antes de implementar

- ¿Horario real de atención de la clínica (para `openingHoursSpecification`)? Si no, uso Lun-Vie 09:00-18:00 como valor razonable y comento para revisar.
- ¿URL de imagen pública preferida para `image` del LocalBusiness? Opciones: (a) la misma del `og:image` actual (R2), (b) subir al dominio, (c) dejar la actual.
- ¿Redes sociales para `sameAs` (Instagram, Facebook)? Si no hay, se omite.

Aplico defaults razonables si no hay respuesta, marcando con comentario `TODO` los campos que conviene revisar.

### Fuera de alcance
- No se cambia contenido visible ni diseño.
- No se toca `__root.tsx`.
