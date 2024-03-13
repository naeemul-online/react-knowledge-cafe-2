import images from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center mx-4 p-4 border-b-2'>
            <h2 className='text-4xl font-bold color-[#111]'>React-Knowledge-Cafe-2</h2>
            <img src={images} alt="" />
            
        </div>
    );
};

export default Header;