import { IssueListStatus } from "../constants/issueProgressStatus.constant";
import { GitHubCardIssue } from "../types/gitHubIssue.types";
import { SortedIssues } from "../types/sortedIssues.types";

export const sortedMockedData: SortedIssues[] = [
  { 
  id: 1, 
  title: 'To Do',
  value: [] as GitHubCardIssue[],
  status: IssueListStatus.ToDo
},
{ 
  id: 2,
  title: 'In Progress',
  value: [
    {
    "id": 2247682942,
    "number": 145,
    "title": "接口问题",
    "state": "open",
    "locked": false,
    "assignee": {
        "login": "baixin513",
        "id": 52996290,
        "node_id": "MDQ6VXNlcjUyOTk2Mjkw",
        "avatar_url": "https://avatars.githubusercontent.com/u/52996290?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/baixin513",
        "html_url": "https://github.com/baixin513",
        "followers_url": "https://api.github.com/users/baixin513/followers",
        "following_url": "https://api.github.com/users/baixin513/following{/other_user}",
        "gists_url": "https://api.github.com/users/baixin513/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/baixin513/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/baixin513/subscriptions",
        "organizations_url": "https://api.github.com/users/baixin513/orgs",
        "repos_url": "https://api.github.com/users/baixin513/repos",
        "events_url": "https://api.github.com/users/baixin513/events{/privacy}",
        "received_events_url": "https://api.github.com/users/baixin513/received_events",
        "type": "User",
        "site_admin": false
    },
    "comments": 1,
    "created_at": "2024-04-17T08:20:41Z",
    "closed_at": null,
    "author_association": "NONE",
}] as GitHubCardIssue[],
  status: IssueListStatus.InProgress
},
{ 
  id: 3,
  title: 'Done',
  value: [{
    "id": 2247682949,
    "number": 144,
    "title": "接口问题",
    "state": "open",
    "locked": false,
    "assignee": {
        "login": "baixin513",
        "id": 52996290,
        "node_id": "MDQ6VXNlcjUyOTk2Mjkw",
        "avatar_url": "https://avatars.githubusercontent.com/u/52996290?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/baixin513",
        "html_url": "https://github.com/baixin513",
        "followers_url": "https://api.github.com/users/baixin513/followers",
        "following_url": "https://api.github.com/users/baixin513/following{/other_user}",
        "gists_url": "https://api.github.com/users/baixin513/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/baixin513/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/baixin513/subscriptions",
        "organizations_url": "https://api.github.com/users/baixin513/orgs",
        "repos_url": "https://api.github.com/users/baixin513/repos",
        "events_url": "https://api.github.com/users/baixin513/events{/privacy}",
        "received_events_url": "https://api.github.com/users/baixin513/received_events",
        "type": "User",
        "site_admin": false
    },
    "comments": 1,
    "created_at": "2024-04-17T08:20:41Z",
    "closed_at": null,
    "author_association": "NONE",
},
{
  "id": 2247682944,
  "number": 143,
  "title": "接口问题",
  "state": "open",
  "locked": false,
  "assignee": {
      "login": "baixin513",
      "id": 52996290,
      "node_id": "MDQ6VXNlcjUyOTk2Mjkw",
      "avatar_url": "https://avatars.githubusercontent.com/u/52996290?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/baixin513",
      "html_url": "https://github.com/baixin513",
      "followers_url": "https://api.github.com/users/baixin513/followers",
      "following_url": "https://api.github.com/users/baixin513/following{/other_user}",
      "gists_url": "https://api.github.com/users/baixin513/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/baixin513/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/baixin513/subscriptions",
      "organizations_url": "https://api.github.com/users/baixin513/orgs",
      "repos_url": "https://api.github.com/users/baixin513/repos",
      "events_url": "https://api.github.com/users/baixin513/events{/privacy}",
      "received_events_url": "https://api.github.com/users/baixin513/received_events",
      "type": "User",
      "site_admin": false
  },
  "comments": 1,
  "created_at": "2024-04-17T08:20:41Z",
  "closed_at": null,
  "author_association": "NONE",
}
] as GitHubCardIssue[],
  status: IssueListStatus.Done
}
]