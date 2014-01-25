MimosaRegeneratorExample
========================

An example app for the mimosa-regenerator module.

## Usage

Assuming you have [Mimosa](http://mimosa.io) installed (`npm install -g mimosa`):

* `git clone https://github.com/dbashford/MimosaRegeneratorExample`
* `cd MimosaRegeneratorExample`
* `mimosa watch -s`
* Visit http://localhost:3000

## Details

* The mimosa-regenerator module has written a `wrapGenerator.js` file to the `public/javascripts` directory.  This file is necessary for the transpiled ES6 generators to work.  It has been `script` included in the page.  See `views/layout.jade`.
* The `assets/javascripts/main.js` file includes the generator code.
* The `public/javascripts/main.js` file contains the transpiled generator code.


