import React from "react"
import Divider from "@material-ui/core/Divider"
import ListItem from '@material-ui/core/ListItem'
import ListItemText from "@material-ui/core/ListItemText"
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import {makeStyles} from '@material-ui/styles'
import { useDispatch } from "react-redux";
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import { deleteProductFromCart } from "../../reducks/users/operations";

const useStyles = makeStyles({
    list: {
        height:128
    },
    image:{
        objectFit:"cover",
        margin:16,
        height:96,
        width:96
    }
});

const  CartListItem = (props) => {
const classes = useStyles();
const dispatch = useDispatch();

const image = props.product.images[0].path;
const name = props.product.name;
const price = props.product.price.toLocaleString();
const size = props.product.size;

return (
    <>
    <ListItem className={classes.list}>
        <ListItemAvatar>
            <img className={classes.image} src={image} alt="商品登録" />
        </ListItemAvatar>
        <div className={classes.text}>
        <ListItemText primary={name} 
            secondary={"サイズ:" + size}
        />
        <ListItemText 
        primary={"¥" + price}
        />
        </div>
        <IconButton onClick={() => dispatch(deleteProductFromCart(props.product))}>
            <DeleteIcon />
        </IconButton>
    </ListItem>
    <Divider/>
    </>
)
}

export default CartListItem