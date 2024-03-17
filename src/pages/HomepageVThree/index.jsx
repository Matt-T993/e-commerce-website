import React from "react";
import { Helmet } from "react-helmet";
import { Text, Input, Img, Heading, RatingBar, Button } from "../../components";

export default function HomepageVThreePage() {
  return (
    <>
      <Helmet>
        <title>e-commerce website</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <header className="flex justify-center items-center w-full">
          <div className="flex flex-col items-center justify-center w-full">
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-row md:flex-col justify-between items-center w-full p-7 md:gap-10 sm:p-5 bg-white-A700">
                <div className="flex flex-row md:flex-col justify-between items-start w-[47%] md:w-full mt-[3px] ml-[115px] md:gap-10 md:ml-5 md:mt-0">
                  <div className="flex flex-row sm:flex-col justify-between items-center w-[63%] md:w-full mt-0.5 md:mt-0 sm:gap-10">
                    <div className="flex flex-row justify-between w-auto gap-14">
                      <Text as="p" className="mt-0.5 !text-gray-800">
                        Categories
                      </Text>
                      <Text as="p" className="!text-gray-800">
                        New Arrival
                      </Text>
                    </div>
                    <div className="flex flex-row justify-between w-auto gap-14">
                      <Text as="p" className="mt-px !text-gray-800">
                        Features
                      </Text>
                      <Text as="p" className="!text-gray-800">
                        Collections
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row justify-start items-start gap-2">
                    <Img src="images/img_group_19.svg" alt="image" className="h-[24px] mt-1" />
                    <Heading as="h4">Elliye </Heading>
                  </div>
                </div>
                <div className="flex flex-row justify-between w-auto mr-[115px] gap-12 md:mr-5">
                  <Img src="images/img_search.svg" alt="search_one" className="h-[24px] w-[24px]" />
                  <Img src="images/img_cart.svg" alt="cart_one" className="h-[24px] w-[24px]" />
                  <Img src="images/img_email_gray_800.svg" alt="email_one" className="h-[24px] w-[24px]" />
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-center w-full bg-white-A700">
              <div className="flex flex-col items-center justify-start w-full md:px-5 max-w-[1632px]">
                <div className="h-px w-full z-[1] bg-gray-50" />
                <div className="flex flex-row justify-center w-[78%] md:w-full mt-[-1px]">
                  <div className="flex flex-row md:flex-col w-full pl-36 gap-6 md:pl-5">
                    <div className="flex flex-col items-center justify-start h-[120px] w-[11%] md:w-full">
                      <div className="flex flex-col items-center justify-center h-[120px] w-[120px] p-[18px] bg-white-A700">
                        <div className="flex flex-col items-center justify-start w-[58%] md:w-full gap-[7px]">
                          <Img
                            src="images/img_tshirt_blue_gray_100.svg"
                            alt="shirt_one"
                            className="h-[48px] w-[48px]"
                          />
                          <Text as="p" className="!text-blue_gray-100">
                            Shirt
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start h-[120px] w-[11%] md:w-full">
                      <div className="flex flex-col items-center justify-center h-[120px] w-[120px] gap-[7px] p-[18px] bg-white-A700">
                        <Img
                          src="images/img_sweater_blue_gray_100.svg"
                          alt="sweater_one"
                          className="h-[48px] w-[48px]"
                        />
                        <Text as="p" className="!text-blue_gray-100">
                          Jacket
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start h-[120px] w-[11%] md:w-full">
                      <div className="flex flex-col items-center justify-start h-[120px] w-[120px] gap-2 p-[18px] bg-white-A700">
                        <Img src="images/img_pants_blue_gray_100.svg" alt="pants_one" className="h-[48px] w-[48px]" />
                        <Text as="p" className="!text-blue_gray-100">
                          Pants
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start h-[120px] w-[11%] md:w-full">
                      <div className="flex flex-col items-center justify-center h-[120px] w-[120px] gap-[7px] p-[18px] bg-white-A700">
                        <Img src="images/img_boot_gray_800.svg" alt="boot_one" className="h-[48px] w-[48px]" />
                        <Text as="p" className="!text-gray-800">
                          Shoes
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start h-[120px] w-[11%] md:w-full">
                      <div className="flex flex-col items-center justify-start h-[120px] w-[120px] gap-2 p-[18px] bg-white-A700">
                        <Img src="images/img_dress_blue_gray_100.svg" alt="dress_one" className="h-[48px] w-[48px]" />
                        <Text as="p" className="!text-blue_gray-100">
                          Dress
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start h-[120px] w-[11%] md:w-full">
                      <div className="flex flex-col items-center justify-center h-[120px] w-[120px] gap-[7px] p-[11px] bg-white-A700">
                        <Img
                          src="images/img_belt_blue_gray_100.svg"
                          alt="belt_one"
                          className="h-[48px] w-[48px] mt-[7px]"
                        />
                        <Text as="p" className="mb-2 !text-blue_gray-100">
                          Accesories
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start h-[120px] w-[11%] md:w-full">
                      <div className="flex flex-col items-center justify-center h-[120px] w-[120px] gap-[7px] p-[18px] bg-white-A700">
                        <Img src="images/img_skirt_blue_gray_100.svg" alt="skirt_one" className="h-[48px] w-[48px]" />
                        <Text as="p" className="!text-blue_gray-100">
                          Skirt
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start h-[120px] w-[11%] md:w-full">
                      <div className="flex flex-col items-center justify-center h-[120px] w-[120px] gap-[7px] p-2.5 bg-white-A700">
                        <Img src="images/img_bra.svg" alt="bra_one" className="h-[48px] w-[48px] mt-2" />
                        <Text as="p" className="mb-[9px] !text-blue_gray-100">
                          Underwear
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start h-[120px] w-[11%] md:w-full">
                      <div className="flex flex-col items-center justify-start h-[120px] w-[120px] p-[18px] bg-white-A700">
                        <div className="flex flex-col items-center justify-start w-[58%] md:w-full gap-2">
                          <Img src="images/img_dot.svg" alt="dot_one" className="h-[48px] w-[48px]" />
                          <Text as="p" className="!text-blue_gray-100">
                            More
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-row justify-center w-full">
            <div className="h-[718px] w-full relative">
              <Img
                src="images/img_placeholder_718x1920.png"
                alt="placeholder_one"
                className="justify-center h-[718px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
              />
              <div className="flex flex-row justify-center w-full h-full pl-[157px] pr-14 left-0 bottom-0 right-0 top-0 py-[157px] m-auto md:p-5 bg-white-A700_82 absolute">
                <div className="flex flex-col items-start justify-start w-[40%] ml-[126px] md:ml-5">
                  <Button
                    color="white_A700"
                    size="2xl"
                    shape="square"
                    className="font-medium min-w-[271px] sm:min-w-full"
                  >
                    50% Off Limited Offer
                  </Button>
                  <Heading size="xl" as="h1" className="mt-[22px] !font-playfairdisplay">
                    Summer Collection
                  </Heading>
                  <Text as="p" className="mt-[25px] !text-gray-800 leading-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.{" "}
                  </Text>
                  <Button
                    size="3xl"
                    shape="square"
                    rightIcon={<Img src="images/img_arrow.svg" alt="Arrow" />}
                    className="mt-20 gap-2.5 sm:px-5 font-medium min-w-[245px] sm:min-w-full"
                  >
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full mt-[31px] gap-8 md:px-5 max-w-[1632px]">
            <div className="flex flex-row justify-between items-center w-full">
              <Heading size="md" as="h2">
                Featured
              </Heading>
              <div className="flex flex-row justify-center">
                <a href="#">
                  <Text as="p" className="!text-gray-800 !font-medium">
                    View all
                  </Text>
                </a>
              </div>
            </div>
            <div className="flex flex-row md:flex-col justify-start w-full gap-[34px] md:gap-5">
              <div className="flex flex-col items-center justify-start w-[32%] md:w-full">
                <div className="justify-center w-full gap-8 grid-cols-2 sm:grid-cols-1 sm:gap-5 grid">
                  <div className="flex flex-col items-center justify-start w-full gap-4">
                    <Img
                      src="images/img_warm_pants_pxl7hrp.png"
                      alt="green_warm"
                      className="w-[245px] md:h-auto object-cover"
                    />
                    <div className="flex flex-col items-center justify-start w-[67%] md:w-full gap-2">
                      <Text size="md" as="p" className="!text-gray-800 text-center">
                        <>
                          Green <br />
                          Warm Jacket
                        </>
                      </Text>
                      <Text as="p" className="!font-medium">
                        $299
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-4">
                    <Img src="images/img_mask_group_6.png" alt="image" className="w-[245px] md:h-auto object-cover" />
                    <div className="flex flex-col items-center justify-start w-[67%] md:w-full gap-2">
                      <Text size="md" as="p" className="!text-gray-800 text-center">
                        <>
                          Black
                          <br />
                          Warm Jacket
                        </>
                      </Text>
                      <Text as="p" className="!font-medium">
                        $299
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-4">
                    <Img
                      src="images/img_placeholder_177x177.png"
                      alt="image"
                      className="w-[245px] md:h-auto object-cover"
                    />
                    <div className="flex flex-col items-center justify-start w-[67%] md:w-full gap-2">
                      <Text size="md" as="p" className="!text-gray-800 text-center">
                        <>
                          Black <br />
                          Warm Jacket
                        </>
                      </Text>
                      <Text as="p" className="!font-medium">
                        $299
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-4">
                    <Img src="images/img_placeholder_6.png" alt="image" className="w-[245px] md:h-auto object-cover" />
                    <div className="flex flex-col items-center justify-start w-[51%] md:w-full gap-2">
                      <Text size="md" as="p" className="!text-gray-800 text-center">
                        <>
                          Black
                          <br />
                          Brief Case
                        </>
                      </Text>
                      <Text as="p" className="!font-medium">
                        $299
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[32%] md:w-full pb-[55px] md:pb-5 bg-gray-50">
                <Img
                  src="images/img_placeholder_400x521.png"
                  alt="placeholder"
                  className="w-full md:h-[400px] object-cover"
                />
                <div className="flex flex-col items-center justify-start w-[55%] md:w-full mt-[27px] gap-4">
                  <Text size="lg" as="p" className="!text-gray-800 text-center !font-medium">
                    <>
                      Brown <br />
                      Casual Sneaker
                    </>
                  </Text>
                  <Text size="lg" as="p" className="!font-medium">
                    $299
                  </Text>
                </div>
                <Button size="5xl" shape="square" className="mt-[47px] sm:px-5 font-bold min-w-[200px] sm:min-w-full">
                  Add to Cart
                </Button>
              </div>
              <div className="flex flex-col items-center justify-start w-[32%] md:w-full">
                <div className="justify-center w-full gap-8 grid-cols-2 sm:grid-cols-1 sm:gap-5 grid">
                  <div className="flex flex-col items-center justify-start w-full gap-4">
                    <Img src="images/img_placeholder_1.png" alt="image" className="w-[245px] md:h-auto object-cover" />
                    <div className="flex flex-col items-center justify-start w-[67%] md:w-full gap-2">
                      <Text size="md" as="p" className="!text-gray-800 text-center">
                        <>
                          Blue Grey <br />
                          Warm Jacket
                        </>
                      </Text>
                      <Text as="p" className="!font-medium">
                        $299
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-4">
                    <Img
                      src="images/img_placeholder_631x384.png"
                      alt="image"
                      className="w-[245px] md:h-auto object-cover"
                    />
                    <div className="flex flex-col items-center justify-start w-[59%] md:w-full gap-2">
                      <Text size="md" as="p" className="!text-gray-800 text-center">
                        <>
                          Blue Denim <br />
                          Jacket
                        </>
                      </Text>
                      <Text as="p" className="!font-medium">
                        $299
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-start w-full gap-4">
                    <Img src="images/img_mask_group_7.png" alt="image" className="w-[245px] md:h-auto object-cover" />
                    <div className="flex flex-col items-center justify-start w-[77%] md:w-full mr-4 gap-2">
                      <Text size="md" as="p" className="!text-gray-800 text-center">
                        <>
                          Modern Classic
                          <br />
                          Watch
                        </>
                      </Text>
                      <Text as="p" className="!font-medium">
                        $299
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full gap-4">
                    <Img
                      src="images/img_placeholder_250x250.png"
                      alt="image"
                      className="w-[245px] md:h-auto object-cover"
                    />
                    <div className="flex flex-col items-center justify-start w-[71%] md:w-full gap-2">
                      <Text size="md" as="p" className="!text-gray-800 text-center">
                        <>
                          Casual <br />
                          Classic Watch
                        </>
                      </Text>
                      <Text as="p" className="!font-medium">
                        $299
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center w-full mt-[99px] md:px-5 max-w-[1630px]">
            <div className="h-[426px] w-full relative">
              <div className="flex flex-col items-start justify-start w-[14%] gap-[17px] left-[2%] top-[7%] m-auto absolute">
                <Heading as="h2" className="!text-white-A700">
                  New Arrival
                </Heading>
                <Text as="p" className="!text-white-A700 leading-8">
                  Lorem ipsum dolor sit amet consectetur.
                </Text>
              </div>
              <div className="flex flex-row md:flex-col justify-center items-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto md:gap-5 absolute">
                <div className="h-[426px] w-[24%] bg-gray-800" />
                <div className="flex flex-row md:flex-col w-[84%] md:w-full ml-[-109px] gap-[26px] md:ml-0">
                  <div className="flex flex-col items-center justify-start w-[24%] md:w-full md:h-auto gap-3.5 p-[37px] sm:p-5 bg-white-A700 shadow-lg">
                    <Img
                      src="images/img_business_shirt_ptnj9lv.png"
                      alt="black_briefcase"
                      className="w-[200px] md:h-auto object-cover"
                    />
                    <div className="flex flex-col items-center justify-start w-[76%] md:w-full gap-[9px]">
                      <Text size="md" as="p" className="!text-gray-800">
                        Black Briefcase
                      </Text>
                      <Text as="p" className="!font-medium">
                        $299
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[24%] md:w-full md:h-auto gap-3.5 p-[37px] sm:p-5 bg-white-A700 shadow-lg">
                    <Img
                      src="images/img_sport_j9bzxuy.png"
                      alt="pink3tz3pbbone"
                      className="w-[200px] md:h-auto object-cover"
                    />
                    <div className="flex flex-col items-center justify-start w-[46%] md:w-full gap-[9px]">
                      <Text size="md" as="p" className="!text-gray-800">
                        Pink Shirt
                      </Text>
                      <Text as="p" className="!font-medium">
                        $299
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[24%] md:w-full md:h-auto gap-4 p-[37px] sm:p-5 bg-white-A700 shadow-lg">
                    <Img
                      src="images/img_placeholder_4.png"
                      alt="graytshirt_one"
                      className="w-[200px] md:h-auto object-cover"
                    />
                    <div className="flex flex-col items-center justify-start w-[60%] md:w-full gap-1.5">
                      <Text size="md" as="p" className="!text-gray-800">
                        Gray T-shirt
                      </Text>
                      <Text as="p" className="!font-medium">
                        $299
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start w-[24%] md:w-full md:h-auto gap-[15px] p-9 sm:p-5 bg-white-A700 shadow-lg">
                    <Img
                      src="images/img_placeholder_5.png"
                      alt="redcheckereds"
                      className="w-[200px] md:h-auto object-cover"
                    />
                    <div className="flex flex-col items-center justify-start w-[57%] md:w-full gap-[9px]">
                      <Text size="md" as="p" className="!text-gray-800">
                        Red Flannel
                      </Text>
                      <Text as="p" className="!font-medium">
                        $299
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row md:flex-col w-full mt-[100px] gap-8 md:px-5 max-w-[1633px]">
            <div className="h-[400px] w-[49%] md:w-full relative">
              <Img
                src="images/img_rectangle_28.png"
                alt="casualcollectio"
                className="justify-center h-[400px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
              />
              <Text
                size="lg"
                as="p"
                className="w-[29%] h-max ml-[82px] left-[10%] bottom-0 top-0 my-auto md:ml-5 !text-white-A700 absolute"
              >
                <span className="text-white-A700">
                  <>
                    Casual
                    <br />
                  </>
                </span>
                <span className="text-white-A700 font-playfairdisplay text-5xl font-bold">Collection</span>
              </Text>
            </div>
            <div className="h-[400px] w-[50%] md:w-full relative">
              <Img
                src="images/img_rectangle_29.png"
                alt="image"
                className="justify-center h-[400px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
              />
              <Text
                size="lg"
                as="p"
                className="w-[29%] h-max ml-[79px] left-[10%] bottom-0 top-0 my-auto md:ml-5 !text-white-A700 absolute"
              >
                <span className="text-white-A700">
                  <>
                    Big Vibe <br />
                  </>
                </span>
                <span className="text-white-A700 font-playfairdisplay text-5xl font-bold">Collection</span>
              </Text>
            </div>
          </div>
          <div className="flex flex-row justify-center w-full mt-[100px]">
            <div className="h-[362px] w-full relative">
              <div className="flex flex-row md:flex-col w-[85%] gap-8 bottom-0 right-0 left-0 m-auto absolute">
                <div className="flex flex-row justify-between items-center w-[24%] md:w-full md:h-auto p-[46px] md:p-5 bg-white-A700 shadow-md">
                  <Img src="images/img_truck.svg" alt="free_delivery" className="h-[48px] w-[48px]" />
                  <div className="flex flex-col items-start justify-start w-[73%] gap-1.5 my-[17px]">
                    <Heading size="xs" as="h2">
                      Free Delivery
                    </Heading>
                    <Text as="p">
                      <>
                        This free shipping
                        <br />
                        only for selected region
                      </>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center w-[24%] md:w-full md:h-auto p-[46px] md:p-5 bg-white-A700 shadow-md">
                  <Img src="images/img_card.svg" alt="card_one" className="h-[48px] w-[48px]" />
                  <div className="flex flex-col items-start justify-start w-[73%] pt-0.5 gap-[5px] my-[17px]">
                    <Heading size="xs" as="h3">
                      Payment Method
                    </Heading>
                    <Text as="p">
                      <>
                        This free shipping
                        <br />
                        only for selected region
                      </>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center w-[24%] md:w-full md:h-auto p-[46px] md:p-5 bg-white-A700 shadow-md">
                  <Img src="images/img_broken.svg" alt="broken_one" className="h-[48px] w-[48px]" />
                  <div className="flex flex-col items-start justify-start w-[73%] pt-0.5 gap-[5px] my-[17px]">
                    <Heading size="xs" as="h4">
                      Warranty
                    </Heading>
                    <Text as="p">
                      <>
                        This free shipping
                        <br />
                        only for selected region
                      </>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-center w-[24%] md:w-full md:h-auto p-[46px] md:p-5 bg-white-A700 shadow-md">
                  <Img src="images/img_support.svg" alt="support_one" className="h-[48px] w-[48px]" />
                  <div className="flex flex-col items-start justify-start w-[73%] pt-0.5 gap-[5px] my-[17px]">
                    <Heading size="xs" as="h5">
                      Customer Support{" "}
                    </Heading>
                    <Text as="p">
                      <>
                        This free shipping
                        <br />
                        only for selected region
                      </>
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-start w-full pl-[57px] pr-14 top-0 right-0 left-0 py-[57px] m-auto md:p-5 bg-gray-800 absolute">
                <Heading as="h6" className="mb-[158px] ml-[86px] md:ml-5 !text-white-A700">
                  Why Choose Us
                </Heading>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full mt-[103px] gap-7 md:px-5 max-w-[1630px]">
            <div className="flex flex-row sm:flex-col justify-between items-start w-full sm:gap-10">
              <Heading size="md" as="h2">
                Popular this Week
              </Heading>
              <div className="flex flex-row justify-center mt-[9px] sm:mt-0">
                <a href="#">
                  <Text as="p" className="!text-gray-800 !font-medium">
                    View all
                  </Text>
                </a>
              </div>
            </div>
            <div className="flex flex-row md:flex-col w-full gap-8">
              <div className="flex flex-col items-center justify-start w-[16%] md:w-full gap-4">
                <Img src="images/img_placeholder_6.png" alt="image" className="w-[245px] md:h-auto object-cover" />
                <div className="flex flex-col items-center justify-start w-[81%] md:w-full gap-4">
                  <Text size="md" as="p" className="!text-gray-800 text-center">
                    <>
                      Black Adventure
                      <br />
                      Boots
                    </>
                  </Text>
                  <RatingBar
                    value={4}
                    isEditable={true}
                    color="#f6f7fb"
                    activeColor="#fae952"
                    size={16}
                    className="flex justify-between"
                  />
                  <Text as="p" className="!font-medium">
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[16%] md:w-full gap-4">
                <Img
                  src="images/img_placeholder_177x177.png"
                  alt="image"
                  className="w-[245px] md:h-auto object-cover"
                />
                <div className="flex flex-col items-center justify-start w-[65%] md:w-full gap-4">
                  <Text size="md" as="p" className="!text-gray-800 text-center">
                    <>
                      Black Formal
                      <br />
                      Highheels
                    </>
                  </Text>
                  <RatingBar
                    value={4}
                    isEditable={true}
                    color="#f6f7fb"
                    activeColor="#fae952"
                    size={16}
                    className="flex justify-between"
                  />
                  <Text as="p" className="!font-medium">
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[16%] md:w-full gap-4">
                <Img
                  src="images/img_placeholder_250x250.png"
                  alt="image"
                  className="w-[245px] md:h-auto object-cover"
                />
                <div className="flex flex-col items-center justify-start w-[68%] md:w-full gap-4">
                  <Text size="md" as="p" className="!text-gray-800 text-center">
                    <>
                      Brown <br />
                      Casual Shoes
                    </>
                  </Text>
                  <RatingBar
                    value={4}
                    isEditable={true}
                    color="#f6f7fb"
                    activeColor="#fae952"
                    size={16}
                    className="flex justify-between"
                  />
                  <Text as="p" className="!font-medium">
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start w-[16%] md:w-full gap-4">
                <Img src="images/img_travel_8v7cnke.png" alt="image" className="w-[245px] md:h-auto object-cover" />
                <div className="flex flex-col items-center justify-start ml-[50px] gap-4 md:ml-5">
                  <Text size="md" as="p" className="!text-gray-800 text-center">
                    <>
                      Gray <br />
                      Longpants
                    </>
                  </Text>
                  <RatingBar
                    value={4}
                    isEditable={true}
                    color="#f6f7fb"
                    activeColor="#fae952"
                    size={16}
                    className="flex justify-between"
                  />
                  <Text as="p" className="!font-medium">
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[16%] md:w-full gap-4">
                <Img src="images/img_mask_group_7.png" alt="image" className="w-[245px] md:h-auto object-cover" />
                <div className="flex flex-col items-center justify-start w-[63%] md:w-full gap-4">
                  <Text size="md" as="p" className="!text-gray-800 text-center">
                    <>
                      Green
                      <br />
                      Sport Jacket
                    </>
                  </Text>
                  <RatingBar
                    value={4}
                    isEditable={true}
                    color="#f6f7fb"
                    activeColor="#fae952"
                    size={16}
                    className="flex justify-between"
                  />
                  <Text as="p" className="!font-medium">
                    $299
                  </Text>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start w-[16%] md:w-full gap-4">
                <Img src="images/img_placeholder_3.png" alt="image" className="w-[245px] md:h-auto object-cover" />
                <div className="flex flex-col items-center justify-start w-[59%] md:w-full gap-4">
                  <Text size="md" as="p" className="!text-gray-800 text-center">
                    <>
                      Blue Denim <br />
                      Skirt
                    </>
                  </Text>
                  <RatingBar
                    value={4}
                    isEditable={true}
                    color="#f6f7fb"
                    activeColor="#fae952"
                    size={16}
                    className="flex justify-between"
                  />
                  <Text as="p" className="!font-medium">
                    $299
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <Img src="images/img_brand.svg" alt="brand_one" className="h-[68px] mt-[99px]" />
        </div>
        <footer className="flex justify-center items-center w-full mt-[100px] p-[30px] sm:p-5 bg-gray-800">
          <div className="flex flex-col items-center justify-center w-[88%] mt-[31px] gap-[65px] mx-[113px] md:mx-5">
            <div className="flex flex-row justify-center w-full">
              <div className="flex flex-row md:flex-col justify-between items-center w-full md:gap-10">
                <div className="flex flex-row md:flex-col justify-center items-start w-[41%] md:w-full md:gap-5">
                  <div className="flex flex-col items-start justify-start w-[63%] md:w-full">
                    <Heading as="h4" className="!text-white-A700">
                      Contacts
                    </Heading>
                    <div className="flex flex-col items-center justify-start w-full mt-8 gap-4">
                      <div className="flex flex-row justify-start items-center w-full gap-2 py-0.5">
                        <Img src="images/img_call.svg" alt="call_one" className="h-[24px] w-[24px]" />
                        <Text as="p" className="!text-white-A700">
                          +1234567890
                        </Text>
                      </div>
                      <div className="flex flex-row justify-start items-center w-full gap-2">
                        <Img src="images/img_email_white_a700.svg" alt="email_three" className="h-[24px] w-[24px]" />
                        <Text as="p" className="mt-0.5 !text-white-A700">
                          elliye@support.com
                        </Text>
                      </div>
                    </div>
                    <Heading as="h4" className="mt-[46px] !text-white-A700">
                      Social Media
                    </Heading>
                    <div className="flex flex-row justify-between w-[29%] md:w-full mt-[33px]">
                      <Img src="images/img_instagram.svg" alt="instagram_one" className="h-[24px] w-[24px]" />
                      <div className="flex flex-col items-center justify-start h-[24px] w-[24px]">
                        <div className="flex flex-col items-center justify-start h-[24px] w-[24px]">
                          <Img src="images/img_twitter.svg" alt="twitter_one" className="h-[24px] w-[24px]" />
                        </div>
                      </div>
                      <Img src="images/img_facebook.svg" alt="facebook_one" className="h-[24px] w-[24px]" />
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start w-[38%] md:w-full gap-[33px]">
                    <Heading as="h4" className="!text-white-A700">
                      Product Links
                    </Heading>
                    <div className="flex flex-col items-start justify-start pt-0.5 gap-[15px]">
                      <Text as="p">Categories</Text>
                      <Text as="p">New Arrival</Text>
                      <Text as="p">Features</Text>
                      <Text as="p">Collections</Text>
                      <Text as="p">Discount</Text>
                      <Text as="p">Special Offer</Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-center w-[16%] md:w-full gap-[29px]">
                  <Heading as="h4" className="mt-0.5 !text-white-A700">
                    Company
                  </Heading>
                  <div className="flex flex-col items-start justify-start gap-[15px]">
                    <Text as="p">About</Text>
                    <Text as="p">Blog</Text>
                    <a href="#">
                      <Text as="p">Careers</Text>
                    </a>
                    <Text as="p">Services</Text>
                    <a href="#">
                      <Text as="p">Privacy Policy</Text>
                    </a>
                    <a href="#">
                      <Text as="p">Terms of service</Text>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start w-[24%] md:w-full gap-[30px]">
                  <Heading as="h4" className="!text-white-A700">
                    Join our Newsletter
                  </Heading>
                  <Text as="p">Drop your email below to get update, promotions, coupons, and more!</Text>
                  <Input
                    color="gray_800"
                    variant="fill"
                    shape="square"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    suffix={
                      <div className="flex justify-center items-center w-[60px] h-[60px] bg-white-A700">
                        <Img src="images/img_arrow_gray_800.svg" alt="Arrow" />
                      </div>
                    }
                    className="w-full sm:w-full tracking-[0.36px] border-white-A700 border border-solid"
                  />
                </div>
              </div>
            </div>
            <Text size="xs" as="p" className="!text-blue_gray-100">
              Copyright © 2021 Elliye. All Right Reseved
            </Text>
          </div>
        </footer>
      </div>
    </>
  );
}
