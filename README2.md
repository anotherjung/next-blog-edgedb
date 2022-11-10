## Quick Start

[Quick Start](https://www.edgedb.com/docs/intro/quickstart)

### Creating new table using types 

Let's update dbschema/default.esdl

add two types inside export

```javascript
  type Person {
    required property name -> str;
  }
  type Movie {
    property title -> str;
    multi link actors -> Person;
  }
```

```bash
edgedb migration create
```

expected >
did you create object type 'default::Person'? [y,n,l,c,b,s,q,?]
Y is yes

```bash
edgedb migrate
```

check dropdown list for types using edgedb data explorer.  Dropdown is located on the top left. 

### updating existing types

```bash
edgedb migration create
```

expected 
did you make property 'title' of object type 'default::Movie' required? [y,n,l,c,b,s,q,?]
> y

expected
Please specify an expression to populate existing objects in order to make property 'title' of object type 'default::Movie' required:
fill_expr> "Untitled"

if there is an error, cli will rollback to the previous. 

save using edgedb migrate

notices changes in [data explorer schema](http://localhost:10706/ui/edgedb/schema).  Look for required in type Person. 


## Adding data 

one of many way REPL uing UI.  

insert

```javascript
insert Movie {
  title := "Dune"
};
```

Checkout Data Explorer to see a new row.  You might need a quick browser refresh.  

update filter set

```Javascript
update Movie
filter .title = "Dune"
set {
  actors := {
    (insert Person { name := "Timothee Chalamet" }),
    (insert Person { name := "Zendaya" })
  }
};
```

check Data Explore for new expand arrow.  You should see a down arrow before Title Dune. Clicking arrow will show their linked objects. 

There is a round buttons for view table of the linked objects. 

## adding movie to nextjs app

Generating the query builder for tsx
​
```bash
npx @edgedb/generate edgeql-js --target ts
```

Create a new movie page 

```bash
touch pages/movie.tsx
```

create new movie api

create new dynamic movie id page

```bash
touch movie/[id].tsx
```


