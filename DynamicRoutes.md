# Dynamic Routes

## Saying Hello.

So far we just served up static content. Let's try something a little more interesting, and rather than saying hello to the world, let's say hello to the user.

### Route Parameters
There different way in which HTTP servers allow for user input. One such was in the URL itself.
[include, template="full"](examples/hello_user_route.js)

Here we are allowing the user to specify their name in the URL itself. 

### Query Parameters
Another way is to use query parameters. Query parameters are also part of the URL but are specified at the end after a `?`. An example URL with query parameters might be: `https://www.google.com/search?q=query+parameters`.

In this URL we have 1 query parameter named `q` with a value of `query parameters`.

Multiple query parameters separated by an `&`. They might look like: `http://localhost:8080/?first_name=Noe&last_name=Roman`. 
[include, template="full"](examples/hello_user_query.js)
