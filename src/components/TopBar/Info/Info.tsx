import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { UserUrl } from '../../../state/atoms/UserUrl';
import { useRecoilState } from 'recoil';

const TopBarInfo = () => {
  const [userUrl, _] = useRecoilState(UserUrl);

  return (
    (
      (userUrl && typeof userUrl !== 'string' && userUrl.repo)
      ? (<Breadcrumb>
          <Breadcrumb.Item href={`https://github.com/${userUrl.owner}`} >{userUrl.owner}</Breadcrumb.Item>
          <Breadcrumb.Item href={`https://github.com/${userUrl.owner}/${userUrl.repo}`}>
            {userUrl.repo}
          </Breadcrumb.Item>
        </Breadcrumb>
      )
      : null
    )
  )
}

export default TopBarInfo