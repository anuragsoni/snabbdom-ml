open! Import

type t = Jv.t

let init' = get_global "init"
let attributes_module = get_global "attributesModule"
let class_module = get_global "classModule"
let props_module = get_global "propsModule"
let event_listeners_module = get_global "eventListenersModule"
let style_module = get_global "styleModule"
let dataset_module = get_global "datasetModule"

let init modules =
  let patch container node =
    let patch' = Jv.apply init' [| Jv.of_jv_list modules |] in
    let container =
      match container with
      | `Element el -> Brr.El.to_jv el
      | `Vnode jv -> Vnode.to_jv jv
    in
    Jv.apply patch' [| container; Vnode.to_jv node |] |> ignore
  in
  patch
