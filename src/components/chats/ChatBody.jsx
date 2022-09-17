import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import moment from 'moment'

export default function ChatBody({ chats }) {
  const { auth } = useSelector((s) => s);
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "auto" });
  };

  useEffect(scrollToBottom, [chats]);
  return (
    <div className="h-[72vh] overflow-y-auto">
      {chats?.length > 0 &&
        chats.map((chat) => {
          if (auth?.data?.id === chat?.senderId) {
            return (
              <>
                {
                  <div className="ram w-full flex justify-end">
                    <div className="max-w-[45%] flex items-center  p-1 cursor-pointer mb-1  rounded-md ">
                      <div className="flex items-end">
                        <div className="flex flex-col ml-2 p-1  bg-white rounded-md">
                          <div className="flex justify-between mb-1">
                            <p className="text-xs font-extralight my-auto mr-3">
                              {" "}
                              {moment(chat.createdAt).fromNow()}
                            </p>
                            <p className="text-sm font-semibold">
                              {chat.sender.name}
                            </p>
                          </div>
                          <p className="text-sm leading-4 ">
                           {chat.chat}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              </>
            );
          } else {
            return (
              <>
                <div className="w-full">
                  <div className="abccc w-[45%] flex justify-start items-center  p-1 cursor-pointer mb-1  rounded-md ">
                    <div className="flex ">
                      <div className="avatar">
                        <div className="w-8 h-8  rounded-full">
                          <img
                            src={
                              chat?.sender?.image?.url
                                ? chat?.sender?.image?.url
                                : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                            }
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="flex flex-col ml-2 p-1  bg-white rounded-md">
                        <div className="flex justify-between mb-1">
                          <p className="text-sm font-semibold">{chat.sender.name}</p>
                          <p className="text-xs font-extralight my-auto ml-3">
                            {" "}
                            {moment(chat.createdAt).fromNow()}
                          </p>
                        </div>
                        <p className="text-sm leading-4">
                        {chat.chat}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          }
        })}
      {/* friendBlock */}

      {/* userBlock, if the auth user matches the id then and only */}

      {/* yoo last ma hunu oarxa */}
      <div ref={messagesEndRef}></div>
    </div>
  );
}
