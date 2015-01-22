
QUnit.test('String.format', function( assert ) {
    var a1 = '{0} + {3} = {1} + {2}'.format('MK', 23979,
                                            5979, 'TM');
                                            
    var a2 = eval('"{1} + {0}"'.format('MK', 'TM'));

    assert.ok('MK + TM = 23979 + 5979' == a1,
              'a1 is: ' + a1);
              
    assert.ok('TM + MK' == a2,
              'a2 is: ' + a2);
});
