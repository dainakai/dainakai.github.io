const fs = require('fs');

const date = new Date();
const formattedDate = `${date.getFullYear()}/${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getDate()).padStart(2, '0')}`; // YYYY/MM/DD形式

const content = `export const LAST_UPDATE = '${formattedDate}';`;

fs.writeFileSync('src/lastUpdate.js', content);
