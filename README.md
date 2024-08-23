```bash
 ███▄ ▄███▓▄▄▄      ███▄    █ ▒█████  ▄▄▄██▀▀▄████▄  ▒█████  ███▄    █ ▄████▄ ▓█████ ██▓███ ▄▄▄█████▓
▓██▒▀█▀ ██▒████▄    ██ ▀█   █▒██▒  ██▒  ▒██ ▒██▀ ▀█ ▒██▒  ██▒██ ▀█   █▒██▀ ▀█ ▓█   ▀▓██░  ██▓  ██▒ ▓▒
▓██    ▓██▒██  ▀█▄ ▓██  ▀█ ██▒██░  ██▒  ░██ ▒▓█    ▄▒██░  ██▓██  ▀█ ██▒▓█    ▄▒███  ▓██░ ██▓▒ ▓██░ ▒░
▒██    ▒██░██▄▄▄▄██▓██▒  ▐▌██▒██   ██▓██▄██▓▒▓▓▄ ▄██▒██   ██▓██▒  ▐▌██▒▓▓▄ ▄██▒▓█  ▄▒██▄█▓▒ ░ ▓██▓ ░ 
▒██▒   ░██▒▓█   ▓██▒██░   ▓██░ ████▓▒░▓███▒ ▒ ▓███▀ ░ ████▓▒▒██░   ▓██▒ ▓███▀ ░▒████▒██▒ ░  ░ ▒██▒ ░ 
░ ▒░   ░  ░▒▒   ▓▒█░ ▒░   ▒ ▒░ ▒░▒░▒░ ▒▓▒▒░ ░ ░▒ ▒  ░ ▒░▒░▒░░ ▒░   ▒ ▒░ ░▒ ▒  ░░ ▒░ ▒▓▒░ ░  ░ ▒ ░░   
░  ░      ░ ▒   ▒▒ ░ ░░   ░ ▒░ ░ ▒ ▒░ ▒ ░▒░   ░  ▒    ░ ▒ ▒░░ ░░   ░ ▒░ ░  ▒   ░ ░  ░▒ ░        ░    
░      ░    ░   ▒     ░   ░ ░░ ░ ░ ▒  ░ ░ ░ ░       ░ ░ ░ ▒    ░   ░ ░░          ░  ░░        ░      
       ░        ░  ░        ░    ░ ░  ░   ░ ░ ░         ░ ░          ░░ ░        ░  ░                
                                            ░                         ░                              
```

### `src Folder Structure`
```bash
src
├── App.js
├── App.test.js
├── components
│   └── Navbar
│       └── index.js
├── index.css
├── index.js
├── logo.svg
├── pages
│   ├── About
│   │   └── index.js
│   ├── Career
│   │   └── index.js
│   ├── Home
│   │   └── index.js
│   └── Not404
│       └── index.js
├── reportWebVitals.js
├── setupTests.js
└── Suspense
    └── SuspenseComponent.js
```

In React, `Suspense` and `React.lazy()` are two powerful features that help you optimize your application's performance by allowing you to load components lazily (i.e., only when they are needed).

### `React.lazy()`
- **Purpose**: `React.lazy()` is a function that lets you load a component lazily. Instead of importing a component at the top of your file, you use `React.lazy()` to load the component only when it’s needed.
  
- **Syntax**: 
  ```javascript
  const MyComponent = React.lazy(() => import('./MyComponent'));
  ```

- **Usage**: When you use `React.lazy()`, React will automatically split your code into separate bundles, meaning that the code for `MyComponent` is only loaded when it’s actually needed (e.g., when it’s rendered). This can improve the performance of your app, especially on initial load, by reducing the size of the JavaScript bundle that’s downloaded.

### `Suspense`
- **Purpose**: `Suspense` is a component that allows you to handle the loading state when a component is being lazily loaded. It can be used to display a fallback UI (like a spinner or a loading message) while the component is being loaded.

- **Syntax**:
  ```javascript
  <React.Suspense fallback={<div>Loading...</div>}>
    <MyComponent />
  </React.Suspense>
  ```

- **Usage**: You wrap your lazy-loaded component with `Suspense` and provide a `fallback` prop. The content of `fallback` is rendered while the lazy-loaded component is being fetched. Once the component is loaded, React will replace the fallback content with the actual component.

### Example Together
Here's a full example of using `React.lazy()` and `Suspense` together:

```javascript
import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <div>
      <h1>My App</h1>
      <Suspense fallback={<div>Loading component...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;
```

### Key Points:
- **Performance Optimization**: `React.lazy()` helps you split your code and load components only when they are needed, which can reduce the initial load time.
- **User Experience**: `Suspense` allows you to provide feedback to users (like a loading spinner) while the component is being loaded, improving the user experience.

These tools are especially useful in larger applications where performance is critical, as they allow you to load parts of the application on demand, rather than all at once.

# Example A

Certainly! Here's how you can structure your `App.js` using `BrowserRouter`, `Routes`, and `Route` from `react-router-dom` v6+, along with `React.lazy()` and `Suspense`:

### `App.js` Example

```javascript
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Lazy load components
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>My App</h1>
        {/* Suspense wraps the routes to provide a fallback while components are loading */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
```

### Explanation:

1. **BrowserRouter**:
   - `BrowserRouter` is used to enable client-side routing in your application.

2. **Routes and Route**:
   - `Routes` is a container that holds all your `Route` components.
   - Each `Route` defines a path and an element (component) to render:
     - The `Home` component is rendered when the path is `/`.
     - The `About` component is rendered when the path is `/about`.
     - The `Contact` component is rendered when the path is `/contact`.

3. **Suspense**:
   - `Suspense` wraps the `Routes` component, providing a fallback UI while the lazy-loaded components are being fetched.

4. **Lazy Loading Components**:
   - `React.lazy()` is used to lazily load the `Home`, `About`, and `Contact` components from their respective files. This improves performance by loading these components only when needed.

### Folder Structure Example:

```
src/
├── pages/
│   ├── Home.js
│   ├── About.js
│   └── Contact.js
└── App.js
```

### Component Files Example:

- **Home.js**
  ```javascript
  import React from 'react';

  function Home() {
    return <h2>Home Page</h2>;
  }

  export default Home;
  ```

- **About.js**
  ```javascript
  import React from 'react';

  function About() {
    return <h2>About Page</h2>;
  }

  export default About;
  ```

- **Contact.js**
  ```javascript
  import React from 'react';

  function Contact() {
    return <h2>Contact Page</h2>;
  }

  export default Contact;
  ```

This setup will load each page component only when the user navigates to the corresponding route, enhancing the performance of your React application.

### refer : https://github.com/manojconcept/kitchen-recipe-management-system-g-cs/blob/main/src/App.js

# Example B

```jsx
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Navbar = lazy(() => import("./components/Navbar"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Career = lazy(() => import("./pages/Career"));
const Error404 = lazy(() => import("./pages/Not404"));

/*
@para
element : React element
fallback : loading animation component
*/
export const SuspenseComponent = ({ children, fallback = <h1>Loading...</h1> }) => {
    return (
        <Suspense fallback={fallback}>
            {children}
        </Suspense>
    )
}

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<SuspenseComponent /*fallback={<LoadingText />}*/><Navbar /></SuspenseComponent>}>
                <Route index element={<SuspenseComponent><Home /></SuspenseComponent>} />
                <Route path="/about" element={<SuspenseComponent><About /></SuspenseComponent>} />
                <Route path="/career" element={<SuspenseComponent><Career /></SuspenseComponent>} />
            </Route>
            <Route path="*" element={<SuspenseComponent><Error404 /></SuspenseComponent>} />
        </Routes>
    );
};

export default App;
```

which is a great way to optimize performance by loading components only when they're needed.

Here are a couple of suggestions for further refinement:

1. **Fallback Customization**: You’ve added a comment for customizing the fallback in the `SuspenseComponent` component. If you plan to use different fallbacks for different routes, you can pass a `fallback` prop to `SuspenseComponent` when using it:

    ```jsx
    <SuspenseComponent fallback={<LoadingText />}>
        <Navbar />
    </SuspenseComponent>
    ```

2. **Error Boundary**: Consider adding an error boundary around your `Suspense` components to handle any errors that might occur during the lazy loading of components. This can help improve the user experience by catching and displaying errors gracefully.

    Here’s a basic example of an error boundary:

    ```jsx
    import React, { Component } from "react";

    class ErrorBoundary extends Component {
        constructor(props) {
            super(props);
            this.state = { hasError: false };
        }

        static getDerivedStateFromError() {
            return { hasError: true };
        }

        componentDidCatch(error, errorInfo) {
            // Log error information here
        }

        render() {
            if (this.state.hasError) {
                return <h1>Something went wrong.</h1>;
            }
            return this.props.children;
        }
    }

    export default ErrorBoundary;
    ```

    Then wrap your `SuspenseComponent` with `ErrorBoundary`:

    ```jsx
    <ErrorBoundary>
        <SuspenseComponent>
            <Navbar />
        </SuspenseComponent>
    </ErrorBoundary>
    ```

3. **Loading Component**: If you have a more complex loading animation or component, you can use that in place of the simple `<h1>Loading...</h1>` fallback. For example:

    ```jsx
    import LoadingSpinner from './components/LoadingSpinner'; // Your custom loading spinner

    const App = () => {
        return (
            <Routes>
                <Route path="/" element={<SuspenseComponent fallback={<LoadingSpinner />}><Navbar /></SuspenseComponent>}>
                    <Route index element={<SuspenseComponent fallback={<LoadingSpinner />}><Home /></SuspenseComponent>} />
                    <Route path="/about" element={<SuspenseComponent fallback={<LoadingSpinner />}><About /></SuspenseComponent>} />
                    <Route path="/career" element={<SuspenseComponent fallback={<LoadingSpinner />}><Career /></SuspenseComponent>} />
                </Route>
                <Route path="*" element={<SuspenseComponent fallback={<LoadingSpinner />}><Error404 /></SuspenseComponent>} />
            </Routes>
        );
    };
    ```

These adjustments should help you handle different loading states and potential errors more gracefully.