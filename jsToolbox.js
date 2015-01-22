// LICENSE: LGPL 3 - https://www.gnu.org/licenses/lgpl-3.0.txt

// s. https://github.com/mkloubert/jsToolbox


/**
 * Returns the number as string with a minimum length with padding chars at the beginning.
 *
 * @method padLeft
 * 
 * @param {Number} len The minimum length of the result string.
 * @param {String} [pad] The custom padding string to use (is '0' by default).
 * 
 * @return {String} The padded number.
 */
Number.prototype.padLeft = function (len, pad) {
    if (typeof(pad) == "undefined") {
        // set default value
        pad = '0';
    }

    return this.toString()
               .padLeft(len, pad);
};

/**
 * Checks if that string ends with a specific expression.
 *
 * @method endsWith
 * 
 * @param {String} s The expression to check.
 * 
 * @return {Boolean} Ends with expression or not.
 */
String.prototype.endsWith = function(s) {
    return this.indexOf(suffix,
                        this.length - s.length) > -1;
};

/**
 * Handles that string as formatted string.
 *
 * @method format
 * 
 * @param {mixed} [...args] The values for the placeholders in that string.
 * 
 * @return {String} The formatted string.
 */
String.prototype.format = function() {
    var formatArgs = arguments;

    return this.replace(/{(\d+)}/g, function(match, number) { 
        return (typeof formatArgs[number] != 'undefined') ? formatArgs[number]
                                                          : match;
    });
};

/**
 * Returns that string as string with a minimum length with padding chars at the beginning.
 *
 * @method padLeft
 * 
 * @param {Number} [len] The minimum length of the result string (0 by default).
 * @param {String} [pad] The custom padding string to use (is space char by default).
 * 
 * @return {String} The padded number.
 */
String.prototype.padLeft = function (len, pad) {
    if (typeof(len) == "undefined") {
        len = 0;
    }
    
    if (typeof(pad) == "undefined") {
        pad = ' ';
    }
    
    var str = this;
    
    if ((len + 1) >= str.length) {
        str = Array(len + 1 - str.length).join(pad) +
              str;
    }
    
    return str;
};

/**
 * Checks if that string starts with a specific expression.
 *
 * @method startsWith
 * 
 * @param {String} s The expression to check.
 * 
 * @return {Boolean} Starts with expression or not.
 */
String.prototype.startsWith = function(s) {
    return 0 == this.indexOf(s);
};

if (!String.prototype.trim) {
    /**
     * Trims the whitespaces from that string.
     *
     * @method trim
     * 
     * @return {String} The trimmed version of that string.
     */
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, '');
    };
}

if (!String.prototype.trimLeft) {
    /**
     * Trims the whitespaces from that string on the left side.
     *
     * @method trimLeft
     * 
     * @return {String} The trimmed version of that string.
     */
    String.prototype.trimLeft = function() {
        return this.replace(/^\s+/, '');
    };
}

if (!String.prototype.trimRight) {
    /**
     * Trims the whitespaces from that string on the right side.
     *
     * @method trimRight
     * 
     * @return {String} The trimmed version of that string.
     */
    String.prototype.trimRight = function() {
        return this.replace(/\s+$/, '');
    };
}

/**
 * Returns all words of that string as lower case chars but all first chars are upper case.
 *
 * @method ucwords
 * 
 * @return {String} The converted string.
 */
String.prototype.ucwords = function() {
    var str = this.toLowerCase();

    return str.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g,
                       function ($1) {
                           return $1.toUpperCase();
                       });
};


var jsToolboxMJK = {};


(function($jsTB) {
    /**
     * Gets the jQuery object.
     *
     * @property jsToolboxMJK.$
     * @type jQuery
     * @readOnly
     */
    Object.defineProperty($jsTB, '$', {
        get: function () {
            return this.jQuery;
        },
    });

    /**
     * Gets the jQuery selector of the 'body' tag.
     *
     * @property jsToolboxMJK.body
     * @type jQuery
     * @readOnly
     */
    Object.defineProperty($jsTB, 'body', {
        get: function () {
            return this.jQuery('body');
        },
    });
    
    /**
     * Gets the jQuery selector of the 'head' tag.
     *
     * @property jsToolboxMJK.head
     * @type jQuery
     * @readOnly
     */
    Object.defineProperty($jsTB, 'head', {
        get: function () {
            return this.jQuery('head');
        },
    });
    
    /**
     * Gets the jQuery object.
     *
     * @property jsToolboxMJK.jQuery
     * @type jQuery
     * @readOnly
     */
    Object.defineProperty($jsTB, 'jQuery', {
        get: function () {
            return window.jQuery;
        },
    });
    
    /**
     * Gets an empty function.
     *
     * @property jsToolboxMJK.noop
     * @type function
     * @readOnly
     */
    Object.defineProperty($jsTB, 'noop', {
        get: function () {
            return this.jQuery.noop;
        },
    });
    
    /**
     * Gets the current time.
     *
     * @property jsToolboxMJK.now
     * @type Date
     * @readOnly
     */
    Object.defineProperty($jsTB, 'now', {
        get: function () {
            return new Date();
        },
    });
    
    /**
     * Gets the current time.
     *
     * @property jsToolboxMJK.nowUTC
     * @type Date
     * @readOnly
     */
    Object.defineProperty($jsTB, 'nowUTC', {
        get: function () {
            var n = this.now;
            
            return new Date(n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate(),
                            n.getUTCHours(), n.getUTCMinutes(), n.getUTCSeconds(), n.getUTCMilliseconds());
        },
    });
    
    /**
     * Global events.
     *
     * @class jsToolboxMJK.events
     */
    $jsTB.events = {};
    {
        /**
         * Is fired when page was completely loaded.
         *
         * @event pageLoaded
         * 
         * @param {Object} sender The sending object
         * @param {Object} e Event arguments
         */
        $jsTB.events.pageLoaded = function(sender, e) {
            var actionVars = {};    // global vars between onLoaded actions
        
            // handle onLoaded list of 'jsToolboxMJK.page.addOnLoaded'
            // method
            var lastError = null;
            var prevState = null;
            for (var i = 0; i < $jsTB.page.__onPageLoadedActions.length; i++) {
                var item = $jsTB.page.__onPageLoadedActions[i];
                
                var action = item.action;
                var actionState = item.state;
                var opts = item.options;
                
                var ctx = {
                    'continueOnError': opts.continueOnError,
                    'index': i,
                    'lastErr': lastError,
                    'prevState': prevState,
                    'nextState': null,
                    'state': actionState,
                    'vars': actionVars,
                };
                
                // ctx.isFirst
                // 
                // is first action?
                Object.defineProperty(ctx, 'isFirst', {
                    get: function () {
                        return this.index == 0;
                    },
                });
                
                // ctx.isLast
                // 
                // is last action?
                Object.defineProperty(ctx, 'isLast', {
                    get: function () {
                        return (this.index + 1) == $jsTB.page.__onPageLoadedActions.length;
                    },
                });

                lastError = null;
                
                try {
                    if (action) {
                        action($jsTB, ctx);
                    }
                }
                catch (err) {
                    lastError = err;
                    ctx.error = err;

                    if (opts.error) {
                        if (null == ctx.continueOnError) {
                            ctx.continueOnError = true;
                        }
                    
                        opts.error($jsTB, ctx);
                    }
                    else {
                        if (null == ctx.continueOnError) {
                            ctx.continueOnError = false;
                        }
                    }
                    
                    if (!opts.continueOnError) {
                        // re-throw exception
                        throw err;
                    }
                }
                finally {
                    if (opts.complete) {
                        opts.complete($jsTB, ctx);
                    }
                }
                
                prevState = ctx.nextState;
            }
        };
    }
    
    /**
     * Global functions.
     *
     * @class jsToolboxMJK.funcs
     */
    $jsTB.funcs = {};
    {
        /**
         * Keeps sure to return an object as (getter) function.
         *
         * @method asFunc
         *
         * @param {Object} obj The input object.
         *
         * @return {function} The object as function.
         */
        $jsTB.funcs.asFunc = function(obj) {
            var result = obj;
            if (!this.isFunc(result)) {
                result = function() {
                    return obj;
                };
            }
            
            return result;
        };
    
        /**
         * Keeps sure to return an object as jQuery (wrapped) object.
         *
         * @method asJQuery
         *
         * @param {Object} obj The input object.
         *
         * @return {jQuery} The jQuery object.
         */
        $jsTB.funcs.asJQuery = function(obj) {
            if (!this.isJQuery(obj)) {
                obj = $jsTB.jQuery(obj);
            }
            
            return obj;
        };
        
        /**
         * Executes JavaScript code globally.
         *
         * @method eval
         *
         * @param {String} code The JavaScript code to execute.
         *
         * @return {mixed} The result of the execution.
         */
        $jsTB.funcs.eval = function(code) {
            return $jsTB.jQuery
                        .globalEval(code);
        };
        
        /**
         * Invokes a function inside a try-catch block and returns the result as object.
         *
         * @method invoke
         *
         * @param {function} fn The function to invoke.
         * @param {mixed} [...args] The arguments for the function.
         *
         * @return {Object} The result object of the invokation.
         */
        $jsTB.funcs.invoke = function(fn) {
            var result = {
                'args': [],
                'hasBeenInvoked': false,
            };
            
            // copy "real" function arguments
            for (var i = 1; i < arguments.length; i++) {
                result.args.push(arguments[i]);
            }
            
            // result.duration
            Object.defineProperty(result, 'duration', {
                get: function() {
                    if (!this.startTime || !this.endTime) {
                        return;
                    }
                    
                    return this.endTime - this.startTime;
                },
            });
            
            // result.hasFailed
            Object.defineProperty(result, 'hasFailed', {
                get: function() {
                    return this.error ? true : false;
                },
            });
            
            try {
                if (fn) {
                    result.hasBeenInvoked = true;

                    // define the code to invoke
                    var code = 'fn(';
                    for (var i = 0; i < result.args.length; i++) {
                        if (i > 0) {
                            code += ',';
                        }
                        
                        code += 'result.args[{0}]'.format(i);
                    }
                    code += ');';
                    
                    // invoke the code
                    result.startTime = $jsTB.now;
                    result.result = eval(code);
                    result.endTime = $jsTB.now;
                }
            }
            catch (e) {
                result.endTime = $jsTB.now;
            
                result.error = e;
            }
            
            return result;
        };
        
        /**
         * Checks if an object is an array or not.
         *
         * @method isArray
         *
         * @param {Object} obj The object to check.
         *
         * @return {Boolean} Is an array or not.
         */
        $jsTB.funcs.isArray = function(obj) {
            return $jsTB.jQuery
                        .isArray(obj);
        };
        
        /**
         * Checks if an object is a function or not.
         *
         * @method isFunc
         *
         * @param {Object} obj The object to check.
         *
         * @return {Boolean} Is a function or not.
         */
        $jsTB.funcs.isFunc = function(obj) {
            return $jsTB.jQuery
                        .isFunction(obj);
        };
        
        /**
         * Checks if an object is a jQuery object or not.
         *
         * @method isJQuery
         *
         * @param {Object} obj The object to check.
         *
         * @return {Boolean} Is a jQuery object or not.
         */
        $jsTB.funcs.isJQuery = function(obj) {
            return obj instanceof jQuery;
        };
        
        /**
         * Checks if an object is a string or not.
         *
         * @method isString
         *
         * @param {Object} obj The object to check.
         *
         * @return {Boolean} Is a string or not.
         */
        $jsTB.funcs.isString = function(obj) {
            return (typeof obj == 'string') ||
                   (obj instanceof String);
        };
        
        /**
         * Converts/casts an object to a non-(null) string.
         *
         * @method toStringSafe
         *
         * @param {Object} obj The object to convert.
         *
         * @return {String} The object as string that is NOT (null).
         */
        $jsTB.funcs.toStringSafe = function(obj) {
            var result = obj;
            
            if (!result) {
                result = '';
            }
            
            if (!this.isString(result)) {
                result = result.toString();
            }
            
            return result;
        };
        
        /**
         * Trims the whitespace of a string.
         *
         * @method trim
         *
         * @param {mixed} val The object/value to trim.
         *
         * @return {String} The trimmed string representation of the input object.
         */
        $jsTB.funcs.trim = function(val) {
            return this.toStringSafe(val)
                        .trim();
        };
        
        /**
         * Trims the whitespace of a string on the left side.
         *
         * @method trimLeft
         *
         * @param {mixed} val The object/value to trim.
         *
         * @return {String} The trimmed string representation of the input object.
         */
        $jsTB.funcs.trimLeft = function(val) {
            return this.toStringSafe(val)
                       .trimLeft();
        };
        
        /**
         * Trims the whitespace of a string on the right side.
         *
         * @method trimRight
         *
         * @param {mixed} val The object/value to trim.
         *
         * @return {String} The trimmed string representation of the input object.
         */
        $jsTB.funcs.trimRight = function(val) {
            return this.toStringSafe(val)
                       .trimRight();
        };
        
        /**
         * Waits until the page has been loaded and initialized
         * and invokes an action after that.
         *
         * @method waitForPage
         *
         * @param {function} action The action to invoke.
         * @param {mixed} [actionState] The optional state for the action.
         * @param {Object} [opts] Additional options.
         */
        $jsTB.funcs.waitForPage = function(action, actionState, opts) {
            opts = $jsTB.jQuery.extend({
                'waitUntilRetry': 500,
            }, opts);
            
            if (!actionState) {
                actionState = null;
            }
            
            if (!$jsTB.page.context) {
                setTimeout(function() {
                    $jsTB.funcs.waitForPage(action, actionState, opts);
                }, opts.waitUntilRetry);
                
                return;
            }
            
            action($jsTB,
                   actionState);
        };
    }
    
    /**
     * Page specific data and operations.
     *
     * @class jsToolboxMJK.page
     */
    $jsTB.page = {};
    {
        // onLoaded actions
        // THIS IS FOR INTERNAL USE!
        $jsTB.page.__onPageLoadedActions = [];
        
    
        /**
         * Adds an element selector to jsToolboxMJK.page.elements by default.
         *
         * @method addElement
         *
         * @param {String} name The name of the new element selector.
         * @param {mixed} selector The selector to use.
         * @param {Object} [opts] Additional options.
         * 
         * @return {function} The function that provides the jQuery selector.
         */
        $jsTB.page.addElement = function(name, selector, opts) {
            opts = $jsTB.jQuery.extend({
                'target': this.elements,    // jsToolboxMJK.page.elements
            }, opts);
            
            selector = $jsTB.funcs.asJQuery(selector);
            var valProvider = $jsTB.funcs.asFunc(selector);
            
            // add property to to target
            Object.defineProperty(opts.target, $jsTB.jQuery.trim(name), {
                get: valProvider,
            });
            
            return valProvider;
        };
        
        /**
         * Adds an action for pageLoaded event.
         *
         * @method addOnLoaded
         *
         * @param {function} action The action to invoke.
         * @param {mixed} [actionState] The optional state object for the action.
         * @param {Object} [opts] Additional options.
         */
        $jsTB.page.addOnLoaded = function(action, actionState, opts) {
            opts = $jsTB.jQuery.extend({
                'continueOnError': null,
            }, opts);
            
            if (!actionState) {
                actionState = null;
            }
            
            $jsTB.page.__onPageLoadedActions.push({
                'action': action,
                'options': opts,
                'state': actionState,
            });
        };
    
        /**
         * Adds a variable / property to jsToolboxMJK.page.vars by default.
         *
         * @method addVar
         *
         * @param {String} name The name of the new variable.
         * @param {mixed} val The value of the variable / the value provider function.
         * @param {Object} [opts] Additional options.
         * 
         * @return {function} The added value provider.
         */
        $jsTB.page.addVar = function(name, val, opts) {
            opts = $jsTB.jQuery.extend({
                'target': this.vars,    // jsToolboxMJK.page.vars
            }, opts);
            
            var valProvider = $jsTB.funcs.asFunc(val);
            
            // add property to to target
            Object.defineProperty(opts.target, $jsTB.jQuery.trim(name), {
                get: valProvider,
            });
            
            return valProvider;
        };
    
        /**
         * Stores page specific elements / jQuery selectors.
         *
         * @class jsToolboxMJK.page.elements
         */
        $jsTB.page.elements = {};
    
        /**
         * Stores page specific functions.
         *
         * @class jsToolboxMJK.page.funcs
         */
        $jsTB.page.funcs = {};
        
        /**
         * Handles language specific operations.
         *
         * @class jsToolboxMJK.page.lang
         */
        $jsTB.page.lang = {};
        
        /**
         * Handles page request.
         *
         * @class jsToolboxMJK.page.request
         */
        $jsTB.page.request = {};
        {
            /**
             * Storage for GET / query variables.
             *
             * @class jsToolboxMJK.page.request.GET
             */
            $jsTB.page.request.GET = {};

            // GET / query variables
            document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g,
                                             function () {
                                                 var _parseUri = function (s) {
                                                                     return decodeURIComponent(s.split('+').join(' '));
                                                                 };

                                                 $jsTB.page.request.GET[_parseUri(arguments[1])] = _parseUri(arguments[2]);
                                             });
        }
        
        /**
         * Stores page specific variables.
         *
         * @class jsToolboxMJK.page.vars
         */
        $jsTB.page.vars = {};
    }
    
    // page loaded
    $jsTB.jQuery(document).ready(function() {
        var pageCtx = {};
        
        $jsTB.page.context = pageCtx;
    
        // last but not least:
        // the 'pageLoaded' event
        if ($jsTB.events.pageLoaded) {
            var e = {
            };
        
            $jsTB.events.pageLoaded($jsTB, e);
        }
    });
})(jsToolboxMJK);


if (typeof $jsTB === 'undefined') {
    // create alias
    $jsTB = jsToolboxMJK;
}

