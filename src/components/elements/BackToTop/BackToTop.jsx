import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import "./BackToTop.css";

const BackToTop = () => {
  const [verticalPosition, setVerticalPosition] = useState(0);

  useEffect(() => {
    window.onscroll = function (e) {
      setVerticalPosition(window.pageYOffset);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="backToTop">
      <p onClick={scrollToTop} className={verticalPosition > 600 ? "show" : ""}>
        <FontAwesomeIcon icon={faCircleArrowDown} width={35} height={35} />
      </p>
    </div>
  );
};

export default BackToTop;
