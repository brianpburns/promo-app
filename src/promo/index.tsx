import { component, Schema } from 'ub-shared';

import PromoComponent from './components/promo-component';

const schema = Schema.object({
  src: Schema.string(),
  autoPlay: Schema.boolean().default(true),
  loopVideo: Schema.boolean().default(false),
}).noControls();

export const Component = component({
  componentTypeId: 'promoVideoMaker',
  displayName: 'Promo Video',
  tags: ['newControls', 'swappable'],
  schema,
  Component: PromoComponent,
});
