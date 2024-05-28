import UserChatList from "./list/UserChatList";
import UserInfo from "./list/UserInfo";
const Lists = ({ className }) => {
  return (
    <div className={className}>
      {/* <UserInfo /> */}
      <UserChatList />
    </div>
  );
};

export default Lists;
