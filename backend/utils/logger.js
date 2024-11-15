class Logger {
        constructor() {
          if (Logger.instance) {
            return Logger.instance; 
          }
      
          Logger.instance = this; 
        }
      
        info(...params) {
          console.log('[INFO]', ...params);
        }
      
        error(...params) {
          console.error('[ERROR]', ...params);
        }
      }
      
      module.exports = new Logger(); 
      