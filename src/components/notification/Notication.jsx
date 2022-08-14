import moment from "moment";
import React from "react";
import { FiBell } from "react-icons/fi";

const Notications=[
    {
      id: 26,
      createdAt: "2022-08-01T03:58:51.434Z",
      updatedAt: "2022-08-01T03:58:51.435Z",
      userId: 2,
      notication: "Share: chirag thapa unshared your post ",
      userLink: null,
      postLink: 1,
      chatLink: null
    },
    {
      id: 25,
      createdAt: "2022-08-01T03:58:49.377Z",
      updatedAt: "2022-08-01T03:58:49.378Z",
      userId: 2,
      notication: "Share: chirag thapa shared your post ",
      userLink: null,
      postLink: 1,
      chatLink: null
    },
    {
      id: 24,
      createdAt: "2022-08-01T03:58:38.172Z",
      updatedAt: "2022-08-01T03:58:38.173Z",
      userId: 2,
      notication: "Share: chirag thapa shared your post ",
      userLink: null,
      postLink: 1,
      chatLink: null
    },
    {
      id: 23,
      createdAt: "2022-08-01T03:58:19.720Z",
      updatedAt: "2022-08-01T03:58:19.721Z",
      userId: 2,
      notication: "Share: chirag thapa unshared your post ",
      userLink: null,
      postLink: 1,
      chatLink: null
    },
    {
      id: 22,
      createdAt: "2022-08-01T03:58:16.976Z",
      updatedAt: "2022-08-01T03:58:16.977Z",
      userId: 2,
      notication: "Share: chirag thapa shared your post ",
      userLink: null,
      postLink: 1,
      chatLink: null
    },
    {
      id: 21,
      createdAt: "2022-08-01T03:55:56.407Z",
      updatedAt: "2022-08-01T03:55:56.407Z",
      userId: 2,
      notication: "Comment: chirag thapa unliked your post ",
      userLink: null,
      postLink: 1,
      chatLink: null
    },
    {
      id: 20,
      createdAt: "2022-08-01T03:55:40.953Z",
      updatedAt: "2022-08-01T03:55:40.954Z",
      userId: 2,
      notication: "Comment: chirag thapa liked your post ",
      userLink: null,
      postLink: 1,
      chatLink: null
    },
    {
      id: 19,
      createdAt: "2022-08-01T03:54:20.505Z",
      updatedAt: "2022-08-01T03:54:20.506Z",
      userId: 2,
      notication: "Comment: chirag thapa added a comment to your post ",
      userLink: null,
      postLink: 1,
      chatLink: null
    },
    {
      id: 18,
      createdAt: "2022-08-01T03:51:22.230Z",
      updatedAt: "2022-08-01T03:51:22.230Z",
      userId: 3,
      notication: "Follow: chirag thapa started following you",
      userLink: 2,
      postLink: null,
      chatLink: null
    },
    {
      id: 17,
      createdAt: "2022-08-01T03:49:38.327Z",
      updatedAt: "2022-08-01T03:49:38.327Z",
      userId: 3,
      notication: "Follow: chirag thapa started following you",
      userLink: null,
      postLink: null,
      chatLink: null
    },
    {
      id: 16,
      createdAt: "2022-08-01T03:39:33.846Z",
      updatedAt: "2022-08-01T03:39:33.847Z",
      userId: 3,
      notication: "chirag thapa unfollowed you",
      userLink: null,
      postLink: null,
      chatLink: null
    },
    {
      id: 15,
      createdAt: "2022-08-01T03:39:31.042Z",
      updatedAt: "2022-08-01T03:39:31.043Z",
      userId: 3,
      notication: "chirag thapa started following you",
      userLink: null,
      postLink: null,
      chatLink: null
    },
    {
      id: 14,
      createdAt: "2022-08-01T03:36:51.953Z",
      updatedAt: "2022-08-01T03:36:51.954Z",
      userId: 3,
      notication: "chirag thapa started following you",
      userLink: null,
      postLink: null,
      chatLink: null
    },
    {
      id: 13,
      createdAt: "2022-08-01T03:36:51.936Z",
      updatedAt: "2022-08-01T03:36:51.936Z",
      userId: 3,
      notication: "chirag thapa unfollowed you",
      userLink: null,
      postLink: null,
      chatLink: null
    },
    {
      id: 12,
      createdAt: "2022-08-01T03:36:37.159Z",
      updatedAt: "2022-08-01T03:36:37.160Z",
      userId: 3,
      notication: "chirag thapa started following you",
      userLink: null,
      postLink: null,
      chatLink: null
    },
    {
      id: 11,
      createdAt: "2022-08-01T03:34:59.058Z",
      updatedAt: "2022-08-01T03:34:59.059Z",
      userId: 3,
      notication: "chirag thapa started following you",
      userLink: null,
      postLink: null,
      chatLink: null
    },
    {
      id: 10,
      createdAt: "2022-08-01T03:34:59.046Z",
      updatedAt: "2022-08-01T03:34:59.047Z",
      userId: 3,
      notication: "chirag thapa unfollowed you",
      userLink: null,
      postLink: null,
      chatLink: null
    },
    {
      id: 9,
      createdAt: "2022-08-01T03:34:52.900Z",
      updatedAt: "2022-08-01T03:34:52.901Z",
      userId: 3,
      notication: "chirag thapa started following you",
      userLink: null,
      postLink: null,
      chatLink: null
    },
    {
      id: 8,
      createdAt: "2022-08-01T03:34:48.117Z",
      updatedAt: "2022-08-01T03:34:48.117Z",
      userId: 3,
      notication: "chirag thapa started following you",
      userLink: null,
      postLink: null,
      chatLink: null
    },
    {
      id: 7,
      createdAt: "2022-08-01T03:34:48.100Z",
      updatedAt: "2022-08-01T03:34:48.101Z",
      userId: 3,
      notication: "chirag thapa unfollowed you",
      userLink: null,
      postLink: null,
      chatLink: null
    }
  ]

export default function Notication() {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex="0">
      <button className="btn btn-ghost btn-circle text-2xl ">
          <div
            className="indicator tooltip tooltip-bottom capitalize	"
            data-tip="notifications"
          >
            <FiBell />
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </label>
      <ul
        tabIndex="0"
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-lg min-w-[400px] text-slate-800 max-h-[600px] overflow-y-auto "
      >{Notications.length>0 && Notications.map(n=>{
        return(
        <li key={n.id} >
          <div className='border mb-1'>
            <p className="block">{n.notication} <br/><span className="text-sm font-thin block">{moment(n.createdAt).fromNow()}</span></p>
            </div>
        </li>
        )
      })}
      </ul>
    </div>
  );
}
