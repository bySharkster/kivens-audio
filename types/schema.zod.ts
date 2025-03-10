import * as z from 'zod'

export const contactFormSchema = z.object({
  name: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  eventType: z.enum(['wedding', 'corporate', 'birthday', 'other'], {
    required_error: 'Por favor selecciona un tipo de evento'
  }),
  date: z.string().min(1, 'Por favor selecciona una fecha'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres')
})

export type ContactFormValues = z.infer<typeof contactFormSchema>