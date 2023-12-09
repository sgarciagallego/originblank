import CheckVector from "./vectors/check"
import MinusVector from "./vectors/minus"
import UncheckVector from "./vectors/uncheck"
import WordMark from "./vectors/wordmark"

const svg = {
  check: CheckVector,
  minus: MinusVector,
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