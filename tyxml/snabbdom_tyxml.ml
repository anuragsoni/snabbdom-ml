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
  type attrib = [ `Event of string | `Attr of string ] * Jv.t

  let float_attrib name f = `Attr name, Jv.of_float f
  let int_attrib name f = `Attr name, Jv.of_int f
  let string_attrib name f = `Attr name, Jv.of_string f
  let space_sep_attrib name xs = `Attr name, Jv.of_string (String.concat " " xs)
  let comma_sep_attrib name xs = `Attr name, Jv.of_string (String.concat "," xs)
  let event_handler_attrib name handler = `Event name, Jv.repr handler
  let mouse_event_handler_attrib name handler = `Event name, Jv.repr handler
  let touch_event_handler_attrib name handler = `Event name, Jv.repr handler
  let keyboard_event_handler_attrib name handler = `Event name, Jv.repr handler
  let uri_attrib name value = `Attr name, Jv.of_string value
  let uris_attrib name values = `Attr name, Jv.of_string (String.concat " " values)

  type aname = string
  type elt = Vnode.t
  type ename = string

  module StringSet = Set.Make (struct
    type t = string

    let compare a b =
      let a = String.lowercase_ascii a in
      let b = String.lowercase_ascii b in
      String.compare a b
  end)

  let attributes_to_skip = StringSet.of_list [ "xmlns"; "xmlns:xlink" ]

  let make_attrs (a : attrib list option) =
    match a with
    | None -> Jv.null
    | Some attrs ->
      let events, attrs =
        List.fold_left
          (fun (events, attrs) t ->
            match t with
            | `Attr name, v ->
              if StringSet.mem name attributes_to_skip
              then events, attrs
              else events, (name, v) :: attrs
            (* TODO: This is just temporary to verify that this approach can work. Tyxml
               sends events like [onclick] but snabbdom expects keys like [click] *)
            | `Event name, v ->
              (String.sub name 2 (String.length name - 2), v) :: events, attrs)
          ([], [])
          attrs
      in
      Jv.obj
        [| "attrs", Jv.obj (Array.of_list attrs); "on", Jv.obj (Array.of_list events) |]

  let leaf ?a name = Vnode.make_node name (make_attrs a) []
  let node ?a name children = Vnode.make_node name (make_attrs a) children
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
