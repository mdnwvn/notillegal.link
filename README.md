# notillegal.link
### A dumb little site that makes links sketchy

## Why does this exist?

Well you see, I bought this domain 4 years ago and it's been draining my bank account every since so I though
I'd finally get around to doing what I've always meant to do on it.

# Usage

There's a `build.sh` that automatically stashes then clears the stash of the current directory,
syncs the repo using the Github CLI, before finally installing deps and building the SvelteKit app.
This is mostly a script I use personally to quickly updated the hosted version after committing a
change locally.

The original SvelteKit readme explains how to use it better so here's that:

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.