import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
     const [menus,setMenus]  = useState([])
    useEffect(() =>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{
            const popularItems = data.filter(item =>item.category === 'popular')
            setMenus(popularItems)
        } )
    },[])
    console.log(menus);
    return (
        <section className="">
           
           <SectionTitle 
            subHeading={'---Check it out---'}
            heading={'FROM OUR MENU'}
            ></SectionTitle>
           

           <div className='px-2 md:px-8 lg:px-14'>
                <div>
                    {
                        menus?.map(menu => <MenuItem menu={menu} key={menu._id}></MenuItem>)
                    }
                </div>
           </div>
        </section>
    );
};

export default PopularMenu;