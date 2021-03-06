// LICENSE: GPL 3 - https://www.gnu.org/licenses/gpl-3.0.txt

// s. https://github.com/mkloubert/jsToolbox


$jsTB.page.addVar('a1', 5979);
$jsTB.page.addVar('a2', function() {
    return 'TM';
});

QUnit.test('page.addVar', function( assert ) {
    assert.ok($jsTB.page.vars.a1 == 5979,
              'a1 is: ' + $jsTB.page.vars.a1);
              
    assert.ok($jsTB.page.vars.a2 == 'TM',
              'a2 is: ' + $jsTB.page.vars.a2);
});
