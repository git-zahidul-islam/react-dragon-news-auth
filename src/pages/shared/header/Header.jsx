import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col items-center pt-4'>
            <div>
                <img src={logo} alt="" />
            </div>
            <p className='text-xl font-semibold'>Journalism Without Fear or Favour</p>
            <p className='text-2xl font-bold'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;