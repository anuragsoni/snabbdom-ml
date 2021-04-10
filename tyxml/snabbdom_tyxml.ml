module M = Snabbdom.M

module Xml_vnode = struct
  open Snabbdom
  module W = Xml_wrap.NoWrap

  type 'a wrap = 'a
  type 'a list_wrap = 'a list
  type uri = string

  let uri_of_string s = s
  let string_of_uri s = s

  type event_handler = Jv.t -> unit
  type mouse_event_handler = Brr.Ev.Mouse.t Brr.Ev.t -> unit
  type keyboard_event_handler = Brr.Ev.Keyboard.t Brr.Ev.t -> unit
  type touch_event_handler = Jv.t -> unit
  type attrib = Attr.t

  (* TODO: This is just temporary to verify that this approach can work. Tyxml sends
     events like [onclick] but snabbdom expects keys like [click] *)
  let make_event_name name = String.sub name 2 (String.length name - 2)
  let float_attrib name f = Attr.float name f
  let int_attrib name f = Attr.int name f
  let string_attrib name f = Attr.string name f
  let space_sep_attrib name xs = string_attrib name (String.concat " " xs)
  let comma_sep_attrib name xs = string_attrib name (String.concat "," xs)
  let event_handler_attrib name handler = Attr.unsafe_event (make_event_name name) handler

  let mouse_event_handler_attrib name handler =
    Attr.mouse_event (make_event_name name) handler

  let touch_event_handler_attrib name handler =
    Attr.unsafe_event (make_event_name name) handler

  let keyboard_event_handler_attrib name handler =
    Attr.keyboard_event (make_event_name name) handler

  let uri_attrib name value = string_attrib name value
  let uris_attrib name values = string_attrib name (String.concat " " values)

  type aname = string
  type elt = Vnode.t
  type ename = string

  let leaf ?(a = []) name = Vnode.make_node name a []
  let node ?(a = []) name children = Vnode.make_node name a children
  let empty () = assert false
  let comment _c = assert false
  let pcdata = Vnode.text
  let encodedpcdata = Vnode.text
  let cdata s = pcdata s
  let cdata_script s = cdata s
  let cdata_style s = cdata s
  let entity _ = assert false
end

module Svg_vnode = struct
  include Xml_vnode
end

module Svg = Svg_f.Make (Svg_vnode)
module Html = Html_f.Make (Xml_vnode) (Svg)

let init modules =
  let patch = Snabbdom.init modules in
  fun container node ->
    let container =
      match container with
      | `Element _ as res -> res
      | `Html n | `Svg n -> `Vnode n
    in
    let vnode =
      match node with
      | `Html n | `Svg n -> n
    in
    patch container vnode
