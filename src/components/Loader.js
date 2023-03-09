
import { css } from '@emotion/react';
import { PropagateLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export default function Loader() {
  return (
    <div className="sweet-loading">
      <PacmanLoader css={override} size={25} color={'#123abc'} loading={true} />
      <div>Loading...</div>
    </div>
  );
}

