import { UserUrlData } from "../types/userUrl.typer";

export const getValidGitUrl = (url: string) : string | UserUrlData => {
  const githubRepoRegex = /^(?:https?:\/\/)?(?:www\.)?github\.com\/([a-zA-Z0-9-]+)\/([a-zA-Z0-9-]+)(?:\/)?$/;
  if (!githubRepoRegex.test(url)) {
    return 'link is not valid'
  } 
  const splitedUrl = url.split('/')

  return {
    repo: splitedUrl[splitedUrl.length - 1],
    owner: splitedUrl[splitedUrl.length - 2]
  }
}