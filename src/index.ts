import xhook from 'xhook';

xhook.after(function (request, response) {
  console.log(request);
  const dom = request.isFetch ? document.getElementById('fetch') : document.getElementById('xhr');
  if (dom) {
    dom.textContent = 'yes';
  }
});

fetch('https://httpbin.org/get');
