/**
 * Gets the TODO tasks from Google Sheets
 * @param req Incoming request
 * @param res Outgoing response
 */
export default async function handler(req, res) {
  const { SHEETS_KEY, TODO_SHEET } = process.env;
  try {
    const sheetRes = await fetch(`${TODO_SHEET}?key=${SHEETS_KEY}`);
    if (!sheetRes.ok) throw 'Error';
  
    const { values } = await sheetRes.json();
    if (!values) throw 'Error';
    
    const resources = values.reduce((map, [category, task, details]) => {
      if (!map[category]) map[category] = [];
      map[category].push({ task, details });
      return map;
    }, {});
    return res.status(200).json(resources);
  } catch (e) {
    return res.status(500).send('Internal Server Error');
  }
};
