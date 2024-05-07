'use client'
import { Login } from '@/components/login'
import { SessionProvider, useSession } from 'next-auth/react'

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <UserSession>{children}</UserSession>
    </SessionProvider>
  )
}

export default AuthProvider

const UserSession = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession()

  if (status === 'unauthenticated') {
    return <Login />
  }
  return <>{children}</>
}
