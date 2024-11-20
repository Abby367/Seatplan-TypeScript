import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import LoginPage from "./login_component/logInPage";
import ViewSeatPage from "./viewseat_component/viewSeatPage";
import AboutUsPage from "./aboutus_component/aboutusPage";
import DashboardPage from "./dashboard_component/dashboardPage";
import AdminMembersPage from "./admin_component/adminMembersPage";
import SeatplanPage from "./seatplan_component/seatplanPage";
import ProfilePage from "./profile_component/profilePage";
import ProjectPage from "./project_component/projectPage";
import MachinePage from "./admin_component/machinetablePage";
import DashboardViewerPage from "./DashView_component/dashboardViewerPage";
import ProfileViewerPage from "./profileviewer_component/profileviewerPage";
import ViewerSeatPage from "./viewerseat_component/viewerseatPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/viewSeatPage" element={<ViewSeatPage />} />
          <Route path="/dashboardPage" element={<DashboardPage />} />
          <Route path="/aboutUsPage" element={<AboutUsPage />} />
          <Route path="/projectPage" element={<ProjectPage />} />
          <Route path="/seatplanPage" element={<SeatplanPage />} />
          <Route path="/viewerseatPage" element={<ViewerSeatPage />} />
          <Route path="/adminPage" element={<AdminMembersPage />} />
          <Route path="/profilePage" element={<ProfilePage />} />
          <Route path="/machinetablePage" element={<MachinePage />} />
          <Route path="/dashboardviewerPage" element={<DashboardViewerPage />} />
          <Route path="/profileviewerPage" element={<ProfileViewerPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
