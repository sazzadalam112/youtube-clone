import Head from "./components/Head";
import Body from "./components/Body";
import "./App.css"
import { Provider } from "react-redux";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer"
import WatchPage from "./components/WatchPage";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainContainer />
    },
    {
      path: "watch",
      element: <WatchPage />
    },
    {
      path: "demo",
      element: <>
        <Demo />
        <Demo2 />
      </>
    },
  ]
}])


const App = () => {
  return (
    <Provider store={store}>
      <div className="w-screen">
        <Head />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  )
}

export default App







