import PropTypes from 'prop-types';


const FoodCard = ({item}) => {
    const {name,recipe,image,price} = item
    return (
        <div>
            <div className="card  bg-[#F3F3F3] shadow-sm">
                <figure><img src={image} alt="Shoes" /></figure>
                <p className='absolute right-0 mr-4 mt-4 px-4 py-1 rounded bg-[#111827] text-white'>${price}</p>
                <div className="card-body">
                    <h2 className=" text-[#151515] font-semibold text-2xl text-center">{name}</h2>
                    <p className="">{recipe}</p>
                    <div className="card-actions my-4 justify-center">
                    <button className="border-b-4 bg-[#F3F3F3] text-[#BB8506] border-[#BB8506] shadow-md hover:bg-[#111827]  font-medium text-xl rounded py-3 px-4 uppercase">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
FoodCard.propTypes={
    item:PropTypes.object
}
export default FoodCard;