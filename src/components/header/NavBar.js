import {React, useState} from "react";

import withNavigate from "../../helpers/withNavigate";
import withLocation from "../../helpers/withLocation";
import withSearchParams from "../../helpers/withSearchParams";
import Header from "./header";
import HeaderLogin from "./headerlogin";


const NavBar = ({onChange}) => {
  const [query, setSearchProduct] =useState("")
    const token = JSON.parse(localStorage.getItem("userInfo"))
      ? JSON.parse(localStorage.getItem("userInfo")).token
      : "";
      const role = token.role
      return(
        <div onChange={onChange}>
        {token ? <Header onChange={(e) => setSearchProduct(e.target.value)}   /> : <HeaderLogin />}
        </div>
      )
    }

    export default withSearchParams(withLocation(withNavigate(NavBar)));
