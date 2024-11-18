import { onFCP } from 'web-vitals';

onFCP((data) => {
  const dom = document.getElementById('value');
  if (dom) {
    dom.textContent = data.value.toFixed();
  }
});
