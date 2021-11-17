import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Appointment from './components/Appointment/Appointment/Appointment';
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import Register from './components/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Dashboard from './Dashboard/Dashboard/Dashboard';
import DashboardHome from './Dashboard/DashboardHome/DashboardHome';
import AddDoctor from './Dashboard/AddDoctor/AddDoctor';
import MakeAdmin from './Dashboard/MakeAdmin/MakeAdmin';
import Payment from './Dashboard/payment/Payment';
import AdminRoute from './components/Login/AdminRoute/AdminRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home></Home>} />
            <Route path="/home" element={<Home></Home>} />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/register" element={<Register></Register>} />
            <Route path="/appointment"
              element={
                <PrivateRoute>
                  <Appointment></Appointment>
                </PrivateRoute>
              }
            />
            <Route path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard></Dashboard>
                </PrivateRoute>
              }
            >
              <Route exact path="/dashboard" element={<DashboardHome></DashboardHome>} />

              <Route path={`/dashboard/makeAdmin`} element={
                <AdminRoute>
                  <MakeAdmin></MakeAdmin>
                </AdminRoute>
              } />
              <Route path={`/dashboard/addDoctor`} element={
                <AdminRoute>
                  <AddDoctor></AddDoctor>
                </AdminRoute>
              } />
              <Route path={`/dashboard/payment/:appointmentId`}
                element={<Payment></Payment>} />
            </Route>
            {/* <PrivateRoute path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute> */}
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
