type t

val to_jv : t -> Jv.t

type create_with_children = Attr.t list -> t list -> t
type create_without_children = Attr.t list -> t

val make_node : string -> create_with_children
val text : string -> t
val br : create_without_children
val hr : create_without_children
val div : create_with_children
val h1 : create_with_children
val h2 : create_with_children
val p : create_with_children
val button : create_with_children
