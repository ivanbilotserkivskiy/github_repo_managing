import { describe, test, expect, expectTypeOf } from 'vitest'
import { getIssuesFromRepo } from '../../api/api';
import { IssuesResponse } from '../../utils/types/response.types'

describe('loadRepoData', () => {
  test('load repo data as expected', async () => {
    const repoIssues = await getIssuesFromRepo({ owner: 'facebook', repo: 'react' })

    expectTypeOf(repoIssues).toMatchTypeOf<IssuesResponse>()
    expect(repoIssues.data.length).toBe(30)
  })
  
})