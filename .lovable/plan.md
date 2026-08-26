# Sección "Sobre mí" con tu nuevo texto

## Qué cambia

Se reescribe la sección "Sobre mí" con el texto que enviaste (nutrióloga y chef, aprender en lugar de dietas, "Ahora entiendo mi cuerpo") y se reubica dentro del embudo.

## Contenido de la sección

- **Eyebrow:** Sobre mí
- **H2:** "Soy Susana Wignall, nutrióloga y chef" (manteniendo "nutrióloga" al inicio para SEO)
- **Cita manuscrita destacada:** "Ahora entiendo mi cuerpo"
- **Cuerpo:** tu narrativa en 4 bloques cortos: la cocina como origen, cocina + nutrición unidas, no vivir a dieta sino aprender, y el propósito de una relación sana con la comida.
- **Cierre en negritas suaves:** "No se trata de comer perfecto. Se trata de aprender a alimentarte para toda la vida."
- **CTA a WhatsApp** al final de la sección (agendar consulta), con seguimiento en GA4 igual que los demás botones.
- Se conserva tu foto, la cédula profesional y la lista de "Formación y logros".

## Ubicación en el embudo

Hoy "Sobre mí" aparece bastante abajo (después de Paquetes). Propuesta: moverla **antes de la promoción de lanzamiento y los paquetes**, en este orden:

```text
Hero → Beneficios → Servicios → Sobre mí → Promoción → Paquetes → Confianza → Talleres → ...
```

Razón: la persona primero entiende el problema y la solución (Beneficios, Servicios), luego conecta contigo como persona y profesional, y solo después ve precios. La confianza previa al precio suele subir la tasa de contacto.

## Detalles técnicos

- Editar `src/components/landing/About.tsx` (solo texto y presentación) y añadir el CTA con `waUrl` / `trackWaClick`.
- Reordenar `<About />` en `src/routes/index.tsx`; la banda berenjena queda antes de Paquetes.
- Sin cambios de base de datos ni de lógica.
