# Redux Toolkit 

## Introduction
In React applications, passing data between multiple components using props can become complex and difficult to manage. To solve this, we use **Flux Architecture**, which provides a centralized data store.

Among various state management solutions that support Flux architecture, **Redux** is one of the most popular. Redux has multiple sub-libraries, but the most widely used one is **Redux Toolkit**. To connect Redux Toolkit with React, we also need **React Redux**.

## Why Use Redux?
- **Centralized State Management**: Instead of prop drilling, Redux provides a single store to manage state across multiple components.
- **Predictability**: The state is managed in a structured way using actions and reducers.
- **Scalability**: Works well with large applications where multiple components need access to shared state.

## Redux Flow
### 1. Store
The **store** is a centralized place where all the application's data is stored. Components can read data from the store and update it when necessary.

- To read data, we use the **useSelector** hook.
- To update data, we use **useDispatch** to send an action to the store.

### 2. Action
An **action** is a function that carries data from the component to the store. There are two types of actions:
1. **Component-based actions** – Data comes from user input.
2. **API-based actions** – Data comes from an API call.

### 3. Reducer
A **reducer** processes the action and updates the store. Think of it as a function that takes the current state and an action, then returns a new state.

- **Reducers for component-based actions**: Actions and reducers are defined inside the same slice.
- **Reducers for API-based actions**: We use **extraReducers** to handle asynchronous operations.

## Steps to Set Up Redux Toolkit
1. Install Redux Toolkit and React Redux:
   ```bash
   npm install @reduxjs/toolkit react-redux
   ```
2. Create a **store** folder inside `src/`.
3. Create a `store.js` file inside the `store/` folder.
4. Create a **slices** folder inside `store/` for different features (e.g., `productsSlice.js`).
5. Define a slice with `createSlice()`.
6. Define API-based actions using `createAsyncThunk()`.
7. Wrap the entire application with `Provider` and pass the store.
8. Use **useSelector** to read data and **useDispatch** to update data.

## Explanation of Key Concepts
### **1. Store Provider**
Redux Toolkit provides a **store provider** that wraps the entire React application. This ensures that any component in the app can access the store data without passing props manually.

### **2. Slice**
A **slice** represents a piece of the state in the store. Each slice contains:
- `name`: The name of the slice.
- `initialState`: The default state.
- `reducers`: Functions to update the state for component-based actions.
- `extraReducers`: Functions to update the state for API-based actions.

### **3. createAsyncThunk**
A function used to create an asynchronous action for fetching data from an API. It takes an action name and an async function as arguments.

### **4. useSelector and useDispatch**
- **useSelector**: Reads data from the store.
- **useDispatch**: Dispatches an action to update the store.

## How Redux Works in This Project
1. **Fetching Products from an API**:
   - `fetchProducts` is an asynchronous action created using `createAsyncThunk`.
   - The action is dispatched when the user clicks the "Get Products" button.
   - The reducer updates the state when data is fetched successfully.

2. **Reading Data from Store**:
   - The `useSelector` hook is used to retrieve products from the store.

3. **Updating the Store**:
   - When the action is dispatched, the reducer updates the state in the store.
   - The UI automatically re-renders based on the updated state.

## Contributing:
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes. 

## Conclusion
Redux Toolkit simplifies state management in React applications by providing a structured approach using slices, reducers, actions, and the store. By following the steps above, you can efficiently manage global state without the complexity of prop drilling.



