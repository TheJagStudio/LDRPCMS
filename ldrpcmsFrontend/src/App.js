import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import HomePage from "./Pages/HomePage";
import SuperAdmin from "./Pages/SuperAdmin";
import LoginPage from "./Pages/LoginPage";
import CalendarPage from "./Pages/CalendarPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route element={<SuperAdmin />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/calendar" element={<CalendarPage />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </Router>
    );
}

export default App;
