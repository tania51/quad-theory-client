import { Input } from '@material-tailwind/react'
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import { IoIosArrowDown } from "react-icons/io";
import { RiUserLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import bannerImage from "../public/Image1.png"
import footerImage from "../public/Image2.png"
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Zoom } from 'swiper/modules';
import "./App.css"


function App() {
  const [allFood, setAllFood] = useState([])

  useEffect(() => {
    axios.get('http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10')
      .then(res => {
        setAllFood(res.data.Items)
      })
      .then(err => {
        console.log('error', err.message);
      })
  }, [])

  console.log(allFood);


  return (
    <>
      <div>
        <div className='px-3 lg:px-20 py-10 bg-[#eeeff0]'>
          {/* header with menu */}
          <div className='flex items-center justify-between'>
            {/* website logo */}
            <div>
              <h3 className='text-xl md:text-3xl text-gray-950 font-bold'>pti.</h3>
            </div>

            {/* search field */}
            <div className='flex items-center'>
              <div className='flex px-3 items-center'>
                <CiSearch className='text-orange-600 font-bold text-xl absolute ml-3 z-[9999]' />
                <Input type='search' className='w-[500px] lg:w-[600px] max-w-[900px] bg-white p-2 rounded-lg pl-10' placeholder='Search Audiobook' />
              </div>

              {/* menu */}
              <div>
                <Menu
                  animate={{
                    mount: { y: 0 },
                    unmount: { y: 25 },
                  }}
                >
                  <MenuHandler className="flex gap-3 items-center text-gray-950 bg-white rounded-lg px-7 py-2">
                    <Button className='uppercase'> Menu <span><IoIosArrowDown className='text-orange-600 font-semibold' /></span></Button>

                  </MenuHandler>
                  <MenuList className='grid grid-cols-1 space-y-1 py-4 text-gray-950 rounded-lg border-white'>
                    <MenuItem className='hover:text-orange-600 hover:bg-[#e7e9ec]'>Menu Item 1</MenuItem>
                    <MenuItem className='hover:text-orange-600 hover:bg-[#e7e9ec]'>Menu Item 2</MenuItem>
                    <MenuItem className='hover:text-orange-600 hover:bg-[#e7e9ec]'>Menu Item 3</MenuItem>
                  </MenuList>
                </Menu>
              </div>
            </div>

            {/* user icon */}
            <div className='rounded-full bg-orange-600 p-2 hidden md:inline-block'>
              <RiUserLine className='text-white text-2xl' />
            </div>
          </div>

          {/* banner */}
          <div className='md:bg-[#f99f1c] md:flex justify-center rounded-3xl my-14 md:my-32 items-center'>
            <div className='text-gray-900 text-center md:text-left md:text-white space-y-6 pl-10 lg:pl-20'>
              <h3 className='text-2xl md:text-4xl font-bold md:font-medium'>Deliver Food To Your <br />Door Stepl</h3>
              <p className='md:text-xl'>Authentic Foodl, Quick Service, Fast Delivery</p>
            </div>
            <div className='bg-[#fd9460] md:bg-transparent rounded-2xl mt-14 md:rounded-none md:mt-0'>
              <img src={bannerImage} alt="Banner Image" />
            </div>
          </div>

          {/* body content */}
          <div className='mb-32'>
            {/* Popular item */}
            <div className='mb-10 lg:mb-14'>
              <div className='flex justify-between -mb-10'>
                <h4 className='text-xl pb-1 text-gray-900 font-semibold'>Popular</h4>
                <h4 className='hidden md:inline-block text-xl pb-1 text-orange-600 font-base font-medium mr-14'>Add More</h4>
              </div>
              <div>

                {/* popular slider for deskto */}
                <div className='hidden md:block'>
                  <Swiper
                    style={{
                      '--swiper-navigation-color': '#fff',
                      '--swiper-pagination-color': '#fff',
                    }}
                    zoom={true}
                    navigation={true}
                    slidesPerView={5}
                    spaceBetween={30}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Zoom, Navigation, Pagination]}
                    className="mySwiper"
                  >
                    {
                      allFood && allFood.map(singleFood => <SwiperSlide key={singleFood?.ID}>
                        <div className="swiper-zoom-container flex flex-col text-gray-900 single-blog">
                          <div className='image-effect rounded-xl shadow-md shadow-gray-800'>
                            <img className='h-72' src={singleFood?.ImageUrl} alt={singleFood?.Name} />
                          </div>
                          <p className='pt-2'>{singleFood?.Name}</p>
                        </div>
                      </SwiperSlide>)
                    }
                  </Swiper>
                </div>

                {/* popular slider for mobile */}
                <div className='md:hidden'>
                  <Swiper
                    style={{
                      '--swiper-navigation-color': '#fff',
                      '--swiper-pagination-color': '#fff',
                    }}
                    zoom={true}
                    navigation={true}
                    slidesPerView={3}
                    spaceBetween={18}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Zoom, Navigation, Pagination]}
                    className="mySwiper"
                  >
                    {
                      allFood && allFood.map(singleFood => <SwiperSlide key={singleFood?.ID}>
                        <div className="swiper-zoom-container flex flex-col text-gray-900 single-blog">
                          <div className='image-effect rounded-xl shadow-md shadow-gray-800'>
                            <img className='h-44 md:h-72' src={singleFood?.ImageUrl} alt={singleFood?.Name} />
                          </div>
                          <p className='pt-2'>{singleFood?.Name}</p>
                        </div>
                      </SwiperSlide>)
                    }
                  </Swiper>
                </div>

              </div>
            </div>

            {/* Recommended item */}
            <div>
              <div className='flex justify-between -mb-10'>
                <h4 className='text-xl pb-1 text-gray-900 font-semibold'>Recommended</h4>
                <h4 className='hidden md:inline-block text-xl pb-1 text-orange-600 font-base font-medium mr-14'>Add More</h4>
              </div>
              <div>
                {/* Recommended item for desktop */}
                <div className='hidden md:block'>
                  <Swiper
                    style={{
                      '--swiper-navigation-color': '#fff',
                      '--swiper-pagination-color': '#fff',
                    }}
                    zoom={true}
                    navigation={true}
                    slidesPerView={5}
                    spaceBetween={30}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Zoom, Navigation, Pagination]}
                    className="mySwiper"
                  >
                    {
                      allFood && allFood.map(singleFood => <SwiperSlide key={singleFood?.ID}>
                        <div className="swiper-zoom-container flex flex-col text-gray-900 single-blog">
                          <div className='image-effect rounded-xl shadow-md shadow-gray-800'>
                            <img className='h-72' src={singleFood?.ImageUrl} alt={singleFood?.Name} />
                          </div>
                          <p className='pt-2'>{singleFood?.Name}</p>
                        </div>
                      </SwiperSlide>)
                    }
                  </Swiper>
                </div>

                {/* Recommended item for mobile */}
                <div className='md:hidden'>
                  <Swiper
                    style={{
                      '--swiper-navigation-color': '#fff',
                      '--swiper-pagination-color': '#fff',
                    }}
                    zoom={true}
                    navigation={true}
                    slidesPerView={3}
                    spaceBetween={18}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Zoom, Navigation, Pagination]}
                    className="mySwiper"
                  >
                    {
                      allFood && allFood.map(singleFood => <SwiperSlide key={singleFood?.ID}>
                        <div className="swiper-zoom-container flex flex-col text-gray-900 single-blog">
                          <div className='image-effect rounded-xl shadow-md shadow-gray-800'>
                            <img className='h-44 md:h-72' src={singleFood?.ImageUrl} alt={singleFood?.Name} />
                          </div>
                          <p className='pt-2'>{singleFood?.Name}</p>
                        </div>
                      </SwiperSlide>)
                    }
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* footer */}
        <footer className='bg-[#f99f1c] px-3 lg:px-20 py-5 md:flex justify-between absolute w-full'>
          <div className='flex flex-col justify-evenly lg:pl-24'>

            {/* email field for desktop */}
            <div className='hidden md:flex px-3 items-center relative top-10'>
              <Input type='email' className='w-[400px] max-w-[900px] bg-white px-3 py-5 rounded-2xl pl-5 h-12 relative border-none' placeholder='Enter Your Email' />
              {/* subscribe btn */}
              <div className='h-10 pt-1'>
                <Button variant="text" className="flex items-center gap-2 absolute -ml-36 rounded-2xl bg-[#fc6011] px-5 py-2 text-white font-normal capitalize">
                  Subscribe{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </div>
            </div>

            {/* email field for mobile */}
            <div className='pt-10 md:hidden flex px-3 items-center relative top-3'>
              <Input type='email' className='w-full max-w-[900px] bg-white px-3 py-5 rounded-2xl pl-5 h-12 relative border-none' placeholder='Enter Your Email' />
              {/* subscribe btn */}
              <div className='h-10 pt-1'>
                <Button variant="text" className="flex items-center gap-2 absolute -ml-36 rounded-sm lg:rounded-2xl lg:bg-[#fc6011] px-5 py-2 text-orange-600 lg:text-white font-semibold lg:font-normal capitalize">
                  Subscribe{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                    />
                  </svg>
                </Button>
              </div>
            </div>

            {/* copywrite for desktop */}
            {/* website logo */}
            <div className='hidden lg:inline-block pt-20 space-y-7'>
              <h3 className='text-3xl text-gray-950 font-bold'>pti<span className='text-orange-600'>.</span></h3>
              <div className='flex justify-between items-center gap-20'>
                <p className='text-base text-gray-950 font-bold'>Copyright Tripp	&copy;.All Right Reserved</p>
                {/* social media logo */}
                <div className='flex gap-5'>
                  <div className='rounded-full bg-white hover:bg-gray-200 p-2 cursor-pointer'>
                    <FaGoogle className='text-orange-600 text-2xl' />
                  </div>
                  <div className='rounded-full bg-white hover:bg-gray-200 p-2 cursor-pointer'>
                    <FaTwitter className='text-orange-600 text-2xl' />
                  </div>
                  <div className='rounded-full bg-white hover:bg-gray-200 p-2 cursor-pointer'>
                    <IoLogoInstagram className='text-orange-600 text-2xl' />
                  </div>
                </div>
              </div>
            </div>

            {/* copywrite for mobile */}
            {/* website logo */}
            <div className='lg:hidden py-20 space-y-7 flex justify-center text-center'>
              {/* social media logo */}
              <div className='space-y-10'>
                <div className='flex gap-5 justify-center'>
                  <div className='rounded-full bg-white p-2'>
                    <FaGoogle className='text-orange-600 text-2xl' />
                  </div>
                  <div className='rounded-full bg-white p-2'>
                    <FaTwitter className='text-orange-600 text-2xl' />
                  </div>
                  <div className='rounded-full bg-white p-2'>
                    <IoLogoInstagram className='text-orange-600 text-2xl' />
                  </div>
                </div>
                <h3 className='text-3xl text-gray-950 font-bold'>pti<span className='text-orange-600'>.</span></h3>
                <div className='flex justify-between items-center gap-20'>
                  <p className='text-base text-gray-950 font-bold'>Copyright Tripp	&copy;.All Right Reserved</p>

                </div>
              </div>
            </div>


          </div>

          {/* footer image */}
          <div className='hidden lg:inline-block'>
            <img src={footerImage} alt="Footer Image" />
          </div>
        </footer>

      </div>
    </>
  )
}

export default App
