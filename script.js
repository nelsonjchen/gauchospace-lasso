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

        // Add quick course links for easier clicking after logging in instead
        // of scrolling down or moving down the mouse.
        if (window.location.pathname == "/courses/"){        
            var lcol = $('#left-column');                        

            var quick_list = $('<ul>', {'class':'list'});

            $('.name > a').each(function(a,b){
                quick_list.append($(b).clone().wrap('<li/>').parent());
            })

            quick_list = quick_list.wrap($('<div>', {'class':'content'})).parent();
            quick_list = quick_list.wrap($('<div>', {'class':'sideblock'})).parent();
            quick_list.prepend($('<div>', {'class': 'header', 'text': 'QuickClick Menu'}));
            quick_list = quick_list.wrap($('<div>')).parent();
            $(quick_list).prependTo(lcol);            
            
        }
    });
})(window, document, jQuery);

