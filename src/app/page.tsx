import Navbar from "../components/Navbar/Navbar"
import Footer from "../components/Footer/Footer";
// import Image from "next/image"
// import nabeel from "../../public/coding.jpeg"
import Form from "../components/Form"
import Grid from "../components/Grid"



export default function Home() {
  return (
    <div>
      <Navbar/>
      <Form/>
    <Grid/>
   <Footer/>
    </div>
  );
}
