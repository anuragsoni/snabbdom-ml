open Brr
open Snabbdom

module Date = struct
  let date = Jv.get Jv.global "Date"
  let now () = Jv.new' date [||]
  let to_locale_time_string date = Jv.call date "toLocaleTimeString" [||]
end

let () =
  let container =
    match Document.find_el_by_id G.document (Jstr.v "app") with
    | Some v -> v
    | None -> assert false
  in
  let patch =
    M.(
      init
        [ attributes_module
        ; class_module
        ; props_module
        ; event_listeners_module
        ; style_module
        ; dataset_module
        ])
  in
  let div =
    Vnode.(
      div
        Jv.null
        [ make_node "h1" Jv.null [ text "Hello World" ]
        ; Vnode.hr (Jv.obj [| "attrs", Jv.obj [| "id", Jv.of_string "myhr" |] |])
        ])
  in
  patch (`Element container) div
