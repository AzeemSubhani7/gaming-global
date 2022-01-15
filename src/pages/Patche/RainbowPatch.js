// Libraries
import React,{useState, useEffect} from "react";
import axios from "axios";
// Components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// Utilities
import LinearImageSection from "../../components/LinearImageSection/LinearImageSection";
import { secondaryHeadingClasses } from "../../utils/combinedClasses";
import { linearImageHeadingClasses } from "../../utils/combinedClasses";
import PatchesImage from "../../images/rainbowSix_charms.jpg";
import { baseUrl } from "../../utils/backendUrl";

const RainbowPatchPage = () => {
  const [patches, setPatches] = useState('')
  useEffect(() => {
    const getPatches = async () => {
      try{
        const patch = await axios.get(`${baseUrl}/rainbowpatch`)
        if(patch) {
          // console.log(patch)
          setPatches(patch.data)
        }
      }
      catch(error) {
        console.log(error)
        alert("Error!")
      }
    }
    getPatches();
  },[])


  console.log(patches)
  return (
    <div>
      <Header />
      <LinearImageSection imageUrl={PatchesImage}>
        <h1 className={linearImageHeadingClasses}>Rainbow Six Updates</h1>
      </LinearImageSection>
      <div className="flex justify-center mt-5 items-center">
        <div className="headings p-7">
          <h1 className={secondaryHeadingClasses}>
            Get to know about the latest updates of Tom Clancy's Rainbow Six
            Seige
          </h1>
          <p className="text-greyText text-center mt-5">
            We'll provide you the latests news and patches about Rainbow Six
            Seige. <br /> So, you can stay updated and get to know about all the
            nerfs and buffs coming in this game.
          </p>
        </div>
      </div>

      <div className="Rainbow All Pathces">
        {/**/}
        {
          patches ? patches.map( (x) => {
            return (
              <div key={x._id} className="p-3 mt-10 flex flex-col justify-center mx-auto">
          <div className="mt-2 px-32">
            <div className="h-auto w-full py-20 px-10 bg-gradient-to-tr from-purple-600 to-blue-500 flex flex-col space-y-5 mx-auto rounded-3xl shadow-xl hover:rotate-1 transition-transform">
              <h1 className=" font-medium text-white text-2xl tracking-wide">
                {x.title}
              </h1>
              <h1 className=" font-medium text-white text-2xl tracking-wide">
                {x.patch}
              </h1>
              <h2 className="font-normal tracking-wide text-base text-white">
                {x.text}
              </h2>
              <div className="flex flex-col">
                <p className="font-bold text-white text-sm tracking-wider">
                  Admin
                </p>
                <p className="font-bold text-white text-sm tracking-wider">
                  Gaming Global
                </p>
              </div>
            </div>
          </div>
        </div>
            )
          } ) : null
        }
        {/**/}
      </div>

      <Footer />
    </div>
  );
};

export default RainbowPatchPage;
