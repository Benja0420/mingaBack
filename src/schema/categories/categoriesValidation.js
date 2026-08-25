import { z } from "zod";

const objectId = z.string().regex(/^[a-f\d]{24}$/i, "Invalid id");
const categoryFields = {
	name: z.string().trim().min(1).max(100),
	description: z.string().trim().min(50),
	color: z.string().trim().min(1),
	character_photo: z.string().trim().min(1),
	cover_photo: z.string().trim().min(1),
};

export const createCategorySchema = z.object({ body: z.object(categoryFields) });

export const updateCategorySchema = z.object({
	params: z.object({ id: objectId }),
	body: z.object(categoryFields).partial().refine((data) => Object.keys(data).length > 0, {
		message: "At least one field is required",
	}),
});

export const categoryIdSchema = z.object({
	params: z.object({ id: objectId }),
});
