import {NavLink} from 'react-router-dom'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

type DrawerLinkProperties = {
    id?: string,
    path: string,
    icon?: any,
    title: string
}

const DrawerLink = ({id, path, icon, title}: DrawerLinkProperties) => {

    const link = {
        textDecoration: 'none', color: '#fff'
    }

    return (
        <NavLink id={id} to={path} style={link} className={({isActive}) =>
            (isActive ? "active-menu" : "")}>
            <ListItemButton style={{backgroundColor: "inherit"}}>
                <ListItemIcon style={{color: "inherit"}}>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={title}/>
            </ListItemButton>
        </NavLink>
    )
}

export default DrawerLink
