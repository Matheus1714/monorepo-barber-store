import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AuthLayout } from "@/components/auth-layout"
import { RootPageProps } from "../page"

export default function LoginPage(props: RootPageProps) {
  console.log(props.params.locale)
  return (
    <AuthLayout>
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Login</h1>
        <p className="text-balance text-muted-foreground">
          Entre com seu email abaixo para entrar na sua conta
        </p>
      </div>
      <div className="grid gap-4">
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
          <div className="flex items-center">
            <Label htmlFor="password">Senha</Label>
            <Link
              href="/pt/auth/forgot-password"
              className="ml-auto inline-block text-sm underline"
            >
              Esqueceu a senha?
            </Link>
          </div>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
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
