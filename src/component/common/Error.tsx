import {error} from "./../../types.d/common.types.d";

type props = {
  error:error 
}

export const Error: React.FC<props> =  ({error}) => {
  return (
    <div className="alert alert-danger" role="alert">
      {error.message}
    </div>
  );
};
