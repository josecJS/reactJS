export const LinkPropio = ({ className, href, children }) => {
    const onClick = (event) => {
      event.preventDefault();
      window.history.pushState({}, "", href);
  
      const navEvent = new PopStateEvent('cambioDeRuta');
      window.dispatchEvent(navEvent);
    };
  
    return (
      <a className={className} href={href} onClick={onClick}>
        {children}
      </a>
    );
  };