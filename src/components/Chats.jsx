/* icons */
import {
  Avatar,
  Info,
  Video,
  Phone,
  Image,
  Camera,
  VoiceRec,
  EmojiIcon,
  Send,
  LocationIcon,
  Plus,
} from "../assets/icons";
import {
  avtGray,
  avtBlue,
  avtPurple,
  avtYellow,
  avtRed,
} from "../assets/avatar";

/*Hooks*/
import { useState } from "react";
/*Components*/
import EmojiPicker from "emoji-picker-react";

const Chats = ({ className }) => {
  const [openEmoji, setOpenEmoji] = useState(false);
  const [text, setText] = useState("");
  const handleEmojiClick = (e) => {
    setText((prev) => prev + e.emoji);
    setOpenEmoji(false);
  };
  return (
    <div className={className}>
      <div className="top">
        <div className="user-info">
          <img
            className="h-12 w-12 rounded-full border-2 border-white dark:border-gray-800"
            src={avtPurple}
            alt=""
          />
          <div className="">
            <h2 className=" text-lg font-bold dark:text-[#F8F8F8]">
              {" "}
              Design Team's
            </h2>
            <p className="text-sm dark:text-[#768396]">
              {" "}
              60 o members, 10 online
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex -space-x-3 rtl:space-x-reverse">
            <img
              className="h-6 w-6 rounded-full border-2 border-white dark:border-gray-800"
              src={avtRed}
              alt=""
            />
            <img
              className="h-6 w-6 rounded-full border-2 border-white dark:border-gray-800"
              src={avtBlue}
              alt=""
            />
            <img
              className="h-6 w-6 rounded-full border-2 border-white dark:border-gray-800"
              src={avtYellow}
              alt=""
            />
            <img
              className="h-6 w-6 rounded-full border-2 border-white dark:border-gray-800"
              src={avtPurple}
              alt=""
            />
          </div>
          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#D9E0E8] p-1">
            <Plus />
          </div>
        </div>
      </div>
      <div className="no-scrollbar flex flex-auto flex-col overflow-y-scroll scroll-smooth">
        <div className="message mt-5">
          <img
            className="h-6 w-6 rounded-full border-2 border-white dark:border-gray-800"
            src={avtYellow}
            alt=""
          />
          <div className=" max-w-1/2 flex flex-col">
            <h4 className=" dark:text-[#F8F8F8]">
              Yellow G <span className="mx-8 text-sm">12:30 AM</span>
            </h4>
            <p className="text-msg mb-2">Hi, Are you still Web Designer.</p>
            <p className="text-msg mb-2">would love to see some Design 😁</p>
          </div>
        </div>
        <div className="message mt-5">
          <img
            className="h-6 w-6 rounded-full border-2 border-white dark:border-gray-800"
            src={avtBlue}
            alt=""
          />
          <div className=" max-w-1/2 flex flex-col">
            <h4 className=" dark:text-[#F8F8F8]">
              Old Blue <span className="mx-8 text-sm">12:32 AM</span>
            </h4>
            <p className="text-msg mb-2">
              Hey, happy to hear from you. Yes, I will be back in a couple fo
              days.
            </p>
          </div>
        </div>

        <div className="message own mt-5">
          <div className=" max-w-1/2 flex flex-col items-end">
            <h4 className=" dark:text-[#F8F8F8]">
              <span className="mx-8 text-sm">12:30 AM</span> King Je
            </h4>
            <p className="text-msg own-msg">
              Great 🔥 That’s a nice design Idea. 😍👏
            </p>
            <img
              src="./image.png"
              alt="img"
              className="mt-1 h-[200px] w-[300px] rounded-md"
            />
          </div>
          <img
            className="h-6 w-6 rounded-full border-2 border-white dark:border-gray-800"
            src={avtGray}
            alt=""
          />
        </div>

        <div className="message mt-5">
          <img
            className="h-6 w-6 rounded-full border-2 border-white dark:border-gray-800"
            src={avtRed}
            alt=""
          />
          <div className=" max-w-1/2 flex flex-col">
            <h4 className=" dark:text-[#F8F8F8]">
              Red Evil <span className="mx-8 text-sm">12:30 AM</span>
            </h4>
            <p className="text-msg mb-2"> its looks perfect😍👏 </p>
          </div>
        </div>

        <div className="message own mt-5">
          <div className=" max-w-1/2 flex flex-col items-end">
            <h4 className=" dark:text-[#F8F8F8]">
              <span className="mx-8 text-sm">12:30 AM</span> King Je
            </h4>
            <p className="text-msg own-msg">
              Great 🔥 That’s a nice design Idea.
            </p>
          </div>
          <img
            className="h-6 w-6 rounded-full border-2 border-white dark:border-gray-800"
            src={avtGray}
            alt=""
          />
        </div>
      </div>
      <div className=" m-2 flex w-3/4  items-center justify-center gap-3  place-self-center rounded-3xl bg-white px-3 pt-2 text-[#8899A8] dark:bg-[#282932] ">
        <VoiceRec size={15} />
        <input
          type="text"
          placeholder="Type a message"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="h-10 flex-auto bg-transparent outline-none"
        />
        <div className=" flex gap-2">
          <Image size={15} />
          <Send size={15} />
          <EmojiIcon size={15} onClick={() => setOpenEmoji((prev) => !prev)} />
          <LocationIcon size={15} />
        </div>
        <div className="absolute right-44 top-44">
          <EmojiPicker
            open={openEmoji}
            onEmojiClick={handleEmojiClick}
            height={330}
            width={280}
          />
        </div>
      </div>
    </div>
  );
};

export default Chats;
