open Import

type t = Jv.t

let h = get_global "h"
let to_jv t = t

type vnode_data = Jv.t
type children = Jv.t list
type create_with_children = vnode_data -> children -> t
type create_without_children = vnode_data -> t

let make_node selector vnode_data children =
  Jv.apply h [| Jv.of_string selector; vnode_data; Jv.of_jv_list children |]

let text t = Jv.of_string t
let br data = make_node "br" data []
let hr data = make_node "hr" data []
let div data children = make_node "div" data children
