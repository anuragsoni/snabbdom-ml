type t

val to_jv : t -> Jv.t

type create_with_children = Jv.t -> t list -> t
type create_without_children = Jv.t -> t

val make_node : string -> create_with_children
val text : string -> t
val br : create_without_children
val hr : create_without_children
val div : create_with_children
