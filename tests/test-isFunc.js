
QUnit.test('isFunc', function( assert ) {
    var a1 = function() {
    };
    var a2 = 'TM';
    var a3 = null;

    assert.ok($jsTB.funcs.isFunc(a1),
              'a1 is: ' + typeof(a1));
              
    assert.ok(!$jsTB.funcs.isFunc(a2),
              'a2 is: ' + typeof(a2));
              
    assert.ok(!$jsTB.funcs.isFunc(a3),
              'a3 is: ' + typeof(a3));
});
