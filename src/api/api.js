import * as axios from "axios";


const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0",
  headers: {
    "API-KEY": "7c3adbdc-44e2-4a5d-ba99-d4184393f8f1",
  },
});
export const usersAPI = {
  getUsers: (currentPage = 1, pageSize) => {
    return instance
      .get(`/users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  follow: (userID) => {
    return instance.post(`/follow/${userID}`).then((response) => {
      return response.data;
    });
  },
  unfollow: (userID) => {
    return instance.delete(`/follow/${userID}`).then((response) => {
      return response.data;
    });
  },
  getProfile: (userID) => {
    console.warn("Obsolete method. Use the profileAPI obj");
    return profileAPI.getProfile(userID)
  },
};
export const profileAPI = {
  
  getProfile: (userID) => {
    return instance.get(`/profile/${userID}`);
  },
  getStatus: (userID) => {
    return instance.get(`/profile/status/${userID}`);
  },
  updateStatus: (status) => {
    return instance.put(`/profile/status`, {
      status: status
    });
  },
};
export const authAPI = {
	me: ()=>{
		return instance.get(`/auth/me`)
	}

  };
