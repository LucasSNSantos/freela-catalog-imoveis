import React, { ReactElement, useContext } from "react";
import { BrowserRouter as Router, useRoutes, Route, useNavigate, Routes, Navigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import LandingPage from "../pages/LandingPage";

export const AppRoutes: React.FC = () => {
   let routes = useRoutes([
      { path: "/", element: <LandingPage /> },
      // ...
   ]);
   return routes;
};

interface PrivateRouteProps {
   children: ReactElement;
}

export const RouteApp: React.FC = () => {
   //    const { signed, loading } = useContext(UserContext);
   //    const { state } = useContext(CheckListContext);

   //    function PrivateRoute({ children }: PrivateRouteProps) {
   //       return signed ? children : <Navigate to="/" />;
   //    }

   //    function PrivateRouteQuestoes({ children }: PrivateRouteProps) {
   //       return signed && state.id ? children : <Navigate to="checklist" />;
   //    }

   return (
      <Router>
         <Routes>
            <Route path="/" element={<LandingPage />} />
         </Routes>
         {/* <Route
               path="checklist"
               element={
                  <PrivateRoute>
                     <CheckList />
                  </PrivateRoute>
               }
            />
            <Route
               path="checklistEmpilhadeira"
               element={
                  <PrivateRoute>
                     <CheckListEmpilhadeira />
                  </PrivateRoute>
               }
            />
            <Route
               path="landing"
               element={
                  <PrivateRoute>
                     <LandingPage />
                  </PrivateRoute>
               }
            />
            <Route
               path="questoes"
               element={
                  <PrivateRoute>
                     <Questoes />
                  </PrivateRoute>
               }
            />
            <Route
               path="questoesEmpilhadeira"
               element={
                  <PrivateRoute>
                     <QuestoesEmpilhadeira />
                  </PrivateRoute>
               }
            />
            <Route
               path="configPenus"
               element={
                  <PrivateRoute>
                     <CheckListPneu />
                  </PrivateRoute>
               }
            />
          */}
      </Router>
   );
};
