import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';
const Cover = ({img,title,subTitle}) => {
    return (
        <div className=''>

<Parallax
        blur={{ min: -25, max: 25 }}
        bgImage={img}
        bgImageAlt="the menu"
        strength={-200}
    >
        <div className="hero h-[600px]">
                <div className=" "></div>
                <div className="hero-content bg-opacity-60 bg-[#151515B2] text-center text-neutral-content">
                    <div className= "max-w-full md:max-w-5xl px-[70px] md:px-[150px]  md:py-[45px] lg:px-200px] py-[40px] lg:py-[80px] text-center">
                        <h1 className="mb-5 text-4xl md:text-7xl font-bold uppercase">{title}</h1>
                        <p className="mb-5">{subTitle}</p>
                        
                    </div>
                </div>
            </div>
    </Parallax>
           
        </div>
    );
};
Cover.propTypes ={
    img:PropTypes.node
}
Cover.propTypes ={
    title:PropTypes.node
}
Cover.propTypes ={
    subTitle:PropTypes.node
}
export default Cover;