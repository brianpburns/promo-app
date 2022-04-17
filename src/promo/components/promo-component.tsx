import React from 'react';
import { ControlButton, WithControls } from 'smart-builder-sdk';
import { ComponentProps, WithStylesProps } from 'unbounce-smart-builder-sdk-types';

import { DataStructure } from '../types';
import { getVideoId } from '../util/get-video-id';
import { Panel } from './control-panel';
import { Placeholder } from './placeholder';
import { SettingsIcon } from './settings-icon';
import { Overlay, Wrapper } from './styled';

const PromoComponent = ({ data, mode }: ComponentProps<DataStructure, WithStylesProps>) => {
  const { src, autoPlay, loopVideo } = data;

  const videoId = getVideoId(src);
  const loop = mode.type !== 'edit' && loopVideo ? '&loop=1' : '';
  const shouldAutoPlay = mode.type !== 'edit' && autoPlay ? '&autoplay=1' : '';

  return (
    <Wrapper>
      {mode.type === 'edit' && <Overlay />}
      {videoId ? (
        <iframe
          src={`https://promo.com/embed/${videoId}?ratioAspect=square${loop}${shouldAutoPlay}&type=preview`}
          title="Promo video"
          frameBorder="0"
          data-testid="promo-video"
          allowFullScreen
        ></iframe>
      ) : (
        <Placeholder />
      )}
    </Wrapper>
  );
};

const label = 'Add Promo Video';

export default WithControls(PromoComponent, [
  {
    id: 'design',
    label: label,
    Button: (props) => (
      <ControlButton label={label} active={false} {...props}>
        <SettingsIcon />
      </ControlButton>
    ),
    Panel,
  },
]);
