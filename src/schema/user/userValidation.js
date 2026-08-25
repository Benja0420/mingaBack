import { z } from "zod";

const objectId = z.string().regex(/^[a-f\d]{24}$/i, "Invalid id");
const idParams = z.object({ id: objectId });
const userFields = {
	user: z.string().trim().min(3).max(50),
	email: z.email(),
	password: z.string().min(8).max(128),
	role: z.enum(["author", "user", "admin"]).optional(),
};

export const createUserSchema = z.object({ body: z.object(userFields) });

export const loginSchema = z.object({
	body: z.object({ email: userFields.email, password: userFields.password }),
});

export const updateUserSchema = z.object({
	params: idParams,
	body: z.object(userFields).partial().refine((data) => Object.keys(data).length > 0, {
		message: "At least one field is required",
	}),
});

export const userIdSchema = z.object({ params: idParams });
