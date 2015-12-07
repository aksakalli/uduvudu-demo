$('#username-search').typeahead({
  source: people,
  updater: function(selected) {
    document.location = '#/' + selected;
    console.log('Loading person:' + selected);
  }
});

$('form').submit(function(event) {
  event.preventDefault();
});

$(window).on('hashchange', hashUrlHandler);
$(document).ready(hashUrlHandler);

function hashUrlHandler() {
  if (location.hash) {
    var identifier = location.hash.slice(2);
    loadPerson(identifier);
    $('#username-search').val(identifier);
    document.title = identifier + ' | Uduvudu Demo';
  } else {

  }
}

function loadPerson(username) {
  //show loading animation
  $('#main').html('<i class="glyphicon glyphicon-refresh glyphicon-spin"></i>');

  var resource = 'http://eis.iai.uni-bonn.de/' + username;
  var source = 'people.n3';

  var store = new rdf.LdpStore();
  // prepare visualizer templates for uduvudu
  $('#templates').load('templates.html');

  // load triples
  store.graph(source, function(graph, error) {
    if (error == null) {
      console.debug('successfully loaded ' + graph.toArray().length + 'triples');
      // resource (entry for template search) is same as source in this example
      uduvudu.process(graph, {
        'resource': resource
      }, function(out) {
        // write the result of the processing in the main div
        $('#main').html(out);
      });
    } else {
      $('#main').html('<div class="alert alert-warning" role="alert">Error: ' + error + '</div>');
    };
  });
}
