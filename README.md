# Why ES Fetch was Chosen for AJAX method?

In this project, I went with ES `fetch` method over other alternatives like `XMLHttpRequest` or third-party libraries like `jQuery` because: 

1. **Native JavaScript**:
   - `fetch` is a native JavaScript API and no need for extra libraries.

2. **Easy to Use**:
   - The syntax of `fetch` is simple, which makes the code cleaner and easier to understand.

3. **Promise Support**:
   - `fetch` returns a promise that allows flexible handling of requests and responses.

4. **JSON Data Handling**:
   - The `fetch` API simplifies JSON data manipulation.

5. **HTTP Method Support**:
   - `fetch` Supports common CRUD operations like creating, reading, updating, and deleting posts.

Overall, it's a solid choice for handling server requests without adding unnecessary complexity.