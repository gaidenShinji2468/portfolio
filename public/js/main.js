let buttonDropdown = document.getElementById("nav-icon-bars");
let navDropdown = Array.prototype.slice.call(document.getElementsByClassName("nav-dropdown"));

buttonDropdown.onclick = function()
{
    navDropdown[0].classList.toggle("nav-dropdown-visible");
}
