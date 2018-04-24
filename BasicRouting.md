# Routing

Routing determines how the application responds to a request.

Let's use routes to create 2 new pages.

```javascript
app.get('/page1', (request, response) => {
    response.send("Page 1.")
})

app.get('/page2', (request, response) => {
    response.send("Page 2.")
})
```

We will be available at [http://localhost:8080/page1](http://localhost:8080/page1) and [http://localhost:8080/page2](http://localhost:8080/page2).


