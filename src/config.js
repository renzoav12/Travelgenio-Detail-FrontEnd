const dev = {
    ACCOMMODATION_API: "https://" + window.location.hostname + "/hotels/api/",
    ROOMS_API: "https://" + window.location.hostname + "/hotels/api/",
    AUTOCOMPLETE_API: "https://" + window.location.hostname + "/hotels/api/autocomplete",
    TRANSLATION_API: "https://" + window.location.hostname + "/hotels/api/",
    GOOGLE_MAP_KEY: "AIzaSyBNbxebn0wds-Anmg_bPsym7YZcVJqPIK0",
    COBRAND: "https://" + window.location.hostname + "/hotels/api/translations/config",
    EMAIL_SUBSCRIPTION: "http://v24-hermes.int.travelgenio.tech"
};

const prod = {
    ACCOMMODATION_API: "https://" + window.location.hostname + "/hotels/api/",
    ROOMS_API: "https://" + window.location.hostname + "/hotels/api/",
    AUTOCOMPLETE_API: "https://" + window.location.hostname + "/hotels/api/autocomplete",
    TRANSLATION_API: "https://" + window.location.hostname + "/hotels/api/",
    GOOGLE_MAP_KEY: "AIzaSyBNbxebn0wds-Anmg_bPsym7YZcVJqPIK0",
    COBRAND: "https://" + window.location.hostname + "/hotels/api/translations/config",
    EMAIL_SUBSCRIPTION: "http://v24-hermes.int.travelgenio.tech"
};

const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    ...config
};
