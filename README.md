# Robot Factory App
A small application that features react, react-redux, redux, redux-thunk.
---
## Installation
1. Clone the repo.
```
git clone https://github.com/azamanaza/react-robot-factory.git
```

2. Install dependencies
```
npm i
```

3. Run build. This builds both server and client app.
```
npm run build
```

4. Run theapp
```
npm run start:server
```
From here you should be able to open the app at http://localhost:3000 on your browser.

## Test
Jest is configured to generate coverage under <root>/coverage.
```
npm test
```

## Architecture and Design

### Tech choices

- Redux Thunk over Redux Saga <p>
    Redux, by itself is very straightforward. Constant action-types, action creators that define actions, and reducers that determine the state, all in plain javascript.

    Redux middlewears, are opinionated. I chose redux-thunk as a middlewear due to it's declarative approach with the least side-effects, which also makes use of native js.
</p>

- Lodash <p>
    The library provides a lot of type checks and gotchas on top of native js' functions. This helps filtering, mapping data a breeze and catches possible type-errors easier to catch.
</p>

- Express <p>
    A quick and portable service that can easily be setup on any node app.
</p>

### Client App ( Robot Factory )
<p>
    The client app folder structure is designed modular, to provide better scalability. Modules contains it's own components, and redux related files, since actions and how they are consumed/bound to components.
</p>
