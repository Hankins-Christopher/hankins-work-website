'use strict';
const panel = document.querySelector('.boundary-panel');
const views = {
  security: {label:'TEST THE<br>BOUNDARY', destination:'EVIDENCE', description:'Trace how access is granted. Test what can cross it.', icon:'<path d="M24 5L9 11v12c0 10 15 19 15 19s15-9 15-19V11L24 5z"/><path d="M17 23l5 5 10-11"/>'},
  integration: {label:'CONNECT THE<br>WORKFLOW', destination:'REVIEW', description:'Connect your tools. Keep permissions and human review in the loop.', icon:'<path d="M8 16h12v16H8zM28 16h12v16H28zM20 24h8M14 9v7M34 32v7M11 9h6M31 39h6"/>'}
};
document.querySelectorAll('[data-view]').forEach(button => button.addEventListener('click', () => {
  const selected = button.dataset.view;
  document.querySelectorAll('[data-view]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  panel.classList.toggle('is-integration', selected === 'integration');
  document.querySelector('#core-label').innerHTML = views[selected].label;
  document.querySelector('#core-icon').innerHTML = views[selected].icon;
  document.querySelector('#destination-label').textContent = views[selected].destination;
  document.querySelector('#diagram-description').textContent = views[selected].description;
}));
document.querySelector('#year').textContent = new Date().getFullYear();
