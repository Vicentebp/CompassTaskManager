import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import getLocation from "./services/getLocation";
import getWeather from "./services/getWeather";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const callLocation = async () => {
    const location = await getLocation("Santo Ângelo", "BR");
    const weather = await getWeather(location.lat, location.lon);
    console.log(weather);
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
