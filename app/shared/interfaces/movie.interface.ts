import type { ReviewType } from "@shared/interfaces/review.interface";

export interface MovieType {
	name: string;
	rating: number;
	poster: string;
	views: number;
	reviews?: ReviewType[];
}
