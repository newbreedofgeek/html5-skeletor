
HTML5 Skeletor
========================

HTML5 Skeletor is a simple fully responsive HTML5 front end template that you can use as a starting point for your HTML5 projects large or small. It also has a complete GruntJS workflow.


### Features

* Layout and Responsiveness provided by Skeleton (A Beautiful Boilerplate for Responsive, Mobile-Friendly Development) - www.getskeleton.com

* Contains a cool, interactive demo Brokerage Counter web app

* Includes Bower Package Management to download and install the core libraries and their correct versions (currently jquery, modernizr, yepnope)

* Other 3rd party libraries and plugins can also be added locally along with the Package Libraries mentioned above (currently contains jquery.loadie to show cool page loading animation)

* Using YepNope to load your JS files (which can be broken into 'modules') and init your web app

* The JS core includes the Standard Garber-Irish Implementation design pattern

* Includes a QUnit based Unit and Integration test template which can be run in the browser or in headless mode using PhantomJS

* Includes a complete GruntJS dev work flow, this currently has the following grunt tasks:
  + default
      - Does the same as 'build' below

  + build
      - Applies JSHint to the core js files, lint errors need to be fixed to proceed
      - Executes the Unit and Integration tests in headless mode using PhantomJS, tests need to pass to proceed to next step
      - Uglifies and merges all your JS file modules into a single JS file script.js (Your 3rd party scripts are put into its own file called libraries.js)
      - Creates a flat build of your files (placed in /build)

  + package
      - Does what 'build' does as well as packaging your build into a single zip file (placed in /deploy)

  + serve
      - This is where you work from, it serves your app using localhost
      - Bower Package Management is used here to download and install the core libraries to make sure everyone uses the same versions
      - This is the 1st step to run before using 'package' or 'build' as you need the Bower fetched libraries

  + test
      _ Runs the QUnit based Unit and Integration tests in standalone/headless mode using PhantomJs


### Setup

1. Install [Node.js](http://nodejs.org/)

2. Install [Grunt](http://gruntjs.com/getting-started#installing-the-cli)

3. Clone the html5-skeletor repository
```
$ git clone https://github.com/newbreedofgeek/html5-skeletor.git
```

4. Navigate to the html5-skeletor folder
```
$ cd html5-skeletor
```

5. Install dependencies
```
$ npm install
```

6. Serve the working folder using localhost
```
$ grunt serve
```

7. Open <http://localhost:8000> to view your working app


Note: If you don't want the grunt workflow and you only want the pure HTML5 responsive front end template, you only need to clone the repo and work off the /src folder


### Folder Structure

- **src/** Where you work from
- **build/** Where your build files live
- **deploy/** Where your build files are packaged for deployment


### Demo

http://markpaul.name/dont-delete/html5-skeletor/v5.0.0/build
+ The demo shows the last  major.minor version that had UI updates (Patches and task/build updates are not shown as they wont be visible in the ui)

### Tests

http://markpaul.name/dont-delete/html5-skeletor/v5.0.0/src/tests


### Release History

5.0.0 - (19/11/2013) Added QUnit based Unit and Integration tests that are now part of the Grunt workflow (using PhantomJS) for the build and package tasks. There is also a new task called 'test' (e.g. grunt test) that runs the tests in standalone/headless mode.

4.0.0 - (8/11/2013) Added JSHint to lint the core js files of the app. These errors need to be fixed before you can build or deploy.

3.0.0 - (4/9/2013) Added Bower Package Management to download and install the core libraries and their correct versions (currently jquery, modernizr, yepnope)
+ 3.0.1 - (9/9/2013) Included all directories as a guide

2.0.0 - (30/7/2013) Added a grunt task to serve your working app at localhost:8000, also cleaned up the other grunt workflow tasks which makes it not backward compatible with the previous version.

1.1.0 - (25/7/2013) Added a grunt task to zip your build folder and place it in a deploy folder

1.0.0 - (22/7/2013) Added simple GruntJS build workflow to produce a build that uglifies and combines your JS files and uses conditional HTML to call the new files.
+ 1.0.1 - (22/7/2013) Fixed incorrect demo url
+ 1.0.2 - (22/7/2013) Remove the 'build' folder from .gitignore as it makes sense to show it

0.1.0 - (21/7/2013) Initial release. This did not have the GruntJS build workflow and was a vanilla HTML5 responsive front end template. Use this if you don't want GruntJS.