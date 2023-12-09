const Error = ({mensaje}) => {
  return (
    <div class="alert alert-danger" role="alert">
      <strong>Error:</strong>
      {mensaje}
    </div>
  );
};

export default Error;
