# Rebranding de copia pública: de "nutrición clínica" a "nutrióloga y chef"

## Objetivo
Retirar el enfoque "nutrición clínica" / "clínica" del sitio público y reforzar la propuesta de Susana como nutrióloga y chef. El cambio principal debe verse en el H1 del Hero y propagarse a metadatos, schema.org, FAQs y páginas de servicio.

## Recomendación de H1 (SEO + diseño)

```text
Susana Wignall, nutrióloga y chef en Playa del Carmen
                                                            y en línea
```

- Mantiene el nombre propio al inicio (marca ya posicionada).
- Incluye la keyword principal "nutrióloga" y la ubicación "Playa del Carmen".
- Añade "chef" como diferenciador real de la propuesta.
- "y en línea" se deja en la tipografía manuscrita (`font-script`) para conservar el toque humano y visual.

## Cambios por archivo

### 1. Hero (`src/components/landing/Hero.tsx`)
- Eyebrow: cambiar `Nutrición clínica · Playa del Carmen y en línea` → `Nutrióloga y chef · Playa del Carmen y en línea`.
- H1: cambiar a la propuesta de arriba.
- Alt de imagen: ajustar a "Susana Wignall, nutrióloga y chef en Playa del Carmen".

### 2. Metadatos raíz (`src/routes/__root.tsx`)
- Title: `Nutrióloga Susana Wignall · Nutrición clínica` → `Nutrióloga y chef Susana Wignall · Playa del Carmen y en línea`.
- Description: eliminar "nutrición clínica", reforzar "nutrióloga y chef".
- og:title: mismo ajuste.

### 3. Landing principal (`src/routes/index.tsx`)
- Title y og:title: incluir "nutrióloga y chef".
- Schema `Person`: `jobTitle` "Nutrióloga" → "Nutrióloga y chef"; description eliminar "Nutrióloga clínica"; `knowsAbout` quitar "Nutrición clínica" y agregar "Cocina saludable" / "Educación alimentaria".
- Schema `MedicalBusiness`: description sin "clínica".
- Oferta de consulta inicial: description sin "historia clínica".

### 4. Servicios (`src/components/landing/Services.tsx`)
- Texto de consulta inicial: `Historia clínica completa...` → `Historia de salud completa...`.

### 5. Cómo trabajamos (`src/components/landing/Testimonials.tsx`)
- Paso 1: `Historia clínica completa` → `Historia de salud completa`.

### 6. FAQs (`src/components/landing/faq-data.ts`)
- Reemplazar todas las ocurrencias de `historia clínica` por `historia de salud` o `historia nutricional y de salud` según contexto.
- Última FAQ: `llamar a la clínica` → `llamar al consultorio`.

### 7. Ubicación (`src/components/landing/Location.tsx`)
- `Teléfono de la clínica` → `Teléfono del consultorio`.

### 8. Footer (`src/components/landing/Footer.tsx`)
- `Susana Wignall · Nutrióloga` → `Susana Wignall · Nutrióloga y chef`.
- `Clínica · {PHONE_CLINIC}` → `Consultorio · {PHONE_CLINIC}`.

### 9. Página `/consulta-nutricional` (`src/routes/consulta-nutricional.tsx`)
- Description: eliminar "historia clínica".
- Bullets: `Historia clínica y nutricional completa` → `Historia de salud y nutricional completa`.
- FAQ duración: `historia clínica` → `historia de salud`.
- Schema `serviceType`: `Consulta de nutrición clínica` → `Consulta de nutrición personalizada`.

### 10. Página `/nutriologa-en-linea` (`src/routes/nutriologa-en-linea.tsx`)
- Bloques de texto: reemplazar `historia clínica` por `historia de salud`.

### 11. Página `/nutriologa-playa-del-carmen` (`src/routes/nutriologa-playa-del-carmen.tsx`)
- Schema `Person`: `knowsAbout` quitar `Nutrición clínica`; agregar "Cocina saludable".
- FAQ primera consulta: `Historia clínica` → `Historia de salud`.
- Texto de valor: `valoración clínica, antropometría` → `valoración nutricional, antropometría`.

## Notas técnicas
- No se tocan archivos del CRM ni la tabla `user_roles` / expediente clínico (la normativa sigue siendo la misma; solo cambia la copia pública).
- Se conserva "Hea’n Clinic" como nombre del edificio/consultorio porque es la ubicación física real; solo se cambian las etiquetas propias.
- Después de los cambios se corre `rg -i "nutrición clínica|clínica" src/components/landing src/routes/index.tsx src/routes/__root.tsx src/routes/consulta-nutricional.tsx src/routes/nutriologa-en-linea.tsx src/routes/nutriologa-playa-del-carmen.tsx` para verificar que no queden residuos no deseados.
- Se ejecuta build para validar que no se rompió nada.

## Validación
1. Revisar visualmente el Hero en preview (H1, eyebrow, contraste del script).
2. Verificar metadatos con inspección de código fuente en `/`.
3. Confirmar que no queda "Nutrición clínica" en títulos ni descripciones públicas.
