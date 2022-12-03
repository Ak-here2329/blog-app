import React, { useState } from 'react';
import {AppBar, Typography, Toolbar, Box, Button, Tabs, Tab} from '@mui/material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { authActions } from '../store';

const Header = () => {

	const dispatch = useDispatch();

	const isLoggedIn = useSelector(state => state.isLoggedIn); 

	const [value, setValue] = useState();

	return <AppBar position="sticky" sx={{  background: "#f09433", 
		background: "-moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)", 
		background: "-webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
		background: "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)", 
		filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 )"
	}}>
		<Toolbar>
    		<Typography variant="h4">BlogsApp</Typography>
			{isLoggedIn && <Box display="flex" marginLeft="auto" marginRight="auto">
				<Tabs value={value} onChange={(e, val) => setValue(val)} textColor="inherit">
					<Tab LinkComponent={Link} to="/blogs" label="All Blogs" />
					<Tab LinkComponent={Link} to="/myBlogs"  label="My Blogs" />
					<Tab LinkComponent={Link} to="/blogs/add"  label="Add Blog" />
				</Tabs>
			</Box>}
			<Box display="flex" marginLeft="auto">
				{!isLoggedIn && <> <Button LinkComponent={Link} to="/auth" color="inherit" variant="outlined" sx={{margin:1, borderRadius:10}}>
					Login
				</Button>
				<Button LinkComponent={Link} to="/auth" color="inherit" variant="outlined" sx={{margin:1, borderRadius:10}}>
					SignUp
				</Button></>}
				{isLoggedIn && <Button 
					onClick={() => dispatch(authActions.logout())}
					LinkComponent={Link} 
					to="/auth"
					color="inherit" 
					variant="outlined" 
					sx={{margin:1, borderRadius:10}}>
						LogOut
				</Button>}
			</Box>
    	</Toolbar>
  	</AppBar>;
}

export default Header;
