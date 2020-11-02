// @flow

import mediator from 'lib/mediator';
import {onConsentChange, getConsentFor} from '@guardian/consent-management-platform';

export const init: () => void = () => {
  onConsentChange(state => {
      const gaConsents = getConsentFor('google-analytics', state);
      mediator.emit('ga:gaConsentChange', gaConsents);
  })
};
