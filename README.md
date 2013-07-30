
HTML5 Skeletor
========================

HTML5 Skeletor is a simple fully responsive HTML5 front end template that you can use as a starting point for your HTML5 projects large or small. It also has a simple GruntJS dev workflow.


### Features

* Layout and Responsiveness provided by Skeleton (A Beautiful Boilerplate for Responsive, Mobile-Friendly Development) - www.getskeleton.com

* Contains a cool, interactive demo Brokerage Counter web app

* Includes local Jquery and Modernizr references for faster loading

* Includes Modernizr.load to load your JS files (which can be broken into 'modules') and init your web app

* The JS core includes the Standard Garber-Irish Implementation design pattern

* Includes a simple GruntJS dev work flow, this currently has the following grunt tasks:
  + default
      - Uglifies and merges all your JS file modules into a single JS file script.js (Your 3rd party scripts are put into its own file called libraries.js)
      - Creates a flat build of your files (placed in /build)

  + package
      - Does what 'default' does as well as zipping your packaging into a single zip file (placed in /deploy)

  + serve
      - This is where you work from, it serves your app using localhost


### Setup

1. Install [Node.js](http://nodejs.org/)

2. Install [Grunt](http://gruntjs.com/getting-started#installing-the-cli)

3. Clone the html5-skeletor repository
```
$ git clone git@github.com:newbreedofgeek/html5-skeletor.git
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

http://markpaul.name/dont-delete/html5-skeletor/v2.0/build
+ The demo shows the latest major.minor version (but patches and hot fixes are also included even though the url will not have the last patch number)


### Release History

2.0.0 - (30/7/2013) Added a grunt task to serve your working app at localhost:8000, also cleaned up the other grunt workflow tasks which makes it not backward compatible with the previous version.

1.1.0 - (25/7/2013) Added a grunt task to zip your build folder and place it in a deploy folder

1.0.0 - (22/7/2013) Added simple GruntJS build workflow to produce a build that uglifies and combines your JS files and uses conditional HTML to call the new files.
+ 1.0.1 - (22/7/2013) Fixed incorrect demo url
+ 1.0.2 - (22/7/2013) Remove the 'build' folder from .gitignore as it makes sense to show it

0.1.0 - (21/7/2013) Initial release. This did not have the GruntJS build workflow and was a vanilla HTML5 responsive front end template. Use this if you don't want GruntJS.