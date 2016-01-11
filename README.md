# Ember JSON API Resources

An [Ember CLI] Addon… a lightweight solution for data persistence in an [Ember.js]
application following the [JSON API] 1.0 specification (your anti-bikeshedding
weapon for API development).

See [ember-jsonapi-resources.com]

* [API Docs][generated docs]
* [Example App]
* [Wiki Guide]

[![Build Status](https://travis-ci.org/pixelhandler/ember-jsonapi-resources.svg?branch=master)](https://travis-ci.org/pixelhandler/ember-jsonapi-resources)
[![Ember Observer Score](http://emberobserver.com/badges/ember-jsonapi-resources.svg)](http://emberobserver.com/addons/ember-jsonapi-resources)
[![npm](https://img.shields.io/npm/dm/ember-jsonapi-resources.svg)](https://www.npmjs.com/package/ember-jsonapi-resources)
[![npm](https://img.shields.io/npm/v/ember-jsonapi-resources.svg)](https://www.npmjs.com/package/ember-jsonapi-resources)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/pixelhandler/ember-jsonapi-resources?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)


## Contributing / Development

Clone the repo, install the dependencies:

* `git clone` this repository
* `npm install`
* `bower install`

### Running

To run the app in /tests/dummy use a proxy url for a live API

* `ember server`, an http-proxy is setup to use (dev) localhost:3000 or (prod) api.pixelhandler.com
* Visit <http://localhost:4200>.

### Running Tests

* `ember test`
* `ember test --server`
* `ember test --server -m 'Unit | Mixin | service cache'`
* `ember test --server --filter 'cacheUpdate'`

A good way to get to know more about how this addon works is to review the tests,
see source code for the unit tests: [tests/unit](tests/unit).

### Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/][Ember CLI]

## Documentation

Online documentation, build from source: [generated docs]

Docs are generated from source using [yuidoc].

To view the docs during development:

* `yuidoc ./addon/* -c yuidoc.json --server 3333` (you can append a port number e.g. `--server 8888`, the default port is 3000)

To generate docs for the gh-pages branch:

* `yuidoc ./addon/* -c yuidoc.json`

[Ember CLI]: http://www.ember-cli.com/
[Ember.js]: http://emberjs.com
[ember-jsonapi-resources.com]: http://ember-jsonapi-resources.com
[Example App]: https://github.com/pixelhandler/jr-test
[generated docs]: http://pixelhandler.github.io/ember-jsonapi-resources/docs
[JSON API]: http://jsonapi.org
[Wiki Guide]: https://github.com/pixelhandler/ember-jsonapi-resources/wiki
[yuidoc]: https://github.com/yui/yuidoc
