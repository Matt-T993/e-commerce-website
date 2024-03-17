import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, RatingBar, Button, CheckBox } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function CategorieswithSidebarPage() {
  return (
    <>
      <Helmet>
        <title>e-commerce website</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <Header className="flex flex-row justify-between items-center w-full p-6 sm:p-5 bg-white-A700" />
        <div className="flex flex-col items-center justify-start w-full mt-8 gap-14 md:px-5 max-w-[1636px]">
          <div className="flex flex-row justify-between w-[13%] md:w-full">
            <Text as="p" className="!font-medium">
              Home
            </Text>
            <Text as="p" className="!text-blue_gray-100 !font-medium">
              &gt;
            </Text>
            <Text as="p" className="!text-gray-800 !font-medium">
              Categories
            </Text>
          </div>
          <Heading size="md" as="h1">
            Categories
          </Heading>
          <div className="flex flex-row md:flex-col justify-start items-start w-full gap-8 md:gap-5">
            <div className="flex flex-col items-center justify-start w-[16%] md:w-full gap-8">
              <div className="flex flex-col items-start justify-start w-full gap-[29px]">
                <div className="flex flex-row justify-between items-center w-full">
                  <Text as="p" className="!text-gray-800 !font-medium">
                    Filter by Price
                  </Text>
                  <Img src="images/img_arrow_down.svg" alt="arrowdown_one" className="h-[24px] w-[24px]" />
                </div>
                <div className="flex flex-col items-start justify-start w-[68%] md:w-full gap-6">
                  <CheckBox
                    shape="square"
                    name="allprice"
                    label="All Price"
                    id="allprice"
                    className="gap-4 text-left"
                  />
                  <div className="flex flex-row justify-start items-center gap-4">
                    <Button size="xs" shape="square" className="w-[24px]">
                      <Img src="images/img_checkedbox.svg" />
                    </Button>
                    <Text as="p" className="!text-gray-800">
                      $100 - $250
                    </Text>
                  </div>
                  <CheckBox shape="square" name="square" label="$250 - $500" id="square" className="gap-4 text-left" />
                  <CheckBox
                    shape="square"
                    name="square_one"
                    label="$750 - $1.000"
                    id="squareone"
                    className="gap-4 text-left"
                  />
                  <CheckBox
                    shape="square"
                    name="square_two"
                    label="$1000 - $1.500"
                    id="squaretwo"
                    className="gap-4 text-left"
                  />
                </div>
              </div>
              <div className="h-px w-full bg-blue_gray-100" />
              <div className="flex flex-col items-start justify-start w-full gap-[29px]">
                <div className="flex flex-row justify-between items-center w-full">
                  <Text as="p" className="mt-px !text-gray-800 !font-medium">
                    Filter by Rating
                  </Text>
                  <Img src="images/img_arrow_down.svg" alt="arrowdown_three" className="h-[24px] w-[24px]" />
                </div>
                <div className="flex flex-col items-start justify-start w-[79%] md:w-full gap-4">
                  <div className="flex flex-row justify-start w-[34%] md:w-full gap-4">
                    <div className="h-[24px] w-[24px] border-blue_gray-100 border-[3px] border-solid" />
                    <div className="flex flex-col items-center justify-start h-[24px] w-[24px]">
                      <Img src="images/img_star_1.svg" alt="image_one" className="h-[24px] w-[24px]" />
                    </div>
                  </div>
                  <div className="flex flex-row justify-start w-[50%] md:w-full gap-4">
                    <div className="h-[24px] w-[24px] border-blue_gray-100 border-[3px] border-solid" />
                    <div className="flex flex-row justify-start w-[59%] gap-2">
                      <Img src="images/img_star_1_24x24.svg" alt="image_two" className="h-[24px] w-[24px]" />
                      <Img src="images/img_star_2.svg" alt="image_three" className="h-[24px] w-[24px]" />
                    </div>
                  </div>
                  <div className="flex flex-row justify-start w-[67%] md:w-full gap-4">
                    <div className="h-[24px] w-[24px] border-blue_gray-100 border-[3px] border-solid" />
                    <RatingBar
                      value={3}
                      isEditable={true}
                      color="#fae952"
                      activeColor="#fae952"
                      size={24}
                      starCount={3}
                      className="flex justify-between"
                    />
                  </div>
                  <div className="flex flex-row justify-start gap-4">
                    <Button size="xs" shape="square" className="w-[24px]">
                      <Img src="images/img_checkedbox.svg" />
                    </Button>
                    <RatingBar
                      value={4}
                      isEditable={true}
                      color="#fae952"
                      activeColor="#fae952"
                      size={24}
                      starCount={4}
                      className="flex justify-between"
                    />
                  </div>
                  <div className="flex flex-row justify-start w-full gap-4">
                    <div className="h-[24px] w-[24px] border-blue_gray-100 border-[3px] border-solid" />
                    <RatingBar
                      value={5}
                      isEditable={true}
                      color="#fae952"
                      activeColor="#fae952"
                      size={24}
                      className="flex justify-between"
                    />
                  </div>
                </div>
              </div>
              <div className="h-px w-full bg-blue_gray-100" />
              <div className="flex flex-row justify-between items-center w-full">
                <Text as="p" className="mt-px !text-gray-800 !font-medium">
                  Filter by Brand
                </Text>
                <Img src="images/img_arrow_down.svg" alt="arrowdown_five" className="h-[24px] w-[24px]" />
              </div>
              <div className="flex flex-row justify-between items-center w-full">
                <Text as="p" className="mt-px !text-gray-800 !font-medium">
                  Filter by Size
                </Text>
                <Img src="images/img_arrow_down.svg" alt="arrowdown_seven" className="h-[24px] w-[24px]" />
              </div>
            </div>
            <div className="flex flex-row justify-start w-[84%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full gap-8">
                <div className="justify-center w-full gap-8 grid-cols-2 md:grid-cols-1 md:gap-5 grid">
                  <div className="flex flex-row sm:flex-col justify-center items-center w-full gap-4 p-[43px] md:p-5 sm:gap-4 bg-gray-50">
                    <Img
                      src="images/img_sweater_gray_800.svg"
                      alt="jacket_one"
                      className="h-[160px] w-[160px] ml-[110px] md:ml-5"
                    />
                    <div className="flex flex-col items-start justify-start w-[32%] sm:w-full mr-[109px] md:mr-5">
                      <Heading size="md" as="h2">
                        Jacket
                      </Heading>
                      <Text size="lg" as="p">
                        Collection
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row sm:flex-col justify-center items-center w-full gap-4 p-[43px] md:p-5 sm:gap-4 bg-gray-50">
                    <Img
                      src="images/img_tshirt.svg"
                      alt="tshirt_one"
                      className="h-[160px] w-[160px] ml-[109px] md:ml-5"
                    />
                    <div className="flex flex-col items-start justify-start w-[32%] sm:w-full mr-[109px] gap-px md:mr-5">
                      <Heading size="md" as="h3">
                        Shirt
                      </Heading>
                      <Text size="lg" as="p">
                        Collection
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row justify-start w-full">
                    <div className="flex flex-row sm:flex-col justify-center items-center w-full gap-4 p-[43px] md:p-5 sm:gap-4 bg-gray-50">
                      <Img
                        src="images/img_pants.svg"
                        alt="pants_one"
                        className="h-[160px] w-[160px] ml-[109px] md:ml-5"
                      />
                      <div className="flex flex-col items-start justify-start w-[32%] sm:w-full mr-[108px] md:mr-5">
                        <Heading size="md" as="h4">
                          Pants
                        </Heading>
                        <Text size="lg" as="p">
                          Collection
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row sm:flex-col justify-center items-center w-full gap-4 p-[43px] md:p-5 sm:gap-4 bg-gray-50">
                    <Img
                      src="images/img_skirt.svg"
                      alt="skirt_one"
                      className="h-[160px] w-[160px] ml-[109px] md:ml-5"
                    />
                    <div className="flex flex-col items-start justify-start w-[32%] sm:w-full mr-[109px] gap-px md:mr-5">
                      <Heading size="md" as="h5">
                        Skirt
                      </Heading>
                      <Text size="lg" as="p">
                        Collection
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="justify-center w-full gap-[34px] grid-cols-2 md:grid-cols-1 md:gap-5 grid">
                  <div className="flex flex-row justify-center w-full p-[43px] md:p-5 bg-gray-50">
                    <div className="flex flex-row sm:flex-col justify-start items-center w-[63%] gap-4 mx-[108px] md:mx-5 sm:gap-5 bg-gray-50">
                      <Img src="images/img_dress.svg" alt="dress_one" className="h-[160px] w-[160px]" />
                      <div className="flex flex-col items-start justify-start w-[51%] sm:w-full">
                        <Heading size="md" as="h6">
                          Dress
                        </Heading>
                        <Text size="lg" as="p">
                          Collection
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center w-full p-[43px] md:p-5 bg-gray-50">
                    <div className="flex flex-row sm:flex-col justify-start items-center w-[67%] gap-4 mx-24 md:mx-5 sm:gap-5 bg-gray-50">
                      <Img src="images/img_bra_gray_800.svg" alt="bra_one" className="h-[160px] w-[160px]" />
                      <div className="flex flex-col items-start justify-start w-[54%] sm:w-full">
                        <Heading size="md" as="h1">
                          Underwear
                        </Heading>
                        <Text size="lg" as="p">
                          Collection
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center w-full p-[43px] md:p-5 bg-gray-50">
                    <div className="flex flex-row sm:flex-col justify-start items-center w-[63%] gap-4 mx-[108px] md:mx-5 sm:gap-5 bg-gray-50">
                      <Img src="images/img_boot_gray_800.svg" alt="boot_one" className="h-[160px] w-[160px]" />
                      <div className="flex flex-col items-start justify-start w-[51%] sm:w-full">
                        <Heading size="md" as="h1">
                          Shoes
                        </Heading>
                        <Text size="lg" as="p">
                          Collection
                        </Text>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center w-full p-[43px] md:p-5 bg-gray-50">
                    <div className="flex flex-row sm:flex-col justify-start items-center w-[67%] gap-4 mx-[97px] md:mx-5 sm:gap-5 bg-gray-50">
                      <Img src="images/img_belt.svg" alt="belt_one" className="h-[160px] w-[160px]" />
                      <div className="flex flex-col items-start justify-start w-[54%] sm:w-full gap-px">
                        <Heading size="md" as="h1">
                          Accesories
                        </Heading>
                        <Text size="lg" as="p">
                          Collection
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="flex justify-center items-center w-full mt-[85px] p-[30px] sm:p-5 bg-gray-800" />
      </div>
    </>
  );
}
