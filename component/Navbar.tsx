import React from "react";
import { GoHomeFill } from "react-icons/go";
import { HiPhoto } from "react-icons/hi2";
import { IoVideocam } from "react-icons/io5";
import { ImMagicWand } from "react-icons/im";
import { FaFolder } from "react-icons/fa";
import { PiPaintBrushFill } from "react-icons/pi";
import { FaA } from "react-icons/fa6";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaBell } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="mx-auto my-[10px] w-[100%] xl:max-w-[1300px]">
      <div className="flex justify-between items-center">
        <div className="flex gap-5 items-center ">
          <div className="bg-purple-500">
            <Image
              src="/krea-log.png"
              alt="logo"
              width={50}
              height={20}
              className="bg-amber-700"
            />
          </div>
          <div className="flex items-center gap-1">
            <Image
              src="/multicircle.webp"
              alt="profile"
              width={30}
              height={30}
            />
            <label className="text-gray-700">benevolentnimblebolt</label>
            <IoIosArrowDown className="font-medium cursor-pointer text-gray-700" />
          </div>
        </div>
        <div className="flex gap-8 bg-gray-100 py-3 px-5 rounded-[15px]">
          <a href="">
            <GoHomeFill className="text-[22px] hover:bg-white" />
          </a>
          <a href="">
            <HiPhoto className="text-[22px]" />
          </a>
          <a href="">
            {" "}
            <IoVideocam className="text-[22px]" />
          </a>
          <a href="">
            <ImMagicWand className="text-[22px]" />
          </a>
          <a href="">
            <PiPaintBrushFill className="text-[22px]" />
          </a>
          <a href="">
            <FaA className="text-[22px]" />
          </a>
          <a href="">
            {" "}
            <FaFolder className="text-[22px]" />
          </a>
        </div>

        <div className="flex gap-5 ">
          <div className="flex gap-1 bg-gray-100 p-1 rounded-[8px]">
            <HiPhoto className="text-[22px]" />
            <p className="text-[14px] text-gray-700">Gallery</p>
          </div>
          <div className="flex gap-2  bg-gray-100 p-1 rounded-[8px]">
            <TfiHeadphoneAlt className="text-[22px]" />
            <p className="text-[14px] text-gray-700">Support</p>
          </div>

          <FaBell className="text-[28px] bg-gray-100 p-1 rounded-[8px] " />
          <div className="flex gap-5">
            <FaRegMoon className="text-[28px] bg-gray-100 p-1 rounded-[8px]" />
            <IoMdSunny className="text-[28px] bg-gray-100 p-1 rounded-[8px]" />
          </div>
          <Image src="/multicircle.webp" alt="profile" width={30} height={30} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
