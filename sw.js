const SCRIPT_ID = 'gemini_enterprise_math_fix';

const register = async () => {
  try {
    await chrome.scripting.unregisterContentScripts({ ids: [SCRIPT_ID] });
  } catch (e) {
    // Ignore if nothing registered yet.
  }

  await chrome.scripting.registerContentScripts([
    {
      id: SCRIPT_ID,
      matches: ['https://business.gemini.google/*'],
      js: ['main.js'],
      runAt: 'document_start',
      world: 'MAIN'
    }
  ]);
};

chrome.runtime.onInstalled.addListener(() => {
  register().catch(() => {});
});

chrome.runtime.onStartup?.addListener(() => {
  register().catch(() => {});
});

