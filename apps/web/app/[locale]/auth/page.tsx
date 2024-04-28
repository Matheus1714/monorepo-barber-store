'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { z } from "zod"
import { useToast } from "@/components/ui/use-toast"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AuthLayout } from "@/components/auth-layout"

const FormSchema = z.object({
  email: z.string({
    required_error: "É necessário colocar o email",
  }).min(2, {
    message: "Email deve conter pelo menos duas letras"
  }).email("Email no formato inválido"),
  password: z.string({
    required_error: "É necessário colocar a senha",
  }).min(4, {
    message: "Senha deve ter pelo menos 4 caracteres",
  }),
})

export default function LoginPage() {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Login realizado com sucesso!",
    })
  }

  return (
    <AuthLayout>
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-balance text-muted-foreground">
          Entre com seu email abaixo para entrar na sua conta
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
                <FormItem className="flex flex-col">
                  <FormLabel>Email</FormLabel>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    onChange={field.onChange}
                    defaultValue={field.value}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({field}) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Senha</FormLabel>
                  <Input
                    id="password"
                    type="password"
                    onChange={field.onChange}
                    defaultValue={field.value}
                  />
                  <FormMessage />
                  <Link
                    href="/pt/auth/forgot-password"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Esqueceu a senha?
                  </Link>
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full">
            Login
          </Button>
        </div>
        </form>
      </Form>
      <div className="mt-4 text-center text-sm">
        Não tem uma conta?{" "}
        <Link 
          href="/pt/auth/register"
          className="underline"
        >
          Cadastre-se
        </Link>
      </div>
    </AuthLayout>
  )
}
