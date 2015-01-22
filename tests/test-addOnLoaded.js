// LICENSE: GPL 3 - https://www.gnu.org/licenses/gpl-3.0.txt

// s. https://github.com/mkloubert/jsToolbox


var test_addOnLoaded = '';
for (var i = 0; i < 10; i++) {
    $jsTB.page.addOnLoaded(function(s, ctx) {
        test_addOnLoaded += ctx.index.toString();
    });
}

QUnit.test('addOnLoaded', function( assert ) {
    assert.ok('0123456789' == test_addOnLoaded,
              'test_addOnLoaded is: ' + test_addOnLoaded);
});
