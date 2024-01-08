import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
import { store } from "./store";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
const App = () => {
  // Replace with your actual latitude and longitude values

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            {routes.map((el, i) => (
              <Route path={el.path} element={<el.element />} key={i} />
            ))}
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
