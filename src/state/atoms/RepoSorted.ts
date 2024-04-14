import { atom } from "recoil";
import { SortedIssues } from "../../utils/types/sortedIssues.types";

export const SortedRepoState = atom({
  key: 'RepoSorted',
  default: [] as SortedIssues[]
})