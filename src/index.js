import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux-store/rootReducer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { interceptor } from "./api/axiosInterceptor";
import "react-toastify/dist/ReactToastify.css";

interceptor()
const store = createStore(rootReducer, applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

