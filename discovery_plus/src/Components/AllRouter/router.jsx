import { Route,Routes } from "react-router-dom";
import {Explore} from "./explore/explore";

export const Router =()=>{
    return <>
    <Routes>
    
    <Route path="/explore" element={<Explore/>}></Route>
      
    </Routes>
    </>
}