import * as db from './utils/database.mjs';
import { getDataFromAPI } from './utils/api.js';

db.connectToDatabase("meu_banco");
db.disconnectFromDatabase();
getDataFromAPI();