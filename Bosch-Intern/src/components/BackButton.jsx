import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button className="back-button" onClick={() => navigate("/")}>
      ←
    </button>
  );
}

export default BackButton;
