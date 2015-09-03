# Gulp Email-Boilerplate

Personal Gulp boilerplate for email templates.

## Features
* [Sass][sass] Support
* [Jade][jade] Support
* [Browser-Sync][browsersync] Integration
* Auto-Prefixer Integration
* Resource Optimization
* Notification Support
* Preview-Submission Support

## Requirements
* [Node.js][node]
* [Bower][bower]

## Tasks

Run the `default` task by executing `gulp`. Run specific tasks by executing `gulp <task>`.

- **default**  
  Run the `setup`, `build` and the `watch` tasks.

- **build**  
  Run the `templates` and the `images` tasks.

- **setup**  
  Run `bower install` to install dependencies defined in the `bower.json` file.

- **templates**  
  Compile `jade` templates and write them to the public template directory.

- **images**  
  Read images from the images directory and copy them to the public images directory.

- **send**  
  Send out preview emails using the rendered templates as content.

- **watch**  
  Start `browser-sync` which is serving the public directory and re-run tasks when source files change.

### Flags

- **production**  
  Use `--production` with any task to enable optimizations for production output e.g. minification etc.

[sass]: http://sass-lang.com/
[jade]: http://jade-lang.com/
[browsersync]: http://www.browsersync.io/
[node]: https://nodejs.org/
[bower]: http://bower.io/
