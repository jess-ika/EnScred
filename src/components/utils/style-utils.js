export function truncate(width) {
    return `
      width: ${width};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    `;
  }

export function shadow() {
  return `
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  `;
  }
  
export function boxContainer() {
  return `
      padding: 10px;
      height: 100%;
      box-sizing: border-box;
      background-color: #f4f3f1;
  `;
  }
  
export function box() {
  return `
      padding: 10px;
      margin-top: 10px;
      box-sizing: border-box;
      box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
      background-color: #FFF;
  `;
  }

  export function workspaceButton() {
    return `
        padding: 10px;
        background-color: #C93756;
        text-align: center;
        color: #FFF;
        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        pointer: cursor;
    `;
  }