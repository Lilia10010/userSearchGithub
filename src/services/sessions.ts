import { api } from "./api";

export const getUser = async (userName = {}) => {
  const response = await api.get(`/users/${userName}`);
  return response;
};

export const getRepos = async (userName = {}) => {
  const response = await api.get(`/users/${userName}/repos`);
  return response;
};

export const getBranch = async (userName: string, repoName: string) => {
  console.log("ççççç", userName);
  const response = await api.get(`/repos/${userName}/${repoName}/branches`);
  return response;
};

export const getUserData = async (userName: any) => {
  return Promise.all([getUser(userName), getRepos(userName)])
    .then(([user, repos]) => ({ user, repos }))
    .catch((err) => console.log(err));
};
