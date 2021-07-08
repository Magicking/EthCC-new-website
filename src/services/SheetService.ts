import { GoogleSpreadsheet } from 'google-spreadsheet';
import { groupBy } from 'ramda';

const SheetService = () => {
  const getSheet = async () => {
    try {
      const doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID);

      await doc.useServiceAccountAuth({
        client_email: process.env.GOOGLE_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, `\n`),
      });

      await doc.loadInfo();
      const sheet = doc.sheetsByIndex[0];

      return sheet.getRows();
    } catch (e) {
      console.error(
        `[SheetService] Error getting spreadsheet with error : `,
        e,
      );
    }
  };

  const getTracks = async () => {
    const talks = await getSheet();
    return groupBy((talk) => talk.Track, talks);
  };

  return { getTracks };
};

export default SheetService();
