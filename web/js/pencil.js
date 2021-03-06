// pencil.js: Some scripting for the Pencil.
// It is used whenever a user edits a file with the Pencil.
// Copyright © 2011 Jan Keromnes. All rights reserved.
// The following code is covered by the GPLv2 license.



// UI
//

function showtools() {
  Scout('#wrench').style.display = 'none';
  Scout('#toolbox').style.display = 'inline';
};

function hidetools() {
  Scout('#toolbox').style.display = 'none';
  Scout('#wrench').style.display = 'inline';
};

// CodeMirror theme
function selectTheme(node) {
  editor.setTheme(node.options[node.selectedIndex].innerHTML);
}


// Navigation
//

(function() {

  // Hot back shortcut is active
  var hotback = true;

  // If a key is pressed...
  addEventListener('keydown', function(e) {

    // If hot back is active and (Backspace or Left), we go back.
    if (hotback && (e.keyCode === 8 || e.keyCode === 37)) {
      //history.go(-1);
      var loc = window.location;
      window.location = loc.protocol + '//' + loc.host +
        loc.pathname.replace(/\/[^\/]+[\/]*$/,'/') + loc.search;
    }

    // If not Right, we deactivate hot back
    else if (e.keyCode !== 39) {
      hotback = false;
    }

  }, false);

  // If the user clicks, deactivate hot back
  addEventListener('mousedown', function() {hotback = false;});

})();


