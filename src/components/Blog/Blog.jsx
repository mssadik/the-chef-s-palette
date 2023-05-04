import React from 'react';

const Blog = () => {
    return (
        <div style={{backgroundColor: 'rgb(73, 68, 68)'}} className='bg-danger text-white mb-0 p-5'>
            <div>
                <h2>Tell us the differences between uncontrolled and controlled components.</h2>
                <p>In the context of software development, the terms "uncontrolled components" and "controlled components" are commonly used to describe two different approaches for handling form inputs and managing their state. Let's explore the differences between them: State management: In uncontrolled components, the component's state is managed by the DOM (Document Object Model) itself, rather than being controlled by the React or other UI frameworks.
                    DOM as the source of truth: The values of form inputs are directly accessed from the DOM using references or other methods, rather than being stored in the component's state.
                    Simplicity: Uncontrolled components are often simpler to implement since they require less code compared to controlled components.
                    Limited control: As the component's state is managed by the DOM, you have less control over the behavior and validation of the form inputs.
                    Imperative approach: With uncontrolled components, you typically use imperative programming techniques to handle form input changes and retrieve their values.</p>
            </div>
            <div>
                <h2>How to validate React props using PropTypes</h2>
                <p>To validate React props using PropTypes, you can follow these steps:
                    1.Install PropTypes: Make sure you have the PropTypes library installed in your React project. You can install it using npm or yarn by running the following command
                    2.Import PropTypes: In the component file where you want to validate props, import PropTypes
                    3.Define prop types: Below your component declaration, define the prop types using the propTypes object. For each prop you want to validate, add a corresponding property in the propTypes object with the desired validation rule.
                    4.Validate props: During runtime, React will automatically check the specified prop types against the received props. If a prop doesn't match the defined type or violates the validation rule, React will issue a warning in the console.

                    It's important to note that PropTypes only perform runtime type checking in development mode. In production builds, the prop type checks are omitted for performance reasons.
                </p>
            </div>
            <div>
                <h2>Tell us the difference between nodejs and express js.</h2>
                <p>
                    Node.js and Express.js are both popular frameworks used in web development, but they serve different purposes:
                    1.Runtime Environment: Node.js is a JavaScript runtime environment built on Chrome's V8 JavaScript engine. It allows you to execute JavaScript code on the server-side.
                    2.Event-driven and Non-blocking I/O: Node.js follows an event-driven, non-blocking I/O model, which makes it highly scalable and efficient for handling concurrent requests.
                    3.Backend Development: Node.js enables you to build server-side applications and APIs using JavaScript. It provides a rich set of built-in modules and libraries for various functionalities.
                    4.Single-Threaded: Node.js runs on a single thread, but it utilizes asynchronous programming techniques to handle concurrent requests efficiently, making it suitable for handling high loads.
                </p>
            </div>
            <div>
                <h2>What is a custom hook, and why will you create a custom hook?</h2>
                <p>
A custom hook in React is a JavaScript function that starts with the prefix "use" and allows you to encapsulate reusable logic that can be shared across multiple components. Custom hooks enable you to extract stateful logic from components, promoting code reuse and improving the organization and readability of your codebase.</p>
            </div>
        </div>
    );
};

export default Blog;