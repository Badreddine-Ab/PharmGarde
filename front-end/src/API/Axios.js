import axios from "axios";
const path = "http://localhost:8080/api/";

export const GET = async (args) => {
  return await axios.get(path + args);
};

export const PUT = async (args,data) => {
  return await axios.put(path + args,data);
};

export const DELETE = async (args) => {
  return await axios.delete(path + args);
};

export const POST = async (args,data) => {
  return await axios.post(path + args,data);
};
