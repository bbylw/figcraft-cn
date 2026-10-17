import { useEffect, useState } from "react";

export default function LocalTime() {
  const [now, setNow] = useState<string>("--:--");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setNow(
        `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`,
      );
    };
    tick();
    const id = window.setInterval(tick, 20000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <span className="ftime" suppressHydrationWarning>
      {now}
    </span>
  );
}
