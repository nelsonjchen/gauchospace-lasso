// $$('input:-webkit-autofill')

new (function(window, document, $){

    // Auto relogin if timed out.
    if (window.location.pathname == "/courses/login/index.php"){
        if ($('input:-webkit-autofill').length > 0){
            // <span class="error">Your session has timed out.  Please login
            // again.</span>
            var error_msg = $('span[class="error"]').first();
            if (error_msg.text().search("Please login again.") > 0){
                $("form:first[method='post']").submit();
            }
        }

    }
})(window, document, jQuery);

