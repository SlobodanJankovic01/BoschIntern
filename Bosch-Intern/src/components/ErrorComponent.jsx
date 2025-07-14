import BackButton from "./BackButton";

function ErrorComponent() {
  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h1>404</h1>
      <p>Proizvod nije pronađen.</p>
      <BackButton />
    </div>
  );
}

export default ErrorComponent;
