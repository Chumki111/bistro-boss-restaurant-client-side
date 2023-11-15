import { useState } from "react";
import Cover from "../../Shared/Cover/Cover";
import shopImage from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../Hooks/useMenu";

import OrderTab from "./OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const OurShop = () => {
    const categories = ['salad', 'pizza', 'soups', 'desserts', 'drinks']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menus] = useMenu();

    
    const drinkItems = menus.filter(item => item.category === 'drinks');
    const dessertItems = menus.filter(item => item.category === 'dessert');
    const pizzaItems = menus.filter(item => item.category === 'pizza');
    const saladItems = menus.filter(item => item.category === 'salad');
    const soupItems = menus.filter(item => item.category === 'soup');
    return (
        <div className="">
            <Helmet>
                <title>Bistro-Boss-Restaurant | Our Shop</title>

            </Helmet>
            <Cover img={shopImage} title='OUR SHOP' subTitle='Would you like to try a dish?'></Cover>
            <div className="px-2 md:px-8 lg:px-14">
                <Tabs default={false} defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList className='font-bold uppercase items-center text-[#BB8506] justify-center flex my-16'>
                        <Tab className="border-none mr-4 cursor-pointer ">Salad</Tab>
                        <Tab className="border-none mr-4 cursor-pointer">pizza</Tab>
                        <Tab className="border-none mr-4 cursor-pointer">soups</Tab>
                        <Tab className="border-none mr-4 cursor-pointer">desserts</Tab>
                        <Tab className="border-none cursor-pointer">drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab items={saladItems}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizzaItems}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soupItems}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={dessertItems}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinkItems}></OrderTab>
                    </TabPanel>

                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;