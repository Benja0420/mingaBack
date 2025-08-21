import { z } from "zod";

const userSchema = z.object({
  name: z.string().min(3, "El nombre debe tener al menos 3 caracteres"),
  email: z.string().email("El email debe ser válido"),
  password: z.string().min(8, "La contraseña debe tener al menos 8 caracteres"),
});

export default userSchema;