// $$('input:-webkit-autofill')

new (function(window, document, $){
    if ($('input:-webkit-autofill').length > 0){
        // <span class="error">Your session has timed out.  Please login
        // again.</span>
        var error_msg = $('span[class="error"]').first();
        if (error_msg.text().search("Please login again.")){
            $("form:first[method='post']").submit();
        }
    }

})(window, document, jQuery);

