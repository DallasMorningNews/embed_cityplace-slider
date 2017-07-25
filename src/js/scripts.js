/* global $: true*/
import pym from 'pym.js';

const pymChild = new pym.Child();

// Your graphic code goes here
//
// |
// +   +--+        +--+
// |   |  +---+    |  |
// |   |  ||  |    |  |
// +   |  ||  +----+  |
// |   |  ||  ||  ||  |
// |   |  ||  ||  ||  |
// +   |  ||  ||  ||  |
// |   |  ||  ||  ||  |
// |   |  ||  ||  ||  |
// +-------------------------+

// Call this every time you need to resize the iframe, after your
// graphic is drawn, etc.

$(document).ready(() => {
  $('#cityplace').twentytwenty({
    no_overlay: true
  });
  pymChild.sendHeight();
});
