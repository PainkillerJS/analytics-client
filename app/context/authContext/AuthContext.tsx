import { createContext, useContext, useState } from "react";

import type { FC, PropsWithChildren } from "react";
import type {
	AuthContextType,
	UserStateType
} from "@context/authContext/auth.interface";

const AuthContext = createContext({} as AuthContextType);

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
	const [user, setUser] = useState<UserStateType>(null);

	return (
		<AuthContext.Provider value={{ user, setUser }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
