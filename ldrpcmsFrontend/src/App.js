import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./Pages/HomePage";
import SuperAdmin from "./Pages/SuperAdmin";
import LoginPage from "./Pages/LoginPage";
import CalendarPage from "./Pages/CalendarPage";
import UserPage from "./Pages/UserPage";
import CreateUser from "./Pages/CreateUser";
import PMS from "./Pages/PMS";
import SpacePage from "./Pages/SpacePage";

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<SuperAdmin />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/calendar" element={<CalendarPage />} />
                    <Route path="/users" element={<UserPage />} />
                    <Route path="/users/adduser" element={<CreateUser />} />
                    <Route path="/pms" element={<PMS />} />
                    <Route path="/space" element={<SpacePage />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </Router>
    );
}

export default App;
