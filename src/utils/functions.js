
const fetchEvents = async () => {
    try {
        const offsetArr = [1, 101, 201];
        const eventArr = [];

        offsetArr.forEach(async(item, index) => {
            const res = await fetch(`https://www.skiddle.com/api/v1/events/search/?api_key=9eca984fc063066727406327c285fb75&latitude=53.4839&longitude=-2.2446&radius=5&eventcode=LIVE&order=distance&description=1&limit=100&offset=${item}`);
            const data = await res.json();
            // console.log(`result at index ${index}`, data.results[index])
            data.results.forEach(async(item, index) => {
                // eventArr.push(item[index].artists[index]);
                // console.log(`result at index ${index}`, data.results[index]);
                const eventObj = {
                    testKey: "test test test",
                    id: item.id,
                    EventCode: item.EventCode,
                    artists: item.artists,
                    date: item.date,
                    description: item.description,
                    imageurl: item.imageurl,
                };
                
                eventArr.push(eventObj);
            });
        });
        // for (let i = 0; i < eventArr.length; i++) {
        //     console.log(eventArr[i]);
        // }
        // // for(let item of eventArr) {
        // //     console.log(item);
        // // }
        return eventArr;
    } catch (error) {
        console.log(error);
    }
};

export default fetchEvents; 