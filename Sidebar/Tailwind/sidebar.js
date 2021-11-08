/*---------------------------NOTE-----------------------------------
    -To use this component you should have Tailwind set-ed up in your project.
        https://tailwindcss.com/docs/guides/create-react-app
    
    -To install the dependencies required to use this component you can run the following command in your project terminal.
        npm install --save @mui/material @mui/icons-material @emotion/react @emotion/styled
-----------------------------NOTE-----------------------------------*/

//Core Imports
import React, {useState} from 'react'
import { Link } from 'react-router-dom'


//Icon Imports
import MenuIcon from '@mui/icons-material/Menu';
import Dashboard from '@mui/icons-material/Dashboard';
// import GoogleIcon from '@mui/icons-material/Google';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PieChartIcon from '@mui/icons-material/PieChart';
import FolderIcon from '@mui/icons-material/Folder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

function SidebarTailwind() {

    //tailwind syles
    const sidebar_wrapper = "sidebar-wrapper min-h-screen w-30 bg-gray-900 fixed top-0 left-0 py-2 px-4 flex flex-col text-left rounded-r-xl transition-all"
    const ul_wrapper = "nav_list text-white transition-all"
    const list_container_wrapper= "flex flex-col justify-center relative flex-grow transition-all"
    const list_item_wrapper = "my-4 py-4 px-4 hover:bg-white hover:text-gray-900 rounded-lg transition-all"
    const menu_button_wrapper = 'menu py-4 px-4 cursor-pointer w-min hover:bg-white hover:text-gray-900 rounded-full transition-all'
    const logout_btn_wrapper = "py-4 px-4 w-min logout text-red-500 justify-self-end relative rounded-full hover:bg-red-500 hover:text-white transition-all"

    //drawer logic
    const [state, setState] = useState(false)

    const toggleState = () => {
        setState(!state)
    }

    return (
        <div className={`${sidebar_wrapper} ${state?'w-60':''}`}>
            <div className="logo-content text-white transition-all">
                {/* <div className="logo py-6">
                    <GoogleIcon />
                    Your Logo here
                </div> */}
                <div className={`${menu_button_wrapper}`} onClick={toggleState}><MenuIcon sx={{ fontSize: 40 }}/></div>
            </div>
            <div className={`${list_container_wrapper}`}>
                <ul className={`${ul_wrapper}`}>
                    <li className={`${list_item_wrapper} ${state?'':'hidden'}`}><Link to="#"><Dashboard /><span className='link-text px-2'>Dashboard</span></Link></li>
                    <li className={`${list_item_wrapper} ${state?'':'hidden'}`}><Link to="#"><PersonIcon /><span className='link-text px-2'>User</span></Link></li>
                    <li className={`${list_item_wrapper} ${state?'':'hidden'}`}><Link to="#"><EmailIcon /><span className='link-text px-2'>Messages</span></Link></li>
                    <li className={`${list_item_wrapper} ${state?'':'hidden'}`}><Link to="#"><PieChartIcon /><span className='link-text px-2'>Analytics</span></Link></li>
                    <li className={`${list_item_wrapper} ${state?'':'hidden'}`}><Link to="#"><FolderIcon /><span className='link-text px-2'>File Manager</span></Link></li>
                    <li className={`${list_item_wrapper} ${state?'':'hidden'}`}><Link to="#"><ShoppingCartIcon /><span className='link-text px-2'></span>Orders</Link></li>
                    <li className={`${list_item_wrapper} ${state?'':'hidden'}`}><Link to="#"><FavoriteIcon /><span className='link-text px-2'>Saved</span></Link></li>
                    <li className={`${list_item_wrapper} ${state?'':'hidden'}`}><Link to="#"><SettingsIcon /><span className='link-text px-2'>Settings</span></Link></li>
                </ul>
            </div>
            <div className={`${logout_btn_wrapper}`}><Link to="#"><LogoutIcon /></Link></div>
        </div>
    )
}

export default SidebarTailwind