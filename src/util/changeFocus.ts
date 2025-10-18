import type { KeyboardEvent } from "react";

const changeFocus = (e: KeyboardEvent, name: string, current: number) => {
  const direction = e.key;
  let next = null;
  switch (direction) {
    case "ArrowRight":
      next = current < 8 && current + 1;
      break;
    case "ArrowLeft":
      next = current > 0 && current - 1;
      break;
    case "ArrowDown":
      next = current < 6 && current + 3;
      break;
    case "ArrowUp":
      next = current > 2 && current - 3;
      break;
    default:
      break;
  }

  if (next !== null) return document.getElementById(`${name}${next}`)?.focus();
  return;
};

export default changeFocus;
