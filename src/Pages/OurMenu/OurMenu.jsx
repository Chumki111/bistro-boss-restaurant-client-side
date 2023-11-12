import { Helmet} from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import MenuImage from '../../assets/menu/banner3.jpg'
import useMenu from '../../Hooks/useMenu';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import MenuCaterogy from './MenuCategory/MenuCaterogy';
import desertImage from '../../assets/menu/dessert-bg.jpeg';
import pizzaImage from '../../assets/menu/pizza-bg.jpg';
import saladImage from '../../assets/menu/salad-bg.jpg';
import soupImage from '../../assets/menu/soup-bg.jpg'

const OurMenu = () => {
  const [menus] = useMenu([]);
  const offeredItems = menus.filter(item =>item.category === 'offered');
  const dessertItems = menus.filter(item =>item.category === 'dessert');
  const pizzaItems = menus.filter(item =>item.category === 'pizza');
  const saladItems = menus.filter(item =>item.category === 'salad');
  const soupItems = menus.filter(item =>item.category === 'soup');
    return (
        <div>
             <Helmet>
        <title>Bistro-Boss-Restaurant | Our Menu</title>
       
      </Helmet>
      <Cover img={MenuImage} title='Our Menu' subTitle='Would you like to try a dish?'
      ></Cover>
      <SectionTitle subHeading="---Don't miss---" heading="TODAY'S OFFER"></SectionTitle>
      <MenuCaterogy items={offeredItems}></MenuCaterogy>
      <MenuCaterogy items={dessertItems} coverImage={desertImage} title='desserts' subTitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></MenuCaterogy>
      <MenuCaterogy items={pizzaItems} coverImage={pizzaImage} title='pizza' subTitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></MenuCaterogy>
      <MenuCaterogy items={saladItems} coverImage={saladImage} title='soups' subTitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></MenuCaterogy>
      <MenuCaterogy items={soupItems} coverImage={soupImage} title='salads' subTitle='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></MenuCaterogy>
     
        </div>
    );
};

export default OurMenu;