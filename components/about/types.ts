export type AboutSource = {
  course: string
  platform: string
  description: string
  attribution: string
}

export type AboutRule = {
  title: string
  description: string
}

export type ReadingStep = {
  number: string
  label: string
  title: string
  description: string
  detail: string
}

export type AboutQuestion = {
  question: string
  answer: string
  href?: string
  linkLabel?: string
}
