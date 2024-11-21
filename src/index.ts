import { onFCP } from 'web-vitals';

onFCP((data) => {
  const dom = document.getElementById('fcp');
  if (dom) {
    dom.textContent = data.value.toFixed();
  }
});

setTimeout(() => {
  const dom = document.getElementById('root');
  if (dom) {
    dom.textContent = 'foobar';
  }
}, 2000);
