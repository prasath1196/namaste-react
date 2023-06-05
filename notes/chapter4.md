# Chapter 4 Notes

## Props

- Props are used to dynamically pass data to component
- Props at the end of the day, a normal arguments to a function
- When we pass props to a component, react will wrap all those into an object and pass it to the component in the name
"props"


## Config Driven UI

- When the user interface is driven by the configuration sent by APIs.


## Optional Chaining

- "?." => helps handling unhandled null errors

## Best Practice

- Do not use for loop, use map filter and reduce

## Why we need to add unique "key" while looping and rendering components

- If key is not there, react does not have a way to uniquely identify a component. This means, if there is change in the component list, say an item is added, react will rerender the entire list because there is no way to know which is the new card. If key is there, react will only render the changes, that is the newly added card.

- Some people use index as the key. Index as a key is anti-pattern - Reading Assignment. 