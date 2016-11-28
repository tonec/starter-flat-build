#Setup local front-end environment and install front-end development dependencies

This is a project starter for flat html builds. Uses Gulp for build tasks and includes the following in the setup:
- Jade
- SCSS (inc some useful helpers for breakpoints and typographical vertical rhythm)
- Susy (SASS build your own grid system)
- SVG Sprites
- Image processing
- Browserify for commonJS modules
- Linting
- Style checking

##Gulp build

1. Download and install node.js from http://nodejs.org/.
2. Once installed, open a command window and cd into this directory.
3. Type 'npm install' and hit enter to install Gulp and dependencies.

##Development workflow

All code changes should made to the files within the `src/` directory. The default Gulp task will compile all assets and make them available in the `dist/` directory.

1. Open a command window and cd into this directory.
2. Type 'gulp' and hit enter.

This will also start a watch task, which will monitor the `src/` directory for further changes. Rerunning the build tasks as necessary.

Install the free Live Reload plugin for Chrome for automatic browser reloading.

## Additional tasks

- gulp
Default task. Runs local development build. Compiles the scss and jade templates, bundles the JavaScript, performs and linting and runs all tests. Javascipt is linted and concatenated but not minified. The default task does not include any tasks related to images because these are a little slower. Use 'gulp img' when adding new image assets.

- gulp img
This copies all images from `src/img` to `dist/img` optimising them with imagemin along the way. This also generates the svg symbol sprite, which is included in the page templates, and generates png fallback images for IE8 and below.

- gulp clean
Deletes the `dist/` directory.
# starter-flat-build
