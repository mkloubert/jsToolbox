
var test_addOnLoaded = '';
for (var i = 0; i < 10; i++) {
    $jsTB.page.addOnLoaded(function(s, ctx) {
        test_addOnLoaded += ctx.index.toString();
    });
}

QUnit.test('addOnLoaded', function( assert ) {
    assert.ok('0123456789' == test_addOnLoaded,
              'Test string is: ' + test_addOnLoaded);
});
