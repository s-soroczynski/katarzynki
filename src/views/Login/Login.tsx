export const Login = () => {
  const handleLogin = () => {
    window.open("http://localhost:4000/api/v1/auth/login/google", "_self");
  };

  return (
    <>
      <button data-auto_select="false" onClick={handleLogin}>
        1
      </button>
    </>
  );
};
