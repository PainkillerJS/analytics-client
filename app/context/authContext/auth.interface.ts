import type { Dispatch, SetStateAction } from "react";
import type { UserType } from "@shared/interfaces/user.interface";

export type UserStateType = UserType | null;

export interface AuthContextType {
	user: UserStateType;
	setUser: Dispatch<SetStateAction<UserStateType>>;
}
