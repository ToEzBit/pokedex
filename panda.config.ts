import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          identity: {
            primary: { value: "#DC0A2D" },
          },
          pokemonType: {
            bug: { value: "#A7B723" },
            dark: { value: "#75574C" },
            dragon: { value: "#7037FF" },
            electric: { value: "#F9CF30" },
            fairy: { value: "#E69EAC" },
            fighting: { value: "#C12239" },
            fire: { value: "#F57D31" },
            flying: { value: "#A891EC" },
            ghost: { value: "#70559B" },
            normal: { value: "#AAA67F" },
            grass: { value: "#74CB48" },
            ground: { value: "#DEC16B" },
            ice: { value: "#9AD6DF" },
            poison: { value: "#A43E9E" },
            psychic: { value: "#FB5584" },
            rock: { value: "#B69E31" },
            steel: { value: "#B7B9D0" },
            water: { value: "#6493EB" },
          },
          grayScale: {
            dark: { value: "#212121" },
            medium: { value: "#666666" },
            light: { value: "#E0E0E0" },
            background: { value: "#EFEFEF" },
            white: { value: "#FFFFFF" },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
  jsxFramework: "react",
});
