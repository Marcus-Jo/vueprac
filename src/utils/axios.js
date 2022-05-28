import axios from 'axios'

const awaitApi = async (_config) => {

    try {
        return {
            success: true,
            result: (await axios(_config)).data,
            error: false
        }
    } catch (e) {
        return {
            success: false,
            result: null,
            error: e
        };
    }
}

export const getTest = () => {
    const config = {
        method: 'GET',
        url: `https://httpbin.org/get`
    }
    return awaitApi(config);
};