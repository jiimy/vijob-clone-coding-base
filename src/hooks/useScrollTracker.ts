import { useScrollContext } from "@/context/ScrollContext";
import { useEffect } from "react";

// 받은 ref 가 스크롤을 하고 있는지 판별하기. 받은 후 useScrollContext 에 넣는다.
const useScrollTracker = (ref: React.RefObject<HTMLElement>) => {
  const { setIsScrolled } = useScrollContext();

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const { scrollTop } = ref.current;
        // 스크롤 위치가 0보다 크면 isScrolled를 true로 설정
        if (scrollTop > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };

    const currentRef = ref.current;
    if (currentRef) {
      currentRef.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener("scroll", handleScroll);
      }
    };
  }, [ref, setIsScrolled]);
};

export default useScrollTracker;
