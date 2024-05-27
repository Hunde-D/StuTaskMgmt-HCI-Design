import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import Error from "./pages/Error";
import Setting from "./pages/Setting";
import Gantt from "./pages/Gantt";
import Chat from "./pages/Chat";
import Storage from "./pages/Storage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      <Route path="tasks" element={<Tasks />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/timeline" element={<Gantt />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/storage" element={<Storage />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
