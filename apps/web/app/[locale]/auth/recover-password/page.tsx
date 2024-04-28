'use client'

import { useState } from 'react'

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


export default function RecoverPasswordPage() {
  const [passwordError, setPasswordError] = useState("")

  const { toast } = useToast()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (data.password !== data.confirmPassword) {
      setPasswordError("As senhas não correspondem");
      return;
    }

    toast({
      title: "Cadastro realizado com sucesso!",
    })
  }

  return (
    <AuthLayout>
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Nova Senha</h1>
        <p className="text-balance text-muted-foreground">
          Digite uma nova senha
        </p>
      </div>
      <div className="grid gap-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="password"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Nova Senha</FormLabel>
                  <Input id="password" type="password" {...field}/>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({field}) => (
                <FormItem>
                  <FormLabel>Confirmar Senha</FormLabel>
                  <Input id="confirmPassword" type="password" {...field}/>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
            <Button type="submit" className="w-full">
              Redefinir senha
            </Button>
          </form>
        </Form>
      </div>
      <div className="mt-4 text-center text-sm">
        Já tem cadastro?{" "}
        <Link href="/pt/auth" className="underline">
          Faça Login
        </Link>
      </div>
    </AuthLayout>
  )
}
