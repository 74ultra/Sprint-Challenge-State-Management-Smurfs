




1. What problem does the context API help solve?
    
    Properties do not need to be passed down through components that do not need them.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions - Describe state changes
reducers - respond to actions and update the state
store - contains the state for the application.

The Store is referred to as the single source of truth because it contains the state for everything that changes in the app.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global to the application while component state is local.
Use Application state when changes will be reflected in several components. 
Use Component state when changes are limited to a single component

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk allows for asyncronous action creators to get/post/delete data from an external api. Action creators now have a get/post/delete/update request along with them.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux - it just makes more sense for some reason
