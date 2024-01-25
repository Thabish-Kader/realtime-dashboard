import { AiOutlineDashboard, AiOutlineLike } from "react-icons/ai";
import { CiMoneyBill } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoAnalytics, IoSettingsOutline } from "react-icons/io5";
import { CiWallet } from "react-icons/ci";

export const SideBar = () => {
  return (
    <div className="min-h-[95vh] min-w-[300px] hidden md:flex bg-[#191e24] rounded-xl m-4  flex-col">
      <div className="flex flex-col space-y-8 h-full p-6">
        <div className="bg-gray-700 rounded-xl">
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent p-2 outline-none"
          />
        </div>
        <div className="flex items-center space-x-2 cursor-pointer">
          <AiOutlineDashboard color="gray" size={30} />
          <p className="text-gray-400 text-lg">Dashboard</p>
        </div>

        <div className="flex items-center space-x-2 cursor-pointer">
          <CiMoneyBill color="gray" size={30} />
          <p className="text-gray-400 text-lg ">Revenue</p>
        </div>

        <div className="flex items-center space-x-2 cursor-pointer">
          <IoIosNotificationsOutline color="gray" size={30} />
          <p className="text-gray-400 text-lg">Notification</p>
        </div>

        <div className="flex items-center space-x-2 cursor-pointer">
          <IoAnalytics color="gray" size={30} />
          <p className="text-gray-400 text-lg">Analytics</p>
        </div>

        <div className="flex items-center space-x-2 cursor-pointer">
          <AiOutlineLike color="gray" size={30} />
          <p className="text-gray-400 text-lg">Likes</p>
        </div>

        <div className="flex items-center space-x-2 cursor-pointer">
          <CiWallet color="gray" size={30} />
          <p className="text-gray-400 text-lg">Wallets</p>
        </div>
      </div>

      <div className="mt-auto  p-6">
        <div className="flex items-center space-x-2 cursor-pointer">
          <IoSettingsOutline color="gray" size={30} />
          <p className="text-gray-400 text-lg">Settings</p>
        </div>
      </div>
    </div>
  );
};
