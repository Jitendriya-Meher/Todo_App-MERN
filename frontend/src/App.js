import "./App.css";
import NavBar from "./components/NavBar"
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute"
import BackButton from "./components/BackButton";
import Signup from "./pages/Auth/Signup";
import Login from "./pages/Auth/Login";
import ForgotPassword from "./pages/Auth/ForgotPassword";
import ResetPassword from "./pages/Auth/ResetPassword";
import Profile from "./pages/Profile/Profile";
import ProfileHome from "./components/Profile/ProfileHome";
import ChangePfofile from "./pages/Profile/ChangeProfile";
import ChangePassword from "./pages/Profile/ChangePassword";
import DeleteAccount from "./pages/Profile/DeleteAccount";
import AdminPage from "./pages/Admin/AdminPage";
import AdminRoute from "./components/AdminRoute";
import AddTodo from "./pages/Todo/AddTodo";
import EditTodo from "./pages/Todo/EditTodo";
import ViewTodo from "./pages/Todo/ViewTodo";
import DeleteTodos from "./pages/Profile/DeleteTodos";

function App() {

  return <div className="w-screen min-h-screen bg-richblack-900 flex flex-col">

    <NavBar></NavBar>

    <BackButton></BackButton>

    <Routes>

      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="/forgot-password" element={<ForgotPassword></ForgotPassword>}></Route>
      <Route path="/reset-password/:email" element={<ResetPassword></ResetPassword>}></Route>

      <Route path="/dashboard" element={
        <PrivateRoute>
          <Dashboard></Dashboard>
        </PrivateRoute>
      }></Route>

      <Route path="/profile" element={
        <PrivateRoute>
          <Profile></Profile>
        </PrivateRoute>
      }>
        <Route path="/profile" element={<ProfileHome></ProfileHome>}></Route>
        <Route path="/profile/change" element={<ChangePfofile></ChangePfofile>}></Route>
        <Route path="/profile/password" element={<ChangePassword></ChangePassword>}></Route>
        <Route path="/profile/delete" element={<DeleteAccount></DeleteAccount>}></Route>
        <Route path="/profile/deletetodo" element={<DeleteTodos></DeleteTodos>}></Route>
      </Route>

      <Route path="/admin" element={
        <AdminRoute>
          <AdminPage></AdminPage>
        </AdminRoute>
      }></Route>

      <Route path="/add" element={
        <PrivateRoute>
          <AddTodo></AddTodo>
        </PrivateRoute>
      }></Route>

      <Route path="/edit/:id" element={
        <PrivateRoute>
          <EditTodo></EditTodo>
        </PrivateRoute>
      }></Route>  

      <Route path="/view/:id" element={
        <PrivateRoute>
          <ViewTodo></ViewTodo>
        </PrivateRoute>
      }></Route>

    </Routes>

  </div>;
}

export default App;
