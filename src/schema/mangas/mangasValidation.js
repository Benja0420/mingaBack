import { z } from "zod";

const mangaSchema = z.object({
  title: z.string().min(3, "El título debe tener al menos 3 caracteres"),
  description: z
    .string()
    .min(10, "La descripción debe tener al menos 10 caracteres"),
  date: z.date("La fecha debe ser válida"),
  cover: z.string().url("La portada debe ser una URL válida"),
});

export default mangaSchema;