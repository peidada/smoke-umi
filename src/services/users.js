import request from '../utils/request';

export function login(data) {
  return request.post(`/api/users/login`, data);
}

export function getUser(data) {
  return request.get(`/api/api/users/getUser?id=${data}`);
}

export function registerUser(data) {
  return request.post(`/api/users/registerUser`, data);
}
