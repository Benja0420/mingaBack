import { z } from "zod";

const objectId = z.string().regex(/^[a-f\d]{24}$/i, "Invalid id");
const mangaFields = {
	title: z.string().trim().min(1).max(200),
	description: z.string().trim().min(50),
	date: z.coerce.date().optional(),
	cover: z.string().trim().min(1),
	category_id: objectId,
	author_id: objectId,
};

export const createMangaSchema = z.object({ body: z.object(mangaFields) });

export const updateMangaSchema = z.object({
	params: z.object({ id: objectId }),
	body: z.object(mangaFields).partial().refine((data) => Object.keys(data).length > 0, {
		message: "At least one field is required",
	}),
});

export const mangaIdSchema = z.object({
	params: z.object({ id: objectId }),
});
