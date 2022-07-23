import type { FC, PropsWithChildren } from "react";

const AuthContext: FC<PropsWithChildren<unknown>> = ({ children }) => {
	return <div>{children}</div>;
};

export default AuthContext;
