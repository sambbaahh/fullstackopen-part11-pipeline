import axios from "axios";

const getAll = async () => {
  const response = await axios.get("/api/anecdotes");
  return response.data;
};

const addNew = async (data) => {
  const anecdoteObject = {
    content: data,
    id: (100000 * Math.random()).toFixed(0),
    votes: 0,
  };
  const response = await axios.post("/api/anecdotes", anecdoteObject);
  return response.data;
};

const addVote = async (anecdoteObject) => {
  const response = await axios.put(`/api/anecdotes/${anecdoteObject.id}`, {
    ...anecdoteObject,
    votes: anecdoteObject.votes + 1,
  });
  return response.data;
};

export default { getAll, addNew, addVote };
