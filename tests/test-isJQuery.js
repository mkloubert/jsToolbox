
QUnit.test('isJQuery', function( assert ) {
    var a1 = jQuery('body');
    var a2 = 5979;
    var a3 = null;
    
    assert.ok($jsTB.funcs.isJQuery(a1),
              'a1 is: ' + typeof(a1));
              
    assert.ok(!$jsTB.funcs.isJQuery(a2),
              'a2 is: ' + typeof(a2));
              
    assert.ok(!$jsTB.funcs.isFunc(a3),
              'a3 is: ' + typeof(a3));
});
