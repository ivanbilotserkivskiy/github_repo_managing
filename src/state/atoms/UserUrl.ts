import { atom } from "recoil";
import { UserUrlData } from "../../utils/types/userUrl.typer";

export const UserUrl = atom({
  key: 'UserUrl',
  default: {
    owner: '',
    repo: ''
  } as UserUrlData
})