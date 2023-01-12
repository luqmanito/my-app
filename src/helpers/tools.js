import axios from "axios";

// const baseUrl = "http://localhost:8070/api/show";
export const baseUrl = process.env.REACT_APP_DEPLOY_KEY;
// export const baseUrl = process.env.REACT_APP_VER_KEY

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
  return axiosRequest("POST", "api/show/auth/login", data);
};

export const regis = (data) => {
  return axiosRequest("POST", "/auth", data);
};

export const signup = (body) => {
  const URL = baseUrl + "api/show/users/add";
  return axios.post(URL, body);
};

export const addProduct = (body) => {
  const login = JSON.parse(localStorage.getItem("userInfo"));
  const token = login.token;
  const URL = baseUrl + "api/show/products/add";
  console.log(token);
  return axios.post(URL, body, {
    headers: {
      "x-access-token": token,
    },
  });
};

export const addPromo = (body) => {
  const login = JSON.parse(localStorage.getItem("userInfo"));
  const token = login.token;
  const URL = baseUrl + "api/show/promos/add";
  console.log(token);
  return axios.post(URL, body, {
    headers: {
      "x-access-token": token,
    },
  });
};

export const getProduct = (param) => {
  console.log(param);
  const queryParam = {
    filter: param.filter ?? "",
    sort: param.sort ?? "id",
  };
  const URL =
    baseUrl +
    `/products/all?filter=${queryParam.filter}&page=1&sort=${queryParam.sort}&limit=12`;
  return axios.get(URL);
};

export const addTransactionApi = (body) => {
  const login = JSON.parse(localStorage.getItem("userInfo"));
  const token = login.token;
  const URL = baseUrl + 'api/show/transactions/create';
  return axios.post(URL, body, {
    headers: {
      'x-access-token': token,
    },
  });
};



export const getProducts = (param, counter) => {
  const queryParam = {
    filter: param.filter ?? "",
    sort: param.sort ?? "asc",
    search: param.search ?? "",
    page: param.page ?? "1",
  };
 
  const URL =
    baseUrl +
    `api/show/products/all?search=${queryParam.search}&filter=${queryParam.filter}&page=${counter}&sort=${queryParam.sort}&limit=100`;

  return axios.get(URL);
};

export const getProductById = (id) => {
  
  const URL = baseUrl + `api/show/products/product_detail/?id=${id}`;
  return axios.get(URL);
};

export const getProfile = () => {
  const login = JSON.parse(localStorage.getItem("userInfo"));
  const token = login.token;
  const id = login.id;

  const URL = baseUrl + `api/show/users/profile/?id=${id}`;
  return axios.get(URL, {
    headers: {
      "x-access-token": token,
    },
  });
};

export const addCartApi = (body) => {
  const login = JSON.parse(localStorage.getItem("userInfo"));
  const token = login.token;
  const URL = baseUrl + 'api/show/transactions/addItem';
  return axios.post(URL, body, {
    headers: {
      'x-access-token': token,
    },
  });
};

export const getListCartApi = () => {
  const login = JSON.parse(localStorage.getItem("userInfo"));
  const token = login.token;
  const URL = baseUrl + `api/show/transactions/cartItems`;
  return axios.get(URL, {
    headers: {
      'x-access-token': token,
    },
  });
};

export const editProfile = (body) => {
  const login = JSON.parse(localStorage.getItem("userInfo"));
  const token = login.token;
  const id = login.id;
  const URL = baseUrl + `api/show/users/modify/?id=${id}`;
  return axios.patch(URL, body, {
    headers: {
      "x-access-token": token,
    },
  });
};

export const getPromo = () => {
  const URL = baseUrl + `/promos/all`;
  return axios.get(URL, {});
};

export const editPromo = (body, idPromo) => {
  const login = JSON.parse(localStorage.getItem("userInfo"));
  const token = login.token;
  const id = login.id;
  const URL = baseUrl + `/promos/modify/?id=${idPromo}`;
  return axios.patch(URL, body, {
    headers: {
      "x-access-token": token,
    },
  });
};

export const editProduct = (body, idProductStore) => {
  const login = JSON.parse(localStorage.getItem("userInfo"));
  const token = login.token;
  const id = login.id;
  console.log(token);
  const URL = baseUrl + `api/show/products/modify/?id=${idProductStore}`;
  return axios.patch(URL, body,  {
    headers: {
      "x-access-token": token,
    },
  });
};



export const logoutBe = () => {
  const login = JSON.parse(localStorage.getItem("userInfo"));
  const token = login.token;
  const URL = baseUrl + `api/show/auth/logout`
  return axios.delete(URL, {
    headers: {
      "x-access-token": token,
    },
  });
}