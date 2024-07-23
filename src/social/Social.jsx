import { TiSocialLinkedinCircular } from "react-icons/ti";
import { TiSocialGithubCircular } from "react-icons/ti";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialFacebookCircular } from "react-icons/ti";

const Social = () => {
  return (
    <section className='container_icon flex mt-[54px] w-full justify-center'>
                {/* icon linkedin social */}
                <a 
                href="https://www.linkedin.com/in/fernando-perez-florez/" 
                target='blank_'
                className='socialIcon mr-3'
                >
                    <TiSocialLinkedinCircular className='icon text-5xl text-white'/>
                </a>

                {/* icon github social */}
                <a 
                href="https://github.com/Nano1408" 
                target='blank_' 
                className='socialIcon mr-3'
                >
                    <TiSocialGithubCircular className='icon text-5xl text-white'/>
                </a>

                {/* icon instagram social */}
                <a 
                href="https://www.instagram.com/fernadev14/" 
                target='blank_' 
                className='socialIcon mr-3'
                >
                    <IoLogoInstagram className='icon text-5xl text-white'/>
                </a>

                {/* icon facebook social */}
                <a 
                href="https://www.facebook.com/fernando.pf.3956" 
                target='blank' 
                className='socialIcon mr-3'
                >
                    <TiSocialFacebookCircular className='icon text-5xl text-white'/>
                </a>
            </section>
  )
}

export default Social
