import axios from "axios";
const path = "http://10.0.2.2:9000/api/";

export const GET = async (args) => {
  return await axios.get(path + args);
};
export const GetOne = async (args) => {
  return await axios.get(path + args );
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
