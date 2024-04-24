import React from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsYoutube, BsCameraVideo, BsBell } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoAppsSharp } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { changeSearchTerm, clearSearchTerm, clearVideos } from "../store";
import { getSearchPageVideos } from "../store/reducers/getSeachPageVideos";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);
  const handleSearch = () => {
    if (location.pathname !== "/search") {
      navigate("/search");
    } else {
      dispatch(clearVideos());
      dispatch(getSearchPageVideos(false));
    }
  };

  return (
    <div className="flex justify-between items-center  px-14 h-14 bg-[#212121] opacity-95 sticky top-0 z-50">
      <div className="flex gap-8 items-center text-2xl">
        <div>
          <GiHamburgerMenu />
        </div>
        <Link to="/">
          <div className="flex gap-1 items-center justify-center">
            <BsYoutube className="text-3xl text-red-600" />
            <span className="text-xl font-medium">VisionTube</span>
          </div>
        </Link>
      </div>
      <div className="flex items-center justify-center gap-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0">
            <div className="flex gap-4 items-center pr-5">
              <div>
                <AiOutlineSearch className="text-xl" />
              </div>
              <input
                type="text"
                className="w-96 bg-zinc-900 focus:outline-none border-none"
                value={searchTerm}
                onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
              />

              <AiOutlineClose
                className={`text-xl cursor-pointer ${
                  !searchTerm ? "invisible" : "visible"
                }`}
                onClick={() => dispatch(clearSearchTerm())}
              />
            </div>
            <button className="h-10 w-16 flex items-center justify-center bg-zinc-800">
              <AiOutlineSearch className="text-xl" />
            </button>
          </div>
        </form>
        <div className="text-xl p-3 bg-zinc-900 rounded-full">
          <TiMicrophone />
        </div>
      </div>
      <div className="flex gap-5 items-center text-xl">
        <BsCameraVideo />
        <IoAppsSharp />
        <div className="relative">
          <BsBell />
          <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">
            9+
          </span>
        </div>
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAACUCAMAAAAJSiMLAAAAMFBMVEXk5ueutLfo6uursbTh4+Tr7e7c3+C6v8G0ubzT1tjP0tS9wsTGysy3vL/Mz9HAxMe6j6dsAAAEM0lEQVR4nO2c2ZKsIAyGIUFEBX3/tx3UmenNaVkioc/hv+jq6quvUiELJC1EU1NTU1NTU1NTU1NT078lABBKr1Lb908QgBrs1Ltd02QHVT85KGuklIhy1/bFzXWTq6H/Bb4XYu9tzk13LFCzOYTewV2d4DC6P6F/LF4dN6hevoPewGVfmYvDcMb8TV6VwZUNo/bclpv1JjWFUnvuSdRicBNO7blrcXATAb1x12BvFWXrjXtS3NBRfv3LvXBTQ3AMeeC2HS91YLx+4eaN3yqNWkrD6t59IjWre8OYSu01sGErl+oj3tyOzbvHdGrOUxmZHp/Fgw1zjrHZzA15tpa+aeDATsw0d+IwN0y51GgZsHXmgfRyujh1Vqr5UXkvSSv9HoVzaWqhegLsvjQ1ELi2V+k6MLXQfhQWP5NZ9cgv9liYWi0k2EvpUEJwIr1c4Z5SkZxIKRt2EDYNNRb27eSWvWH/R9gk1OWxaSIJtgAYpORrtAeVzpKCoEvgqEkyL0m+sUtXgB9ab4MmoC7f3Qjt8qHL95JCEPQJDJ07xT0Jx+XlZ95KCchOOCzvNwQhkOWCG3KxHQN0/i0gzkyPN5nW5oHOrEtYLuU36eiZjDsZJui8lIN8r8Af+ubu68DkCQeGBHnHnXgqceQdl4KkQhAX3umdtDccjjr7WfGVIPb8k2meO9LcaHQFc4ACxOks8SN1JXPcoCOmeNDVMHO5K3yGEZdKbL0rMH4zNL1vBTrAwVFWZepVIOxJPYiGqy94K9DvwNHYKuLeq0DoP1ZY0FuatXY6EYhhkk/kiLjUzLyrAz1Ozpg15/tPt8y6kqn+M0Hn/UUPw7Bu8HWfwbztHXY31b956GlB6WG0dpn6Xctix9XoKz833qGUHhe3nj98PJL7L2j6cd36rEawG9g84x5EQZTT7E3P7zXrKuo8ueeY9w7d9HbkjS2dGPtw5Bu6NP2smHwdQOcMHvm8Wb7w9v5so3qaQ6sX3rTdU3ge9A7u5mL1FcB8vokaDm51iTsTgDH6EJ5outxVQIxUhr4J0V6ah7xP00wtvoDL+TqLQ370+BvcXfVs1s2XQcttm/yKOA5xG79J5BcYfLiYeeMmvvsBtRSgXu9iKQ0OOat6cdyED9qQ9ZAXC071XAnDlRHklZvmDY1kLyiSO9/gQLI7Eced/zcPDNQb9wdSZ/s3lEgyh9w58STorv0i7oy7cCiVZY64k/NO2sM0lVJfL4sH7EelhhOa1cIM7qQpCLim/4pRQodJM6Cdp4QVgOzlewLFR5PcfzqgkYt1E6oFlUxFnso6jB09MFOsCztR5LRgBWFkU2TOYU3r98IYLyFaKyRQTCXI1BwcKzzldAQ7NVSK8JLs8X1CRRRUyQO3V2gK9ZJKcs23gsfTO5oVTiIFj0xDRSfSY4eWgZWUUT8KjNxEq5BkOroy+QLewjc4FdMBtAAAAABJRU5ErkJggg=="
          className="w-9 h-9 rounded-full"
          alt="logo"
        />
      </div>
    </div>
  );
}
