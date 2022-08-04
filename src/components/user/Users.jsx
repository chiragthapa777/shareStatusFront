import React from "react";

const users = [
  {
    id: 2,
    name: "chirag thapa",
    email: "chirag@gmail.com",
    bio: null,
    image: null,
    following: [
      {
        id: 34,
        createdAt: "2022-07-26T03:25:39.271Z",
        updatedAt: "2022-07-26T03:25:39.271Z",
        userId: 2,
        followingId: 4,
        following: {
          id: 4,
          createdAt: "2022-07-07T16:22:48.108Z",
          updatedAt: "2022-07-07T16:22:48.109Z",
          name: "sita thapa",
          email: "sita@gmail.com",
          password:
            "$2b$10$e4Xhwnc2oA2xJQvQakvgfeuen0mNlSC01RDh2al5kuE9hb7aDprEG",
          active: true,
          bio: null,
          imageId: null,
        },
      },
      {
        id: 44,
        createdAt: "2022-08-01T03:51:22.200Z",
        updatedAt: "2022-08-01T03:51:22.201Z",
        userId: 2,
        followingId: 3,
        following: {
          id: 3,
          createdAt: "2022-07-07T16:22:42.216Z",
          updatedAt: "2022-07-07T16:22:42.217Z",
          name: "ram thapa",
          email: "ram@gmail.com",
          password:
            "$2b$10$/dzp7tVPBQJ5bPlrYWpIYumMktrvxOLht3yieW6MdnMX1In/oQb9S",
          active: true,
          bio: null,
          imageId: null,
        },
      },
    ],
    follower: [],
  },
  {
    id: 5,
    name: "gita thapa",
    email: "gita@gmail.com",
    bio: null,
    image: null,
    following: [],
    follower: [],
  },
  {
    id: 6,
    name: "hari thapa",
    email: "hari@gmail.com",
    bio: null,
    image: null,
    following: [],
    follower: [],
  },
  {
    id: 9,
    name: "himesh",
    email: "himesh@gmail.com",
    bio: null,
    image: null,
    following: [],
    follower: [],
  },
  {
    id: 8,
    name: "john rai",
    email: "john@gmail.com",
    bio: null,
    image: null,
    following: [],
    follower: [],
  },
  {
    id: 3,
    name: "ram thapa",
    email: "ram@gmail.com",
    bio: null,
    image: null,
    following: [],
    follower: [
      {
        id: 44,
        createdAt: "2022-08-01T03:51:22.200Z",
        updatedAt: "2022-08-01T03:51:22.201Z",
        userId: 2,
        followingId: 3,
        user: {
          id: 2,
          createdAt: "2022-07-07T15:54:15.128Z",
          updatedAt: "2022-07-07T15:54:15.129Z",
          name: "chirag thapa",
          email: "chirag@gmail.com",
          password:
            "$2b$10$UYe2nBkAJI1yx5DMKqQ1BeCk/UaX2gZSh4etYId4wGT4z8c6pO5eC",
          active: true,
          bio: null,
          imageId: null,
        },
      },
    ],
  },
  {
    id: 7,
    name: "shyam rai",
    email: "shyam@gmail.com",
    bio: null,
    image: null,
    following: [],
    follower: [],
  },
  {
    id: 4,
    name: "sita thapa",
    email: "sita@gmail.com",
    bio: null,
    image: null,
    following: [],
    follower: [
      {
        id: 34,
        createdAt: "2022-07-26T03:25:39.271Z",
        updatedAt: "2022-07-26T03:25:39.271Z",
        userId: 2,
        followingId: 4,
        user: {
          id: 2,
          createdAt: "2022-07-07T15:54:15.128Z",
          updatedAt: "2022-07-07T15:54:15.129Z",
          name: "chirag thapa",
          email: "chirag@gmail.com",
          password:
            "$2b$10$UYe2nBkAJI1yx5DMKqQ1BeCk/UaX2gZSh4etYId4wGT4z8c6pO5eC",
          active: true,
          bio: null,
          imageId: null,
        },
      },
    ],
  },
  {
    id: 10,
    name: "user2 rai",
    email: "user2@gmail.com",
    bio: null,
    image: null,
    following: [],
    follower: [],
  },
];

export default function Users() {
  return (
    <div className="w-full p-2 bg-slate-200 rounded-md">
      {users.length > 0 &&
        users.map((user) => {
         return ( 
         <div key={user.id} className="w-full flex justify-between items-center bg-white p-1 cursor-pointer mb-1 hover:bg-slate-100 rounded-md ">
            <div className="flex">
              <div class="avatar">
                <div class="w-8 my-auto rounded-full">
                  <img src={user?.image?.url?user.image:"https://placeimg.com/192/192/people"} alt="" />
                </div>
              </div>
              <div className="flex flex-col ml-2">
                <p className="text-sm">{user.name}</p>
                <p className="text-xs font-thin">{user.email}</p>
              </div>
            </div>
            <div>
              <button class="btn btn-ghost btn-xs text-green-500">Follow</button>
            </div>
          </div>)
        })}
    </div>
  );
}
