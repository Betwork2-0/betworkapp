import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import BookIcon from "@mui/icons-material/Book";
import { Stack } from "@mui/system";
import { useUser } from "../context/UserContext";
import SearchBar from "./SearchBar";

const styles = {
  iconLink: {
    textDecoration: "none",
    color: "unset",
  },
  icon: {
    marginRight: 2,
  },
  typography: {
    flexGrow: 1,
    textDecoration: "none",
    color: "unset",
  },
};

function NavBar() {
  const { user, setUser } = useUser();
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSearchBar = (e) => {
    setSearchValue(e.target.value);
  };

  const submitSearchBar = (e) => {
    e.preventDefault();
    navigate({
      pathname: "/search",
      search: `?book_name=${searchValue}`,
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AppBar position="relative">
      <Toolbar>
        <RouterLink to={"/"} style={styles.iconLink}>
          <BookIcon sx={styles.icon} />
        </RouterLink>
        <Typography
          variant="h6"
          sx={styles.typography}
          component={RouterLink}
          to="/"
        >
          Reader Hub
        </Typography>
        <Stack direction="row" spacing={2}>
          <SearchBar
            value={searchValue}
            onChange={handleSearchBar}
            onSubmit={submitSearchBar}
          ></SearchBar>
          {user ? (
            <>
              <Button color="inherit" component={RouterLink} to="/mybookshelf">
                BookShelf
              </Button>
              <Button color="inherit" component={RouterLink} to="/myreviews">
                Reviews
              </Button>
              <Button color="inherit" onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" component={RouterLink} to="/signup">
                SignUp
              </Button>
              <Button color="inherit" component={RouterLink} to="/login">
                Login
              </Button>
            </>
          )}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
