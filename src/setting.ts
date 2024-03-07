import { Config, CustomIntl } from './utils/Interfaces/Setting.interface';
const intl: CustomIntl = {} as CustomIntl;

/** (1/5) initialize config object */
let config: Config = {} as Config;

/** (2/5) load local development settings ./setting.local.js (if exist) */
try {
  config = require('./setting.local.js').default || {};
  if (config.loadVerbose) {
    console.log(
      '[SeaTable Plugin Development] Configuration merged with "./src/setting.local.js" (this message can be disabled by adding `loadVerbose: false` to the local development settings)'
    );
    console.log('[SeaTable Plugin Development] This is your config object:');
    console.log(config);
  }
} catch (error) {
  // fall-through by intention
  console.error(
    '[SeaTable Plugin Development] Please create "./src/setting.local.js" (from `setting.local.dist.js`)'
  );
  throw error;
}

/** (3/5) remove server trailing slash(es) (if any, common configuration error)*/
if (config.server !== config.server.replace(/\/+$/, '')) {
  config.server = config.server.replace(/\/+$/, '');
}

/** (4/5) set locale for ReactIntlUniversal */
/*
if (intl.options && intl.options.locales && intl.options.locales[config.lang]) {
  intl.options.currentLocale = config.lang;
} else {
  console.warn(`[SeaTable Plugin Development] Locale "${config.lang}" not available`);
  console.info(
    `[SeaTable Plugin Development] Available locales are: "${Object.keys(
      (intl && intl.options && intl.options.locales) || { 'ReactIntlUniversal Loading Error': 1 }
    ).join('", "')}"`
  );
  console.info(
    '[SeaTable Plugin Development] Suggestions: verify "./src/setting.local.js" and/or the locales in "./src/locale"'
  );
}
*/

/* (5/5) init window.dtablePluginConfig  */
window.dtablePluginConfig = config;
