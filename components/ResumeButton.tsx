import { Button, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import { GoTriangleDown } from 'react-icons/go';
import { HiDownload } from 'react-icons/hi';
import { downloadResumeEn, downloadResumeHr } from '../util/resume';

function ResumeButton() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="resume-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="!flex !items-center !gap-x-1 !bg-white/10 !text-gray-400 !capitalize !px-4 !py-1 !rounded !text-sm hover:!bg-white/20 !transition !duration-300"
      >
        My CV
        <GoTriangleDown />
      </Button>
      <Menu
        id="resume-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className="menu__resume"
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <a
            className="flex gap-x-2 items-center text-light italic"
            onClick={() => downloadResumeHr()}
          >
            <HiDownload /> Download my CV (HR, .pdf)
          </a>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <a
            className="flex gap-x-2 items-center text-light italic"
            onClick={() => downloadResumeEn()}
          >
            <HiDownload /> Download my CV (En, .pdf)
          </a>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default ResumeButton;
