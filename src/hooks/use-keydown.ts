import {useEffect} from "react";

function useKeydown(key: string, callback: (event?: KeyboardEvent) => void) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.code === key) callback(event);
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [key, callback]);
}

export default useKeydown;
