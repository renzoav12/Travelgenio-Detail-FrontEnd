const dev = {
    ACCOMMODATION_API: "https://dev-hotels-catalog-accommodation.travelagency.tech",
    ROOMS_API: "https://dev-hotels-shopping-detail.travelagency.tech",
    SUGGESTIONS_API: "https://dev-hotels-autocomplete-suggestion.travelagency.tech",
    I18N_API: "https://dev-hotels-translation.travelagency.tech"
};

const prod = {
    ACCOMMODATION_API: "https://" + window.location.hostname + "/hotels/api/",
    ROOMS_API: "https://" + window.location.hostname + "/hotels/api/",
    SUGGESTIONS_API: "https://" + window.location.hostname + "/hotels/api/",
    I18N_API: "https://" + window.location.hostname + "/hotels/api/"
};

const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    ...config
};
