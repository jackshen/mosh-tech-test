# Mosh Coding Challenge

Mosh tech test

## Setup

Copy `.env.example` into `.env`; sensible default configuration values have been provided for your convenience, but feel free to update these as you wish.

From there, run the following commands to run the application:

```sh
yarn
yarn start
```

Given the default `.env` configuration, this will open up a server at [localhost:3001](http://localhost:3001) where this app is hosted.

## Technologies used

- **Bundler**: Webpack
- **Framework**: React/TypeScript
- **HTTP client**: Axios
- **Linting and formatting**: ESLint, Prettier
- **Styling**: styled-components

## Assumptions and talking points

I made my technical and architectural choices with extensibility, reusability, and maintainability at the forefront of my mind. For example, one of the reasons for my decision to use Styled Components was to leverage its inbuilt global styles and themes context providers in order to define and use commonly used [colours](./src/theme/palette.ts) and [size breakpoints](./src/theme/size.ts).

- The app has been built as a barebones SPA with extensibility in mind. Currently, the only page is the Landing page per the task requirements, but it would be straightforward to further build out more pages and routes based on the pattern I have used.
- I have built the Accordion and Button components to be reusable. The Hero and HeroCard components were not designed to be reused, and are scoped to the Landing page.
- In the absence of designs for component interactions, button hover in particular, I have taken inspiration from the production designs on the Mosh website.
- The app is fully responsive. In order to preserve visual integrity, I have taken the liberty of adjusting sizings for transitional window resolutions between the provided mobile, tablet, and desktop designs.
- I am a strong advocate for accessible design in the frontend, especially since Mosh is in the health industry. As such, I have implemented the webapp to be maximally accessible: all images have alt tags and all interactables are keyboard-navigable, including the collapse/expand accordion functionality, the CTA button, and the Mosh logo.
