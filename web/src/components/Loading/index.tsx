import React, {memo} from 'react';
import ReactLoading from 'react-loading';

import './styles.css';

interface ILoading {
  type?:
    | 'blank'
    | 'balls'
    | 'bars'
    | 'bubbles'
    | 'cubes'
    | 'cylon'
    | 'spin'
    | 'spinningBubbles'
    | 'spokes'
    | undefined;
  active?: boolean;
}

const Loading: React.FC<ILoading> = ({
  type = 'spinningBubbles',
  active = false,
}) => (
  <div className={active ? 'Loading active' : 'Loading'}>
    <ReactLoading
      type={type}
      color="#5C6BC0"
      height={'100px'}
      width={'100px'}
    />
  </div>
);

export default memo(Loading);
