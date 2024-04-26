import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AuthLayout } from "@/components/auth-layout"

export default function RegisterPage() {
  return (
    <AuthLayout>
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Cadastro</h1>
        <p className="text-balance text-muted-foreground">
          Realize o preenchimento das informações para completar o cadastro.
        </p>
      </div>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Nome</Label>
          <Input
            id="name"
            type="text"
            placeholder="Nome"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Telefone</Label>
          <Input
            id="name"
            type="text"
            placeholder="(11) 11111-1111"
            required
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Senha</Label>
          </div>
          <Input id="password" type="password" required />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Repetir Senha</Label>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Cadastrar
        </Button>
      </div>
      <div className="mt-4 text-center text-sm">
        Já tem cadastro?{" "}
        <Link href="/auth" className="underline">
          Faça Login
        </Link>
      </div>
    </AuthLayout>
  )
}
