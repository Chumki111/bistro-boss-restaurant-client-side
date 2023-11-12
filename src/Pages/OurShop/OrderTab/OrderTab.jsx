import FoodCard from "../../../Components/FoodCard/FoodCard";
import PropTypes from 'prop-types';

const OrderTab = ({items}) => {
    return (
        <div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                   {
                        items?.map(item => <FoodCard item={item} key={item._id}></FoodCard>)
                    }
                   </div>
        </div>
    );
};
OrderTab.propTypes={
    items:PropTypes.array
}
export default OrderTab;