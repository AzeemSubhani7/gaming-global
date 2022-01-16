// Libraries
import React, {useState, useEffect} from "react";
import axios from "axios";
import { connect } from "react-redux";
import { XCircleIcon } from "@heroicons/react/outline";
// Components
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// Utilities
import LinearImageSection from "../../components/LinearImageSection/LinearImageSection";
import { secondaryHeadingClasses } from "../../utils/combinedClasses";
import { linearImageHeadingClasses } from "../../utils/combinedClasses";
import PatchesImage from "../../images/fortnite_statistics_final.jpg"
import { baseUrl } from "../../utils/backendUrl";

const FortnitePatchPage = (props) => {
  const [patches, setPatches] = useState('')
  useEffect(() => {
    const getPatches = async () => {
      try{
        const patch = await axios.get(`${baseUrl}/fortnitepatch`)
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

  const deletePatch = async(id) => {
    try{
      const response = await axios.delete(`${baseUrl}/delpatch/${id}`)
      if(response.data) {
        alert("Patch Has been deleted!")
        props.history.push('/patches')
      }
    }
    catch(error) {
      alert(error)
      console.log(error)
      props.history.push('/patches')
    }
  }

  console.log(props)
  return (
    <div>
      <Header />
      <LinearImageSection imageUrl={PatchesImage}>
        <h1 className={linearImageHeadingClasses}>Fortnite Updates</h1>
      </LinearImageSection>
      <div className="flex justify-center mt-5 items-center">
        <div className="headings p-7">
          <h1 className={secondaryHeadingClasses}>
            Get to know about the latest updates of Fortnite
          </h1>
          <p className="text-greyText text-center mt-5">
            We'll provide you the latests news and patches about Epic games' Fortnite. <br /> So, you can stay updated and get to know about all the
            nerfs and buffs coming in this game.
          </p>
        </div>
      </div>
      {patches.length === 0 ? <div className='text-center text-2xl text-greyText'>Currently No Patches To Show</div> : null}
      <div className="Fortnite All Pathces">
        {/**/}
        {
          patches ? patches.map( (x) => {
            return (
              <div key={x._id} className="p-3 mt-10 flex flex-col justify-center mx-auto">
          <div className="mt-2 px-32">
            <div className="h-auto w-full py-20 px-10 bg-gradient-to-tr relative from-indigo-600 to-blue-300 flex flex-col space-y-5 mx-auto rounded-3xl shadow-xl hover:rotate-1 transition-transform">
            {props.user.role === 'root' ? 
                <p><XCircleIcon 
                onClick={() => deletePatch(x._id)}
                className='h-6 w-6 hover:text-secondary absolute top-4 right-4 cursor-pointer transition-all duration-300 transform hover:scale-110 text-white' /></p>
              : null}
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
        {/*
        <div className="p-3 mt-10 flex flex-col justify-center mx-auto">
          <div className="mt-2 px-32">
            <div className="h-auto w-full py-20 px-10 bg-gradient-to-tr from-indigo-600 to-blue-300 flex flex-col space-y-5 mx-auto rounded-3xl shadow-xl hover:rotate-1 transition-transform">
              <h1 className=" font-medium text-white text-2xl tracking-wide">
                Update 2.01
              </h1>
              <h2 className="font-normal tracking-wide text-base text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
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
        */}
        {/**/}
      </div>

      <Footer />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};
export default connect(mapStateToProps)(FortnitePatchPage);
