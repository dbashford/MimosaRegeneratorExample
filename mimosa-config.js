exports.config = {
  "modules": [
    "copy",
    "server",
    "jshint",
    "csslint",
    "require",
    "minify-js",
    "minify-css",
    "live-reload",
    "bower",
    "regenerator"
  ],
  "server": {
    "path": "server.js"
  },
  "jshint": {
    "rules": {
      "esnext": true
    }
  }
}