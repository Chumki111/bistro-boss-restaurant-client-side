
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";


const PopularMenu = () => {
    const [menus] = useMenu([]);
    const popularItems = menus.filter(item =>item.category === 'popular')
   
    return (
        <section className="">
           
           <SectionTitle 
            subHeading={'---Check it out---'}
            heading={'FROM OUR MENU'}
            ></SectionTitle>
           

           <div className='px-2 md:px-8 lg:px-14'>
                <div className="grid grid-cols-1  md:grid-cols-2 gap-4 my-10">
                    {
                        popularItems?.map(menu => <MenuItem menu={menu} key={menu._id}></MenuItem>)
                    }
                </div>
                <div className="flex justify-center items-center">
                <button className="border-b-2 border-[#1F2937] font-medium text-xl rounded-b py-3 px-3">View Full Menu</button>
                </div>
           </div>
        </section>
    );
};

export default PopularMenu;