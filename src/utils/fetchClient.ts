import { Octokit } from 'octokit';
import { RequestOptions, UrlParams } from './types/fetchClient.types';

type RequestMethod = 'GET';

function request<T>(
  url: UrlParams,
  method: RequestMethod = 'GET',
): Promise<T> {

  const options: RequestOptions = {
    owner: url.owner,
    repo: url.repo,
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  };

  return octokit.request(`${method} /repos/${url.owner}/${url.repo}/issues`, options)
    .then(response => {
      return response
    }).catch(err => err)
}

export const client = {
  get: <T>(url: UrlParams) => request<T>(url)
};