import React from "react"
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import {makeStyles} from '@material-ui/styles'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import HistoryIcon from '@material-ui/icons/History'
import PersonIcon from '@material-ui/icons/Person'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

const useStyles = makeStyles((theme) => ({
    drawer:{
        [theme.breakpoints.up("sm")]:{
            flexShrink:0,
            width:256
        }
    },
    toolbar:theme.mixins.toolbar,
    drawerPaper:{
        width:256
    },
    searchField:{
        alignItems:"center",
        display:"flex", 
        marginLeft:32,
    }
}));

const ClosableDrawer = (props) => {
    const classes  = useStyles()
    const {container} = props;

    return (
        <nav className={classes.drawer}>
            <Drawer></Drawer>
        </nav>
    )
}

export default ClosableDrawer