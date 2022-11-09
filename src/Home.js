import { useNavigate } from "react-router";
import Navbar from "./components/Navbar"
export default function Home() {
  const navigate = useNavigate();

  return (
    <>
        <Navbar />

        <div style={{ marginTop: 20, minHeight: 700 }}>

        <p>Hello there, welcome to your Home page</p>

      </div>
      </>
  );
}