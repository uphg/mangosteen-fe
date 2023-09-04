export type FormData = {
  [k: string]: string | number | null | undefined | FormData
}

export type Rules<T extends object> = {
  [k in keyof T]?: { type: 'required' | 'pattern', message: string, regex?: RegExp }[]
}

export type ValidateErrors<T> = {
  [k in keyof T]?: string[]
}

const ruleTypes = ['required', 'pattern']

export function validate<T extends FormData>(formData: T, rules: Rules<T>) {
  const errors: ValidateErrors<T> = {}  
  const keys = Object.keys(rules)
  keys.forEach((key: keyof T) => {
    const item = rules[key] 
    const value = formData[key]
    item?.forEach(rule => {
      const { type, message } = rule
      if (ruleTypes.includes(type)) {
        errors[key] = errors[key] ?? []
        switch (type) {
          case 'required':
            if (isEmpty(value)) {
              errors[key]?.push(message)
            }
            break
          case 'pattern':
            if (!isEmpty(value) && !rule.regex?.test(value!.toString())) {
              errors[key]?.push(message)
            }
            break
          default:
            break
        }
      }
    })
  })

  return errors
}

export function validateItem<T extends FormData>(formData: T, rules: Rules<T>, key: keyof T) {
  const items = rules[key]
  const value = formData[key]
  let result = ''
  items?.forEach(rule => {
    const { type, message } = rule
    if (ruleTypes.includes(type)) {
      switch (type) {
        case 'required':
          if (isEmpty(value)) {
            result = message
          }
          break
        case 'pattern':
          if (!isEmpty(value) && !rule.regex?.test(value!.toString())) {
            result = message
          }
          break
        default:
          break
      }
    }
  })
  return result
}


function isEmpty(value: unknown): value is (null | undefined | '') {
  return value === null || value === undefined || value === ''
}