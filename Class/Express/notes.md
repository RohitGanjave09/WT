middleware function :-
middle is a function that execute during request before sending the final response
--they have access to
1.request
2.response
3.next()

FLOW :
client---->middleware---->server

if we not use next()in miidleware fucntion then it will show loading animation it hang up

activity :
1.why we use middleware
2.types of middleware
3.benefits of middleware
4.where to use in companies level
5.what is query parameter

HANDLING REQUEST & RESPONSE :
express application handle http request and response
request:- the request object(req) contains information about the client reqeust
ex:- url,headers,query parameters,request body

app.get((req,res)=>{
console.log(req.query.name);
})

most imp for interview :- what is query parameter

Activities:-
1.detailed study of query parameter with 2 to 4 real time exp.
2.where use in real life company.

response:- the response object sends data back to the client
methods-
response.send() - send a text
response.json() - send a json format
response.status() - check http status
response.sendFile() - send a file

---

Template Engine:-
template engine allow developers to generate dynamic html page using data from the server
Instead of static html page are created dynamically
EJS,handle bar,plug

why:
They help in dynamic content, code reusability, seprate html from html

\*\*\*Activity:
1.EJS create
2.what is static file, express router, complete express work flow 3.
