import swimmingImg from "../../assets/swimming.png";
import playGroundImg from "../../assets/playground.png";
import classRoomImg from "../../assets/class.png";
const Qzone = () => {
  return (
    <div className="bg-base-200 p-4 rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Q-Zone</h2>

      <div className="space-y-5">
        <div>
          <img src={swimmingImg} alt="Swimming" className="w-full rounded-lg" />
        </div>

        <div>
          <img
            src={playGroundImg}
            alt="Classroom"
            className="w-full rounded-lg"
          />
        </div>
        <div>
          <img
            src={classRoomImg}
            alt="Classroom"
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Qzone;
