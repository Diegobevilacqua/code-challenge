const getHost = (url) => {
    url = new URL(url)
    return url.host
  }
  
export const getURL = (url) => {
    return url.substring("apiserver:".length)
  }
  
  const getServerURL = (str) => {
    let url = str.substring("apiserver:".length)
    url = new URL(url)
    url = url.protocol + "//" + url.host
    return url
  }
  
  const getPathname = (url) => {
    url = new URL(url)
    return url.pathname
  }
  
  const getUserPair = (str) => {
    let arr = str.split(";")
    return arr[1]
  }
  
  const getPasswordPair = (str) => {
    let arr = str.split(";")
    return arr[2]
  }

  export const getServerUrl = (url) => {
    url = url.substring("apiserver:".length)
    let arr = url.split("/")
    return arr[0] + "//" + arr[1] + arr[2]
  }

  export const getUser = (url) => {
    let pair = getUserPair(getPathname(getURL(url)))
    let arr = pair.split(":")
    return arr[1]
 }
  
  export const getPassword = (url) => {
    let pair = getPasswordPair(getPathname(getURL(url)))
    let arr = pair.split(":")
    return arr[1]
  }