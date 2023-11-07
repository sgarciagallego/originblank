import ArrowRight from "./vectors/arrowRight"
import WordMark from "./vectors/wordmark"

const svg = {
  wordmark: WordMark,
  arrowRight: ArrowRight,
}

export default function Vector({name, ...props}) {
  const IconComponent = svg[name]
  if (!IconComponent) {
    return null
  }

  return <IconComponent {...props} />
}