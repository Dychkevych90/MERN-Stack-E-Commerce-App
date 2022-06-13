import React from "react";

import MainButton from "../../layout/button/button";

import { LogOutDialogWrapper } from "./styled";

const LogoutDialogs = ({ setIsShowLogoutModal }) => {
  const LogOut = (e) => {
    e.preventDefault();
    if (localStorage.getItem("token")) {
      localStorage.clear();
      dispatch(isLoadingSuccessful(false));
      dispatch(setUser({}));
      setIsShowLogoutModal(false);
    }
  };

  return (
    <LogOutDialogWrapper>
      <div className="caption">Do you want to exit?</div>

      <div className="button_section">
        <MainButton
          text={"NO"}
          fontSize={"14px"}
          border={"none"}
          backgroundColor={"teal"}
          width={"50%"}
          color={"#fff"}
          onClick={() => setIsShowLogoutModal(false)}
        />

        <MainButton
          text={"YES"}
          fontSize={"14px"}
          border={"none"}
          backgroundColor={"teal"}
          width={"50%"}
          color={"#fff"}
          onClick={(e) => LogOut(e)}
        />
      </div>
    </LogOutDialogWrapper>
  );
};

export default LogoutDialogs;
