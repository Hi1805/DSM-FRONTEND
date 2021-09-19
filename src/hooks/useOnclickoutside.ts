import React, { useEffect } from 'react';


export const useOnClickOutside = (ref: React.MutableRefObject<any>, handler: (event: MouseEvent) => void) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler(event);
    };
    document.addEventListener('mousedown', listener);
    
    return () => {
      // componentwithunmount      
      document.removeEventListener('mousedown', listener);
    };
  },
    [ref, handler]);
};

export default useOnClickOutside;