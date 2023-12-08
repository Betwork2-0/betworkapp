import axios from "axios";
import qs from "qs";
import {jwtDecode} from "jwt-decode";

const [OK_200] = [200, 401];

const formatUserInfoForSignup = (newUserInfo) => {
  const formatted = {
    user_name: newUserInfo.username,
    first_name: newUserInfo.firstName,
    last_name: newUserInfo.lastName,
    email: newUserInfo.email,
    password: newUserInfo.password,
    solidity_address: newUserInfo.solidity_address
  };

  return formatted;
};

const formatLoginInfo = (loginInfo) => {
  const formatted = {
    user_name: loginInfo.username,
    password: loginInfo.password,
  };

  return formatted;
};

const formatVerifyInfo = (username, code) => {
  const formatted = {
    user_name: username,
    verification_code: code,
  };

  return formatted;
};

export async function login(loginInfo, successCallback, errorCallback){
  try {
    const res = await axios.post(
      `http://52.188.229.42:5011/api/v1/users/login`,
      formatLoginInfo({...loginInfo})
    );
    const data = await res.data;
    
    if (!data.success) {
      errorCallback(data.payload);
    } else {
      successCallback("Successful Signup!", data.payload);
    }
    // await createUser(newUserInfo.username);
    // console.log(await getUserList());

  } catch (e) {
    console.log(e);
    errorCallback(e.message);
    return null;
  }
}

export async function signup(newUserInfo, successCallback, errorCallback) {
  try {
    const {address, privateKey} = web3.eth.accounts.create();
    const res = await axios.post(
      `http://52.188.229.42:5011/api/v1/users/signup`,
      formatUserInfoForSignup({...newUserInfo, solidity_address: address})
    );
    const data = await res.data;
    
    if (!data.success) {
      errorCallback(data.payload);
    } else {
      console.log();
      await createUser(address);
      console.log(await getUserList());
      successCallback("Successful Signup!", data.payload);
    }
    // await createUser(newUserInfo.username);
    // console.log(await getUserList());

  } catch (e) {
    console.log(e);
    errorCallback(e.message);
    return null;
  }
}

export async function verify(username, code, successCallback, errorCallback) {
  try {
    const res = await axios.put(
      `https://8yffpe0pcl.execute-api.us-east-1.amazonaws.com/dev/api/v1/users/user_name/user_verification/${username}`,
      formatVerifyInfo(username, code)
    );
    const data = await res.data;
    if (!data.success) {
      errorCallback(data.payload);
    } else {
      successCallback("Successfully verified!");
    }
  } catch (e) {
    errorCallback(e.message);
    return null;
  }
}

export const objectsToArray = (books) => {
  return Object.entries(books)
    .sort()
    .map((elem) => elem[1]);
};


export async function getUserInfoUsername(username) {
  try {
    const res = await axios.get(
      `https://8yffpe0pcl.execute-api.us-east-1.amazonaws.com/dev/api/v1/users/user_name/${username}`
    );
    const userInfo = await res.data;
    return objectsToArray(userInfo)[0][0]
  } catch (e) {
    console.log(e);
    return {};
  }
}
