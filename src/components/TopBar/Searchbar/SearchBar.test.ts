import { describe, test, expect } from 'vitest'
import { getValidGitUrl } from '../../../utils/custom/getValidUrl.custom'

describe('urlValidation', () => {
  test('validation git url as expected', async () => {
    const validUserUrl = getValidGitUrl('https://github.com/vuejs/vue')

    expect(validUserUrl).toStrictEqual({
      owner: 'vuejs',
      repo: 'vue'
    })

    const invalidUserUrl = getValidGitUrl('https://google.com')

    expect(invalidUserUrl).toBe('link is not valid')
  })
  
})