# Astro Starter Kit: Blog

```sh
npm create astro@latest -- --template blog
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/blog)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/blog)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/blog/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![blog](https://github.com/withastro/astro/assets/2244813/ff10799f-a816-4703-b967-c78997e8323d)

# BlackLine IT Website

This project is a modern, responsive website built using Astro, designed to replicate the styling and functionality of [BlackLine IT](https://blacklineit.com/).

![BlackLine Website Preview](public/favicon.svg)

## 🌟 Features

- ✅ Modern, responsive design matching BlackLine IT's branding
- ✅ Interactive components with smooth animations
- ✅ Fixed header with scroll effects
- ✅ Interactive FAQ accordion sections
- ✅ Service showcase with hover effects
- ✅ Industry statistics with counter animations
- ✅ Mobile-friendly navigation with hamburger menu
- ✅ Page loader animation for improved UX
- ✅ SEO-friendly with proper heading structure
- ✅ SVG icons for lightweight performance
- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ RSS Feed support
- ✅ Markdown & MDX support

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`, and type-check your frontmatter using an optional schema. See [Astro's Content Collections docs](https://docs.astro.build/en/guides/content-collections/) to learn more.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 📝 Main Pages

- **Home (`/`)**: The main landing page showcasing BlackLine's services and value proposition
- **Manifesto (`/manifesto`)**: BlackLine's mission statement and industry approach
- **Contact (`/contact`)**: Contact form and information

## 🧩 Components

- **Header**: Fixed navigation bar with mobile-responsive menu
- **Footer**: Site footer with company information and navigation links
- **Service Cards**: Showcase BlackLine's service offerings
- **FAQ Accordion**: Interactive Q&A section
- **Statistics Display**: Animated counters for key metrics
- **Call-to-Action Sections**: Encouraging user engagement

## 👀 Want to learn more?

Check out [Astro documentation](https://docs.astro.build) or jump into their [Discord server](https://astro.build/chat).

## 🙏 Credits

- Original design inspiration: [BlackLine IT](https://blacklineit.com/)
- Built with [Astro](https://astro.build)
- Base theme inspired by [Bear Blog](https://github.com/HermanMartinus/bearblog/)
