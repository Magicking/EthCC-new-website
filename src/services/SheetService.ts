import { GoogleSpreadsheet } from 'google-spreadsheet';

const SheetService = () => {
  const getTracks = async () => {
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

  return { getTracks };
};

export default SheetService();
