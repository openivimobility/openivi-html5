# HTML5 environment for OpenIVI Mobility

This provides a HTML5 runtime for OpenIVI Mobility applications.
It supports two modes of operation:

* Running on a PC for test/development
* Running on an embedded system for actual usage

## Building

### Linux

Install dependencies

    sudo apt-get update
    sudo apt-get install build-essential cmake libgles2-mesa-dev libegl1-mesa-dev libwayland-dev qtbase5-dev
    sudo apt-get install libqt5dbus5 libqt5webkit5-dev exuberant-ctags

Create a build directory and configure the build with cmake

	mkdir build
	cd build
	cmake -DCMAKE_BUILD_TYPE=Debug ..

Build

	make

Run
	
	./openivi-html5

### OSX

Install dependencies: 

* install Qt Creator from http://www.qt.io/download-open-source/. Note that the default install includes support files for iOS; these are not required for OpenIVI Mobility, and take 7GB of disk space, so you may wish to deselect them during install.
* install the homebrew version of ctags; the stock xcode one will not work: `brew install ctags`

Create a build directory and configure the build with cmake. Note that on OSX, you will need to tell cmake where to find Qt; the default install location is ~/Qt/<version>/clang_64/

	mkdir build
	cd build
	cmake -DCMAKE_BUILD_TYPE=Debug -DCMAKE_PREFIX_PATH=~/Qt/5.5/clang_64/ ..

Build

	make

Run
	
	./openivi-html5

## Style

Use the google style:
http://google-styleguide.googlecode.com/svn/trunk/cppguide.html

Reformat code using the following before checkin:

    clang-format -style google -i filename.cc

## Linting

To use `clang-check` to lint the source tree:

    clang-check -analyze -p build *.cc

## Example

### SLM

Openivi-html5 intgrates with the Genivi Software Management. There are full instructions for running the Genivi Software Manager at its [README](https://github.com/cajun-rat/genivi_software_management) but here are the condensed instructions to run it with openivi-html5.

First, follow the openivi-html5 README instructions to build and run it. After the "Run" step you should see the Getting Started screen.

When that is complete, in a new terminal clone the Genivi Software Management repo somewhere.

    git clone git@github.com:cajun-rat/genivi_software_management.git
    cd genivi_software_management/
    git checkout feat/hmi-api

Now start the software loading manager (note that this opens 5 terminals) by running:

    sh start_swm.sh

Back in the openivi-html5 window, click on the menu item "File -> Open File" and open openivi-html5/example/demo.html

You should see "There are 0 updates available"

Now in another new terminal, navigate to genivi_software_management and run:

    python sota_client.py

You should see the update appear in the openivi-html5 gui along with the text "Awaiting Approval. There are 1 updates available". To start the update hit the "Approve Updates" button.

The openivi-html5 gui should show the update installing, then return to the "There are 0 updates available" state.
