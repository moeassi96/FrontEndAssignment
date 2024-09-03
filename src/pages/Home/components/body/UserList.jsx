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
  const users = useSelector((state) => state.user.users);
  const loading = useSelector((state) => state.user.loading);
  const error = useSelector((state) => state.user.error);
  const currentPage = useSelector((state) => state.user.currentPage);
  const usersPerPage = useSelector((state) => state.user.usersPerPage);

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

  const indexOfLastItem = currentPage * usersPerPage;
  const indexOfFirstItem = indexOfLastItem - usersPerPage;

  const currentItems = DUMMY_USERS.slice(indexOfFirstItem, indexOfLastItem);
  // const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (_, page) => {
    dispatch(setPage(page));
  };
  return (
    <MainContainer>
      <Typography variant="h4">Users</Typography>
      <DisplayToggler
        toggleCardsView={toggleCardsView}
        toggleTableView={toggleTableView}
        isTableView={isTableView}
      />
      {loading ? (
        <Typography variant="h4">Loading ...</Typography>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          {isTableView ? (
            <UserTable currentItems={currentItems} />
          ) : (
            <UserCardsList currentItems={currentItems} />
          )}
          <Pagination
            // count={Math.ceil(users.length / usersPerPage)}
            count={Math.ceil(DUMMY_USERS.length / usersPerPage)}
            page={currentPage}
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
