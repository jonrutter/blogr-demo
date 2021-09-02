import { useEffect } from 'react';

const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    // handler
    function handleClick(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
        return;
      }
    }
    // listener
    document.addEventListener('mousedown', handleClick);
    // unbind event listener on clean up
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [ref, callback]);
};

export default useOutsideClick;
