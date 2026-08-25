import { z } from "zod";

const objectId = z.string().regex(/^[a-f\d]{24}$/i, "Invalid id");
const authorFields = {
	user_id: objectId,
	bio: z.string().trim().min(50).max(500),
};

export const createAuthorSchema = z.object({ body: z.object(authorFields) });

export const updateAuthorSchema = z.object({
	params: z.object({ id: objectId }),
	body: z.object(authorFields).partial().refine((data) => Object.keys(data).length > 0, {
		message: "At least one field is required",
	}),
});

export const authorIdSchema = z.object({
	params: z.object({ id: objectId }),
});
