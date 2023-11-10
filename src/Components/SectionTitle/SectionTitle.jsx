import PropTypes from 'prop-types';
const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='text-center md:w-4/12 mx-auto my-10'>
            <p className='text-[#D99904] text-xl pb-3'>{subHeading}</p>
            <h1 className='text-[#151515] text-4xl uppercase border-y-4 py-4'>{heading}</h1>
        </div>
    );
};
SectionTitle.propTypes ={
    heading :PropTypes.node
}
SectionTitle.propTypes ={
    subHeading :PropTypes.node
}
export default SectionTitle;