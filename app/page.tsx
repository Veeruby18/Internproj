import Image from "next/image";
import Navbar from "../../projintern/component/Navbar"
import Generate from "../../projintern/component/Generate"
import Footer from "../../projintern/component/Footer"
import HeroSlider from "../../projintern/component/HeroSlider"

export default function Home() {
  return (
    <div >
      <Navbar/>
      <HeroSlider/>
      <Generate/>
      <Footer/>
    </div>
  );
}
