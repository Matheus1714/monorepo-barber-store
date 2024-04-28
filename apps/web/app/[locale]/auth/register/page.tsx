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
import { PhoneInput } from "@/components/ui/phone-input";

const FormSchema = z.object({
  name: z.string({
    required_error: "É necessário colocar o nome",
  }),
  email: z.string({
    required_error: "É necessário colocar o email",
  }),
  phone: z.string({
    required_error: "É necessário colocar o telefone",
  }),
  password: z.string({
    required_error: "É necessário colocar a senha",
  }).min(4, {
    message: "Senha deve ter mais que 4 caracteres"
  }),
  confirmPassword: z.string({
    required_error: "É necessário colocar confirmar a senha",
  }).min(4, {
    message: "Senha deve ter mais que 4 caracteres"
  }),
}).refine(({ confirmPassword, password }) => confirmPassword === password, {
  message: 'As senhas não correspondem',
})

export default function RegisterPage() {
  const { toast } = useToast()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "Cadastro realizado com sucesso!",
    })
  }

  return (
    <AuthLayout>
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Cadastro</h1>
        <p className="text-balance text-muted-foreground">
          Realize o preenchimento das informações para completar o cadastro.
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Nome"
                    onChange={field.onChange}
                    defaultValue={field.value}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
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
                    onChange={field.onChange}
                    defaultValue={field.value}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Celular</FormLabel>
                  <PhoneInput
                    placeholder="+55 (11) 11111-1111"
                    {...field}
                    maxLength={15}
                    defaultCountry="BR"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <Input
                    id="password"
                    type="password"
                    onChange={field.onChange}
                    defaultValue={field.value}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Confirmar senha</FormLabel>
                  <Input
                    id="password"
                    type="password"
                    onChange={field.onChange}
                    defaultValue={field.value}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Cadastrar
            </Button>
          </div>
        </form>
      </Form>
      <div className="mt-4 text-center text-sm">
        Já tem cadastro?{" "}
        <Link href="/pt/auth" className="underline">
          Faça Login
        </Link>
      </div>
    </AuthLayout>
  )
}
