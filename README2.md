# Salmon Cookies

This site contains two pages:  a public-facing index.html, and an admin/owner-only sales forecast table.
(Currently, there is no security to restrict access to owners or admins.  That part is only in my imagination.)
You navigate between the two pages with the very 90's-era link in the upper-right corner.

The sales.html page generates sales projections based on history data for each location.
A user can add additional locations as desired.  There is HTML and script data validation on the inputs.
Since this site has no back end, all data is regenerated (and additions lost) with every refresh of the page.