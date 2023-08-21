import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
// SuperAdmin
import SuperAdmin from "./Pages/SuperAdmin/SuperAdmin";
import HomePage from "./Pages/SuperAdmin/HomePage";
import CalendarPage from "./Pages/CalendarPage";
import UserPage from "./Pages/SuperAdmin/UserPage";
import CreateUser from "./Pages/SuperAdmin/CreateUser";
import PMS from "./Pages/PMS";

// Admin
import Admin from "./Pages/Admin/Admin";
import AdminHomePage from "./Pages/Admin/AdminHomePage";
import AdminUsers from "./Pages/Admin/AdminUsers";

// Attendance
import Attendance from "./Pages/Attendance/Attendance";
import AttendanceHome from "./Pages/Attendance/AttendanceHome";
import AttendanceReport from "./Pages/Attendance/AttendanceReport";

// Student
import SpacePage from "./Pages/SuperAdmin/SpacePage";
import Student from "./Pages/Student/Student";
import StudentDashboard from "./Pages/Student/StudentDashboard";
import StudentProfile from "./Pages/Student/StudentProfile";
import StudentGroup from "./Pages/Student/StudentGroup";
import StudentRequestForm from "./Pages/Student/StudentRequestForm";
import StudentSpace from "./Pages/Student/StudentSpace";

// Common
import LoginPage from "./Pages/LoginPage";
import Page404 from "./Pages/Page404";
import Page500 from "./Pages/Page500";
import LandingPage from "./Pages/LandingPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                {/* SuperAdmin */}
                <Route element={<SuperAdmin />}>
                    <Route path="/superadmin/" element={<HomePage />} />
                    <Route path="/superadmin/calendar" element={<CalendarPage />} />
                    <Route path="/superadmin/users" element={<UserPage />} />
                    <Route path="/superadmin/users/adduser" element={<CreateUser />} />
                    <Route path="/superadmin/space" element={<SpacePage />} />
                </Route>
                {/* Admin */}
                <Route element={<Admin />}>
                    <Route path="/admin/" element={<AdminHomePage />} />
                    <Route path="/admin/calendar" element={<CalendarPage />} />
                    <Route path="/admin/users" element={<AdminUsers />} />
                    <Route path="/admin/users/adduser" element={<CreateUser />} />
                    <Route path="/admin/space" element={<SpacePage />} />
                    <Route path="/admin/pms" element={<PMS />} />
                </Route>
                {/* Student */}
                <Route element={<Student />}>
                    <Route path="/student/" element={<StudentDashboard />} />
                    <Route path="/student/profile" element={<StudentProfile />} />
                    <Route path="/student/group" element={<StudentGroup />} />
                    <Route path="/student/request-form" element={<StudentRequestForm />} />
                    <Route path="/student/space" element={<StudentSpace />} />
                    <Route path="/student/calendar" element={<CalendarPage />} />
                    <Route path="/student/pms" element={<PMS />} />
                </Route>
                {/* Student */}
                <Route element={<Attendance />}>
                    <Route path="/attendance/" element={<AttendanceHome />} />
                    <Route path="/attendance/report" element={<AttendanceReport />} />
                </Route>
                {/* Common */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/*" element={<Page404 />} />
                <Route path="/error" element={<Page500 />} />
            </Routes>
        </Router>
    );
}

export default App;
