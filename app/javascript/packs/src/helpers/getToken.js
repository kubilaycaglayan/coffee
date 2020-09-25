const getToken = () => document.querySelector("meta[name='csrf-token']").getAttribute('content');

export default getToken;
