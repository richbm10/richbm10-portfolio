import './styles/index.scss';
import { renderProjects, renderProfessionalProjects } from './modules/projects';

document.addEventListener('DOMContentLoaded', () => {
  renderProfessionalProjects();
  renderProjects();
});
