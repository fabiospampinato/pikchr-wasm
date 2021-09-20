# Pikchr WASM

A fast and small port of [Pikchr](https://pikchr.org/home/doc/trunk/homepage.md) to WASM.

## Install

```sh
npm install --save pikchr-wasm
```

## Usage

```ts
import pikchr from 'pikchr-wasm'; // Default entrypoint, optimized for speed, ~76kb min+gzip
// import pikchr from 'pikchr-wasm/speed'; // Default entrypoint, optimized for speed, ~76kb min+gzip
// import pikchr from 'pikchr-wasm/size'; // Alternative entrypoint, optimized for bundle size, ~65kb min+gzip

await pikchr.loadWASM (); // First of all you need to load the WASM instance and wait for it

const markup = 'box'; // The markup to render
const svg = pikchr.render ( compressed ); // You get an SVG as a string back
```

## Licenses

- Library: MIT © Fabio Spampinato
- Pikchr: [BSD © Richard Hipp](https://github.com/drhsqlite/pikchr/blob/html-defense/pikchr.c)
