var logger = (function() {
    var log = function(assertion, message, theme) {
        if (assertion && message) {
            theme && message[theme] ? console.log(message[theme]) : console.log(message);
        }
    };

    if (!console['logger']) {
        console['logger'] = log;
    }

    return log;
})();

module.exports = logger;
