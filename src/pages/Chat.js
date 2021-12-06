// Libraries
import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import io from "socket.io-client";
// Components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
// Classes
import { defaultButtonStyles } from "../components/Button/Button";
// Utils
import { baseUrl } from "../utils/backendUrl";

const ChatPage = (props) => {
  const [messageToSend, setMessageToSend] = useState(null);
  const [chatList, setChatList] = useState(null);

  // const [messages, setMessages] = useState(null);
  // const [bannerData, setBannerData] = useState(null);

  const socket = useRef();

  // console.log(props);

  useEffect(() => {
    if (!socket.current) {
      socket.current = io(baseUrl, { transports: ["polling"] });
    }

    if (socket.current) {
      socket.current.emit("join", { userId: props.user._id });

    }
    return () => {
      socket.current.emit('disconnected')
      socket.current.off();
    }
  }, [props.user._id]);


  useEffect(() => { 
    const loadMessages = () => {
      socket.current.emit("loadMessages", {
        userId: props.user._id,
        messagesWith: props.match.params.id,
      });
    };
    if(socket.current) {
      loadMessages()
    }
    if(socket.current) {
      socket.current.on('messagesLoaded', ({ chat }) => {
        console.log(chat);
      })
    }
  }, [props.match.params.id, props.user._id]);

    // For Fetching the Chat Lists
    useEffect(() => {
      fetch(`${baseUrl}/api/chat/getchats`, {
        headers: { Authorization: props.user.token },
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            setChatList(false);
          } else {
            setChatList(data);
          }
          // console.log(data);
        })
        .catch((err) => console.log("xD", err));
    }, [props.user.token]);

  // console.log(chatList);
  return (
    <div className="Chat-Page">
      <Header />
      <div className="main-section flex items-center justify-center">
        <div className="relative bg-primary-light rounded-xl">
          {/* Actuall design for the chats */}
          <div className="flex justify-around flex-col lg:flex-row">
            <div className="space-y-3 ml-2 p-2  rounded-lg messages-list mt-10 mb-10">
              {/*Chat List*/}

              {chatList
                ? chatList.map((x) => {
                    return (
                      <div
                        key={x.messagesWith}
                        onClick={() =>
                          props.history.push(`/chat/${x.messagesWith}`)
                        }
                        className="h-20 rounded-lg cursor-pointer bg-primary p-4 my-2 flex items-center"
                      >
                        <img
                          src="https://picsum.photos/200/300"
                          alt="zD asjkdfnjasdf"
                          className="h-12 ml-2 w-12 rounded-full"
                        />
                        <div className="ml-2">
                          <p className="font-bold  hover:text-secondary transition-all duration-300 transform hover:scale-110 text-greyText">
                            {x.messagesWithUser}
                          </p>
                          <p className=" text-greyText  hover:text-secondary transition-all duration-300 transform hover:scale-110 ">
                            {x.lastMessage.msg}
                          </p>
                        </div>
                      </div>
                    );
                  })
                : "no data"}
            </div>

            <div
              style={{ width: "40vw" }}
              className={`bg-primary mr-2 rounded-xl actuall-chat mt-12 mb-10 ${
                props.match.params.id === "default"
                  ? "flex items-center justify-center"
                  : null
              }`}
            >
              {/*Messages history*/}
              {/*Banner Data start*/}

              {props.match.params.id === "default" ? (
                <div className="flex items-center justify-center">
                  <p className="text-greyText font-semibold text-center text-xl">
                    No Data to Show
                  </p>
                </div>
              ) : (
                <div>
                  {" "}
                  <div className="banner-data mt-3 bg-primary-light my-3 mx-3 rounded-xl p-2 flex items-center">
                    <img
                      src="https://picsum.photos/200/300"
                      alt="XD lamao"
                      className="h-12 ml-2 w-12 rounded-full"
                    />
                    <p className="ml-4 text-xl hover:text-secondary transition-all duration-300 transform hover:scale-110 cursor-pointer text-greyText font-semibold">
                      Azeem Subhani
                    </p>
                  </div>
                  {/*Banner Data end*/}
                  <div
                    className="overflow-y-scroll p-3"
                    style={{ height: "60vh" }}
                  >
                    {/*A chat message*/}
                    <div className="flex justify-start mt-4 mb-2 ml-2">
                      <div className="bg-secondary rounded-md p-2 text-white">
                        Hello Man How are you XD
                      </div>
                    </div>

                    <div className="flex justify-end mt-4 mb-2 mr-2">
                      <div className="bg-primary-light rounded-md text-greyText p-2">
                        I'am fine what about youe
                      </div>
                    </div>

                    <div className="flex justify-start mt-4 mb-2 ml-2">
                      <div className="bg-secondary rounded-md p-2 text-white">
                        im fine can i borrow your PC
                      </div>
                    </div>

                    <div className="flex justify-end mt-4 mb-2 mr-2">
                      <div className="bg-primary-light rounded-md text-greyText p-2">
                        Nah bro i've to play valorant
                      </div>
                    </div>

                    <div className="flex justify-start mt-4 mb-2 ml-2">
                      <div className="bg-secondary rounded-md p-2 text-white">
                        I've a tournament to play
                      </div>
                    </div>

                    <div className="flex justify-end mt-4 mb-2 mr-2">
                      <div className="bg-primary-light rounded-md text-greyText p-2">
                        Sure, then please return it on the same day
                      </div>
                    </div>
                  </div>
                  <div className="message-send flex">
                    <input
                      name="nooooo"
                      className="bg-inputBg m-4 w-full rounded-3xl outline-none sm:pr-5 py-2 pl-4 pr-5 placeholder-greyPlaceholder text-greyText text-sm"
                      placeholder="Write A message"
                      onChange={(event) => setMessageToSend(event.target.value)}
                      autoComplete="hidden"
                    />
                    <button
                      disabled={messageToSend ? false : true}
                      className={`${defaultButtonStyles} m-4`}
                    >
                      Send
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
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

export default connect(mapStateToProps)(ChatPage);
