import React from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";

import {
BrowserRouter as Router,
Routes,
Route,
Link,
Redirect
} from "react-router-dom";

const HomePage = () => {

  return (
    <Router>
        <Routes>
            <Route path='/' element={<span>This is the homepage</span>} />
            <Route path='/join' element={<RoomJoinPage/> } />
            <Route path='/create' element={<CreateRoomPage/>} />
            <Route path='/room/:roomCode' element={<Room />} />
        </Routes>
    </Router>
  );
}

export default HomePage