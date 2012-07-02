// $$('input:-webkit-autofill')

new (function(window, document, $){
    $(document).ready(function(){    
        // Auto relogin if timed out.
        if (window.location.pathname.match(/\/courses\/login\//)){
            var autofill = $('input:-webkit-autofill');
            if (autofill.length > 0){
                // <span class="error">Your session has timed out.  Please login
                // again.</span>
                var error_msg = $('span[class="error"]').first();
                if (error_msg.text().search("Please login again.") > 0){
                    $("form:first[method='post']").submit();
                }
            }
        }

        // Psuedodirectlinkify all document URLs
        if (window.location.pathname == "/courses/course/view.php"){        
            // Find all onclick elements in anchor links of such elements and
            // remove them. Append &inpopup=true to all of them.
            //
            $(".activity.resource > a").each(function(a){
                // Remove the onclick
                this.removeAttribute("onclick");
                // Psuedo-Direct link to the page. At least it's a 
                // transparent redirect now.
                var newurl = this.href.concat("&inpopup=true");
                this.setAttribute("href", newurl);
            });
        }
        //
        // Psuedodirectlinkify all document URLs in resource listing
        if (window.location.pathname.match(/\/courses\/mod\/resource\//)){        
            // Find all onclick elements in anchor links of such elements and
            // remove them. Append &inpopup=true to all of them.

            $(".generaltable .c1 a").each(function(a){
                // Remove the onclick
                this.removeAttribute("onclick");
                // Psuedo-Direct link to the page. At least it's a 
                // transparent redirect now.
                var newurl = this.href.concat("&inpopup=true");
                this.setAttribute("href", newurl);
            });
        }
    });
})(window, document, jQuery);

