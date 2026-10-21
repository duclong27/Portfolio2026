import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/* Tự cuộn lên đầu trang mỗi khi chuyển sang trang (route) khác */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
