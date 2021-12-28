/* global tab, api */

// request permission
document.addEventListener('change', e => {
  if (e.target.checked && e.target.dataset.permission === 'true') {
    const url = tab.url;
    if (tab.url.startsWith('http')) {
      api.permissions.request({
        origins: [url]
      }).then(granted => {
        if (granted === false) {
          e.target.checked = false;
        }
      });
    }
  }
});