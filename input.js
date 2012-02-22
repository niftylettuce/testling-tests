/*
trying out some input attribute detects

curl -u xxx@xxx \
  -sSNT input.js 'testling.com/?browsers=iexplore/6.0,iexplore/7.0,iexplore/8.0,iexplore/9.0,chrome/4.0,chrome/5.0,chrome/6.0,chrome/7.0,chrome/8.0,chrome/9.0,chrome/10.0,chrome/11.0,chrome/12.0,chrome/13.0,chrome/14.0,chrome/15.0,firefox/4.0,firefox/5.0,firefox/6.0,firefox/7.0,firefox/8.0,opera/10.0,opera/10.5,opera/11.0,opera/11.5,safari/5.0.5,safari/5.1,firefox/nightly,opera/next,chrome/canary&output=json'
*/

// Inspired by <http://www.miketaylr.com/code/input-type-attr.html>

var test = require('testling');
var json = require('jsonify');
var types = [
    'text'
  , 'search'
  , 'url'
  , 'tel'
  , 'email'
  , 'password'
  , 'datetime'
  , 'date'
  , 'month'
  , 'week'
  , 'time'
  , 'datetime-local'
  , 'number'
  , 'range'
  , 'color'
  , 'checkbox'
  , 'radio'
  , 'file'
];
var attributes = [
    'accept'
  , 'autocomplete'
  , 'autofocus'
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

test('input', function (t) {
  var output = [];
  for (var q=0; q < types.length; q+=1 ) {
    var $input;
    var not_supported = [];
    try {
      $input = document.createElement('<input type="' + types[q] + '" />');
    } catch(err) {
      $input = document.createElement('input');
    }
    $input.setAttribute('type', types[q]);
    for (var p=0; p < attributes.length; p+=1 ) {
      if (!(attributes[p] in $input)) {
        not_supported.push(json.stringify('`' + attributes[p] + '` not supported'));
      }
    }
    output.push({
      'type': types[q],
      'not_supported': not_supported
    });
  }
  t.log(output);
  t.end();
});
