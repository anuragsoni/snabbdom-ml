module M : sig
  type t

  val attributes_module : t
  val class_module : t
  val props_module : t
  val event_listeners_module : t
  val style_module : t
  val dataset_module : t
end

module Vnode = Vnode

val init : M.t list -> [< `Element of Brr.El.t | `Vnode of Vnode.t ] -> Vnode.t -> unit
