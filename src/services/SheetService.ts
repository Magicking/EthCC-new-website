import axios from 'axios';

const SheetService = () => {
  const service = axios.create({
    timeout: 20000,
    baseURL: process.env.TALKS_API_URL,
  });

  const getTracks = async () => {
    try {
      const res = await service.get(`/`);
      return res.data;
    } catch (e) {
      console.error(
        `[SheetService] Error getting spreadsheet with error : `,
        e,
      );
    }
  };

  return { getTracks };
};

export default SheetService();
