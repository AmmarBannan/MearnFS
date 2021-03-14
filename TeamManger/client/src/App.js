import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Main from "./Main"
import Games from "./views/Games"
import { Link,navigate,Router } from "@reach/router"
import Addplayer from "./components/Addplayer"
import PlayerTabel from "./components/PlayerTabel"
import Admin from "./components/Admin"


function App() {
  return(
    <div>
    <Link to="/player">Manage Players</Link>|<Link to="/status/game/:id">Manage Player Status</Link>|<Link to="/admin">Admin</Link>

        <Router>
            <Main path="/player"/>
            <Admin path="/admin"/>
            <Games path="/status/game/:id"/>
            <PlayerTabel path="/player/list"/>
            <Addplayer path="/player/addplayer"/>
        </Router>
    </div>
  );
}

export default App;