var combineMatchers = [

];

var linkMatchers = [

];

var predicateMatchers = [{
  matcherName: "rdfschema_label",
  predicate: "http://www.w3.org/2000/01/rdf-schema#label",
  templateVariable: "title",
  abstractTemplate: "title",
  order: 1400000
}, {
  matcherName: "depiction",
  predicate: "http://xmlns.com/foaf/0.1/depiction",
  templateVariable: "img_url",
  abstractTemplate: "img",
  order: 1100000
},
{
  matcherName: "content",
  predicate: "http://ns.ontowiki.net/SysOnt/Site/content",
  templateVariable: "markdown",
  abstractTemplate: "markdown",
  order: 1200000
},
{
  matcherName: "content",
  predicate: "http://purl.org/dc/terms/description",
  templateVariable: "markdown",
  abstractTemplate: "markdown",
  order: 1200000
}];
