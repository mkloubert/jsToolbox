// LICENSE: LGPL 3 - https://www.gnu.org/licenses/lgpl-3.0.txt

// s. http://blog.marcel-kloubert.de


// String.endsWith()
if (!String.prototype.endsWith) {
    String.prototype.endsWith = function(s) {
        return this.indexOf(suffix,
                            this.length - s.length) > -1;
    };
}

// String.format()
if (!String.prototype.format) {
    String.prototype.format = function() {
        var formatArgs = arguments;
 
        return this.replace(/{(\d+)}/g, function(match, number) { 
            return typeof formatArgs[number] != 'undefined'
                ? formatArgs[number]
                : match;
        });
    };
}

// String.startsWith()
if (!String.prototype.startsWith) {
    String.prototype.startsWith = function(s) {
        return 0 == this.indexOf(s);
    };
}

// String.ucwords()
if (!String.prototype.ucwords) {
    String.prototype.ucwords = function() {
        var str = this.toLowerCase();
 
        return str.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g,
                           function ($1) {
                               return $1.toUpperCase();
                           });
    };
}
