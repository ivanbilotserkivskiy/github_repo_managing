import Icon from '@mdi/react';
import { mdiStar } from '@mdi/js';

export default function TopBarRating () {
    return (
      <div>
        <Icon path={mdiStar}
          title="Repository Raiting"
          size={1}
          color="orange"
        />
        <span>194 </span>
        <span>K </span>
        <span>stars</span>
      </div>
    )
}