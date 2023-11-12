import { Link } from "react-router-dom";
import Cover from "../../../Shared/Cover/Cover";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import PropTypes from 'prop-types';

const MenuCaterogy = ({ items, coverImage, title, subTitle }) => {
    return (
        <div className="pt-10 pb-10">
            {
                title && <Cover img={coverImage} title={title} subTitle={subTitle}
                ></Cover>
            }
            <div className='px-2 md:px-8 lg:px-14'>
                <div className="grid grid-cols-1  md:grid-cols-2 gap-4 my-10 mt-16">
                    {
                        items?.map(menu => <MenuItem menu={menu} key={menu._id}></MenuItem>)
                    }

                    
                </div>
                <div className="flex justify-center items-center">
                        <Link to={`/ourShop/${title}`}><button className=" border-b-2 border-[#1F2937] font-medium text-xl rounded-b py-3 px-3">ORDER YOUR FAVOURITE FOOD</button></Link>
                    </div>
            </div>
        </div>
    );
};
MenuCaterogy.propTypes ={
    items:PropTypes.array
}
MenuCaterogy.propTypes ={
    coverImage:PropTypes.node
}
MenuCaterogy.propTypes ={
    title:PropTypes.node
}
MenuCaterogy.propTypes ={
    subTitle:PropTypes.node
}
export default MenuCaterogy;