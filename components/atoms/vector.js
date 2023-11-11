import WordMark from "./vectors/wordmark"

const svg = {
  wordmark: WordMark,
}

export default function Vector({name, ...props}) {
  const IconComponent = svg[name]
  if (!IconComponent) {
    return null
  }

  return <IconComponent {...props} />
}