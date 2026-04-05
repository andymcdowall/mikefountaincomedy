import { useEffect, useState } from "react";

export function TextSwitcher({
  texts = [
    "Mike", 
    "Drinking", 
    "Buckingham", 
    "Of Youth"
],
  finalText = "Mike",
  interval = 750,
}) {
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (finished) return;

    const timer = setTimeout(() => {
      if (index < texts.length - 1) {
        setIndex((prev) => prev + 1);
      } else {
        setFinished(true);
      }
    }, interval);

    return () => clearTimeout(timer);
  }, [index, finished, texts.length, interval]);

  return (
    <>
      {finished ? finalText : texts[index]}
    </>
  );
}