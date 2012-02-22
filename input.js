/*
trying out some input attribute detects

curl -u xxx@xxx \
  -sSNT input.js 'testling.com/?browsers=iexplore/6.0,iexplore/7.0,iexplore/8.0,iexplore/9.0,chrome/4.0,chrome/5.0,chrome/6.0,chrome/7.0,chrome/8.0,chrome/9.0,chrome/10.0,chrome/11.0,chrome/12.0,chrome/13.0,chrome/14.0,chrome/15.0,firefox/4.0,firefox/5.0,firefox/6.0,firefox/7.0,firefox/8.0,opera/10.0,opera/10.5,opera/11.0,opera/11.5,safari/5.0.5,safari/5.1,firefox/nightly,opera/next,chrome/canary'
*/

var test   = require('testling');

test('input', function (t) {
  var $input = document.createElement('input');
  var attributes = [
      'accept'
    , 'autoComplete'
    , 'autoFocus'
    , 'checked'
    , 'list'
    , 'max'
    , 'maxLength'
    , 'min'
    , 'multiple'
    , 'pattern'
    , 'placeholder'
    , 'readOnly'
    , 'required'
    , 'size'
    , 'step'
  ];
  for (var i=0; i<attributes.length; i+=1 ) {
    t.log(['attribute `' + attributes[i] + ' in input` : ', attributes[i] in $input ]);
  }
  t.end();
});
