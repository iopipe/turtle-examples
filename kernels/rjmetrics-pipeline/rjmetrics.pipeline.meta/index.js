module.exports = function(config, context) {
  /* Multiple argument handlers will be supported...
     eventually. For now, users will need to edit this file */
  return function(d1, c1) {
    c1(JSON.stringify({
      "client_id": config.client_id,
      "table_name": config.table_name,
      "key_names": config.key_names,
      "sequence": Date.now(),
      "action": "upsert",
      "data": d1
    }))
  }
}
