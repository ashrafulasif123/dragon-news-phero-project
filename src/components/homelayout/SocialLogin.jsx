import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Login With</h2>
        <div className="space-y-3">
          <button className="btn btn-outline btn-secondary w-full">
            <FcGoogle size={24} />
            Login with Google
          </button>

          <button className="btn btn-outline btn-primary w-full">
            <FaGithub size={24} />
            Login with GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialLogin;
