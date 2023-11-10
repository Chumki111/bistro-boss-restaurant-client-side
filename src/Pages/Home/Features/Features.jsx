import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
import './featured.css'
const Features = () => {
    return (
        <div className="featured-item bg-fixed text-white  my-14">
          <div className="bg-[#151515B2] bg-opacity-30">
          <div className='pt-12 text-white'>
           <SectionTitle 
            heading='FROM OUR MENU'
            subHeading='---Check it out---
            '></SectionTitle>
           </div>

            <div className="md:flex justify-center items-center  pb-16 pt-16 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10 space-y-3">
                    <p>November 10, 2023</p>
                    <p className="uppercase">WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="border-b-2 border-[#FFF] rounded-b py-3 px-3">Read More</button>
                </div>
            </div>
          </div>
        </div>
    );
};

export default Features;