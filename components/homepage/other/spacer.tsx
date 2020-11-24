type Props = {
  spacing: string
}

export default function Spacer({ spacing }: Props) {
  return <div style={{ width: "100%", height: spacing }} />
}
