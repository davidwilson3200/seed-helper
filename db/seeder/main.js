const generateRecords = require('./recordGenerators/generateRecords');
const fileWriter = require('./writers/fileWriter');
const databaseWriter = require('./writers/databaseWriter');
// const bulkInsert = require('./mongo/bulkInsert');
const Logger = require('./logger');
const { FILE_NAME, DATA_DIR} = require('./config');

const logger = new Logger('demo record');
const startFileNum = 1;

fileWriter(FILE_NAME, startFileNum, generateRecords, logger)
  .then(() => console.log('DONE!!!'))
  .catch((err) => console.log(err))

// function databaseWriter(fileName, fileNumber, batchInserter, logger) {
// databaseWriter()
