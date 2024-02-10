export function classNames(...classes: (string | boolean | undefined | null | false)[]): string {
    return classes.filter(Boolean).join(' ')
  }
  