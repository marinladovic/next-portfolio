import { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';

function HeaderMenu() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setIsNavOpen(!isNavOpen);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setIsNavOpen(!isNavOpen);
    setAnchorEl(null);
  };

  return (
    <div className="md:!hidden">
      <Button
        id="header-button"
        aria-controls={open ? 'header-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className={`z-40 block hamburger md:hidden focus:outline-none ${
          isNavOpen ? 'openClass' : ''
        }`}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </Button>
      <Menu
        id="header-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className="menu__header"
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <a href="#projects">Projects</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="#about">About Me</a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a href="#contact">Contact</a>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default HeaderMenu;
