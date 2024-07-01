import { Provider } from "react-redux";
import { storeRedux } from "../store/store";

export const AppRedux = ({ children }) => {
  return (
    <>
      <Provider store={storeRedux}>{children}</Provider>;
    </>
  );
};
