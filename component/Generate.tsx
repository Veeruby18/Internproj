import React from "react";
import { HiPhoto } from "react-icons/hi2";
import { IoVideocam } from "react-icons/io5";
import { ImMagicWand } from "react-icons/im";
import { PiPaintBrushFill } from "react-icons/pi";
import { FaA } from "react-icons/fa6";
import { GiMicrophone } from "react-icons/gi";
import { FaChild } from "react-icons/fa";
import Image from "next/image";
import { BsFillCreditCardFill } from "react-icons/bs";
import { PiNotebookFill } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import Footer from "./Footer";

const Generate = () => {
  return (
    <>
    <div className="mx-auto w-[100%] xl:max-w-[1300px] flex flex-col gap-5">
      <div className="flex justify-between">
        <div>
          <p className="font-medium text-[15px] text-gray-900">Generate</p>
        </div>
        <div className="flex items-center">
          <IoIosArrowDown className="font-medium cursor-pointer text-blue-600" />
          <a href="" className="text-blue-600 font-medium text-[15px]">
            Show all
          </a>
        </div>
      </div>
      <div className="grid grid-row-2 gap-7">
        <div className="grid md:grid-cols-4 gap-7">
          <div className="flex gap-5">
            <div className="flex gap-2">
              <div>
                <span className="card-icon bg-gradient-to-b from-gray-500 to-gray-300">
                  <HiPhoto className="text-[25px]" />
                </span>
              </div>

              <div>
                <p className="font-medium text-[13px] text-gray-800">
                  Image <span className="card-text">New</span>
                </p>

                <p className="text-gray-500 text-[10px]">
                  Generates images with custom <br />
                  styles in Flux and ideogram.
                </p>
              </div>
            </div>
            <span className="flex justify-center items-center">
              <p className="font-medium text-[13px] flex justify-center py-1 bg-gray-100 w-15 rounded-[13px] text-gray-600">
                Open
              </p>
            </span>
          </div>

          <div className="flex gap-5">
            <div className="flex gap-2">
              <div>
                <span className="card-icon bg-yellow-500">
                  <IoVideocam className="text-[25px] text-white" />
                </span>
              </div>

              <div>
                <p className="font-medium text-[13px]">Image </p>

                <p className="text-gray-500 text-[10px]">
                  Generates images with custom <br />
                  styles in Flux and ideogram.
                </p>
              </div>
            </div>
            <span className="flex justify-center items-center">
              <p className="font-medium text-[13px] flex justify-center py-1 bg-gray-100 w-15 rounded-[13px] text-gray-600">
                Open
              </p>
            </span>
          </div>

          <div className="flex gap-5">
            <div className="flex gap-2">
              <div>
                <span className="card-icon bg-gradient-to-b from-blue-400 to-blue-100">
                  <PiPaintBrushFill className="text-[25px] text-white" />
                </span>
              </div>

              <div>
                <p className="font-medium text-[13px]">Image </p>

                <p className="text-gray-500 text-[10px]">
                  Generates images with custom <br />
                  styles in Flux and ideogram.
                </p>
              </div>
            </div>
            <span className="flex justify-center items-center">
              <p className="font-medium text-[13px] flex justify-center py-1 bg-gray-100 w-15 rounded-[13px] text-gray-600">
                Open
              </p>
            </span>
          </div>

          <div className="flex gap-5">
            <div className="flex gap-2">
              <div>
                <span className="card-icon bg-gradient-to-b from-gray-900 to-gray-500">
                  <ImMagicWand className="text-[25px] text-white" />
                </span>
              </div>

              <div>
                <p className="font-medium text-[13px]">
                  Image <span className="card-text">New</span>
                </p>

                <p className="text-gray-500 text-[10px]">
                  Generates images with custom <br />
                  styles in Flux and ideogram.
                </p>
              </div>
            </div>

            <span className="flex justify-center items-center">
              <p className="font-medium text-[13px] flex justify-center py-1 bg-gray-100 w-15 rounded-[13px] text-gray-600">
                Open
              </p>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-10">
          <div className="flex gap-5">
            <div className="flex gap-2">
              <div>
                <span className="card-icon bg-gradient-to-b from-purple-900 to-purple-400">
                  <FaA className="text-[25px] text-white" />
                </span>
              </div>

              <div>
                <p className="font-medium text-[13px]">
                  Image <span className="card-text">New</span>
                </p>

                <p className="text-gray-500 text-[10px]">
                  Generates images with custom <br />
                  styles in Flux and ideogram.
                </p>
              </div>
            </div>
            <span className="flex justify-center items-center">
              <p className="font-medium text-[13px] flex justify-center py-1 bg-gray-100 w-15 rounded-[13px] text-gray-600">
                Open
              </p>
            </span>
          </div>

          <div className="flex gap-5">
            <div className="flex gap-2">
              <div>
                <span className="card-icon bg-gradient-to-b from-gray-900 to-yellow-100">
                  <GiMicrophone className="text-[25px] text-white" />
                </span>
              </div>

              <div>
                <p className="font-medium text-[13px]">
                  Image <span className="card-text">New</span>
                </p>

                <p className="text-gray-500 text-[10px]">
                  Generates images with custom <br />
                  styles in Flux and ideogram.
                </p>
              </div>
            </div>
            <span className="flex justify-center items-center">
              <p className="font-medium text-[13px] flex justify-center py-1 bg-gray-100 w-15 rounded-[13px] text-gray-600">
                Open
              </p>
            </span>
          </div>

          <div className="flex gap-5">
            <div className="flex gap-2">
              <div>
                <span className="card-icon bg-black">
                  <FaChild className="text-[25px] text-white" />
                </span>
              </div>

              <div>
                <p className="font-medium text-[13px]">
                  Image <span className="card-text">New</span>
                </p>
                <p className="text-gray-500 text-[10px]">
                  Generates images with custom <br />
                  styles in Flux and ideogram.
                </p>
              </div>
            </div>
            <span className="flex justify-center items-center">
              <p className="font-medium text-[13px] flex justify-center py-1 bg-gray-100 w-15 rounded-[13px] text-gray-600">
                Open
              </p>
            </span>
          </div>

          <div className="flex gap-5">
            <div className="flex gap-2">
              <div>
                <span className="card-icon bg-gradient-to-b from-gray-500 to-gray-300">
                  <Image
                    src="/train.jpg"
                    alt="training"
                    width={30}
                    height={30}
                  />
                </span>
              </div>

              <div>
                <p className="font-medium text-[13px]">Image </p>
                <p className="text-gray-500 text-[10px]">
                  Generates images with custom <br />
                  styles in Flux and ideogram.
                </p>
              </div>
            </div>
            <span className="flex justify-center items-center">
              <p className="font-medium text-[13px] flex justify-center py-1 bg-gray-100 w-15 rounded-[13px] text-gray-600">
                Open
              </p>
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-[5px]">
        <div>
          <p className="font-medium text-[14px] text-gray-900">Gallery</p>
        </div>
        <div className="flex gap-2">
          <div className="flex gap-1 bg-gray-100 py-1 w-18 justify-center rounded-[13px]">
            <PiNotebookFill className="text-[18px] text-center" />
            <p className="text-[12px] font-medium text-gray-700">Legal</p>
          </div>
          <div className="flex gap-1 bg-gray-100 py-1 w-18 justify-center rounded-[13px]">
            <BsFillCreditCardFill className="text-[18px] text-center" />
            <p className="text-[12px] font-medium text-gray-700">Pricing</p>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Generate;
