import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { sagaMiddleware, store } from "./store";
import { rootSaga } from "./modules";
import GlobalStyle from "styles";
sagaMiddleware.run(rootSaga);
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <GlobalStyle>
        <App />
      </GlobalStyle>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
