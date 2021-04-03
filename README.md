# Snabbdom-ml

WIP bindings for [snabbdom](https://github.com/snabbdom/snabbdom), using the wonderful [brr](https://opam.ocaml.org/packages/brr/) library for the js FFI. This is far from finished, and there will be many improvements to make the API easier and more familiar to OCaml users.

This library will just provide the "View" in MVC/MVU, and won't come with a lot of opinions on how to structure an application.

## Getting Started

* `opam pin add snabbdom.dev git+https://github.com/anuragsoni/snabbdom-ml.git`
* Add `snabbdom` and `js_of_ocaml` in the `libraries` stanza in your executable's dune file.

One goal of the library is to make it easy to integrate with the regular OCaml development workflow.
To help with that, the library ships with a bundled copy of snabbdom's javascript bundle. This ensures that
no additional javascript (via script tags in the html file, or other npm packages) will be needed to use this library.
