/**
 * Gets the sprint tasks from Google Sheets
 * @param req Incoming request
 * @param res Outgoing response
 */
export default async function handler(req, res) {
  const { SHEETS_KEY, SPRINTS_SHEET } = process.env;
  try {
    const sheetRes = await fetch(`${SPRINTS_SHEET}?key=${SHEETS_KEY}`);
    if (!sheetRes.ok) throw 'Error';
  
    const { values } = await sheetRes.json();
    if (!values) throw 'Error';

    const [,,, ...members] = values.shift();
    
    const sprints = values.reduce((map, row) => {
      if (!row[0]) return map; // empty row, skip
      const [sprint, status, task, ...assignees] = row;
      if (!map[sprint]) map[sprint] = [];
      map[sprint].push({
        status: status,
        task: task,
        assignees: members.filter((_v, i) => assignees[i] === 'TRUE')
      });
      return map;
    }, {});
    return res.status(200).json(sprints);
  } catch (e) {
    return res.status(500).send('Internal Server Error');
  }
};
