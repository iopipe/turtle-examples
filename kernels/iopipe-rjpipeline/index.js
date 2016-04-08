module.exports = function(data) {
  /* Multiple argument handlers will be supported...
     eventually. For now, users will need to edit this file */
  if (arguments.length > 1) {
    rjconfig = arguments[1]
  } else {
    rjconfig = {
      "client_id": 1,
      "table_name": "users",
      "key_names": ["id"]
    }
  }
  return JSON.stringify({
    "client_id": rjconfig['client_id'],
    "table_name": rjconfig['table_name'], 
    "key_names": rjconfig["key_names"],
    "sequence": Date.now(),
    "action": "upsert",
    "data": data
  })
}
