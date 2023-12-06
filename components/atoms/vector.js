import CheckVector from "./vectors/check"
import UncheckVector from "./vectors/uncheck"
import WordMark from "./vectors/wordmark"

const svg = {
  check: CheckVector,
  uncheck: UncheckVector,
  wordmark: WordMark,
}

export default function Vector({name, ...props}) {
  const IconComponent = svg[name]
  if (!IconComponent) {
    return null
  }

  return <IconComponent {...props} />
}