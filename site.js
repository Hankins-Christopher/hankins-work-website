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
document.querySelectorAll('[data-service]').forEach(link => link.addEventListener('click', () => {
  document.querySelector('#service').value = link.dataset.service;
}));
document.querySelector('#brief-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const outcome = document.querySelector('#outcome');
  if (!outcome.value.trim()) {outcome.setCustomValidity('Describe the outcome you want, then download your brief.');outcome.reportValidity();return;}
  const service = document.querySelector('#service').value;
  const systems = document.querySelector('#systems').value.trim() || 'To be discussed';
  const brief = `HANKINS — PROJECT STARTING BRIEF\n\nService: ${service}\n\nDesired outcome:\n${outcome.value.trim()}\n\nSystems involved:\n${systems}\n\nNext discussion:\n- Goals, scope, and success criteria\n- Access and data handling\n- Timeline and deliverables\n- Authorization and rules of engagement for security testing\n\nPrepared locally at hankins.work. This brief has not been submitted.\nDo not include passwords, secrets, or confidential system details.\n`;
  const url = URL.createObjectURL(new Blob([brief], {type:'text/plain;charset=utf-8'}));
  const download = document.createElement('a'); download.href = url; download.download = 'hankins-project-brief.txt'; document.body.append(download); download.click(); download.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
  document.querySelector('#brief-status').textContent = 'Your brief is ready. Keep the downloaded file for your project conversation.';
});
document.querySelector('#outcome')?.addEventListener('input', event => event.target.setCustomValidity(''));
document.querySelector('#year').textContent = new Date().getFullYear();
