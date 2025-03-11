import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Correo electrónico inválido'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres')
})

export const newsLetterSchema = z.object({
  email: z.string().email('Correo electrónico inválido')
})

export type ContactFormValues = z.infer<typeof contactFormSchema>
export type NewsletterSubscription = z.infer<typeof newsLetterSchema>
