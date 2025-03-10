"use client"

import { Input } from '../ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { cn } from '@/lib/utils'
import { sendEmail } from '@/app/actions/send-email'
import { contactFormSchema, type ContactFormValues } from '@/types/schema.zod'
import { useState } from 'react'

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
    reset
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema)
  })

  const onSubmit = async (data: ContactFormValues) => {
    try {
      setIsSubmitting(true)
      const result = await sendEmail(data)
      
      if (result.success) {
        toast.success("Mensaje enviado correctamente")
        reset() // Reset form after successful submission
      } else {
        toast.error("Error al enviar el mensaje. Por favor intente nuevamente.")
      }
    } catch {
      toast.error("Error al enviar el mensaje. Por favor intente nuevamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="py-20 bg-[#1E1E3F]">
      <div className="max-w-[1440px] mx-auto px-6">
        <h2 className="mb-16 text-4xl font-bold text-center">Contáctanos</h2>
        <div className="grid gap-12 md:grid-cols-2">
          {/* Left Side Content */}
          <div>
            <h3 className="mb-6 text-2xl font-bold">Reserva Tu Evento</h3>
            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-4">
                <div>
                  <Input
                    type="text"
                    {...register('name')}
                    placeholder="Tu Nombre"
                    className={cn(
                      "bg-background/50 border-none text-foreground",
                      errors.name && "border-red-500"
                    )}
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                  )}
                </div>

                <div>
                  <Input
                    type="email"
                    {...register('email')}
                    placeholder="Dirección de Correo Electrónico"
                    className={cn(
                      "bg-background/50 border-none text-foreground",
                      errors.email && "border-red-500"
                    )}
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <Select 
                    onValueChange={(value) => {
                      setValue('eventType', value as ContactFormValues['eventType'])
                      trigger('eventType')
                    }}
                    disabled={isSubmitting}
                  >
                    <SelectTrigger className={cn(
                      "bg-background/50 border-none text-foreground",
                      errors.eventType && "border-red-500"
                    )}>
                      <SelectValue placeholder="Tipo de Evento" />
                    </SelectTrigger>
                    <SelectContent className="text-foreground bg-background">
                      <SelectItem value="wedding">Boda</SelectItem>
                      <SelectItem value="corporate">Evento Corporativo</SelectItem>
                      <SelectItem value="birthday">Fiesta de Cumpleaños</SelectItem>
                      <SelectItem value="other">Otro</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.eventType && (
                    <p className="mt-1 text-sm text-red-500">{errors.eventType.message}</p>
                  )}
                </div>

                <div>
                  <Input
                    type="date"
                    {...register('date')}
                    className={cn(
                      "bg-background/50 border-none text-foreground",
                      errors.date && "border-red-500"
                    )}
                    disabled={isSubmitting}
                  />
                  {errors.date && (
                    <p className="mt-1 text-sm text-red-500">{errors.date.message}</p>
                  )}
                </div>

                <div>
                  <Textarea
                    {...register('message')}
                    placeholder="Cuéntanos sobre tu evento"
                    className={cn(
                      "bg-background/50 border-none text-foreground",
                      errors.message && "border-red-500"
                    )}
                    disabled={isSubmitting}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full !rounded-button whitespace-nowrap bg-primary hover:bg-primary/80"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </div>
            </form>
          </div>
          {/* Right Side Content */}
          <div>
            <h3 className="mb-6 text-2xl font-bold">Información de Contacto</h3>
            <div className="space-y-4">
             
              <p>
                <i className="mr-3 fas fa-phone" /> +1 (939) 415-7217
              </p>
              <p>
                <i className="mr-3 fas fa-clock" />Disponible 24/7
              </p>
            {/* Social Icons, todo: social medias */}
              {/* <div className="flex gap-4 mt-8">
                {["facebook", "instagram", "twitter", "youtube"].map(
                  (social) => (
                    <a
                      key={social}
                      href={`#${social}`}
                      className="text-2xl hover:text-[#FF6EC7] transition-colors cursor-pointer"
                    >
                      <i className={`fab fa-${social}`} />
                    </a>
                  ),
                )}
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
