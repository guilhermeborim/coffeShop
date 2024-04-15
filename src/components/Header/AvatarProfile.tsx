import { UserButton } from '@clerk/nextjs'

export default function AvatarProfileComponent() {
  return (
    <UserButton
      appearance={{
        elements: {
          userButtonAvatarBox: {
            width: '44px',
            height: '44px',
          },
        },
      }}
    />
  )
}
