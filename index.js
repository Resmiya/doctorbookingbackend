//i. import json-server
const jsonServer=require('json-server')
//ii. create a server application using a jsonServer
const restServer=jsonServer.create()
 //iii. setup path for db.json
 const router=jsonServer.router('db.json')

 //iv. return middle ware
 const middleware=jsonServer.defaults()

 //v. setup a port number
 const port=3002

 //vi.use in restserver 
restServer.use(middleware)
restServer.use(router)

 //vii. to run the server
  restServer.listen(port,()=>{console.log("doctors listing port",+port);})
  