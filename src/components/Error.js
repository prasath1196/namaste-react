import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();
  return (
    <div className='error-page'>
      <div className='message'>
        <h2>You broke me!</h2>
      </div>
      <div className='details'>
        {err.status}: {err.statusText}
      </div>
    </div>
  );
};

export default Error;
