import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const addVote = async (object) => {
  const id = object.id
  const url = baseUrl + '/' + id
  const anec = await axios.get(url)
  const newAnec = {...anec.data, votes: anec.data.votes + 1}
  const response = await axios.put(url, newAnec)
  return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, createNew, addVote }