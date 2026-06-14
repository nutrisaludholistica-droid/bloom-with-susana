# CRM clínico — LN Susana Wignall

CRM privado de un solo usuario (Susana) para gestionar expedientes nutricionales conforme a **NOM-004-SSA3-2012** (expediente clínico, base regulatoria de COFEPRIS). Vive en `/crm/*`, separado de la landing pública. Pacientes NO entran.

## 1. Backend (Lovable Cloud)

Se activa Lovable Cloud para: auth email/password (solo Susana), base de datos PostgreSQL con RLS, y storage privado para archivos.

**Tablas (todas con RLS: solo el dueño autenticado lee/escribe):**

- `profiles` — perfil de Susana (cédula 156228944, nombre, firma).
- `patients` — ficha de identificación: nombre, fecha de nacimiento, sexo, teléfono, email, ocupación, dirección, contacto de emergencia, fecha de alta.
- `allergies` — alergias e intolerancias alimentarias por paciente (alérgeno, severidad, notas, fecha de detección). Campo destacado en toda la ficha.
- `medical_history` — antecedentes heredofamiliares, patológicos, no patológicos, gineco-obstétricos, quirúrgicos (1 registro por paciente, editable).
- `medications` — medicamentos y suplementos activos/históricos (nombre, dosis, frecuencia, indicación, fecha inicio/fin, prescriptor).
- `consultations` — cada consulta (inicial o seguimiento): fecha/hora, tipo, motivo, notas SOAP (subjetivo/objetivo/análisis/plan), objetivos, próxima cita.
- `anthropometry` — mediciones por consulta: peso, talla, IMC (calculado), circunferencias (cintura, cadera, brazo, muslo, pantorrilla), pliegues cutáneos.
- `bioimpedance` — captura Tanita 8 electrodos: % grasa total, masa muscular total + por segmento (brazo izq/der, pierna izq/der, tronco), agua corporal, masa ósea, grasa visceral, edad metabólica, BMR.
- `food_recall` — recordatorio 24h (desayuno/colación/comida/cena con descripción) + frecuencia alimentaria (grupos × frecuencia semanal).
- `nutrition_plans` — plan: kcal objetivo, distribución macros, recomendaciones, restricciones (autollenadas desde alergias), archivo PDF opcional.
- `appointments` — agenda: paciente, fecha/hora, duración, modalidad (presencial Hea'n / online), estatus (agendada/realizada/cancelada), notas.
- `attachments` — laboratorios, fotos progreso, consentimientos firmados (storage privado).
- `audit_log` — bitácora inmutable: tabla, registro, acción (insert/update/delete), usuario, timestamp, diff (cumplimiento NOM-004 nivel "base sólida").

**Cumplimiento COFEPRIS / NOM-004 incluido:**
- Identificación del responsable (cédula visible) en cada nota.
- Fecha y hora automática en cada registro.
- Consentimiento informado: campo en `patients` + archivo en `attachments`.
- Bitácora de cambios (`audit_log`) vía triggers de Postgres.
- RLS estricto: nadie excepto Susana autenticada accede a los datos.
- Storage privado con URLs firmadas de corta duración.
- Alergias destacadas en banner rojo en toda la ficha del paciente.

## 2. Frontend (rutas protegidas)

Toda la sección bajo `src/routes/_authenticated/crm/...` (gate `ssr: false` ya gestionado por la integración Supabase). Login en `/auth`.

**Páginas:**

- `/auth` — login email/password.
- `/crm` — dashboard: próximas citas hoy/semana, pacientes recientes, alertas de seguimiento atrasado.
- `/crm/pacientes` — listado con búsqueda, filtros (activos/inactivos), badge de alergias.
- `/crm/pacientes/nuevo` — alta con wizard (datos → antecedentes → alergias → consentimiento).
- `/crm/pacientes/$id` — ficha completa con tabs:
  - **Resumen** (banner de alergias, datos, próxima cita, último peso)
  - **Antecedentes** (heredofamiliares, patológicos, etc.)
  - **Alergias & Medicamentos**
  - **Consultas** (timeline: inicial + seguimientos, cada uno expande SOAP)
  - **Antropometría & Tanita** (tabla histórica + gráficas de evolución: peso, % grasa, masa muscular)
  - **Alimentación** (recordatorios 24h y frecuencia)
  - **Planes nutricionales** (lista + descarga)
  - **Archivos** (laboratorios, fotos, PDFs)
  - **Bitácora** (audit log filtrado por paciente)
- `/crm/pacientes/$id/consulta/nueva` — formulario completo de consulta (SOAP + antropometría + Tanita + plan).
- `/crm/agenda` — calendario mensual/semanal con citas, drag para reagendar, alta rápida.
- `/crm/configuracion` — perfil de Susana, plantillas de plan, exportación de expediente PDF.

**UI:** misma estética wellness de la landing (Fraunces + Inter, paleta salvia/crema), pero con densidad de datos tipo dashboard clínico (tablas compactas, sidebar de navegación CRM, breadcrumbs).

## 3. Detalles técnicos

- **Stack:** TanStack Start + React 19 + Tailwind v4 + shadcn/ui (ya instalado).
- **Server functions** (`src/lib/crm/*.functions.ts`) con `requireSupabaseAuth` para todas las lecturas/escrituras → RLS aplica como Susana.
- **Validación:** Zod en cliente y servidor (longitudes, formatos, rangos clínicos plausibles).
- **Gráficas:** Recharts (ya en proyecto) para evolución antropométrica.
- **Calendario:** componente custom sobre `date-fns` + shadcn (sin libs pesadas).
- **PDF de expediente:** server function con `pdf-lib` (Worker-compatible) para exportación firmada con cédula y timestamp.
- **Triggers de auditoría:** función plpgsql `audit_trigger()` aplicada a tablas clínicas.
- **Sin afectar la landing:** el sitio público `/` queda intacto; el header de la landing no muestra el CRM.

## 4. Entrega por fases

**Fase 1 (esta iteración, MVP funcional):**
- Auth + esquema completo + RLS + audit log.
- Pacientes (alta, listado, ficha con todos los tabs estructurales).
- Consulta inicial y seguimiento con SOAP + antropometría + Tanita 8 elec.
- Alergias destacadas, medicamentos, antecedentes.
- Agenda básica (lista + alta).

**Fase 2 (siguiente turno, si lo apruebas):**
- Recordatorio 24h y frecuencia alimentaria.
- Gráficas de evolución.
- Carga de archivos.
- Exportación PDF NOM-004.
- Vista calendario completa con drag-to-reschedule.

## 5. Fuera de alcance

- Portal de pacientes / login para pacientes.
- Cobros, facturación, integración con PSP.
- Envío automático de WhatsApp/SMS (puede agregarse después con Twilio).
- Multi-usuario / roles (queda preparado pero no se expone).

---

**Confirmar para construir Fase 1.** Si quieres mover algo a Fase 1 (ej. recordatorio 24h o gráficas), dímelo antes de aprobar.
