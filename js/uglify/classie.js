/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */
!function(t){"use strict";function e(t){return new RegExp("(^|\\s+)"+t+"(\\s+|$)")}var s,n,a;function c(t,e){(s(t,e)?a:n)(t,e)}"classList"in document.documentElement?(s=function(t,e){return t.classList.contains(e)},n=function(t,e){t.classList.add(e)},a=function(t,e){t.classList.remove(e)}):(s=function(t,s){return e(s).test(t.className)},n=function(t,e){s(t,e)||(t.className=t.className+" "+e)},a=function(t,s){t.className=t.className.replace(e(s)," ")});var i={hasClass:s,addClass:n,removeClass:a,toggleClass:c,has:s,add:n,remove:a,toggle:c};"function"==typeof define&&define.amd?define(i):t.classie=i}(window);var buttons7Click=Array.prototype.slice.call(document.querySelectorAll(".btn-click button")),totalButtons7Click=buttons7Click.length;function activate(){var t=this;classie.has(this,"btn-activated")||(classie.add(this,"btn-activated"),setTimeout(function(){classie.remove(t,"btn-activated")},1e3))}buttons7Click.forEach(function(t,e){t.addEventListener("click",activate,!1)});