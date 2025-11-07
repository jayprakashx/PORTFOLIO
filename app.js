
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

/**
 * Handles the logic for switching between Skills, Experience, and Education tabs.
 * @param {string} tabname - The ID of the tab content to show (e.g., 'skills').
 */
function opentab(tabname) {
    
    for (i of tablinks) {
        i.classList.remove("active-link"); 
    }
    
   
    for (i of tabcontents) {
        i.classList.remove("active-tab"); 
    }
    
 
    event.currentTarget.classList.add("active-link"); 
  
    document.getElementById(tabname).classList.add("active-tab"); 
}
