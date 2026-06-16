import FindUs from "./FindUs";
import Qzone from "./Qzone";
import SocialLogin from "./SocialLogin";

const RightAside = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <SocialLogin></SocialLogin>
      <FindUs></FindUs>
      <Qzone></Qzone>
    </div>
  );
};

export default RightAside;
