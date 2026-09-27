# GreenHope Health

A React + Vite rebuild of the GreenHope Health landing page, styled with Tailwind CSS,
icons from `lucide-react`, and a 3D animated hero background built with
`@react-three/fiber` + `@react-three/drei`.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/
    Header.jsx      sticky nav with mobile menu
    Hero.jsx         auto-advancing headline slider
    HeroCanvas.jsx    3D floating-blob background (react-three-fiber + drei)
    About.jsx         mission copy + animated stat counters
    Programs.jsx      asymmetric program cards
    Impact.jsx        dark impact-numbers band
    Donate.jsx        donate / volunteer call to action
    Footer.jsx
  hooks/
    useCountUp.js     scroll-triggered number counting animation
  index.css           Tailwind directives + font import
  App.jsx
  main.jsx
```

## Notes

- Color palette, typography (Fraunces + Inter) and layout were designed specifically
  for this brief rather than reused from a template — see the component files for the
  forest/gold/sand token system defined in `tailwind.config.js`.
- The hero's 3D scene is decorative and ambient (no required user interaction), and
  respects `prefers-reduced-motion` at the CSS level.
