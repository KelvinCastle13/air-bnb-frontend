import axios from "axios"
import {useState, useEffect} from "react";
import { RoomsIndex } from "./RoomsIndex"

export function RoomsPage() {
const [rooms, setRooms] = useState([]);

const handleIndex = () => {
  console.log("handelIndex");
  axios.get("/rooms.json").then((response) => {
    console.log(response.data);
    setRooms(response.data);
  })
}

useEffect(handleIndex, []);

  return (
    <main>
      <RoomsIndex rooms={rooms} />
    </main>
  )
}