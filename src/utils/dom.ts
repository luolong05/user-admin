export const on = (dom: HTMLElement, eventName: string, handler: EventListenerOrEventListenerObject): void => {
  dom.addEventListener(eventName, handler);
}

export const off = (dom: HTMLElement, eventName: string, handler: EventListenerOrEventListenerObject): void => {
  dom.removeEventListener(eventName, handler);
}
