let snabbdom =
  let global = Jv.get Jv.global "SnabbDom" in
  if Jv.is_some global
  then global
  else failwith @@ Printf.sprintf "Could not find SnabbDom"

let get_global name =
  let v = Jv.get snabbdom name in
  if Jv.is_some v then v else failwith @@ Printf.sprintf "Could not find %S" name
