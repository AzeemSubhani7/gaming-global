// Libraries
import React, { useState, useRef, useEffect } from "react";
import { connect } from "react-redux";
import io from "socket.io-client";
import Moment from "react-moment";
// Components
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
// Utils
import { baseUrl } from "../utils/backendUrl";
import SendMessage from "../components/sendMessage";

const ChatPage = (props) => {
  const [chatList, setChatList] = useState(null);

  const [messages, setMessages] = useState(null);
  const [bannerData, setBannerData] = useState(null);

  const socket = useRef();

  console.log(props);

  // For Connecting the Socket
  useEffect(() => {
    if (!socket.current) {
      socket.current = io(baseUrl, { transports: ["polling"] });
    }

    if (socket.current) {
      socket.current.emit("join", { userId: props.user._id });
    }
    return () => {
      socket.current.emit("disconnected");
      socket.current.off();
    };
  }, [props.user._id]);

  // For Loading the messages
  useEffect(() => {
    const loadMessages = () => {
      socket.current.emit("loadMessages", {
        userId: props.user._id,
        messagesWith: props.match.params.id,
      });
    };
    if (socket.current) {
      loadMessages();
    }
    if (socket.current) {
      socket.current.on("messagesLoaded", ({ chat }) => {
        console.log(chat);
        setMessages(chat.messages);
        setBannerData(chat.messageWith);
      });
      socket.current.on("noPreviousChat", () => {
        setMessages(null);
        setBannerData(null);
      });
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
  }, [props.user.token, messages]);

  // For Confirming that message is send and Receiving the messages

  useEffect(() => {
    if (socket.current) {
      socket.current.on("messageSent", ({ newMessage }) => {
        if (newMessage.receiver === props.match.params.id) {
          setMessages((previous) => [...previous, newMessage]);
        }
      });
    }
  }, [props.match.params.id]);

  // Function for sending a Message
  const sendMessage = (text) => {
    if (socket.current) {
      socket.current.emit("sendNewMessage", {
        userId: props.user._id,
        messageSendToUserId: props.match.params.id,
        message: text,
      });
      return;
    }
    return;
  };

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
                        onClick={() => {
                          props.history.push(`/chat/${x.messagesWith}`);
                          setBannerData(x.messageWith);
                        }}
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
                            {x.lastMessage.msg.length > 30
                              ? x.lastMessage.msg.slice(0, 30)
                              : x.lastMessage.msg}
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
                      {bannerData ? bannerData.userName : "no Data"}
                    </p>
                  </div>
                  {/*Banner Data end*/}
                  <div
                    className="overflow-y-scroll p-3"
                    style={{ height: "60vh" }}
                  >
                    {/*A chat message*/}
                    {messages && messages.length > 0 ? (
                      messages.map((x) => {
                        return (
                          <div
                            key={x.date}
                            className={`flex mt-4 mb-2 ml-2 ${
                              x.sender === props.user._id
                                ? "justify-end"
                                : "justify-start"
                            }`}
                          >
                            <div
                              className={`rounded-md p-2 ${
                                x.sender === props.user._id
                                  ? "bg-primary-light text-greyText"
                                  : "bg-secondary text-white"
                              } `}
                            >
                              <p className="text-lg">{x.msg}</p>
                              <p
                                className={`flex ${
                                  x.sender === props.user._id
                                    ? " text-greyText justify-end"
                                    : " text-white justify-start"
                                } `}
                                style={{ fontSize: "10px" }}
                              >
                                <Moment date={x.date} format="LLLL" />
                              </p>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div className="flex items-center justify-center">
                        <p className="text-greyText font-semibold text-center text-xl">
                          No Data to Show
                        </p>
                      </div>
                    )}
                  </div>
                  <SendMessage sendMessage={sendMessage} />
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
