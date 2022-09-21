import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import "aframe"
import {Scene, Box, Entity, Sky, Assets, Plane} from "@belivvr/aframe-react"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Scene>
        <Box position={{x:0, y: 0, z:0}} width={0.5} depth={0.5} height={0.5}></Box>
        <Sky src={"https://cdn.glitch.global/e9616aed-dc5d-40e0-a208-0b7f3e263a88/nebula.jpg?v=1663660114336"} />
        <Plane position={{x: 0, y: 0, z:0}} rotation={{x: -95, y:-90, z:0}} src="https://cdn.glitch.global/e9616aed-dc5d-40e0-a208-0b7f3e263a88/moonsoil%20texture.webp?v=1663660346763"></Plane>
      </Scene>
      
    </div>
  )
}

export default App
