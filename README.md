# README.md

# Pokedex - Región Sinnoh (Prueba técnica)

**Autor:** \Joan Sanchis

**Repositorio:** \https://github.com/Joan-02/pokedex

---

## Descripción

Aplicación web para consultar Pokémons (enfocado en la región de Sinnoh). Soporta:

- Vista listado (grid / lista) con paginación.
- Vista detalle del Pokémon con stats, tipos, experiencia y demás datos relevantes.
- Modo claro / oscuro.
- Marcar favoritos y ver página de favoritos.
- Persistencia de favoritos usando `localStorage`.

---

## Tecnologías

- React + Vite
- TypeScript
- React Router
- Context API (favorites, pokemon data)
- CSS modular + variables CSS para temas

---

## Instalación y ejecución

```bash
# clonar
git clone https://github.com/tuusuario/tu-repo.git
cd tu-repo

# instalar dependencias
npm install

# modo desarrollo
npm run dev

# build para producción
npm run build

# preview del build
npm run preview
```

> Si usas Yarn cambia `npm` por `yarn`.

---

## Estructura de carpetas (resumen)

```
/public
  pokeball_header.svg
/src
  /components
    card.tsx
    checkBocIcon.tsx
    filtersModal.tsx
    header.tsx
    likeButton.tsx
    modeIcons.tsx
    typeFilterButton.tsx
    viewIcons.tsx
  /constants
    constants.ts
  /context
    favoritesContext.tsx
    pokemonDataContext.tsx
  /img
    pokeball_header.svg
  /pages
    home.tsx
    pokemonInfo.tsx
  /services
    api.ts
  /types
    types.ts
  /utils
    utils.ts
package.json
README.md
MEMORIA.md
```

---

## Endpoints y recursos

- API principal: [https://pokeapi.co/](https://pokeapi.co/)

---

## Cómo comprobar la funcionalidad principal

1. Abrir la app en `http://localhost:5173` (o puerto que indique Vite).
2. Cambiar entre Grid/List.
3. Marcar favoritos (estrella), abrir "Favorites" para ver solo favoritos.
4. Ir a detalle de un Pokémon desde la lista y revisar stats.

---

# MEMORIA.md

## 1. Introducción

El desarrollo de esta Pokedex comenzó durante el verano como un proyecto personal para practicar y mantener los conocimientos adquiridos en el curso. Después de ver un video en YouTube sobre cómo crear una Pokedex, decidí retomarlo y avanzar con mi propia versión. El proceso fue bastante interrumpido, ya que sentarse a programar frente al ordenador mientras la playa estaba a solo 50 metros resultó más difícil de lo que esperaba. Sin embargo, poco a poco fui avanzando en el código, y para el inicio de la semana de desarrollo ya contaba con gran parte del proyecto parcialmente implementado.
El objetivo principal era construir una aplicación web capaz de mostrar todos los Pokémon de la región de Sinnoh, con un diseño limpio y funcional que incluyera paginación, layouts dinámicos (grid/list), modo oscuro y favoritos persistentes.

## 2. Planificación y diseño

Antes de programar, realicé una fase de documentación y diseño:

- Documentación de la API: Revisé la PokéAPI para entender qué datos podía obtener de cada Pokémon y cómo estructurarlos.

- Diseño en Figma: Creé los diseños de las cards, layouts en grid y la interfaz general. Esto me permitió tener una referencia visual clara para el desarrollo.

Durante la semana de implementación, tuve que adaptar el layout principal y las cards para crear la vista en lista, ya que inicialmente no contaba con este diseño. Además, desarrollé la versión en modo oscuro, modificando los colores para adaptarlos al estilo nocturno.

Con un diseño definido, pude comenzar a desarrollar la Pokedex paso a paso.

## 3. Desarrollo

## 3.1. Gestión de datos

- Implementé fetch para obtener los datos de la PokéAPI.

- Aprendí a manejar llamadas asíncronas con Promise.all para cargar los detalles de cada Pokémon de manera eficiente.

## 3.2. Paginación

- La paginación fue un reto inicial, ya que necesitaba mostrar solo un número limitado de Pokémon por página.

- Investigando, logré implementar un sistema que permite navegar entre páginas y saltar directamente al inicio o al final.

## 3.3. Layout dinámico (grid/list)

- Originalmente solo contaba con un diseño tipo grid.

- Añadí la opción de cambiar a vista lista usando clases dinámicas en CSS.

- Reflexionando, creo que habría sido más limpio implementar un componente separado para la lista, pero la solución con CSS también funciona correctamente.

## 3.4. Modo oscuro

- Definir variables CSS para los colores fue un poco lioso al principio, pero logré organizarlas para que el modo oscuro y claro funcionen de forma consistente.

## 3.5. Favoritos

- Implementé la funcionalidad de marcar Pokémon como favoritos.

- Utilicé localStorage para mantener los favoritos incluso después de recargar la página.

## 4. Retos y soluciones

Durante el desarrollo me encontré con varios desafíos:

- Funciones fetch y llamadas asíncronas: Tuve que investigar cómo usar Promise.all y manejar errores.

- Cambio de layout y diseño de cards: Ajustar la visualización dinámica implicó modificar varias clases CSS y asegurarme de que no rompiera el diseño.

- Modo oscuro y claro: Fue necesario planificar bien los nombres de las variables y los colores para que fueran coherentes en toda la interfaz.

- Búsqueda y filtros: Implementar filtros y búsqueda que funcionaran correctamente en cualquier página requirió reorganizar el estado y las funciones de renderizado de Pokémon.

- Página de favoritos: al principio solo mostraba los favoritos de la página actual. Lo solucioné revisando el código y con ayuda de IA, hasta conseguir que funcionara globalmente.

- Uso de useContext: tuve que revisarme la documentación para implementarlo correctamente y así poder compartir el estado de favoritos entre todos los componentes.

## 5. Conclusiones

Este proyecto me permitió:

- Reforzar mis conocimientos en React y TypeScript.

- Trabajar con APIs externas y manejar datos asíncronos.

- Aplicar diseño responsivo y dinámico, tanto en grid como en lista.

- Implementar funcionalidades avanzadas como modo oscuro, favoritos persistentes y paginación completa.

A pesar de las dificultades, logré cumplir con todos los requisitos principales de la prueba, y algunas funcionalidades extra como favoritos y filtros avanzados.
Considero que la IA fue un recurso útil para resolver dudas; cuando me quedaba atascado, consultaba la IA para que me guiara en la implementación correcta. Sin embargo, siempre validé y comprendí cada línea de código antes de aplicarla.
