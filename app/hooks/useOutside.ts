import { useEffect, useRef, useState } from "react";

import type { Dispatch, SetStateAction, RefObject } from "react";

type OutsideReturnType = {
	ref: RefObject<HTMLElement>;
	isShow: boolean;
	setIsShow: Dispatch<SetStateAction<boolean>>;
};

const useOutside = (initialIsVisible: boolean): OutsideReturnType => {
	const [isShow, setIsShow] = useState(initialIsVisible);
	const ref = useRef<HTMLElement>(null);

	const handleClickOutside: EventListener = (event) => {
		if (ref.current?.contains(event.currentTarget as Node)) {
			setIsShow(false);
		}
	};

	useEffect(() => {
		document.addEventListener("click", handleClickOutside, true);

		return () => {
			document.removeEventListener("click", handleClickOutside, true);
		};
	});

	return { ref, isShow, setIsShow };
};

export default useOutside;
