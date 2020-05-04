import AbstractComponent from "./abstract-component.js";

export const createTasksTemplate = () => {
  return (
    `<div class="board__tasks"></div>`
  );
};

export default class Tasks extends AbstractComponent {
  getTemplate() {
    return createTasksTemplate();
  }
}
