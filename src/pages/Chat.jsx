import Chats from "../components/Chats";
import Details from "../components/Details";
import List from "../components/List";
const Chat = () => {
  return (
    <div className="bg-light-primary h-screen w-full">
      <div className="bg-light-primary flex h-[500px] w-full">
        <List className=" bg-light-primary flex basis-1/5 flex-col px-4 py-2" />
        <Chats className=" flex flex-auto basis-1/2 flex-col bg-[#f3f4f8] px-4  py-2 dark:bg-[#131517]" />
        <Details className="bg-light-primary " />
      </div>
    </div>
  );
};

export default Chat;
