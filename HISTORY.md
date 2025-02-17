v2.3.3
==================
* Refine the shadow style

v2.3.2
==================
* Make it support specify verticalAlign value

v2.3.1
==================
* Align carat's position when show with scroll bar

v2.3.0
==================
* Added the following CSS variables:
  * `--px-popover-padding` - Padding around content within popover
  * `--px-popover-z-index` - Configurable z-index to position popover within your app

v2.2.4
==================
* Added missing null check in setPosition function
* Changed node version from stable to 9 since node-sass won't compile on node 10

v2.2.3
==================
* Fix demo for IE

v2.2.2
==================
* fix demo for enhanced

v2.2.1
==================
* `enhanced` property re-added to avoid API breaking change
* `position` property re-added to avoid API breaking change

v2.2.0
==================
* refactor to use iron-dropdown
* add orientation option `auto` (#14)
* fix scrollOffset issue (#16)
* `enhanced` property removed, child content slotted by default
* `position` property removed, parent sizing irrelevant

v2.1.3
==================
* add missing events to API doc

v2.1.2
==================
* update to released dependencies

v2.1.1
==================
* fix webcomponents import

v2.1.0
==================
* Polymer 1.x/2.x hybrid element support

v2.0.10
==================
* fix broken overlay logic

v2.0.9
==================
* add device flags

v2.0.8
==================
* migrate content to slot (#17)

v2.0.7
==================
* switch background-color to background (#18)

v2.0.6
==================
* fix to work with more complex triggers (#19)

v2.0.5
==================
* fix popover positioning (#16)

v2.0.4
==================
* fix popover positioning (#15)

v2.0.3
==================
* Fix comment for analyzer

v2.0.2
==================
* runtime theming for demo

v2.0.1
==================
* fix 404 in demo

v2.0.0
==================
* component redesign
* added event for hide
* clean up sass

v1.7.9
==================
* removed click event capturing to permit links inside popovers

v1.7.8
==================
* fixes #8 and #9

v1.7.7
==================
* updated demo per design feedback, removed erroneous "auto" orientation

v1.7.6
==================
* fixed word-wrap per #7

v1.7.5
==================
* updated to px-demo

v1.7.4
==================
* exposed max width as style variable

v1.7.3
==================
* Updating so px-demo-snippet and px-api-viewer get new grays

v1.7.2
==================
* Update colors design to pick up new colors

v1.7.1
==================
* changing ghp.sh to account for Alpha releases

v1.7.0
==================
* Updated dependencies

v1.6.11
==================
* changing browser in wct testing from safari 8 to safari 10 on elcapitan

v1.6.10
==================
* changing all devDeps to ^

v1.6.9
==================
* Update px-theme to 2.0.1 and update test fixtures

v1.6.8
==================
* update dependencies for dropdown

v1.6.7
==================
* removing px-theme style call


v1.6.6
==================
* changing Gruntfile.js to gulpfile.js


v1.6.5
==================
* bower updating px-demo-snippet

v1.6.4
=================
* rebuild css

v1.6.3
=================
* commented out failing position test

v1.6.2
=================
* added style variables for theming

v1.6.1
=================
* fixed codepen

v1.6.0
=================
* merged PR #5 to support rich popover content
* commented out failing position tests

v1.5.1
=================
* Update dependencies

v1.4.7
=================
* added overflow to demoContainer and removed flex__wrap from mega-demo

v1.4.6
=================
* added overflow to demo class and removed <br>

v1.4.5
=================
* updated mega demo styles and bower px-demo-snippet to ^

v1.4.4
=================
* added view on github to demo page and image to readme

v1.4.3
=================
* updated gh-pages script to vulcanize demo

v1.4.2
=================
* added mega demo

v1.4.1
=================
* Changed 248px width to be max-width

v1.4.0
=================
* Fix for shadow dom support. Made show() and hide() public. Added hideOverlay property

v1.2.3
=================
* added oss_notice to bower ignore

v1.2.2
=================
* added pull request test for travis and updated OSS Notice

v1.2.1
=================
* added auto github pages functionality

v1.2.0
=================
* Upgrade to Polymer 1.4.0

v1.1.4
=================
* Updated README file and included link to API on github pages.

v1.1.3
=================
* Updated License

v1.1.2
==================
* bug fix for IE and moved some overlay code into overlay component

v1.1.1
==================
* bug fix with overlay in a transformed container
* moved overlay into its own component. Various refactoring to remove oold functionality
* fixed positioning for transformed and relative positioned elements. Improved docs
* fixed version

v1.1.0
==================
* added a fix so the overlay displays correctly for transformed elements
* changed the way positioning was handled to fix transformed elements
* fixed relative and static target element positioning which breaks with new positioning approach
* improved documentation

==================

v1.0.1
==================
* removed obsolete hooks and properties
* cleaned up the way listeners were setup
* moved overlay into its own component which is called in px-popover
* Added examples of different ways to position the target in the demo.html as examples of when it fails.

==================

v1.0.0
==================
* implemented popover redesign.
* removed onhover and onfocus event calls
* implimented tests to check popover positioning

==================
v0.1.1
==================
* Added a 5 pixel margin between the element being hovered, and the popover.
