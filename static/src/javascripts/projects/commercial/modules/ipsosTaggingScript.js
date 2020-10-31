// @flow
import { onConsentChange, getConsentFor } from '@guardian/consent-management-platform';
import config from 'lib/config';
import { loadScript } from '@guardian/libs';

const allowSections = ["lifeandstyle", "food", "travel", "sport"]; // eslint-disable-line no-unused-vars

const loadIpsosScript = function () {

    console.debug("Ipsos tag fired");
    window.dm = window.dm ||{ AjaxData:[]};
    window.dm.AjaxEvent = function(et, d, ssid, ad){
        // $FlowFixMe
        dm.AjaxData.push({ et,d,ssid,ad}); // eslint-disable-line no-undef
        if (window.DotMetricsObj) {
                // $FlowFixMe
                DotMetricsObj.onAjaxDataUpdate(); // eslint-disable-line no-undef
        }
    };
    const ipsosSource = `https://uk-script.dotmetrics.net/door.js?d=${  document.location.host  }&t=${ config.get('page.ipsosTag')}`;

    loadScript(ipsosSource, { id: 'ipsos', async: true, type: 'text/javascript' });
};

export const init = (): Promise<void> => {

        onConsentChange(state => {
            // Initial testing only
            console.log(getConsentFor('ipsos', state));
            if(document.location.href === "https://www.theguardian.com/science/grrlscientist/2012/aug/07/3" || document.location.href === "https://www.theguardian.com/science/grrlscientist/2012/aug/07/3?dcr=true") {
                if (getConsentFor('ipsos', state)) {
                    loadIpsosScript();
                }
            }
        });

    return Promise.resolve();
};


