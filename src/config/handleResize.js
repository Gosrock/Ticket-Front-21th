export const handleResize = () => {
  const [container] = document.getElementsByClassName('Ticket-Container');
  if (!container) return;
  document.documentElement.style.setProperty(
    '--containerHeight',
    `${container.clientHeight}px`
  );
  document.documentElement.style.setProperty(
    '--containerWidth',
    `${container.clientWidth}px`
  );
};
