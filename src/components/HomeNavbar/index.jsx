import { Button, Heading, Img, Text } from "components";
import React from "react";

const HomeNavbar = () => {
  return (
    <header className="flex justify-center items-center w-full p-[17px] bg-white-A700">
      <div className="flex flex-row md:flex-col justify-between items-center w-full mx-auto md:gap-10 md:px-5 max-w-[1632px]">
        <div className="flex flex-row justify-start items-start gap-2">
          <Img
            src="images/img_group_19.svg"
            alt="image"
            className="h-[24px] mt-1"
          />
          <Heading as="h4">Elliye </Heading>
        </div>
        <div className="flex flex-row md:flex-col justify-between items-center w-[70%] md:w-full md:gap-10">
          <div className="flex flex-row sm:flex-col justify-between w-auto gap-20 sm:gap-10">
            <Text
              as="p"
              className="mt-0.5 sm:mt-0 !text-gray-800 !font-medium cursor-pointer transition hover:!text-black-900_68 duration-300 ease-in-out "
            >
              Categories
            </Text>
            <Text
              as="p"
              className="!text-gray-800 !font-medium cursor-pointer  transition hover:!text-black-900_68 duration-300 ease-in-out"
            >
              New Arrival
            </Text>
            <Text
              as="p"
              className="!text-gray-800 !font-medium cursor-pointer  transition hover:!text-black-900_68 duration-300 ease-in-out"
            >
              Features
            </Text>
            <Text
              as="p"
              className="!text-gray-800 !font-medium cursor-pointer  transition hover:!text-black-900_68 duration-300 ease-in-out"
            >
              Collections
            </Text>
          </div>
          <div className="flex flex-row justify-between items-center w-[22%] md:w-full">
            <div className="flex flex-row justify-between w-auto gap-8">
              <Img
                src="images/img_search.svg"
                alt="search_one"
                className="h-[24px] w-[24px]"
              />
              <Img
                src="images/img_cart.svg"
                alt="cart_one"
                className="h-[24px] w-[24px]"
              />
            </div>
            <Button
              size="5xl"
              shape="square"
              className="sm:px-5 font-bold min-w-[107px] transition hover:text-black-900_68 duration-300 ease-in-out"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeNavbar;
