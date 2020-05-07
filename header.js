// HEADER

// USE lowercase FOR ALL OPTIONS



var logotext	= "Your Website Title"	// TEXT LOGO TEXT
var logotype	= "graphic"		// LOGO TYPE | graphic | text |
var logolink	= "index.html"		// LINK FOR LOGO


var headerimg	= "yes"				// SHOW RIGHT HEADER IMAGE
var hicon	= "header-icon-white.png"	// HEADER ICON
var hiconlink	= "contact.htm"			// ICON LINK



// COPYRIGHT 2020 © Allwebco Design Corporation
// Unauthorized use or sale of this script is strictly prohibited by law

// YOU DO NOT NEED TO EDIT BELOW THIS LINE



// LOGO

document.write('<div id="headerdiv" class="headercolor">');

   if (logotype == "graphic") {
document.write('<a href="'+logolink+'"><img src="picts/logo.jpg" class="logo-respond"></a>');
}
   if (logotype == "text") {
document.write('<div class="left-div td-left">');
document.write('<div OnSelectStart=\'return false;\' class="td-left td-middle"><a href="'+logolink+'" class="textlogo">'+logotext+'</a></div>');
document.write('</div>');
}

document.write('</div>');



// HEADER ICON DELETE THESE LINES TO REMOVE

   if (headerimg == "yes") {
document.write('<div class="header-ico1 icohov printhide">');
document.write('<a href="'+hiconlink+'"><img src="picts/'+hicon+'" class="ico1-img" alt="Contact"></a>');
document.write('</div>');
}
