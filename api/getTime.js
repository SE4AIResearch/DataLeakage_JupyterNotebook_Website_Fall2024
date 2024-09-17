const oneWeek = 60*60*24*1000*7;

/**
 * Gets the time data from Google Sheets
 * @param req Incoming request
 * @param res Outgoing response
 */
export default async function handler(req, res) {
  const { SHEETS_KEY, TIME_SHEET } = process.env;
  try {
    const sheetRes = await fetch(`${TIME_SHEET}?key=${SHEETS_KEY}`);
    if (!sheetRes.ok) throw 'Error';
  
    let { values } = await sheetRes.json();
    if (!values) throw 'Error';

    const dateDiff = Date.now() - (new Date('09/24/2023')).getTime();
    const lastRow = Math.min(Math.ceil(dateDiff/oneWeek) + 1, values.length);
    values = values.slice(0, lastRow);

    values.push(values.slice(1).reduce((totals, current) => {
      for (let i = 1; i < totals.length; i++)
        totals[i] += +current[i];
      return totals;
    }, ['Totals', 0, 0, 0, 0, 0, 0]));

    return res.status(200).json(values);
  } catch (e) {
    return res.status(500).send('Internal Server Error');
  }
};
