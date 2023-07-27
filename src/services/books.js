import { MDAPI_URL } from 'config';
import { getReq, postReq } from './request.service';

export const sendChat = async (msg, mode, convId, userId) => {
  const url = `${MDAPI_URL}/zokyo/code`;

  const data = {
    msg,
    mode,
    user: userId,
    convId
  }

  const res = await postReq(url, data);
  console.log(res);
  return res.data;
}

// These books aren't cooked, they raw as hell
const getRawBook = async (urlId) => {
  const url = `${MDAPI_URL}/xenon/books/raw/${urlId}`;

  const res = await getReq(url);

  return res.data;
}

