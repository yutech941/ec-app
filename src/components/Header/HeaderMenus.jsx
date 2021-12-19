import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcons from "@material-ui/icons/ShoppingCart";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import MenuIcon from "@material-ui/icons/Menu";

const HeaderMenus = () => {
  return (
    <>
      <IconButton>
        <Badge badgeContent={3} color="secondary">
          <ShoppingCartIcons />
        </Badge>
      </IconButton>
      <IconButton>
        <FavoriteBorderIcon />
      </IconButton>
      <IconButton>
        <MenuIcon />
      </IconButton>
    </>
  );
};

export default HeaderMenus;
