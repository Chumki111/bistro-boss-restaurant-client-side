import PropTypes from 'prop-types';

const MenuItem = ({menu}) => {
    const {image,recipe,price,name} = menu;
    return (
        <div className='flex space-x-4'>
            <img style={{borderRadius:'0 200px 200px 200px'}} className='w-[104px]' src={image} alt="" />
            <div className='text-[#151515]'>
                <h1 className='uppercase text-xl'>{name}------------</h1>
                <p className='text-base'>{recipe}</p>
            </div>
            <p className='text-[#BB8506] text-xl'>${price}</p>
        </div>
    );
};
MenuItem.propTypes ={
    menu : PropTypes.object
}
export default MenuItem;