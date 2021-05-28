import axios from 'axios';

const UnlockService = () => {
  const service = axios.create({
    timeout: 20000,
    baseURL: `https://locksmith.unlock-protocol.com/api/key/${
      Object.keys((window as CustomWindow).unlockProtocolConfig.locks)[0]
    }/user`,
  });

  const sendMetadata = async (
    address: string,
    tokenMetadata: string,
    signature: string,
  ) =>
    service.put(`/${address}`, tokenMetadata, {
      headers: {
        'Content-Type': `application/json; charset=utf-8`,
        Authorization: `Bearer-Simple ${btoa(signature)}`,
      },
    });

  return { sendMetadata };
};

export default UnlockService();
