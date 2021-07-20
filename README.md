# Overview

This is a custom wordpress theme on top of the most popular underscores barebone theme. This uses typescript and tailwind css internally through custom webpack configuration. It utilizes the tree shaking feature of tailwind to keep the asset size minimum.

## Instructions

First Install The Packages

```sh
npm install
```

Then Start The Node Server In Watch Mode By Running

```sh
npm run wp-dev
```

After finishing development run
```sh
npm run build
```

## Folder Structure

Edit the src/scripts/customScript.ts file to customize the javascript or interactivity.
pagespecific.css.ts and tailwind.css.ts files inject the frontend styles.

## Notes (webpack):

From development to build this theme depends on 3 webpack configuration files. webpack.common.js, webpack.dev.js and webpack.production.js. Add or remove themes entry point and output from webpack.common.js and modify other functionality through other two configuration files.

There are also postcss.config.js, tailwind.config.js and tsconfig.json respectively.

## Notes (WooCommerce Support):

Woocommerce Support is out of the box.

#### Happy Coding :) 