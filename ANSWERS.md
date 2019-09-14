- [x] Why would you use class component over function components (removing hooks from the question)?

You'll be able to set state in your component when you use class components instead of functional components. Because a functional component is just a plain JavaScript function, you cannot use setState() in your component.

- [x] Name three lifecycle methods and their purposes.

1. The constructor method serves the component up with the initial state data that it needs to have during initial render.

2. A render method is used to essentially tell react, when this method gets called it should return some piece of DOM. 

3. The componentWillUnmount method,  is called during the unmount phas, and can be used for any clean up you may need to do.

- [x] What is the purpose of a custom hook?

Unlike a React component, a custom Hook doesn’t need to have a specific signature. We can decide what it takes as arguments, and what, if anything, it should return. In other words, it’s just like a normal function. A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. 

- [x] Why is it important to test our apps?

Because you can avoid bugs before they get to production and save time, and perhaps even save your job. You'll be a lot more effecient as a developer. 


App Startup and install:

yarn install in client folder
yarn install in main folder
yarn add axios
node server.js 
http://localhost:5000/api/players
yarn start 