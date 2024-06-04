import { useState, useCallback } from 'react';
//import'../components/vacancyForm/userData.json'
// перенесли повторяющиеся в отдельный хук, чтобы потом его переиспользовать в разных местах (loading, error, связь с сервером, очистка ошибки если персонажа нет)

export default function useHttp() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const request =
        useCallback(
            async (
                url,
                method = 'GET',
                body = null,
                mode = 'cors',
                credentials = 'include',
                contentType = 'application/json',
            ) => {
                setLoading(true);
                try {
                    const response = await fetch(url, {
                        method,
                        body,
                        mode,
                        credentials,
                        headers: {
                            "Content-type": contentType,
                        }
                    });
                    if (!response.ok) {
                        throw new Error(
                            `Could not fetch ${url}, status: ${response.status}`,
                        );
                    }

                    // eslint-disable-next-line no-redeclare
                    var contentType = response.headers.get('content-type')
                    if (contentType && contentType.indexOf('application/json') !== -1) {
                        const data = await response.json();
                        return data;
                    }
                    if (contentType && contentType.indexOf('text/plain') !== -1){
                        const data = await response.text()
                        return data;
                    }
                    
                    else {
                        return ({})
                    }

                    //console.log(typeof response)
                    //const data = await response.json();
                    //setLoading(false);

                    //return data;





                } catch (e) {
                    throw e;
                }
            }, []);



    return { loading, request };
}
