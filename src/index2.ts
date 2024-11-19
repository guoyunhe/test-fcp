import { onFCP } from 'web-vitals';

onFCP((data) => {
  const dom = document.getElementById('value2');
  if (dom) {
    dom.textContent = data.value.toFixed();
  }
});
