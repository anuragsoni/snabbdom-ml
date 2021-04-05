module Xml_vnode :
  Xml_sigs.T
    with type uri = string
     and type event_handler = Jv.t -> unit
     and type mouse_event_handler = Brr.Ev.Mouse.t Brr.Ev.t -> unit
     and type keyboard_event_handler = Brr.Ev.Keyboard.t Brr.Ev.t -> unit
     and type touch_event_handler = Jv.t -> unit
     and type elt = Snabbdom.Vnode.t
     and module W = Xml_wrap.NoWrap

module Svg : Svg_sigs.Make(Xml_vnode).T
module Html : Html_sigs.Make(Xml_vnode)(Svg).T
