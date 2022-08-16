import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { FiSliders, FiX } from "react-icons/fi";
import { matchSorter } from "match-sorter";
import axios from "axios";
import { url } from "../../api/url";
import { toast } from "react-toastify";
import Loader from "../loader/loadComp/Loader";
import { useDispatch } from "react-redux";
import { filterPost } from "../../redux-store/postStore";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function FilterModel() {
  const dispatch=useDispatch()
  //states
  const [tags, setTags] = useState([]);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState({
    url: "https://cdn.pixabay.com/photo/2022/05/18/12/04/flower-7205105_960_720.jpg",
  });
  const [selectedTags, setSelectedTags] = useState([]);
  const [serachTag, setSearchTag] = useState("");
  const [tagLoading, setTagLoading] = useState(false);
  const [formData, setFormData] = useState({
    tags:"",
    sortBy:"date",
    orderBy:"asc",
    includeSharedPost:true,
    dateRange: false,
    from:"",
    to:""
  });

  // get All tags
  useEffect(() => {
    setTagLoading(true);
    axios
      .get(`${url}/tag`)
      .then((res) => {
        setTagLoading(false);
        setTags(res.data.data);
      })
      .catch((err) => {
        setTagLoading(false);
        toast.error(
          `${
            err?.response?.data?.data
              ? err?.response?.data?.data
              : "Cannot load tags"
          }`,
          {
            position: "top-right",
            autoClose: 5000,
          }
        );
      });
  }, []);

  // filtering tags
  let mappingData = [];
  if (serachTag === "") {
    mappingData = tags;
  } else {
    const sortedArr = matchSorter(tags, serachTag, { keys: ["tag"] });
    mappingData = sortedArr;
  }

  const tagSearchFunc = (e) => {
    setSearchTag(e.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const updateTags=(tag)=>{
    if (
      !selectedTags.find((a) => a.id === tag.id)
    ) {
      setSelectedTags([...selectedTags, tag]);
      let tags = "";
      for (const i in [...selectedTags, tag]) {
        tags += [...selectedTags, tag][i].tag;
        if (i < [...selectedTags, tag].length - 1) {
          tags += ",";
        }
      }
      setFormData({ ...formData, tags: tags });
    }
  }
  const handleUpload = () => {
    dispatch(filterPost(formData))
    // setOpen(false);
  };
  return (
    <div>
      <button
        className="btn btn-ghost btn-circle text-[1.65rem]"
        onClick={handleOpen}
      >
        <div
          className="tooltip tooltip-bottom capitalize	"
          data-tip="Control your post"
        >
          <FiSliders />
        </div>
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        // onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        disableScrollLock={true}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            {/* close button */}
            <div className="relative">
              <FiX
                className="bg-red-600 text-white font-bold text-3xl absolute right-[-15px] rounded-full p-1 hover:bg-red-400 cursor-pointer"
                onClick={handleClose}
              />
            </div>
            {/* form content */}
            <div className="w-full max-h-[100vh] pt-2">
              <h1 className="text-slate-600 font-bold	text-2xl mb-2">
                Filter your posts
              </h1>
              <div className="flex">
                {/* left */}
                <div className="w-[330px] flex flex-col mr-2">
                  <h1 className="my-1">TAG</h1>
                  <div className="flex w-full max-h-32 mb-2 bg-slate-200 rounded-md flex-wrap overflow-y-auto">
                    {selectedTags.length > 0 &&
                      selectedTags.map((tag) => {
                        return (
                          <div
                            className=" badge badge-info gap-2 m-2 p-1 whitespace-nowrap"
                            key={tag.id}
                          >
                            <FiX
                              onClick={() => {
                                setSelectedTags(
                                  selectedTags.filter((a) => a.id !== tag.id)
                                );
                                let tags = "";
                                for (const i in selectedTags.filter((a) => a.id !== tag.id)) {
                                  tags += selectedTags.filter((a) => a.id !== tag.id)[i].tag;
                                  if (i < selectedTags.filter((a) => a.id !== tag.id).length - 1) {
                                    tags += ",";
                                  }
                                }
                                setFormData({ ...formData, tags: tags });
                              }}
                            />
                            {tag.tag}
                          </div>
                        );
                      })}
                  </div>
                  <input
                    type="text"
                    placeholder="Search tag"
                    value={serachTag}
                    onChange={(e) => tagSearchFunc(e)}
                    className="input w-full mb-2 border-slate-300"
                  />
                    {tagLoading ? (
                  <ul className="menu w-full h-64 overflow-auto mb-2 bg-slate-200 rounded-md flex justify-center items-center">
                    <Loader />
                  </ul>
                    ) : (
                      <>
                      <ul className="menu w-full h-64 overflow-auto mb-2 bg-slate-200 rounded-md ">
                        {mappingData.length > 0 &&
                          mappingData.map((tag) => {
                            return (
                              <li>
                                <div
                                  key={tag.id}
                                  className={
                                    selectedTags.find((a) => a.id === tag.id)
                                      ? "bg-slate-300"
                                      : ""
                                  }
                                  onClick={() => {
                                    updateTags(tag)
                                  
                                  }}
                                >
                                  {tag.tag}
                                </div>
                              </li>
                            );
                          })}
                      </ul>
                      </>
                    )}
                </div>
                {/* right */}
                <div className="min-w-[330px]">
                  <div className="mb-2">
                    <h1 className="my-1">SORT BY</h1>
                    <select 
                    value={formData.sortBy}
                    onChange={e=>setFormData({...formData,sortBy:e.target.value})}
                    className="select w-full border-slate-300 text-slate-500 font-normal "
                    >
                      <option value={"date"}>Date</option>
                      <option value={"like"}>Like count</option>
                      <option value={"share"}>Share count</option>
                      <option value={"comment"}>Comment count</option>
                    </select>
                  </div>
                  <div className="mb-2">
                    <h1 className="my-1">Order</h1>
                    <select 
                    value={formData.orderBy}
                    onChange={e=>setFormData({...formData,orderBy:e.target.value})}
                    className="select w-full border-slate-300 text-slate-500 font-normal "
                    >
                      <option value={"asc"}>Ascending </option>
                      <option value={"desc"}>Descending </option>
                    </select>
                  </div>
                  <div className="mb-2">
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text text-base">
                          Include shared post
                        </span>
                        <input
                          type="checkbox"
                          className="toggle toggle-accent"
                          checked={formData.includeSharedPost}
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              includeSharedPost: !formData.includeSharedPost,
                            });
                          }}
                        />
                      </label>
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="form-control">
                      <label className="label cursor-pointer">
                        <span className="label-text text-base">
                          Add date range
                        </span>
                        <input
                          type="checkbox"
                          className="toggle toggle-accent"
                          checked={formData.dateRange}
                          onChange={(e) => {
                            setFormData({
                              ...formData,
                              dateRange: !formData.dateRange,
                            });
                          }}
                        />
                      </label>
                    </div>
                  </div>
                  {formData.dateRange && (
                    <div className="mb-2 w-full flex">
                      <div className="flex-1 mr-2 ">
                        <h1 className="my-1 ">FROM</h1>
                        <input
                          type="datetime-local"
                          placeholder="Type here"
                          className="input w-full border-slate-300"
                          value={formData.from}
                          onChange={e=>setFormData({...formData,from:e.target.value})}
                        />
                      </div>
                      <div className="flex-1">
                        <h1 className="my-1">TO</h1>
                        <input
                          type="datetime-local"
                          placeholder="Type here"
                          className="input w-full border-slate-300"
                          value={formData.to}
                          onChange={e=>setFormData({...formData,to:e.target.value})}
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <button className="btn w-full" onClick={handleUpload}>
                Apply
              </button>
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
