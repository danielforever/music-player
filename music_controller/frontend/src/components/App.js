import React,{ useState } from "react";
import { render } from "react-dom";
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


  return (
    <div className="center">
      <div className="App">
        <Router>
            <Routes>
              <Route path='/' element={<HomePage/>} />
              <Route path='/join' element={<RoomJoinPage/> } />
              <Route path='/create' element={<CreateRoomPage/>} />
              <Route path='/room/:roomCode' element={<Room />} />
{/*               <Route 
                path='/room/:roomCode' 
                render={(props) => {
                  return <Room {...props} leaveRoomCallback={clearRoomCode} />;
                }}                
              /> */}
            </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
const appDiv = document.getElementById("app");
render(<App />, appDiv);