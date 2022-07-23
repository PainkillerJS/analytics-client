import type { UserType } from "@shared/interfaces/user.interface";
import type { MovieType } from "@shared/interfaces/movie.interface";

export interface ReviewType {
	id: number;
	user: UserType;
	movie: MovieType;
	description: string;
}
