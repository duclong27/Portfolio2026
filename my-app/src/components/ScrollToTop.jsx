import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/* Tự cuộn lên đầu trang mỗi khi chuyển sang trang (route) khác */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    /* "instant": tránh hiệu ứng cuộn mượt (html có scroll-behavior: smooth)
       chạy mỗi lần đổi trang – gây giật navbar trên mobile */
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
