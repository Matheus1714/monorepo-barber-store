'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { z } from "zod"
import { useToast } from "@/components/ui/use-toast"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AuthLayout } from "@/components/auth-layout"

const FormSchema = z.object({
  email: z.string({
    required_error: "É necessário colocar o email",
  }).min(2, {
    message: "Email deve conter pelo menos duas letras"
  }).email("Email no formato inválido"),
})

export default function ForgotPasswordPage() {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Email enviado para resetar a senha",
    })
  }


  return (
    <AuthLayout>
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Recuperar Senha</h1>
        <p className="text-balance text-muted-foreground">
          Digite seu email para recuperar a senha
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <FormField
                control={form.control}
                name="email"
                render={({field}) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder="m@example.com"
                      {...field}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="w-full">
              Recuperar Senha
            </Button>
          </div>
        </form>
      </Form>
      <div className="mt-4 text-center text-sm">
        Não tem uma conta?{" "}
        <Link href="/pt/auth/register" className="underline">
          Cadastre-se
        </Link>
      </div>
      <div className="text-center text-sm">
        Voltar para o {" "}
        <Link href="/pt/" className="underline">
          Login
        </Link>
      </div>
    </AuthLayout>
  )
}
