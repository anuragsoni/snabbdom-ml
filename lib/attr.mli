type t

val bool : string -> bool -> t
val int : string -> int -> t
val float : string -> float -> t
val string : string -> string -> t
val click : (Brr.Ev.Mouse.t Brr.Ev.t -> unit) -> t
val mouse_event : string -> (Brr.Ev.Mouse.t Brr.Ev.t -> unit) -> t
val keyboard_event : string -> (Brr.Ev.Keyboard.t Brr.Ev.t -> unit) -> t
val unsafe_event : string -> (Jv.t -> unit) -> t
val attrs_to_jv : t list -> Jv.t
