# Movie App

A React + Vite app for discovering popular movies, searching the TMDB catalog, and saving favorites locally.

## Features

- Browse popular movies on load
- Search movies by title
- Add/remove favorites with local persistence (localStorage)
- Client-side routing for Home and Favorites

## Tech Stack

- React 19
- Vite
- React Router
- TMDB API

## Getting Started

1) Install dependencies

```bash
npm install
```

2) Add your TMDB API key

Open [src/services/api.js](src/services/api.js) and replace `YOUR_API_KEY_HERE` with your key from https://www.themoviedb.org/.

3) Start the dev server

```bash
npm run dev
```

## Routes

- `/` - Home (popular + search)
- `/favorites` - Favorites list

## Build and Preview

```bash
npm run build
npm run preview
```

## Notes

- Favorites are stored in the browser via `localStorage`.
- Movie posters use TMDB image URLs (`https://image.tmdb.org/t/p/w500`).
