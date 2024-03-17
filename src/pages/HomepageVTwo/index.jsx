import React from "react";
import { Helmet } from "react-helmet";
import { CloseSVG } from "../../assets/images";
import { Text, Input, Img, Heading, RatingBar, Button, Slider } from "../../components";

export default function HomepageVTwoPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);
  const [searchBarValue4, setSearchBarValue4] = React.useState("");

  return (
    <>
      <Helmet>
        <title>e-commerce website</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full bg-white-A700">
        <header className="flex justify-center items-center w-full p-[21px] sm:p-5 bg-white-A700">
          <div className="flex flex-col items-center justify-center w-full mt-0.5 gap-5 mx-auto md:px-5 max-w-[1632px]">
            <div className="flex flex-row md:flex-col justify-between items-start w-full md:gap-10">
              <div className="flex flex-row justify-start items-start mt-[7px] gap-2 md:mt-0">
                <Img src="images/img_group_19.svg" alt="image" className="h-[24px] mt-1" />
                <Heading as="h4">Elliye </Heading>
              </div>
              <div className="flex flex-row md:flex-col justify-between items-center w-[68%] md:w-full md:gap-10">
                <Input
                  color="white_A700"
                  size="xs"
                  variant="fill"
                  shape="square"
                  name="search"
                  placeholder="Search here"
                  value={searchBarValue4}
                  onChange={(e) => setSearchBarValue4(e)}
                  suffix={
                    <div className="flex justify-center items-center w-[48px] h-[48px] bg-gray-800">
                      {searchBarValue4?.length > 0 ? (
                        <CloseSVG onClick={() => setSearchBarValue4("")} height={18} width={18} />
                      ) : (
                        <Img src="images/img_search_white_a700.svg" alt="search" className="cursor-pointer" />
                      )}
                    </div>
                  }
                  className="w-[53%] md:w-full text-gray-500_87 border-gray-50 border-2 border-solid"
                />
                <div className="flex flex-row justify-between items-start w-[20%] md:w-full">
                  <div className="flex flex-row justify-between w-auto mt-3 gap-8">
                    <Img src="images/img_cart.svg" alt="cart_one" className="h-[24px] w-[24px]" />
                    <Img src="images/img_email.svg" alt="email_one" className="h-[24px] w-[24px]" />
                  </div>
                  <Button size="xl" shape="square" className="sm:px-5 font-bold min-w-[107px]">
                    Login
                  </Button>
                </div>
              </div>
            </div>
            <div className="h-px w-full bg-gray-50" />
            <div className="flex flex-row sm:flex-col justify-between w-[48%] md:w-full sm:gap-10">
              <Text as="p" className="mt-0.5 sm:mt-0 !text-gray-800">
                Categories
              </Text>
              <Text as="p" className="!text-gray-800">
                New Arrival
              </Text>
              <Text as="p" className="!text-gray-800">
                Features
              </Text>
              <Text as="p" className="!text-gray-800">
                Collections
              </Text>
              <Text as="p" className="!text-gray-800">
                Discount
              </Text>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-center justify-start w-full gap-[99px] overflow-auto">
          <div className="flex flex-row justify-end w-full">
            <div className="h-[750px] w-full relative">
              <div className="justify-center h-[750px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                <Slider
                  autoPlay
                  autoPlayInterval={2000}
                  responsive={{ 0: { items: 1 }, 550: { items: 1 }, 1050: { items: 0 } }}
                  paddingLeft={1920}
                  paddingRight={26}
                  renderDotsItem={(props) => {
                    return props?.isActive ? (
                      <div className="h-[12px] w-[12px] mr-2 bg-gray-800" />
                    ) : (
                      <div className="h-[12px] w-[12px] mr-2 bg-white-A700" />
                    );
                  }}
                  activeIndex={sliderState}
                  onSlideChanged={(e) => {
                    setSliderState(e?.item);
                  }}
                  ref={sliderRef}
                  className="justify-center w-full left-0 bottom-0 right-0 top-0 m-auto absolute"
                  items={[...Array(6)].map(() => (
                    <React.Fragment key={Math.random()}>
                      <div className="flex flex-row justify-start w-full mx-2.5 md:px-5 max-w-[1920px]">
                        <div className="h-[750px] w-full relative">
                          <Img
                            src="images/img_image_1.png"
                            alt="imageone_one"
                            className="justify-center h-[750px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                          />
                          <div className="flex flex-col items-start justify-center w-full h-full gap-[148px] left-0 bottom-0 right-0 top-0 p-8 m-auto sm:p-5 bg-black-900_68 absolute">
                            <div className="flex flex-col items-start justify-start w-[44%] md:w-full mt-[84px] ml-28 gap-20 md:ml-5">
                              <div className="flex flex-col items-start justify-start w-full gap-[9px]">
                                <Text size="md" as="p" className="!text-white-A700">
                                  50% Off Limited Offer
                                </Text>
                                <Heading size="2xl" as="h1" className="!text-white-A700 !font-playfairdisplay">
                                  <>
                                    Summer <br />
                                    Collection
                                  </>
                                </Heading>
                              </div>
                              <Button
                                size="3xl"
                                shape="square"
                                rightIcon={<Img src="images/img_arrow.svg" alt="Arrow" />}
                                className="gap-2.5 sm:px-5 font-medium min-w-[245px] sm:min-w-full"
                              >
                                Shop Now
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </React.Fragment>
                  ))}
                />
              </div>
              <div className="flex flex-row md:flex-col w-[60%] pr-44 gap-4 bottom-[4%] right-0 m-auto md:pr-5 shadow-xs absolute">
                <div className="flex flex-col items-center justify-start h-[160px] w-[16%] md:w-full gap-[15px] p-[30px] sm:p-5 bg-white-A700">
                  <Img src="images/img_sweater.svg" alt="jacket_one" className="h-[56px] w-[56px]" />
                  <Text as="p">Jacket</Text>
                </div>
                <div className="flex flex-col items-center justify-start h-[160px] w-[16%] md:w-full gap-[15px] p-[30px] sm:p-5 bg-white-A700">
                  <Img src="images/img_tshirt.svg" alt="tshirt_one" className="h-[56px] w-[56px]" />
                  <Text as="p">Shirt</Text>
                </div>
                <div className="flex flex-col items-center justify-center h-[160px] w-[16%] md:w-full gap-4 p-[29px] sm:p-5 bg-white-A700">
                  <Img src="images/img_pants.svg" alt="pants_one" className="h-[56px] w-[56px]" />
                  <Text as="p">Pants</Text>
                </div>
                <div className="flex flex-col items-center justify-start h-[160px] w-[16%] md:w-full">
                  <div className="flex flex-col items-center justify-center h-[160px] w-[160px] p-[30px] sm:p-5 bg-gray-800">
                    <div className="flex flex-col items-center justify-start w-[57%] md:w-full gap-[15px]">
                      <Img src="images/img_boot.svg" alt="boot_one" className="h-[56px] w-[56px]" />
                      <Text as="p" className="!text-white-A700">
                        Shoes
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start h-[160px] w-[16%] md:w-full">
                  <div className="flex flex-col items-center justify-center h-[160px] w-[160px] p-[29px] sm:p-5 bg-white-A700">
                    <div className="flex flex-col items-center justify-start w-[55%] md:w-full gap-4">
                      <Img src="images/img_dress.svg" alt="dress_one" className="h-[56px] w-[56px]" />
                      <Text as="p">Dress</Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start h-[160px] w-[16%] md:w-full">
                  <div className="flex flex-col items-center justify-center h-[160px] w-[160px] p-[30px] sm:p-5 bg-white-A700">
                    <div className="flex flex-col items-center justify-start h-[99px] w-full gap-[15px] md:px-5 max-w-[98px]">
                      <Img src="images/img_belt.svg" alt="belt_one" className="h-[56px] w-[56px]" />
                      <Text as="p">Accesories</Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Img src="images/img_brands.svg" alt="brands_one" className="h-[100px]" />
          <div className="flex flex-row md:flex-col justify-start w-full gap-8 md:gap-5 md:px-5 max-w-[1633px]">
            <div className="flex flex-col w-[49%] md:w-full gap-8">
              <div className="flex flex-row justify-center w-full">
                <div className="h-[400px] w-full relative">
                  <Img
                    src="images/img_placeholder_400x800.png"
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
              </div>
              <div className="flex flex-row justify-center w-full">
                <div className="h-[400px] w-full relative">
                  <Img
                    src="images/img_placeholder_15.png"
                    alt="placeholder_one"
                    className="justify-center h-[400px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <Text
                    size="lg"
                    as="p"
                    className="w-[29%] h-max ml-[90px] left-[11%] bottom-0 top-0 my-auto md:ml-5 !text-gray-800 absolute"
                  >
                    <span className="text-gray-800">
                      <>
                        Summer <br />
                      </>
                    </span>
                    <span className="text-gray-800 font-playfairdisplay text-5xl font-bold">Collection</span>
                  </Text>
                </div>
              </div>
            </div>
            <div className="h-[832px] w-[50%] md:w-full relative">
              <Img
                src="images/img_placeholder_832x801.png"
                alt="placeholder_one"
                className="justify-center h-[832px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
              />
              <Text size="lg" as="p" className="w-[29%] left-[10%] top-[37%] m-auto !text-white-A700 absolute">
                <span className="text-white-A700">
                  <>
                    Big Vibe <br />
                  </>
                </span>
                <span className="text-white-A700 font-playfairdisplay text-5xl font-bold">Collection</span>
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start w-full gap-[31px] md:px-5 max-w-[1632px]">
            <div className="flex flex-row justify-between items-center w-full">
              <Heading size="md" as="h2">
                Featured
              </Heading>
              <div className="flex flex-row justify-start items-center gap-2">
                <a href="#">
                  <Text as="p" className="!text-gray-800 !font-medium">
                    View all
                  </Text>
                </a>
                <Img src="images/img_arrow_gray_800.svg" alt="arrow_one" className="h-[31px] w-[32px]" />
              </div>
            </div>
            <div className="flex flex-row md:flex-col justify-start items-center w-full gap-8 md:gap-5">
              <div className="h-[761px] w-[33%] md:w-full relative">
                <Img
                  src="images/img_placeholder_761x523.png"
                  alt="placeholder"
                  className="justify-center h-[761px] w-full sm:w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                />
                <Text
                  size="lg"
                  as="p"
                  className="w-[62%] top-[7%] right-0 left-0 m-auto !text-gray-800 text-center absolute"
                >
                  <span className="text-gray-800">
                    <>
                      Discover Our <br />
                    </>
                  </span>
                  <span className="text-gray-800 font-bold">Featured Product</span>
                </Text>
              </div>
              <div className="w-[66%] md:w-full gap-8 grid-cols-4 md:grid-cols-2 md:gap-5 sm:grid-cols-1 grid">
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img src="images/img_mask_group.png" alt="green_warm" className="w-[245px] md:h-auto object-cover" />
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
                  <Img
                    src="images/img_mask_group_245x245.png"
                    alt="image"
                    className="w-[245px] md:h-auto object-cover"
                  />
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
                  <Img src="images/img_mask_group_1.png" alt="image" className="w-[245px] md:h-auto object-cover" />
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
                  <Img src="images/img_mask_group_2.png" alt="image" className="w-[245px] md:h-auto object-cover" />
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
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img src="images/img_mask_group_3.png" alt="image" className="w-[245px] md:h-auto object-cover" />
                  <div className="flex flex-col items-center justify-start w-[46%] md:w-full gap-2">
                    <Text size="md" as="p" className="!text-gray-800 text-center">
                      <>
                        Casual <br />
                        Pink Shirt
                      </>
                    </Text>
                    <Text as="p" className="!font-medium">
                      $299
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img src="images/img_mask_group_4.png" alt="image" className="w-[245px] md:h-auto object-cover" />
                  <div className="flex flex-col items-center justify-start w-[60%] md:w-full gap-1.5">
                    <Text size="md" as="p" className="!text-gray-800 text-center">
                      Gray T-shirt
                    </Text>
                    <Text as="p" className="!font-medium">
                      $299
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-4">
                  <Img src="images/img_mask_group_5.png" alt="image" className="w-[245px] md:h-auto object-cover" />
                  <div className="flex flex-col items-center justify-start w-[67%] md:w-full gap-2">
                    <Text size="md" as="p" className="!text-gray-800 text-center">
                      <>
                        Purple <br />
                        Warm Jacket
                      </>
                    </Text>
                    <Text as="p" className="!font-medium">
                      $299
                    </Text>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-[15px]">
                  <Img src="images/img_mask_group_3.png" alt="image" className="w-[245px] md:h-auto object-cover" />
                  <div className="flex flex-col items-center justify-start w-[58%] md:w-full gap-[9px]">
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
          <div className="h-[579px] w-full relative">
            <div className="flex flex-row md:flex-col w-[85%] gap-8 bottom-0 right-0 left-0 m-auto absolute">
              <div className="flex flex-row justify-center w-[50%] md:w-full">
                <div className="flex flex-row md:flex-col justify-between items-center w-full p-8 md:gap-10 sm:p-5 bg-gray-50 shadow-sm">
                  <div className="flex flex-col items-center justify-start w-[38%] md:w-full gap-8">
                    <div className="flex flex-col items-center justify-start h-[279px] w-[279px]">
                      <Img
                        src="images/img_rectangle_45.png"
                        alt="limited_deals"
                        className="w-[279px] md:h-auto object-cover"
                      />
                    </div>
                    <Button size="5xl" shape="square" className="sm:px-5 font-bold min-w-[200px] sm:min-w-full">
                      Add to Cart
                    </Button>
                  </div>
                  <div className="flex flex-row justify-center w-[53%] md:w-full mr-6 sm:mr-5">
                    <div className="flex flex-col items-start justify-start w-full gap-[21px]">
                      <Text size="md" as="p" className="!text-gray-800 !font-normal">
                        Limited Deals
                      </Text>
                      <div className="flex flex-row sm:flex-col w-full gap-8">
                        <div className="flex flex-col items-center justify-start h-[107px] w-[28%] sm:w-full gap-2 p-4 border-gray-500 border border-solid">
                          <Text size="md" as="p" className="!text-gray-800">
                            08
                          </Text>
                          <Text as="p" className="!text-gray-800">
                            Hours
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start h-[107px] w-[28%] sm:w-full gap-2 p-4 border-gray-500 border border-solid">
                          <Text size="md" as="p" className="!text-gray-800">
                            58
                          </Text>
                          <Text as="p" className="!text-gray-800">
                            Minutes
                          </Text>
                        </div>
                        <div className="h-[107px] w-[107px] relative">
                          <div className="justify-center h-[107px] w-[107px] left-0 bottom-0 right-0 top-0 m-auto border-gray-500 border border-solid absolute" />
                          <div className="flex flex-col items-center justify-center w-max h-max gap-2 left-0 bottom-0 right-0 top-0 m-auto absolute">
                            <Text size="md" as="p" className="!text-gray-800">
                              18
                            </Text>
                            <Text as="p" className="!text-gray-800">
                              Seconds
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Heading as="h2">Black Warm Jacket </Heading>
                      <div className="flex flex-row justify-start gap-6">
                        <Text size="md" as="p" className="mb-px !font-normal line-through">
                          $299
                        </Text>
                        <Text size="md" as="p" className="!text-gray-800">
                          $199
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center w-[50%] md:w-full">
                <div className="flex flex-row md:flex-col justify-between items-center w-full p-8 md:gap-10 sm:p-5 bg-gray-50 shadow-sm">
                  <div className="flex flex-col items-center justify-start w-[38%] md:w-full gap-8">
                    <div className="flex flex-col items-center justify-start h-[279px] w-[279px]">
                      <Img
                        src="images/img_rectangle_45_279x279.png"
                        alt="image"
                        className="w-[279px] md:h-auto object-cover"
                      />
                    </div>
                    <Button size="5xl" shape="square" className="sm:px-5 font-bold min-w-[200px] sm:min-w-full">
                      Add to Cart
                    </Button>
                  </div>
                  <div className="flex flex-row justify-center w-[53%] md:w-full mr-6 sm:mr-5">
                    <div className="flex flex-col items-start justify-start w-full">
                      <Text size="md" as="p" className="!text-gray-800 !font-normal">
                        Limited Deals
                      </Text>
                      <div className="flex flex-row sm:flex-col w-full mt-[25px] gap-8">
                        <div className="flex flex-col items-center justify-start h-[107px] w-[28%] sm:w-full gap-2 p-4 border-gray-500 border border-solid">
                          <Text size="md" as="p" className="!text-gray-800">
                            08
                          </Text>
                          <Text as="p" className="!text-gray-800">
                            Hours
                          </Text>
                        </div>
                        <div className="flex flex-col items-center justify-start h-[107px] w-[28%] sm:w-full gap-2 p-4 border-gray-500 border border-solid">
                          <Text size="md" as="p" className="!text-gray-800">
                            58
                          </Text>
                          <Text as="p" className="!text-gray-800">
                            Minutes
                          </Text>
                        </div>
                        <div className="h-[107px] w-[107px] relative">
                          <div className="justify-center h-[107px] w-[107px] left-0 bottom-0 right-0 top-0 m-auto border-gray-500 border border-solid absolute" />
                          <div className="flex flex-col items-center justify-center w-max h-max gap-2 left-0 bottom-0 right-0 top-0 m-auto absolute">
                            <Text size="md" as="p" className="!text-gray-800">
                              18
                            </Text>
                            <Text as="p" className="!text-gray-800">
                              Seconds
                            </Text>
                          </div>
                        </div>
                      </div>
                      <Heading as="h3" className="mt-[26px]">
                        Casual Grey Shoes
                      </Heading>
                      <div className="flex flex-row justify-start mt-[13px] gap-[23px]">
                        <Text size="md" as="p" className="mb-px !font-normal line-through">
                          $399
                        </Text>
                        <Text size="md" as="p" className="!text-gray-800">
                          $199
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-start w-full top-0 right-0 left-0 p-[43px] m-auto md:p-5 bg-gray-800 absolute">
              <Heading size="md" as="h4" className="mb-[271px] ml-[100px] md:ml-5 !text-white-A700">
                Limited Offer
              </Heading>
            </div>
          </div>
          <div className="flex flex-row md:flex-col w-full gap-[27px] md:px-5 max-w-[1634px]">
            <div className="flex flex-col items-center justify-start w-[50%] md:w-full gap-[79px]">
              <Heading size="md" as="h2">
                New Arrival
              </Heading>
              <div className="flex flex-row justify-center w-[98%] md:w-full">
                <div className="flex flex-col items-start justify-start w-full gap-[125px]">
                  <div className="flex flex-row md:flex-col justify-between w-full md:gap-10">
                    <div className="flex flex-row justify-start items-center w-[44%] md:w-full gap-4">
                      <div className="flex flex-col items-center justify-start h-[107px] w-[107px]">
                        <Img
                          src="images/img_placeholder_107x107.png"
                          alt="checkered"
                          className="w-[107px] md:h-auto object-cover"
                        />
                      </div>
                      <div className="flex flex-row justify-start w-[65%]">
                        <div className="flex flex-col items-start justify-start w-full gap-2">
                          <Text size="md" as="p" className="!text-gray-800">
                            Checkered Jacket
                          </Text>
                          <Text size="md" as="p">
                            $299
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-center w-[47%] md:w-full gap-4">
                      <div className="flex flex-col items-center justify-start h-[107px] w-[107px]">
                        <Img
                          src="images/img_placeholder_16.png"
                          alt="checkered"
                          className="w-[107px] md:h-auto object-cover"
                        />
                      </div>
                      <div className="flex flex-row justify-start w-[67%]">
                        <div className="flex flex-col items-start justify-start w-full gap-2">
                          <Text size="md" as="p" className="!text-gray-800">
                            Blue Woman Denim
                          </Text>
                          <Text size="md" as="p">
                            $299
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row sm:flex-col justify-between w-[92%] md:w-full sm:gap-10">
                    <div className="flex flex-row justify-start items-center w-[42%] sm:w-full gap-4">
                      <div className="flex flex-col items-center justify-start h-[107px] w-[107px]">
                        <Img
                          src="images/img_placeholder_17.png"
                          alt="orange_jeans"
                          className="w-[107px] md:h-auto object-cover"
                        />
                      </div>
                      <div className="flex flex-row justify-start w-[59%]">
                        <div className="flex flex-col items-start justify-center w-full gap-1">
                          <Text size="md" as="p" className="mt-0.5 !text-gray-800">
                            Orange Jeans
                          </Text>
                          <Text size="md" as="p">
                            $299
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-center w-[42%] sm:w-full gap-4">
                      <div className="flex flex-col items-center justify-start h-[107px] w-[107px]">
                        <Img
                          src="images/img_placeholder_18.png"
                          alt="orange_jeans"
                          className="w-[107px] md:h-auto object-cover"
                        />
                      </div>
                      <div className="flex flex-row justify-start w-[59%]">
                        <div className="flex flex-col items-start justify-start w-full gap-2">
                          <Text size="md" as="p" className="!text-gray-800">
                            Classic Watch
                          </Text>
                          <Text size="md" as="p">
                            $299
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center w-[14%] md:w-full gap-2">
                <Text as="p" className="!text-gray-800 !font-medium">
                  View all
                </Text>
                <Img src="images/img_arrow_gray_800.svg" alt="view_all_one" className="h-[31px] w-[32px]" />
              </div>
            </div>
            <div className="flex flex-col items-center justify-start w-[50%] md:w-full mt-1 gap-[30px] md:mt-0">
              <Heading size="md" as="h3">
                Popular This Week
              </Heading>
              <div className="flex flex-row justify-start w-full p-6 sm:p-5">
                <div className="flex flex-col items-center justify-start w-[91%] gap-[120px] my-[19px]">
                  <div className="flex flex-row sm:flex-col justify-between items-center w-[99%] md:w-full sm:gap-10">
                    <div className="flex flex-row justify-start items-center w-[38%] sm:w-full gap-4">
                      <div className="flex flex-col items-center justify-start h-[107px] w-[107px]">
                        <Img
                          src="images/img_placeholder_19.png"
                          alt="placeholder_one"
                          className="w-[107px] md:h-auto object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-[52%] gap-4">
                        <div className="flex flex-col items-start justify-start w-full gap-2">
                          <Text size="md" as="p" className="!text-gray-800">
                            Blue Jeans
                          </Text>
                          <Text size="md" as="p">
                            $299
                          </Text>
                        </div>
                        <RatingBar
                          value={4}
                          isEditable={true}
                          color="#f6f7fb"
                          activeColor="#fae952"
                          size={16}
                          className="flex justify-between"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-center w-[39%] sm:w-full gap-4">
                      <div className="flex flex-col items-center justify-start h-[107px] w-[107px]">
                        <Img
                          src="images/img_placeholder_20.png"
                          alt="placeholder"
                          className="w-[107px] md:h-auto object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-[53%] gap-4">
                        <div className="flex flex-col items-start justify-start w-full gap-2">
                          <Text size="md" as="p" className="!text-gray-800">
                            Wristwatch
                          </Text>
                          <Text size="md" as="p">
                            $299
                          </Text>
                        </div>
                        <RatingBar
                          value={4}
                          isEditable={true}
                          color="#f6f7fb"
                          activeColor="#fae952"
                          size={16}
                          className="flex justify-between"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row sm:flex-col justify-between w-full sm:gap-10">
                    <div className="flex flex-row justify-start items-center w-[45%] sm:w-full gap-4">
                      <div className="flex flex-col items-center justify-start h-[107px] w-[107px]">
                        <Img
                          src="images/img_placeholder_21.png"
                          alt="placeholder"
                          className="w-[107px] md:h-auto object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-[60%] gap-4">
                        <div className="flex flex-col items-start justify-center w-full gap-[5px]">
                          <Text size="md" as="p" className="mt-0.5 !text-gray-800">
                            Elegant Jacket
                          </Text>
                          <Text size="md" as="p">
                            $299
                          </Text>
                        </div>
                        <RatingBar
                          value={4}
                          isEditable={true}
                          color="#f6f7fb"
                          activeColor="#fae952"
                          size={16}
                          className="flex justify-between"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-center w-[39%] sm:w-full gap-4">
                      <div className="flex flex-col items-center justify-start h-[107px] w-[107px]">
                        <Img
                          src="images/img_placeholder_22.png"
                          alt="placeholder"
                          className="w-[107px] md:h-auto object-cover"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-[54%] gap-4">
                        <div className="flex flex-col items-start justify-center w-full gap-[5px]">
                          <Text size="md" as="p" className="mt-px !text-gray-800">
                            Gray Watch
                          </Text>
                          <Text size="md" as="p">
                            $299
                          </Text>
                        </div>
                        <RatingBar
                          value={4}
                          isEditable={true}
                          color="#f6f7fb"
                          activeColor="#fae952"
                          size={16}
                          className="flex justify-between"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center w-[14%] md:w-full gap-2">
                <Text as="p" className="!text-gray-800 !font-medium">
                  View all
                </Text>
                <Img src="images/img_arrow_gray_800.svg" alt="arrow_one" className="h-[31px] w-[32px]" />
              </div>
            </div>
          </div>
        </div>
        <footer className="flex flex-col items-center justify-center w-full mt-[100px]">
          <div className="flex flex-row justify-center w-full">
            <div className="flex flex-row md:flex-col justify-between w-full px-36 md:gap-10 md:px-5 bg-gray-50">
              <div className="flex flex-row md:flex-col justify-start items-center w-[44%] md:w-full gap-8 md:gap-5">
                <div className="flex flex-row justify-between items-center w-[55%] md:w-full pr-16 py-16 md:pr-5 md:py-5">
                  <Img src="images/img_truck.svg" alt="truck_one" className="h-[48px] w-[48px]" />
                  <div className="flex flex-col items-start justify-start w-[66%] mr-[29px] gap-1.5 sm:mr-5">
                    <Heading size="xs" as="h6">
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
                <div className="flex flex-row justify-between items-center w-[42%] md:w-full">
                  <Img src="images/img_card.svg" alt="card_one" className="h-[48px] w-[48px]" />
                  <div className="flex flex-col items-start justify-start w-[73%] pt-0.5 gap-[5px]">
                    <Heading size="xs" as="h6">
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
              </div>
              <div className="flex flex-row md:flex-col justify-start w-[50%] md:w-full gap-8 md:gap-5">
                <div className="flex flex-row justify-between items-center w-[48%] md:w-full pr-16 py-16 md:pr-5 md:py-5">
                  <Img src="images/img_broken.svg" alt="broken_one" className="h-[48px] w-[48px]" />
                  <div className="flex flex-col items-start justify-start w-[66%] mr-[29px] pt-0.5 gap-[5px] sm:mr-5">
                    <Heading size="xs" as="h6">
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
                <div className="flex flex-row justify-between items-center w-[48%] md:w-full pr-16 py-16 md:pr-5 md:py-5">
                  <Img src="images/img_support.svg" alt="support_one" className="h-[48px] w-[48px]" />
                  <div className="flex flex-col items-start justify-start w-[66%] mr-[29px] pt-0.5 gap-[5px] sm:mr-5">
                    <Heading size="xs" as="h6">
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
            </div>
          </div>
          <div className="flex flex-row justify-center w-full mt-[217px] ml-[-1920px] md:ml-0">
            <div className="flex flex-row justify-center w-full p-[30px] sm:p-5 bg-gray-800">
              <div className="flex flex-col items-center justify-start w-[88%] mt-[31px] gap-[97px] mx-[113px] md:mx-5">
                <div className="flex flex-row md:flex-col justify-between items-start w-full md:gap-10">
                  <div className="flex flex-col items-start justify-start w-[26%] md:w-full gap-[31px]">
                    <div className="flex flex-row justify-start items-start gap-2">
                      <Img src="images/img_group_19_white_a700.svg" alt="image_one" className="h-[24px] mt-1" />
                      <Heading as="h4" className="!text-white-A700">
                        Elliye{" "}
                      </Heading>
                    </div>
                    <div className="flex flex-row justify-start">
                      <Text as="p" className="leading-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor .
                      </Text>
                    </div>
                    <div className="flex flex-col items-center justify-start w-full gap-4">
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
                  </div>
                  <div className="flex flex-row md:flex-col justify-start items-start w-[58%] md:w-full gap-8 md:gap-5">
                    <div className="flex flex-col items-start justify-start w-[27%] md:w-full gap-[33px]">
                      <Heading as="h4" className="!text-white-A700">
                        Product Links
                      </Heading>
                      <div className="flex flex-col items-start justify-center gap-[15px]">
                        <Text as="p" className="mt-px">
                          Categories
                        </Text>
                        <Text as="p">New Arrival</Text>
                        <Text as="p">Features</Text>
                        <Text as="p">Collections</Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-center w-[27%] md:w-full gap-[29px]">
                      <Heading as="h4" className="mt-0.5 !text-white-A700">
                        Company
                      </Heading>
                      <div className="flex flex-col items-start justify-start">
                        <Text as="p">About</Text>
                        <Text as="p" className="mt-3">
                          Blog
                        </Text>
                        <a href="#" className="mt-[7px]">
                          <Text as="p">Careers</Text>
                        </a>
                        <Text as="p" className="mt-[9px]">
                          Services
                        </Text>
                        <a href="#" className="mt-3">
                          <Text as="p">Privacy Policy</Text>
                        </a>
                        <a href="#" className="mt-[7px]">
                          <Text as="p">Terms of service</Text>
                        </a>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-[41%] md:w-full gap-[30px]">
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
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
