module.exports = () => {
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
    window.parent.postMessage(data, '*');
  }
  return {
    runtime: {
      getURL,
      sendMessage,
      getManifest
    }
  };
};