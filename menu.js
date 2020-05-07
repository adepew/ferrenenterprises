// Begin

// NOTE: If you use a ' add a slash before it like this \'



var menuside	 = "center"		  // MENU SIDE | left | right | center |



document.write('<div id="menudiv" class="td-'+menuside+' printhide">');
document.write('<div id="mobile-menu-icon" onclick="javascript:toggleMenu(\'menusub\');">');

// MOBILE 3 BAR MENU

document.write('<img src="picts/mobile-menu-icon-white.png" width="100" height="29" class="menu-icon-img" alt="Open Menu">');

document.write('</div>');
document.write('<div id="menusub">');



// START MENU LINKS - COPY ANY LINE TO ADD A NEW LINK


document.write('<a href="index.html">HOME</a>');


document.write('<a href="gallery.htm">GALLERY</a>');


document.write('<a href="hsseniors.htm">HS SENIORS</a>');


document.write('<a href="restoration.htm">DIGITAL RESORATION</a>');


document.write('<a href="framing.htm">FRAMING & MATTING</a>');


document.write('<a href="about.htm">ABOUT</a>');


/*
document.write('<a href="site_map.htm">SITE MAP</a>');


document.write('<a href="press.htm">PRESS</a>');


document.write('<a href="PDFgallery.htm">PDFs</a>');


document.write('<a href="staff.htm">STAFF</a>');
*/

document.write('<a href="contact.htm">CONTACT</a>');


// END MENU LINKS



document.write('</div>');
document.write('</div>');
