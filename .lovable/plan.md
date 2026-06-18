## Cambios

Tienes dos fotos en la landing que vamos a reemplazar por las que subiste (mejoradas suavemente: color, luz y nitidez, sin alterar el contenido real).

### 1. Hero (actualmente: bowl con aguacate) → mangos
- Fuente: `IMG_4180.jpeg` (vista cenital de mangos, la más editorial y con mejor composición de las dos).
- Mejora: ajuste de exposición, contraste y saturación natural, recorte 16:9 para mantener el formato actual del hero.
- Destino: reemplaza `src/assets/hero.jpg` (usado en `Hero.tsx`).

### 2. Sobre mí (actualmente: retrato stock) → Susana real
- Fuente: `IMG_4150.jpeg` (retrato cercano, sonriendo, ojos abiertos, fondo de cielo — la más profesional y cálida de las tres).
- Mejora: balance de blancos, suavizado de luz dura, ligero aumento de nitidez en ojos. Recorte vertical 4:5 para encajar con el marco actual.
- Descartadas: `IMG_4135` (ojos cerrados) y `IMG_4165` (buena pero más alejada y con cuerpo, menos íntima para "Sobre mí").
- Destino: reemplaza `src/assets/about.jpg` (usado en `About.tsx`).

### Implementación técnica
1. Usar `imagegen--edit_image` sobre cada imagen original para mejora suave + recorte (16:9 hero, 4:5 retrato).
2. Subir cada resultado vía `lovable-assets` y reemplazar `src/assets/hero.jpg` y `src/assets/about.jpg` por punteros `.asset.json`.
3. Actualizar los imports en `Hero.tsx` y `About.tsx` para usar `.asset.json` y `<img src={asset.url} />`.
4. Actualizar el `alt` de la imagen del hero a algo coherente con mangos (ej. "Mangos frescos de temporada").

¿Confirmas que uso `IMG_4180` (mangos cenital) e `IMG_4150` (retrato cercano)?