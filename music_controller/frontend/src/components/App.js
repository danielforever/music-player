import React,{ useState } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";
import HomePage from "./HomePage";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  } from "react-router-dom";


const App = () => {
  const [roomCode, setclearRoomCode] = useState(null);
  const clearRoomCode = e => setclearRoomCode(e.target.value)

  const state = {
    passroomCode: roomCode
  }
  return (
    <div className="center">
      <div className="App">
        <Router>
            <Routes>
              <Route path='/' element={<HomePage/>} />
              <Route path='/join/' element={<RoomJoinPage/> } />
              <Route path='/create/' element={<CreateRoomPage/>} />
              <Route path='/room/:roomCode/' element={<Room state={state} />} />
            </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
