import { describe, test, expect, expectTypeOf } from 'vitest'
import { getReorderedIssues } from '../../../utils/custom/getReorderedIssues';
import { IssueListStatus } from '../../../utils/constants/issueProgressStatus.constant';
import { sortedMockedData } from '../../../utils/testMockData/sortedMocked';
import { SortedIssues } from '../../../utils/types/sortedIssues.types';

describe('reorderIssues', () => {
  test('replace issue status as expected', () => {
    const repoIssues = getReorderedIssues(2247682942, IssueListStatus.Done, sortedMockedData, 0)
    expectTypeOf(repoIssues).toMatchTypeOf<SortedIssues[] | undefined>()

    const inProgressIssue = repoIssues?.find(issues => issues.status === IssueListStatus.Done)

    expect(inProgressIssue)
    expect(inProgressIssue?.value.length).toBe(3)
  }),

  test('change issue position as expected', () => {
    const repoIssues = getReorderedIssues(2247682949, IssueListStatus.Done, sortedMockedData, 1)
    expectTypeOf(repoIssues).toMatchTypeOf<SortedIssues[] | undefined>()

    const inProgressIssue = repoIssues?.find(issues => issues.status === IssueListStatus.Done)

    expect(inProgressIssue)
    expect(inProgressIssue?.value.length).toBe(2)
    expect(inProgressIssue?.value[1].id).toBe(2247682949)
  })
})