require({
  urlArgs: "b=" + ((new Date()).getTime()),
  paths: {
    jquery: 'vendor/jquery/jquery'
  }
}, ['jquery'], function() {

  function *range(max, step) {
    var count = 0;
    step = step || 1;

    for (var i = 0; i < max; i += step) {
      count++;
      yield i;
    }

    return count;
  }

  function go() {
    var gen = range(20, 3), info;
    while (!(info = gen.next()).done) {
      $('body').append((info.value) + "<br/>");
    }
    $('body').append("steps taken: " + info.value);
  }

  go();

});
