import { useEffect } from "react";

export function useOutsideClick(
  ref: React.RefObject<HTMLElement>,
  callback: () => void,
  ignoreClassNames?: string[]
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as HTMLElement;

      // Check if the click is outside the referenced element
      if (ref.current && !ref.current.contains(target)) {
        // If ignoreClassNames is provided, check if the clicked element has any of those classes
        if (ignoreClassNames && ignoreClassNames.length > 0) {
          const hasIgnoredClass = ignoreClassNames.some((className) => {
            // Check if the clicked element or any of its parents has the ignored class
            let element: HTMLElement | null = target;
            while (element) {
              if (element.classList?.contains(className)) {
                return true;
              }
              element = element.parentElement;
            }
            return false;
          });

          // Don't trigger callback if clicked element has an ignored class
          if (hasIgnoredClass) {
            return;
          }
        }

        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback, ignoreClassNames]);
}
