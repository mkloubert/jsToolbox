# jsToolbox

A JavaScript framework based on [jQuery](http://jquery.com/).

It provides:

* Extensions for classes like [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and [Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
* Namespaces for page data like variables and elements
* Better jQuery selector handling

Have a look at the [wiki](https://github.com/mkloubert/jsToolbox/wiki) for detailed DOCUMENTATION.

# Example

```html
<html>
  <head>
    <script type="text/javascript" src="https://code.jquery.com/jquery-1.11.2.min.js"></script>
    <script type="text/javascript" src="jsToolbox.min.js"></script>
  </head>

  <body>
    <div id="myVars">
      <div class="myVar1Value"></div>
      <div class="myVar2Value"></div>
    </div>
    
    <button type="button" onclick="$jsTB.page.funcs.myButtonAction()">Click me!</button>
  
    <script type="text/javascript">
        
        $jsTB.page.addOnLoaded(function() {
            $jsTB.page.addVar('myVar1', 'TM')
                      .addVar('myVar2', function() {
                                            return 'Current time: {0}'.format(new Date());
                                        });
                                        
            $jsTB.page.addElement('placeFor_myVar1', '#myVars .myVar1Value')
                      .addElement('placeFor_myVar2', '#myVars .myVar2Value');
        });
        
        $jsTB.page.funcs.myButtonAction = function() {
            $jsTB.page.elements.placeFor_myVar1
                               .text($jsTB.page.vars.myVar1);
                              
            $jsTB.page.elements.placeFor_myVar2
                               .text($jsTB.page.vars.myVar2);
        };
        
    </script>
  </body>
</html>
```

## Getting started

First include [jQuery](http://jquery.com/) before including `jsToolbox.js` or `jsToolbox.min.js` file.
