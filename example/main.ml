open Brr
open Snabbdom

module Date = struct
  let date = Jv.get Jv.global "Date"
  let now () = Jv.new' date [||]
  let to_locale_time_string date = Jv.call date "toLocaleTimeString" [||] |> Jv.to_string
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
  let h1 = Vnode.h1 Jv.null [ Vnode.text "Hello World" ] in
  let tick () =
    Vnode.h2 Jv.null [ Vnode.text (Date.to_locale_time_string (Date.now ())) ]
  in
  let make_counter count = Vnode.p Jv.null [ Vnode.text (Int.to_string count) ] in
  let count = ref 0 in
  let counter = ref (make_counter !count) in
  let on_click () =
    incr count;
    let new_counter = make_counter !count in
    patch (`Vnode !counter) new_counter;
    counter := new_counter
  in
  let btn =
    Vnode.button
      (Jv.obj [| "on", Jv.obj [| "click", Jv.repr on_click |] |])
      [ Vnode.text "Click me" ]
  in
  let h2 = ref (tick ()) in
  patch (`Element container) (Vnode.div Jv.null [ h1; !h2; !counter; btn ]);
  ignore
    (G.set_interval ~ms:1000 (fun () ->
         let new_node = tick () in
         patch (`Vnode !h2) new_node;
         h2 := new_node))
