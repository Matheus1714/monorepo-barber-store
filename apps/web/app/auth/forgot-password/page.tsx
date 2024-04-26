import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AuthLayout } from "@/components/auth-layout"

export default function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Recuperar Senha</h1>
        <p className="text-balance text-muted-foreground">
          Digite seu email para recuperar a senha
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
        <Button type="submit" className="w-full">
          Recuperar Senha
        </Button>
      </div>
      <div className="mt-4 text-center text-sm">
        Não tem uma conta?{" "}
        <Link href="/auth/register" className="underline">
          Cadastre-se
        </Link>
      </div>
      <div className="text-center text-sm">
        Volar para o {" "}
        <Link href="/" className="underline">
          Login
        </Link>
      </div>
    </AuthLayout>
  )
}
