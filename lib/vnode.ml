open Import

type t = Jv.t

let h = get_global "h"
let to_jv t = t

type children = Jv.t list
type create_with_children = Attr.t list -> children -> t
type create_without_children = Attr.t list -> t

let make_node selector vnode_data children =
  Jv.apply
    h
    [| Jv.of_string selector; Attr.attrs_to_jv vnode_data; Jv.of_jv_list children |]

let text t = Jv.of_string t
let br data = make_node "br" data []
let hr data = make_node "hr" data []
let div data children = make_node "div" data children
let h1 data children = make_node "h1" data children
let h2 data children = make_node "h2" data children
let p data children = make_node "p" data children
let button data children = make_node "button" data children
