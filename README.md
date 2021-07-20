# Overview

___

This is a bare minimum plugin to create custom block variation and pattern in wordpress block editor.  
Note: Block Variation Use Mostly Client Side Integration Where pattern use server side.  
Choose as your preference :)

## Instructions

___

First Install The Packages

```sh
npm install
```

Then Start The Node Server In Watch Mode By Running

```sh
npm run start
```

After finishing development run
```sh
npm run build
```

## Folder Structure

___

Edit the src/index.js file to customize the variation
Edit the index.php file to put block pattern

## Notes (inline css injection):

___

As of writing this, maybe to work perfectly with headless architecture, wordpress gives no way (or not documented yet) to push custom inline styles through block variation api. You can use custom css classes to get fine grain control.

## Notes (Hooking Block Variation Assets):

___

Shortet way is through init hook and register_block_type_from_metadata using block.json structure (see index.php for detail). And also alternatively you enqueue scripts and asstes on editor-only or both side.

#### Happy Coding :) 