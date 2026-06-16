import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-3">Find Us On</h2>
      <div className="border rounded-lg overflow-hidden">
        <a className="flex items-center gap-3 p-4 border-b hover:bg-base-200">
          <FaFacebookF className="text-blue-600" />
          Facebook
        </a>

        <a className="flex items-center gap-3 p-4 border-b hover:bg-base-200">
          <FaTwitter className="text-sky-500" />
          Twitter
        </a>

        <a className="flex items-center gap-3 p-4 hover:bg-base-200">
          <FaLinkedinIn className="text-blue-700" />
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default FindUs;
