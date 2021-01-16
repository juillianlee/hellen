import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

import { useState, useRef, useEffect } from "react";

import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const HeaderContainer = styled.header`
  background: #ffffff;
  box-shadow: 0px 10px 40px rgba(89, 120, 150, 0.06);
  height: 80px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 9999;
  
  nav {
    height: 100%;
    width: 100%;
    max-width: 1200px;
    display: flex;
    margin: 0 auto;

    .logo {
      height: 100%;
      width: 130px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "Poppins", sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
      align-items: center;
      color: #0472ab;
    }

    > ul {
      list-style: none;
      display: flex;
      height: 100%;
      align-items: center;
      margin: 0;
      padding: 0 40px;
      border-right: 1px solid #f4f4f4;
      border-left: 1px solid #f4f4f4;

      li {
        min-width: 90px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        a {
          font-family: "Roboto";
          font-style: normal;
          font-weight: 500;
          font-size: 12px;
          line-height: 14px;
          text-align: center;
          text-transform: uppercase;
          color: #181818;
          display: flex;
          flex-direction: column;

          i {
            font-size: 24px;
            margin-bottom: 10px;
          }

          &:hover {
            color: rgba(24, 24, 24, 0.2);
          }
        }
      }
    }

    .wrapper-search {
      padding-left: 30px;
      padding-right: 30px;
      width: 100%;
      max-width: 300px;
      height: 100%;
      display: flex;
      align-items: center;

      .input-search {
        width: 100%;
      }
    }

    .user-info {
      margin-left: auto;
      height: 100%;
      display: flex;
      align-items: center;
      border-left: 1px solid #f4f4f4;
      padding-left: 40px;

      .avatar-user {
        width: 42px;
        height: 42px;
        background-color: #e5e5e5;
        border-radius: 1000px;
        margin-right: 15px;
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
      }

      .user-name {
        font-family: "Roboto";
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        text-transform: uppercase;

        color: #181818;
      }
    }
  }
`;

const Header = () => {
  const [open, setOpen] = useState(false);
  const anchorRef: any = useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: any) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: any) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <HeaderContainer>
      <nav>
        <div className="logo">HELLEN</div>
        <ul>
          <li>
            <a href="#">
              <i className="fal fa-rss"></i>
              Feed
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fal fa-user-friends"></i>
              Grupos
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fal fa-briefcase"></i>
              Trabalhos
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fal fa-comment-alt"></i>
              Chat
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fal fa-bell"></i>
              Notificações
            </a>
          </li>
        </ul>
        <div className="wrapper-search">
          <TextField className="input-search" label="Pesquisar" />
        </div>

        <div className="user-info">
          <div
            style={{ backgroundImage: "url(./avatar-demo.png)" }}
            className="avatar-user"
          ></div>
          <div className="name-user">Juillian Lee</div>
          <div>
            <IconButton
              ref={anchorRef}
              aria-controls={open ? "menu-list-grow" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              <MoreVertIcon />
            </IconButton>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="menu-list-grow"
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
        </div>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
