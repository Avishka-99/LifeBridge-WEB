import React, {useEffect, useState} from 'react';
import MenuItem from './MenuItem';
import '../css/Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import StoreIcon from '@mui/icons-material/Store';
import WindowIcon from '@mui/icons-material/Window';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import PeopleIcon from '@mui/icons-material/People';
import AddHomeIcon from '@mui/icons-material/AddHome';
import InfoIcon from '@mui/icons-material/Info';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import GroupsIcon from '@mui/icons-material/Groups';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import LogoutIcon from '@mui/icons-material/Logout';
import EuroIcon from '@mui/icons-material/Euro';
import EditCalendarIcon from '@mui/icons-material/EditCalendar';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import MedicationIcon from '@mui/icons-material/Medication';
import {useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {FcAbout} from 'react-icons/fc';
import TodayIcon from '@mui/icons-material/Today';
import GradingIcon from '@mui/icons-material/Grading';
import EventSeatIcon from '@mui/icons-material/EventSeat';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
const ShowSidebar = (props) => {
	const navigate = useNavigate();
	var user = localStorage.getItem('type');
	const [role, setRole] = useState('delivery');
	const [Active, setActive] = useState(1);
	const [expanded, setExpanded] = useState(true);
	const toggleSidebar = () => {
		setExpanded(!expanded);
	};
	/*useEffect(() => {
    navigate('/order');
  })*/
	//console.log(user);
	const doctor = [{id: 1, icon: <HomeIcon sx={{fontSize: 40, fill: '#6F767F'}} />, label: 'Home', link: 'home', index: '1'}];
	const admin = [
		{id: 1, icon: <HomeIcon sx={{fontSize: 40, fill: '#6F767F'}} />, label: 'Home', link: 'home', index: '1'},
		{id: 2, icon: <GroupsIcon sx={{fontSize: 40, fill: '#6F767F'}} />, label: 'Staff', link: 'staff', index: '2'},
		{id: 3, icon: <MedicalInformationIcon sx={{fontSize: 40, fill: '#6F767F'}} />, label: 'Doctor', link: 'doctor', index: '3'},
	];
	const pharmacy = [
		{id: 1, icon: <HomeIcon sx={{fontSize: 40, fill: '#6F767F'}} />, label: 'Home', link: 'home', index: '1'},
		{id: 2, icon: <MedicationIcon sx={{fontSize: 40, fill: '#6F767F'}} />, label: 'Medicine', link: 'medicine', index: '2'},
	];
	const cashier = [
		{id: 1, icon: <HomeIcon sx={{fontSize: 40, fill: '#6F767F'}} />, label: 'Home', link: 'home', index: '1'},
		{id: 2, icon: <TodayIcon sx={{fontSize: 40, fill: '#6F767F'}} />, label: 'Appoinments', link: 'appoinment', index: '2'},
	];
	//console.log(restaurant[0].icon.props.sx.fontSize)
	const navigateTo = (page, index) => {
		setActive(index);
		if (page == 'logout') {
			setActive(1);
			localStorage.clear('type');
		}
		navigate('/' + page);
	};
	if (props.type == 'Admin') {
		return (
			<div className={`sidebar ${expanded ? 'expanded' : 'collapsed'}`} onSelect={(item) => console.log(item)}>
				<div className='expand-toggle' onClick={toggleSidebar}>
					{expanded ? <MenuOutlinedIcon /> : <MenuOutlinedIcon />}
				</div>
				<div>
					{admin.map((item) => (
						<MenuItem key={item.id} icon={item.icon} labelMargin={expanded ? {marginLeft: '10%'} : {marginLeft: '0%'}} label={expanded ? item.label : null} style={expanded ? {justifyContent: 'flex-start', marginLeft: '15%'} : {justifyContent: 'center'}} fun={navigateTo} link={item.link} index={item.index} active={Active} />
					))}
				</div>
			</div>
		);
	} else if (props.type == 'Pharmacy') {
		return (
			<div className={`sidebar ${expanded ? 'expanded' : 'collapsed'}`} onSelect={(item) => console.log(item)}>
				<div className='expand-toggle' onClick={toggleSidebar}>
					{expanded ? <MenuOutlinedIcon /> : <MenuOutlinedIcon />}
				</div>
				<div>
					{pharmacy.map((item) => (
						<MenuItem key={item.id} icon={item.icon} labelMargin={expanded ? {marginLeft: '10%'} : {marginLeft: '0%'}} label={expanded ? item.label : null} style={expanded ? {justifyContent: 'flex-start', marginLeft: '15%'} : {justifyContent: 'center'}} fun={navigateTo} link={item.link} index={item.index} active={Active} />
					))}
				</div>
			</div>
		);
	} else if (props.type == 'Doctor') {
		return (
			<div className={`sidebar ${expanded ? 'expanded' : 'collapsed'}`} onSelect={(item) => console.log(item)}>
				<div className='expand-toggle' onClick={toggleSidebar}>
					{expanded ? <MenuOutlinedIcon /> : <MenuOutlinedIcon />}
				</div>
				<div>
					{doctor.map((item) => (
						<MenuItem key={item.id} icon={item.icon} labelMargin={expanded ? {marginLeft: '10%'} : {marginLeft: '0%'}} label={expanded ? item.label : null} style={expanded ? {justifyContent: 'flex-start', marginLeft: '15%'} : {justifyContent: 'center'}} fun={navigateTo} link={item.link} index={item.index} active={Active} />
					))}
				</div>
			</div>
		);
	} else if (props.type == 'Cashier') {
		return (
			<div className={`sidebar ${expanded ? 'expanded' : 'collapsed'}`} onSelect={(item) => console.log(item)}>
				<div className='expand-toggle' onClick={toggleSidebar}>
					{expanded ? <MenuOutlinedIcon /> : <MenuOutlinedIcon />}
				</div>
				<div>
					{cashier.map((item) => (
						<MenuItem key={item.id} icon={item.icon} labelMargin={expanded ? {marginLeft: '10%'} : {marginLeft: '0%'}} label={expanded ? item.label : null} style={expanded ? {justifyContent: 'flex-start', marginLeft: '15%'} : {justifyContent: 'center'}} fun={navigateTo} link={item.link} index={item.index} active={Active} />
					))}
				</div>
			</div>
		);
	}
};
export default function Sidebar(props) {
	const [showSidebar, setShowSidebar] = useState(true);

	const toggleSidebar = () => {
		setShowSidebar(!showSidebar);
	};
	return (
		<>
			{/* <div onClick={toggleSidebar} className='sidebarButton'>Hello</div> */}
			{showSidebar && <ShowSidebar type={props.type} />}
		</>
	);
}
