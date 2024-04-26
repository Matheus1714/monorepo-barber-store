import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AuthLayout } from "@/components/auth-layout"

export default function RecoverPasswordPage() {
  return (
    <AuthLayout>
      <div className="grid gap-2 text-center">
        <h1 className="text-3xl font-bold">Nova Senha</h1>
        <p className="text-balance text-muted-foreground">
          Digite uma nova senha
        </p>
      </div>
      <div className="grid gap-4">
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
          Redefinir senha
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
