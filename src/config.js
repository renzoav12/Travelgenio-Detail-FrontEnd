const dev = {
    ACCOMMODATION_API: "https://dev-hotels-shopping-detail.travelagency.tech",
    ROOMS_API: "https://dev-hotels-shopping-detail.travelagency.tech"
};

const prod = {
    ACCOMMODATION_API: "https://" + window.location.hostname + "/hotels/api/",
    ROOMS_API: "https://" + window.location.hostname + "/hotels/api/"
};

const config = process.env.REACT_APP_STAGE === 'prod'
    ? prod
    : dev;

export default {
    ...config
};