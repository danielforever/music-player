import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
/* import Room from "./Room"; */

import {
BrowserRouter as Router,
Routes,
Route,
Link,
Redirect
} from "react-router-dom";

export default class HomePage extends Component {
constructor(props) {
super(props);
}

render() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<span>This is the homepage</span>} />
            <Route path='/join' element={<RoomJoinPage/> } />
            <Route path='/create' element={<CreateRoomPage/>} />
        </Routes>
    </Router>
  );
}

}