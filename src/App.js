import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
// import { MyProSidebarProvider } from "./pages/global/sidebar/sidebarContext";

// import Topbar from "./pages/global/Topbar";
import Dashboard from "./pages/dashboard";
import Team from "./pages/team";
import Invoices from "./pages/invoices";
import Contacts from "./pages/contacts";
import Form from "./pages/form";
import Calendar from "./pages/calendar";
import Bar from "./pages/bar";
import Line from "./pages/line";
import Pie from "./pages/pie";
import FAQ from "./pages/faq";
import Geography from "./pages/geography";
import Admin from "./components/Admin";
import User from "./components/User";
import Company from "./components/Company";
import Applications from "./components/Applications";
import Report from "./components/Report";
import Example from "./components/Example";
import Login from "./components/Login";
import SignInSide from "./components/SignInSide";
import MainComponent from "./components/MainComponent";
import UserMain from "./components/UserMain";
import UserProvider from "./context/UserContext";
import MyCompany from "./components/MyCompany";
import Application from "./components/Application";

const App = () => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <UserProvider >
            <Routes>
              {
                // sessionStorage.getItem("access_token") ? (
                  <Route path="/" element={<MainComponent/>}>
                    <Route path="admin" element={<Admin />}>
                      <Route index element={<Dashboard />} />
                      <Route path="team" element={<Team />} />
                      <Route path="contacts" element={<Contacts />} />
                      <Route path="invoices" element={<Invoices />} />
                      <Route path="form" element={<Form />} />
                      <Route path="bar" element={<Bar />} />
                      <Route path="pie" element={<Pie />} />
                      <Route path="line" element={<Line />} />
                      <Route path="faq" element={<FAQ />} />
                      <Route path="calendar" element={<Calendar />} />
                      <Route path="geography" element={<Geography />} />
                    </Route>
                    <Route path="user" element={<UserMain/>}>
                      <Route index element={<MyCompany />} />
                      {/* company */} 
                      <Route path="company" element={<MyCompany />} />
                      <Route path="reports" element={<MyCompany />} />
                      <Route path="application" element={<Application />} />
                    </Route>
                  </Route>
                // ):
                // <></>
              }
              <Route path="login" element={<SignInSide/>} />
              <Route path="admin-login" element={<p>admin login</p>} />
              {/* <Route path="*" element={<Navigate to={sessionStorage.getItem("access_token") ? "/" : "login"} />} /> */}
            </Routes>
          </UserProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
