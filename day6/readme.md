1 routes parameter->jab multiple routes ek sath lane hai
WHEN TO USE ROUTE PARAMTER?
->Use route parameter when you want one exact resource.
2 query paramter->jab merko kuch fiter lagana hai search query me
WHEN TO USE QUERY PARAMETR?
->Use query parameter when you want filter, search, sort, or pagination.
->EXAMPLE)
/users?city=delhi => question mark ke bad wala part hi query wala part hai
/products?category=mobile
/videos?search=dp
/products?page=2&limit=10
MEANING: Give me a list, but apply this condition
# Query Parameter

Query parameter is extra data after `?` in URL.

Example:

```
/products?category=mobile
```

Break it:

```
/products          → path
?                  → query starts
category=mobile    → query parameter
```
3 middleware ke bare  me when i need to hode my original functinalty with someonw who is not authorized.

"/"->route
"/product/:id":yeh wala chiz request me ayi hai:-

const index={
    req:{
        params:{
            product:value,
            id:12,
        }
    }
}


query_parameter_filter.js