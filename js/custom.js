// coding for collapsible menu for instructional content
var accordion = document.querySelectorAll('.cd-accordion__label,.cd-accordion__sub')
var menuGroup = 0;
for (var i = 0; i < accordion.length; i++) {
    if (accordion[i].className == 'cd-accordion__sub cd-accordion__sub--l1 cd-accordion__sub_off') {
        menuGroup = i;
    }
    if (accordion[i].className == 'cd-accordion__label instructor') {
        menuGroup = 0;
        // no menu group once reach instruction menu items
    }
    try {
        if (accordion[i].href == document.URL) {
            accordion[i].className = 'cd-accordion__label activePage';
            if (menuGroup > 0) {
                accordion[menuGroup].className = 'cd-accordion__sub cd-accordion__sub--l1'
                // open menu group for the active menu item
            }
        }
    } catch (error) {}
}
