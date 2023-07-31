import { MDAPI_URL } from 'config';
import { getReq, postReq } from './request.service';

export const getXSource = async () => {
  const url = `${MDAPI_URL}/xenon/xsources/all`;
  const res = await getReq(url);

  return res.data;
}
