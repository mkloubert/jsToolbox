// LICENSE: GPL 3 - https://www.gnu.org/licenses/gpl-3.0.txt

// s. https://github.com/mkloubert/jsToolbox


QUnit.test('String.format', function( assert ) {
    var a1 = '{0} + {3} = {1} + {2}'.format('MK', 23979,
                                            5979, 'TM');
                                            
    var a2 = eval('"{1} + {0}"'.format('MK', 'TM'));

    var a3 = '{0} + {3} = {1} + {2}'.formatArray(['MK', 23979, 5979, 'TM']);
                                            
    var a4 = eval('"{1} + {0}"'.formatArray(['MK', 'TM']));
    
    assert.ok('MK + TM = 23979 + 5979' == a1,
              'a1 is: ' + a1);
              
    assert.ok('TM + MK' == a2,
              'a2 is: ' + a2);
              
    assert.ok(a1 == a3,
              'a3 is: ' + a3);
              
    assert.ok(a2 == a4,
              'a4 is: ' + a4);
});
