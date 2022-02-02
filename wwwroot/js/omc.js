// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

$(document).ready(_ => {
        var diff_ms = new Date(2021, 10, 2).getTime() - Date.now();
        var age_dt = new Date(diff_ms); 

        $('#sub').text(Math.abs(age_dt.getUTCFullYear() - 1970) + " days until premiere.");

        window.fitText( document.getElementById("title"), 2 );

});
