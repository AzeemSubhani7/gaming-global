import React, { useEffect, useState} from "react";

const LinearImageSection = (props) => {
  const mediaMatch = window.matchMedia("(max-width: 600px)");
  const [matches, setMatches] = useState(mediaMatch.matches);

  useEffect(() => {
    const handler = (e) => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });

  const styles = (isMobile) => {
    return {
      backgroundImage: `url(${props.imageUrl})`,
      height: isMobile ? '30vh' : '60vh',
    }
  };
  const linearBackgroundStyle = {
    background:
      "linear-gradient(0deg, rgba(31, 29, 41, 1) 1%, rgba(255, 255, 255, 0) 49%, rgba(31, 29, 41, 1) 95%)",
  };

  return (
    <div
      className="text-green-50 bg-cover bg-center bg-no-repeat h-1/2 sm:bg-center sm:bg-cover "
      style={styles(matches)}
    >
      <div className="h-full w-full" style={linearBackgroundStyle}>
        {props.children}
      </div>
    </div>
  );
};

export default LinearImageSection;
