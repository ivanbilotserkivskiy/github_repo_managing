import { atom } from "recoil";
import { GitHubCardIssue } from "../../utils/types/gitHubIssue.types";

export const RepoIssuesState = atom({
  key: 'RepoIssuesArray',
  default: [] as GitHubCardIssue[]
})