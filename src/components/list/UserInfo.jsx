import { Video, Edit, Dots3H, Avatar } from "../../assets/icons";

const UserInfo = () => {
  return (
    <div className="top">
      <div className="flex gap-1 items-center">
        <Avatar size={25} />
        <h2 className=""> Hunde D</h2>
      </div>
      <div className="flex gap-2">
        <Dots3H size={20} />
        <Video size={20} />
        <Edit size={17} />
      </div>
    </div>
  );
};

export default UserInfo;
