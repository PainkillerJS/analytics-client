import { useState } from "react";

import { useForm } from "react-hook-form";

import useOutside from "@hooks/useOutside";

import { useAuth } from "@context/authContext/AuthContext";

import type { FC } from "react";
import type { AuthFieldType } from "@ui/Layouts/header/login-form/login-form.interface";

const LoginForm: FC = () => {
	const [type, setType] = useState<"login" | "register">("login");

	const { ref, isShow, setIsShow } = useOutside(false);
	const { setUser } = useAuth();
	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm<AuthFieldType>({ mode: "onChange" });
	return <div>LoginForm</div>;
};

export default LoginForm;
