async function showDetails() {
    return await fetch(
        "https://api.openweathermap.org/data/2.5/onecall?lat=21.0245&lon=105.8412&appid=04d4d495e39f2311c4acd1148b6e2130",
        {
            credentials: "omit",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Accept-Language": "en-US,en;q=0.5",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "cross-site",
            },
            referrer: "https://eager-hamilton-724cee.netlify.app/",
            method: "GET",
            mode: "cors",
        }
    );
}

async function showLocations() {
    const locationData = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=ha%20noi&appid=04d4d495e39f2311c4acd1148b6e2130",
        {
            credentials: "omit",
            headers: {
                "User-Agent":
                    "Mozilla/5.0 (X11; Linux x86_64; rv:120.0) Gecko/20100101 Firefox/120.0",
                Accept: "application/json, text/plain, */*",
                "Accept-Language": "en-US,en;q=0.5",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "cross-site",
            },
            referrer: "https://eager-hamilton-724cee.netlify.app/",
            method: "GET",
            mode: "cors",
        }
    );
    console.log(locationData);
}
showLocations();
