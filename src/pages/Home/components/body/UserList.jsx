import React, { useEffect, useState } from "react";
import DUMMY_USERS from "./DummyUserList.jsx";
import { styled, Pagination, Typography } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers, setPage } from "../../../../store/users/usersSlice.jsx";
import UserTable from "./TableFormat/UserTable.jsx";
import UserCardsList from "./CardFormat/UserCardsList.jsx";
import DisplayToggler from "./DisplayToggler.jsx";

const MainContainer = styled("div")({ width: "100%", minHeight: "100vh" });

const UserList = () => {
  const dispatch = useDispatch();
  const usersState = useSelector((state) => state.user);

  const [isTableView, setIsTableView] = useState(true);

  const toggleTableView = () => {
    setIsTableView(true);
  };
  const toggleCardsView = () => {
    setIsTableView(false);
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const indexOfLastItem = usersState.currentPage * usersState.usersPerPage;
  const indexOfFirstItem = indexOfLastItem - usersState.usersPerPage;

  const currentItems = DUMMY_USERS.slice(indexOfFirstItem, indexOfLastItem);
  // const currentItems = userState.users.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (_, page) => {
    dispatch(setPage(page));
  };
  return (
    <MainContainer>
      <Typography
        variant="h4"
        marginLeft="10px"
        fontWeight={600}
        color="var(--primary-color)"
      >
        Users
      </Typography>
      <DisplayToggler
        toggleCardsView={toggleCardsView}
        toggleTableView={toggleTableView}
        isTableView={isTableView}
      />
      {usersState.loading ? (
        <Typography variant="h4" sx={{ marginLeft: "10px" }}>
          Loading ...
        </Typography>
      ) : usersState.error ? (
        <p>Error: {usersState.error}</p>
      ) : (
        <>
          {isTableView ? (
            <UserTable currentItems={currentItems} />
          ) : (
            <UserCardsList currentItems={currentItems} />
          )}
          <Pagination
            // count={Math.ceil(users.length / usersPerPage)}
            count={Math.ceil(DUMMY_USERS.length / usersState.usersPerPage)}
            page={usersState.currentPage}
            onChange={handlePageChange}
            variant="outlined"
            shape="rounded"
            sx={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
            }}
          />
        </>
      )}
    </MainContainer>
  );
};

export default UserList;
