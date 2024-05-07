interface BadgeOrderProps {
  children: React.ReactNode
}

export const BadgeOrder = ({ children }: BadgeOrderProps) => {
  return (
    <div className="border border-borderSize bg-white text-textBadges font-normal text-12">
      {children}
    </div>
  )
}
