import React from "react";
import ChatSpace from "../../components/chats/ChatSpace";
import ChatUsers from "../../components/chats/ChatUsers";
const userLists=[
  {
    id: 3,
    createdAt: "2022-07-07T16:22:42.216Z",
    updatedAt: "2022-07-07T16:22:42.217Z",
    name: "ram thapa",
    email: "ram@gmail.com",
    password: "$2b$10$/dzp7tVPBQJ5bPlrYWpIYumMktrvxOLht3yieW6MdnMX1In/oQb9S",
    active: true,
    bio: null,
    imageId: null,
    sender: [
      {
        id: 6,
        createdAt: "2022-08-04T03:07:06.952Z",
        updatedAt: "2022-08-04T03:07:06.955Z",
        senderId: 3,
        receiverId: 6,
        chat: "yes i am fine"
      }
    ],
    image: null
  },
  {
    id: 2,
    createdAt: "2022-07-07T15:54:15.128Z",
    updatedAt: "2022-07-07T15:54:15.129Z",
    name: "chirag thapa",
    email: "chirag@gmail.com",
    password: "$2b$10$UYe2nBkAJI1yx5DMKqQ1BeCk/UaX2gZSh4etYId4wGT4z8c6pO5eC",
    active: true,
    bio: null,
    imageId: null,
    sender: [
      {
        id: 5,
        createdAt: "2022-08-01T05:19:13.618Z",
        updatedAt: "2022-08-01T05:19:13.618Z",
        senderId: 2,
        receiverId: 6,
        chat: "yes i am fine"
      }
    ],
    image: null
  },
  {
    id: 4,
    createdAt: "2022-07-07T16:22:48.108Z",
    updatedAt: "2022-07-07T16:22:48.109Z",
    name: "sita thapa",
    email: "sita@gmail.com",
    password: "$2b$10$e4Xhwnc2oA2xJQvQakvgfeuen0mNlSC01RDh2al5kuE9hb7aDprEG",
    active: true,
    bio: null,
    imageId: null,
    sender: [],
    image: null
  },
  {
    id: 5,
    createdAt: "2022-07-07T16:23:04.868Z",
    updatedAt: "2022-07-07T16:23:04.869Z",
    name: "gita thapa",
    email: "gita@gmail.com",
    password: "$2b$10$mv7Tj3Pa1z4vsbwnisxiNe/PCu1OKuXYIRaTxmvONCwXJrC4vTvdm",
    active: true,
    bio: null,
    imageId: null,
    sender: [],
    image: null
  },
  {
    id: 7,
    createdAt: "2022-07-07T16:23:23.164Z",
    updatedAt: "2022-07-07T16:23:23.164Z",
    name: "shyam rai",
    email: "shyam@gmail.com",
    password: "$2b$10$TtkBEzmpVxAlWsOHHGofk.kQY4galuCks1DLpO8jRWd5E6JJnd9s2",
    active: true,
    bio: null,
    imageId: null,
    sender: [],
    image: null
  },
  {
    id: 8,
    createdAt: "2022-07-07T16:23:43.261Z",
    updatedAt: "2022-07-07T16:23:43.262Z",
    name: "john rai",
    email: "john@gmail.com",
    password: "$2b$10$9Qjy1KaBVvP.STs81pvrVOUdPWK9XrRv2r9e6OapXeQdt8tdcuAS2",
    active: true,
    bio: null,
    imageId: null,
    sender: [],
    image: null
  },
  {
    id: 9,
    createdAt: "2022-07-26T03:49:04.251Z",
    updatedAt: "2022-07-26T03:49:04.252Z",
    name: "himesh",
    email: "himesh@gmail.com",
    password: "$2b$10$f6ZqryZ2Evq5ZW/puUlene3IfxSIMPkMeoXp/owdZBqXKxE2RPpge",
    active: true,
    bio: null,
    imageId: null,
    sender: [],
    image: null
  },
  {
    id: 10,
    createdAt: "2022-07-31T01:22:12.175Z",
    updatedAt: "2022-07-31T01:22:12.177Z",
    name: "user2 rai",
    email: "user2@gmail.com",
    password: "$2b$10$w5cEOuJFvS65KVlvQXBXaeTMntK5CcKBh7O2lqUgemWL6TuXFdS9y",
    active: true,
    bio: null,
    imageId: null,
    sender: [],
    image: null
  },
  {
    id: 11,
    createdAt: "2022-07-31T01:22:12.175Z",
    updatedAt: "2022-07-31T01:22:12.177Z",
    name: "user2 rai",
    email: "user2@gmail.com",
    password: "$2b$10$w5cEOuJFvS65KVlvQXBXaeTMntK5CcKBh7O2lqUgemWL6TuXFdS9y",
    active: true,
    bio: null,
    imageId: null,
    sender: [],
    image: null
  },
  {
    id: 12,
    createdAt: "2022-07-31T01:22:12.175Z",
    updatedAt: "2022-07-31T01:22:12.177Z",
    name: "user2 rai",
    email: "user2@gmail.com",
    password: "$2b$10$w5cEOuJFvS65KVlvQXBXaeTMntK5CcKBh7O2lqUgemWL6TuXFdS9y",
    active: true,
    bio: null,
    imageId: null,
    sender: [],
    image: null
  },
  {
    id: 13,
    createdAt: "2022-07-31T01:22:12.175Z",
    updatedAt: "2022-07-31T01:22:12.177Z",
    name: "user2 rai",
    email: "user2@gmail.com",
    password: "$2b$10$w5cEOuJFvS65KVlvQXBXaeTMntK5CcKBh7O2lqUgemWL6TuXFdS9y",
    active: true,
    bio: null,
    imageId: null,
    sender: [],
    image: null
  },
  {
    id: 14,
    createdAt: "2022-07-31T01:22:12.175Z",
    updatedAt: "2022-07-31T01:22:12.177Z",
    name: "user2 rai",
    email: "user2@gmail.com",
    password: "$2b$10$w5cEOuJFvS65KVlvQXBXaeTMntK5CcKBh7O2lqUgemWL6TuXFdS9y",
    active: true,
    bio: null,
    imageId: null,
    sender: [],
    image: null
  },
  {
    id: 15,
    createdAt: "2022-07-31T01:22:12.175Z",
    updatedAt: "2022-07-31T01:22:12.177Z",
    name: "user2 rai",
    email: "user2@gmail.com",
    password: "$2b$10$w5cEOuJFvS65KVlvQXBXaeTMntK5CcKBh7O2lqUgemWL6TuXFdS9y",
    active: true,
    bio: null,
    imageId: null,
    sender: [],
    image: null
  },
  {
    id: 16,
    createdAt: "2022-07-31T01:22:12.175Z",
    updatedAt: "2022-07-31T01:22:12.177Z",
    name: "user2 rai",
    email: "user2@gmail.com",
    password: "$2b$10$w5cEOuJFvS65KVlvQXBXaeTMntK5CcKBh7O2lqUgemWL6TuXFdS9y",
    active: true,
    bio: null,
    imageId: null,
    sender: [],
    image: null
  },
  {
    id: 17,
    createdAt: "2022-07-31T01:22:12.175Z",
    updatedAt: "2022-07-31T01:22:12.177Z",
    name: "user2 rai",
    email: "user2@gmail.com",
    password: "$2b$10$w5cEOuJFvS65KVlvQXBXaeTMntK5CcKBh7O2lqUgemWL6TuXFdS9y",
    active: true,
    bio: null,
    imageId: null,
    sender: [],
    image: null
  },
  {
    id: 18,
    createdAt: "2022-07-31T01:22:12.175Z",
    updatedAt: "2022-07-31T01:22:12.177Z",
    name: "user2 rai",
    email: "user2@gmail.com",
    password: "$2b$10$w5cEOuJFvS65KVlvQXBXaeTMntK5CcKBh7O2lqUgemWL6TuXFdS9y",
    active: true,
    bio: null,
    imageId: null,
    sender: [],
    image: null
  },
  {
    id: 19,
    createdAt: "2022-07-31T01:22:12.175Z",
    updatedAt: "2022-07-31T01:22:12.177Z",
    name: "user2 rai",
    email: "user2@gmail.com",
    password: "$2b$10$w5cEOuJFvS65KVlvQXBXaeTMntK5CcKBh7O2lqUgemWL6TuXFdS9y",
    active: true,
    bio: null,
    imageId: null,
    sender: [],
    image: null
  }
]
const chats=[
  {
    id: 3,
    createdAt: "2022-08-01T05:17:43.352Z",
    updatedAt: "2022-08-01T05:17:43.353Z",
    senderId: 2,
    receiverId: 6,
    chat: "hi how are you!"
  },
  {
    id: 4,
    createdAt: "2022-08-01T05:18:43.760Z",
    updatedAt: "2022-08-01T05:18:43.760Z",
    senderId: 2,
    receiverId: 6,
    chat: "hi how are you!"
  },
  {
    id: 5,
    createdAt: "2022-08-01T05:19:13.618Z",
    updatedAt: "2022-08-01T05:19:13.618Z",
    senderId: 6,
    receiverId: 2,
    chat: "yes i am fine"
  },
  {
    id: 8,
    createdAt: "2022-08-04T04:54:48.649Z",
    updatedAt: "2022-08-04T04:54:48.650Z",
    senderId: 6,
    receiverId: 2,
    chat: "yes i am fine"
  },
  {
    id: 9,
    createdAt: "2022-08-01T05:17:43.352Z",
    updatedAt: "2022-08-01T05:17:43.353Z",
    senderId: 2,
    receiverId: 6,
    chat: "hi how are you!"
  },
  {
    id: 10,
    createdAt: "2022-08-01T05:18:43.760Z",
    updatedAt: "2022-08-01T05:18:43.760Z",
    senderId: 2,
    receiverId: 6,
    chat: "hi how are you!"
  },
  {
    id: 11,
    createdAt: "2022-08-01T05:19:13.618Z",
    updatedAt: "2022-08-01T05:19:13.618Z",
    senderId: 6,
    receiverId: 2,
    chat: "yes i am fine"
  },
  {
    id: 12,
    createdAt: "2022-08-04T04:54:48.649Z",
    updatedAt: "2022-08-04T04:54:48.650Z",
    senderId: 6,
    receiverId: 2,
    chat: "yes i am fine"
  },
  {
    id: 13,
    createdAt: "2022-08-01T05:17:43.352Z",
    updatedAt: "2022-08-01T05:17:43.353Z",
    senderId: 2,
    receiverId: 6,
    chat: "hi how are you!"
  },
  {
    id: 14,
    createdAt: "2022-08-01T05:18:43.760Z",
    updatedAt: "2022-08-01T05:18:43.760Z",
    senderId: 2,
    receiverId: 6,
    chat: "hi how are you!"
  },
  {
    id: 15,
    createdAt: "2022-08-01T05:19:13.618Z",
    updatedAt: "2022-08-01T05:19:13.618Z",
    senderId: 6,
    receiverId: 2,
    chat: "yes i am fine"
  },
  {
    id: 18,
    createdAt: "2022-08-04T04:54:48.649Z",
    updatedAt: "2022-08-04T04:54:48.650Z",
    senderId: 6,
    receiverId: 2,
    chat: "yes i am fine"
  }
]
export default function ChatPage() {
  return (
    <div className="flex w-[100vw] h-[90vh]">
      <ChatUsers userLists={userLists} />
      <ChatSpace chats={chats} />
    </div>
  );
}
