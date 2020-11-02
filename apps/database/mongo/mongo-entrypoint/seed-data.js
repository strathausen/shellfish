print("===============JAVASCRIPT===============")
print("Count of rows in shellfish collection: " + db.shellfish.count())

db.shellfish.insert({ message: "Testing data is preserved on docker-compose down and docker-compose-up" })

print("===============AFTER JS INSERT==========")
print("Count of rows in shellfish collection: " + db.shellfish.count())

shellfishData = db.shellfish.find()
while (shellfishData.hasNext()) {
  printjson(shellfishData.next())
}
