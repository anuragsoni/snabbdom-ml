module Event_handler = struct
  type t =
    | Mouse of (Brr.Ev.Mouse.t Brr.Ev.t -> unit)
    | Keyboard of (Brr.Ev.Keyboard.t Brr.Ev.t -> unit)
    | Raw of (Jv.t -> unit)
end

type t =
  | Attr of string * Jv.t
  | Event of
      { on : string
      ; handler : Event_handler.t
      }

type attrs =
  { attr : (string * Jv.t) list
  ; event : (string * Jv.t) list
  }

let make_attr k f x = Attr (k, f x)
let bool k v = make_attr k Jv.of_bool v
let int k v = make_attr k Jv.of_int v
let float k v = make_attr k Jv.of_float v
let string k v = make_attr k Jv.of_string v
let click handler = Event { on = "click"; handler = Event_handler.Mouse handler }
let mouse_event on handler = Event { on; handler = Event_handler.Mouse handler }
let keyboard_event on handler = Event { on; handler = Event_handler.Keyboard handler }
let unsafe_event on handler = Event { on; handler = Event_handler.Raw handler }
let attrs_to_skip = [ "xmlns"; "xmlns:xlink" ]

let attrs_to_jv xs =
  let obj =
    List.fold_left
      (fun acc attr ->
        match attr with
        | Attr (k, _) when List.mem (String.lowercase_ascii k) attrs_to_skip -> acc
        | Attr (k, v) -> { acc with attr = (k, v) :: acc.attr }
        | Event { on; handler } -> { acc with event = (on, Jv.repr handler) :: acc.event })
      { attr = []; event = [] }
      xs
  in
  Jv.obj
    [| "attrs", Jv.obj (Array.of_list obj.attr); "on", Jv.obj (Array.of_list obj.event) |]
