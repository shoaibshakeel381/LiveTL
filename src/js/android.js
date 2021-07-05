module.exports = () => {
  window.AndroidNative = window.AndroidNative || {
    sendMessage: () => {},
  };
  function getURL(path) {
    return `file://android_asset/${path}`;
  }
  async function getManifest() {
    // eslint-disable-next-line no-undef
    return JSON.parse(EXTENSION_MANIFEST);
  }
  function sendMessage(data, callback=()=>{}) {
    if (data.type == 'window') callback();
    if (data.type == 'tabid') callback(69); // android only has 1 tab
    const response = window.AndroidNative.sendMessage(data);
    if (callback) {
      callback(response);
    }
  }
  return {
    runtime: {
      getURL,
      sendMessage,
      getManifest
    },
    tabs: {
      sendMessage: (tabid, data) => { 
        window.AndroidNative.sendMessage(data);
      }
    }
  };
};