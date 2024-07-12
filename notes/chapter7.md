# Chapter 7 Notes

## UseEffect Deep Dive

### How it is called?

- The first argument is a callback function, second argument is dependency array

### When is it called?

- Everytime the component is rendered, it is called after.

- If the dependency array is not passed, useEffect is called on every component Render

- If the dependency array is empty, useEffect is called only initial Render (just once)

- If the dependency has a value, useEffect is called whenever the dependency changes ( Dependency can be a state variable)

## More about useState( Best Practices)

- Never create useState outside the component

- The purpose of useState is to create local state variable in functional components, so it doesn't make sense to call outside

- Use useState in the top of the component

- Do not use useState inside if else condition. Because, for some renders, the state Variable won't be available and the code will get messy.

- Do not create state Varaibles inside the function.

## Creating Routes

### CreateBrowserRoute

- This is used to add router configuration

### RouterProvider

- This is used to provide the configured route to the app

### useRouteError

- This is used to throw more informational errors

### Link

- Use Link in place of href to make applications single page
