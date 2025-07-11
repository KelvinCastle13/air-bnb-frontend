import axios from "axios";
import { Header } from "./Header";
import { RoomsPage } from "./RoomsPage";
import { Footer } from "./Footer";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Header />
      <RoomsPage />
      <Footer />
    </div>
  )
}

export default App;