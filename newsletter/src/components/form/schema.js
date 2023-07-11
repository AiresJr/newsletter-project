import * as z from "zod";

export const schema = z
.object({
    email: z
    .string()
    .min(1, "O e-mail é obrigatório")
    .email("Formato de e-mail inválido"),

});
