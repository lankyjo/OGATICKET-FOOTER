import { useState } from 'react';
import logo from '/image.webp'
import { FaFacebookF, FaApple } from "react-icons/fa";
import { FaXTwitter, FaLinkedinIn, FaInstagram, FaLocationDot} from "react-icons/fa6";
import ModalSection from './ModalSection';
function App() {


  const [isOurCompanyOpen, setIsOurCompanyOpen] = useState(false);
  const [isHelpfulLinksOpen, setIsHelpfulLinksOpen] = useState(false);

  const ourCompanyColumn = [
    { id: 1, linkName: "Events", link: "/" },
    { id: 2, linkName: "FAQs", link: "/" },
    { id: 3, linkName: "About Us", link: "/" },
    { id: 4, linkName: "How it works", link: "/" },
    { id: 5, linkName: "Blog", link: "/" },
  ];
  
  const helpfulLinksColumn = [
    { id: 1, linkName: "Contact Us", link: "/" },
    { id: 2, linkName: "Pricing", link: "/" },
    { id: 3, linkName: "Referral Reward", link: "/" },
  ];

  return (
<footer className="bg-primary flex flex-col gap-5 py-12 px-4 lg:px-8 text-gray-200">

  <div  className='flex flex-col gap-4 md:flex-row md:gap-2 lg:gap-0 md:items-start md:border-b-2 md:border-gray-400 pb-6'>
    <div id="socialLinksSection" className=" w-full flex flex-col gap-6">

<div id="logo" className='space-y-3'>
<div>
<a href="/">
    <img src={logo} className='max-w-20' />
  </a>
  <p className='max-w-80 text-sm font-semibold text-gray-300'>
  Ogaticket stands as an innovative digital platform crafted to streamline event management.
  </p>
</div>
  <a href="/" className='bg-secondary px-3 py-2 rounded-md inline-block font-semibold lg:max-w-80 lg:grid lg:place-items-center md:hover:scale-105 md:duration-500'>Create Event</a>
</div>

<div id="socialLinks" className='space-y-3'>
  <span>Let's connect</span>
  <div className='flex gap-2'>
    <a href="/" className='text-4xl md:hover:text-secondary md:duration-500'><FaFacebookF /></a>
    <a href="/" className='text-4xl md:hover:text-secondary md:duration-500' ><FaXTwitter /></a>
    <a href="/" className='text-4xl md:hover:text-secondary md:duration-500'><FaInstagram /></a>
    <a href="/" className='text-4xl md:hover:text-secondary md:duration-500'><FaLinkedinIn /></a>
  </div>
</div>

<div id="appLinks" className='space-y-3'>
  <span>Download Our Apps</span>
  <div className='flex gap-3'>

  <a href="/" className='flex items-center px-1 py-2 shadow-[inset_0_0_0_0.5px_white] rounded-md bg-primary-dark md:hover:bg-secondary duration-500'>
      <span className='text-3xl'><FaApple /></span>
      <span>
        <div className='text-[10px] text-gray-400 leading-none'>Download on the</div>
        <div className='text-lg font-semibold leading-none'>App Store</div>
      </span>
    </a>

<a href="/" className='flex items-center px-1 py-2 shadow-[inset_0_0_0_0.5px_white] rounded-md bg-primary-dark md:hover:bg-secondary duration-500'>
      <span className='text-3xl'><img width="30" height="30" src="https://img.icons8.com/fluency/48/google-play.png" alt="google-play"/></span>
      <span>
        <div className='text-[10px] text-gray-400 leading-none'>GET IT ON</div>
        <div className='text-lg font-semibold leading-none'>Google Play</div>
      </span>
    </a>
  </div>
</div>

    </div>

    <div id="modalLinksSection" className=" w-full border-t-[1px] md:border-t-0 border-b-[1px] md:border-b-0 py-2 border-white lg:flex lg:gap-6">
    <ModalSection toggleModal={()=>setIsOurCompanyOpen(!isOurCompanyOpen)} isOpen={isOurCompanyOpen} columnList={ourCompanyColumn} headerTitle={'our Company'}/>
    <ModalSection toggleModal={()=>setIsHelpfulLinksOpen(!isHelpfulLinksOpen)} isOpen={isHelpfulLinksOpen} columnList={helpfulLinksColumn} headerTitle={'helpful Links'}/>
    <div id="officeAddress" className='pt-4 lg:pt-0'>
      <div className='flex flex-col gap-3'>
        <h3 className='leading-none text-base uppercase font-semibold lg:text-lg lg:leading-normal'>Office address</h3>
        <p className='text-sm flex items-center gap-2'>
          <span><FaLocationDot /></span>
        131 Lekki Admiralty way, Lagos, Nigeria. 6064 Riveroak Terr, Atlanta GA, USA.
        </p>
      </div>
    </div>
    </div>
  </div>


  <div className='space-y-3 text-center lg:flex lg:justify-between lg:items-center'>
    <div className=''>
      <a href="/" className='border-r pr-2 hover:underline'>Purchase Policy</a>
      <a href="/" className='pl-2 hover:underline'>Privacy Policy</a>
    </div>
    <small className='block text-gray-400'>© 2025 Ogaticket. All rights reserved.</small>
  </div>
</footer>

  )
}

export default App
