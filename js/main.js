loadPerson('ChristophLange');


$("#username-search").typeahead({
  source: people,
  updater: function(selected) {
    loadPerson(selected);
    console.log('Loading person:' + selected);
  }
});

$("form").submit(function(event) {
  event.preventDefault();
});


function loadPerson(username) {
  var resource = 'http://eis.iai.uni-bonn.de/' + username;
  var source = 'people.n3';

  var store = new rdf.LdpStore();
  // prepare visualizer templates for uduvudu
  $("#templates").load("templates.html");

  // load triples
  store.graph(source, function(graph, error) {
    if (error == null) {
      console.debug("successfully loaded " + graph.toArray().length + " triples");
      // resource (entry for template search) is same as source in this example
      uduvudu.process(graph, {
        'resource': resource
      }, function(out) {
        // write the result of the processing in the main div
        //console.log(out);
        $('#main').html(out);
      });
    } else {
      document.getElementById('main').innerHTML = '' + '<div class="alert alert-danger">' + '  <button type="button" class="close" data-dismiss="alert">&times;</button>' + '  <strong>Error:</strong> ' + error + '.' + '</div>';
    };
  });
}
