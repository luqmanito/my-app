import axios from "axios";

// const baseUrl = "http://localhost:8070/api/show";
// export const baseUrl = process.env.REACT_APP_HOST_KEY
export const baseUrl = process.env.REACT_APP_VER_KEY


const axiosRequest = (method, url, data, params) => {
  return axios({
    method,
    url: `${baseUrl}${url}`,
    data,
    params,
  });
};

export const getData = (url, params, data) => {
  return axiosRequest("GET", url, data, params);
};

export const login = (data) => {
  return axiosRequest("POST", "/auth", data);
};

export const regis = (data) => {
  return axiosRequest("POST", "/auth", data);
};

export const signup = (body) => {
  const URL = baseUrl + "/users/add";
  return axios.post(URL, body);
};

export const addProduct = (body) => {
  const login = JSON.parse(localStorage.getItem("userInfo"));
  const token = login.token;
  const URL = baseUrl + "/products/add";
  console.log(token);
  return axios.post(URL, body, {
    headers: {
      "x-access-token": token,
    },
  });
};

export const addPromo = (body ) => {
  const login = JSON.parse(localStorage.getItem("userInfo"));
  const token = login.token;
  const URL = baseUrl + "/promos/add";
  console.log(token);
  return axios.post(URL, body, {
    headers: {
      "x-access-token": token,
    },
  });
};


export const getProduct = (param) => {
    const queryParam = {
      filter: param.filter ?? "",
      sort: param.sort ?? "id",
      // order: param.order ?? "asc",
    };
    const URL =
    baseUrl +
      `/products/all?filter=${queryParam.filter}&page=1&sort=${queryParam.sort}&limit=12`
    return axios.get(URL);
    
  };
  
  export const getProducts = (param, counter) => {
    const queryParam = {
      filter: param.filter ?? "",
      sort: param.sort ?? "id",
    };
  console.log(`inilho${counter}`);
    const URL =
    baseUrl +
      `/products/all?filter=${queryParam.filter}&page=${counter}&sort=${queryParam.sort}&limit=12`
      
    return axios.get(URL);
    
  };


  export const getProfile = () => {
    const login = JSON.parse(localStorage.getItem("userInfo"));
    const token = login.token;
    const id = login.id
    
    const URL = baseUrl + `/users/profile/?id=${id}`
    return axios.get(URL, {
      headers: {
        "x-access-token": token,
      },
    });
  };

  export const editProfile = (body) => {
    const login = JSON.parse(localStorage.getItem("userInfo"));
    const token = login.token;
    const id = login.id
    const URL = baseUrl + `/users/modify/?id=${id}`
    return axios.patch(URL, body, {
      headers: {
        "x-access-token": token,
      },
    });
  };

  export const getPromo = () => {
    // const login = JSON.parse(localStorage.getItem("userInfo"));
    // const token = login.token;
    // const id = login.id
    
    const URL = baseUrl + `/promos/all`
    return axios.get(URL, {
      
    });
  };

  export const editPromo = (body, idPromo) => {
    const login = JSON.parse(localStorage.getItem("userInfo"));
    const token = login.token;
    const id = login.id
    const URL = baseUrl + `/promos/modify/?id=${idPromo}`
    return axios.patch(URL, body, {
      headers: {
        "x-access-token": token,
      },
    });
  };
