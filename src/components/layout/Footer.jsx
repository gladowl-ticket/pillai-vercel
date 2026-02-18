import logo from '../../assets/logo/logo_black.png';
import gladowl from '../../assets/logo/gladowl_logo.webp';

const Footer = () =>{
return(
<section className="pb-20 md:pb-12 pt-8 bg-gray-100">
    <div className="container flex justify-center">

        <div className=" pb-4 border-b border-gray-400 w-full md:w-1/2">
            <div className="flex justify-center ">
                <img className='h-20' src={logo} alt="" />
            </div>
        </div>

    </div>
    <div className="container">
        <div className="flex justify-center items-center text-gray-800 text-sm my-4">
            <div className="flex flex-wrap items-center justify-center text-center gap-1 text-sm">
  <span>© Copyright 2026 | Pillai University | Designed and developed by</span>

  <img
    src={gladowl}
    className="h-5 sm:h-6 invert"
    loading="lazy"
    alt="Gladowl Logo"
  />
</div>

        </div>
    </div>
</section>
);
}

export default Footer;