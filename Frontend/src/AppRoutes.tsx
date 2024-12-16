import { Routes,Route, Navigate } from "react-router-dom"

import Layout from "./layouts/layout";

const AppRoute = ()=>{
    return(
        <Routes>
            <Route path="/" element={<Layout>HOME PAGE</Layout>}/>
            <Route path="/userProfile" element={<span>USER PROFILE PAGE</span>}/>
            <Route path="*" element={<Navigate to="/" />}/>
        </Routes>
    );
}

export default AppRoute;