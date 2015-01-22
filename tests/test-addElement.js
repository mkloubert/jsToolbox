// LICENSE: GPL 3 - https://www.gnu.org/licenses/gpl-3.0.txt

// s. https://github.com/mkloubert/jsToolbox


// pageAddElements1
var pageAddElements1 = jQuery('<div id="pageAddElementArea1" style="display: none;">' + 
                             '<div class="tmDiv">0</div>' + 
                             '<div>1</div>' + 
                             '<div class="tmDiv">2</div>' + 
                             '<div class="tmDiv">3</div>' + 
                             '<div class="tmDiv">4</div>' + 
                             '<div class="tmDiv">5</div>' + 
                             '</div>');
jQuery('body').append(pageAddElements1);

// pageAddElements3
var pageAddElements2 = jQuery('<div id="pageAddElementArea3" style="display: none;">' + 
                             '<div>0</div>' + 
                             '<div>1</div>' + 
                             '<div>2</div>' + 
                             '<div>3</div>' + 
                             '<div>4</div>' + 
                             '<div>5</div>' + 
                             '</div>');
jQuery('body').append(pageAddElements2);

$jsTB.page.addElement('pageAddElements1', '#pageAddElementArea1 .tmDiv');
$jsTB.page.addElement('pageAddElements2', '#pageAddElementArea2 .tmDiv');
$jsTB.page.addElement('pageAddElements3', '#pageAddElementArea3 .tmDiv');

QUnit.test('page.addElement', function( assert ) {         
    assert.ok('02345' == $jsTB.page.elements.pageAddElements1.text(),
              'pageAddElements1 is: ' + $jsTB.page.elements.pageAddElements1.text());
              
    assert.ok($jsTB.page.elements.pageAddElements2.length < 1,
              'pageAddElements2 has ' + $jsTB.page.elements.pageAddElements2.length.toString() + ' elements.');
              
    assert.ok(0 == $jsTB.page.elements.pageAddElements3.length,
              'pageAddElements3 has ' + $jsTB.page.elements.pageAddElements3.length.toString() + ' elements.');
});
