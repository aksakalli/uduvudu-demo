# uduvudu-demo

[Uduvudu](https://github.com/uduvudu/uduvudu) is a graph-aware and adaptive UI Engine for Linked Data. This is a demo project to get into Uduvudu. It renders stuff information of [EIS Team](http://eis.iai.uni-bonn.de/Team.html). It also demonstrates `linkMatcher`. People has projects as another resource property. Link matcher is used in order to resolve another resource as matcher object.

[Demo](http://aksakalli.github.io/uduvudu-demo/)

## Steps

### RDF Graph representation

It is the pre-quisites of other steps. Set of resource URIs are collected as a result of SPARQL Query. If you want to render a linked resource, you need to retrieve respected resources as well. This project DOES NOT contain the step how you get this. It uses a prefetched static data file.

([people.n3](people.n3) contains the pre-quisites source data).

### Matcher

Matcher is a data selector to convert the source RDF into the target object.

* **predicateMatchers** are straight forward matchers which filter the leafs of source RDF graph.
* **combineMatchers** combine a set of triples into another object. For instance, `personCard` is a group of information which appears as user card.
* **linkMatchers** provide simple navigation from the start resource to another URI. In this case, the start resource is `people`. It has a property `currentProject` which is a list of `projects`. This matchers allow to fetch predicates of `projects` from `people` resource.

([js/matcher.js](js/matcher.js) contains the matcher file).

### Template

After matcher step, a target object is handed over to templates. All matchers are rendered respected to `abstractTemplate` property of matchers. Templates are basically [Underscore.js](underscorejs.org/) templates.

([templates.html](templates.html) contains the templates to render the result html).

Further information can be found on [Uduvudu](https://github.com/uduvudu/uduvudu) documentation page.

## License

Released under [the MIT license](LICENSE).
