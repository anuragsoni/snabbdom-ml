open Brr
open Snabbdom_tyxml

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
    Snabbdom.init
      Snabbdom.M.
        [ attributes_module
        ; class_module
        ; props_module
        ; event_listeners_module
        ; style_module
        ; dataset_module
        ]
  in
  let tick () = Html.(h2 [ txt (Date.to_locale_time_string (Date.now ())) ]) in
  let svg_node =
    Html.svg
      Svg.
        [ circle
            ~a:
              [ a_cx (50., None)
              ; a_cy (50., None)
              ; a_r (40., None)
              ; a_stroke (`Color ("green", None))
              ; a_stroke_width (4., None)
              ; a_fill (`Color ("yellow", None))
              ]
            []
        ]
  in
  let make_counter count = Html.(p [ txt (Int.to_string count) ]) in
  let count = ref 0 in
  let counter = ref (make_counter !count) in
  let on_click _ev =
    incr count;
    let new_counter = make_counter !count in
    patch (`Vnode (Html.toelt !counter)) (Html.toelt new_counter);
    counter := new_counter
  in
  let timer = ref (tick ()) in
  ignore
    (G.set_interval ~ms:1000 (fun () ->
         let new_node = tick () in
         patch (`Vnode (Html.toelt !timer)) (Html.toelt new_node);
         timer := new_node));
  patch
    (`Element container)
    Html.(
      toelt
      @@ div
           [ svg_node
           ; h1 [ txt "Hello World" ]
           ; !timer
           ; !counter
           ; button ~a:[ a_onclick on_click ] [ txt "Click Me" ]
           ])
