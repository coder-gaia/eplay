import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link'
  to?: string
  title: string
  children: string
  onClick?: () => void
  variant?: 'primary' | 'secondary'
}

const Button = ({ type, title, to, onClick, children, variant }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        variant={variant}
        type="button"
        title={title}
        onClick={onClick}
      >
        {children}
      </ButtonContainer>
    )
  }

  return (
    <ButtonLink to={to as string} title={title}>
      {children}
    </ButtonLink>
  )
}
export default Button
