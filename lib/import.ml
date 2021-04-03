let get_global name =
  let global = Jv.get Jv.global name in
  if Jv.is_some global
  then global
  else failwith @@ Printf.sprintf "Could not find %S" name
