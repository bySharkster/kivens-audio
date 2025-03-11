"use client"

import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { sendEmail } from '@/app/actions/send-email'
import { contactFormSchema, type ContactFormValues } from '@/types/schema.zod'
import { useState } from 'react'
import { siteConfig } from '@/config/site'
import Link from 'next/link'
import { Label } from '../ui/label'

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
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
        reset()
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
    <section id="contacto" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-4xl text-center font-great-vibes text-primary">Contáctanos</h2>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre</Label>
                <Input
                  id="name"
                  {...register('name')}
                  placeholder="Tu nombre"
                  className="border-primary"
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="text-sm text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input
                  id="email"
                  type="email"
                  {...register('email')}
                  placeholder="Tu correo electrónico"
                  className="border-primary"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-sm text-red-500">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensaje</Label>
                <Textarea
                  id="message"
                  {...register('message')}
                  placeholder="Tu mensaje"
                  className="border-primary"
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="text-sm text-red-500">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-background !rounded-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </Button>
            </div>
          </form>

          <div className="space-y-6">
            <div className="p-6 rounded-lg bg-tertiary">
              <h3 className="mb-4 text-xl font-semibold text-primary">Cerca de ti</h3>
              <p className="text-primary">
                {siteConfig.business.address}
              </p>
              <div className="mt-4">
                <p className="text-primary">
                  <strong>Horario:</strong><br />
                  Lun-Sáb: 7:00 AM - 8:00 PM<br />
                  Dom: 8:00 AM - 6:00 PM
                </p>
              </div>
              <div className="flex mt-4 space-x-4">
                <Link href={`${siteConfig.business.socialMedia.facebook}`} target="_blank" rel="noopener noreferrer">
                  <i className="text-xl transition-colors fab fa-facebook text-primary hover:text-primary/80"/>
                </Link>
                <Link href={`https://instagram.com/${siteConfig.business.socialMedia.instagram}`} target="_blank" rel="noopener noreferrer">
                  <i className="text-xl transition-colors fab fa-instagram text-primary hover:text-primary/80"/>
                </Link>
                <Link href={`${siteConfig.business.socialMedia.whatsapp}`} target="_blank" rel="noopener noreferrer">
                  <i className="text-xl transition-colors fab fa-whatsapp text-primary hover:text-primary/80"/>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
