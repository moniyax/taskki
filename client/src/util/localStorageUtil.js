export const load = (key) => {
  try {
    const item = localStorage.getItem(key)
    if (item === null) {
      return undefined
    }
    return JSON.parse(item)
  } catch (err) {
    return undefined
  }
}

export const save = (key, item) => {
  try {
    localStorage.setItem(key, JSON.stringify(item))
  } catch (err) {
    console.log(err)
  }
}
