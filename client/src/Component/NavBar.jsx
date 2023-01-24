import { AppBar, Toolbar, styled } from "@mui/material";

import { NavLink } from "react-router-dom";
import CreateIcon from "@mui/icons-material/Create";
import BadgeIcon from "@mui/icons-material/Badge";
import LoginIcon from "@mui/icons-material/Login";

const Header = styled(AppBar)`
  background: #3c8dbc;
`;

const Tabs = styled(NavLink)`
  color: #ffffff;
  margin-right: 20px;
  text-decoration: none;
  font-size: 20px;
`;

const NavBar = () => {
  return (
    <Header position="static">
      <Toolbar>
        <Tabs to="./" exact>
          Magnus
        </Tabs>
        <Tabs to="add" exact>
          <CreateIcon color="secondary" /> Create Employee
        </Tabs>
        <Tabs to="all" exact>
          <BadgeIcon color="secondary" />
          All Employee
        </Tabs>
        <Tabs to="login" exact>
          <LoginIcon color="secondary"/>Login
        </Tabs>
        <Tabs to="post" exact>
          Blog
        </Tabs>
      </Toolbar>
    </Header>
  );
};

export default NavBar;
