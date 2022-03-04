const {regencies, provinces} = require('../data/location')

// exports.getCities = (req, res) => {
//     const provinceName = req.query.provinceName;
//     let provinceId;
//     location.provinces.forEach((item) => {
//         if (item.name.toLowerCase().includes(provinceName.toLowerCase)) {
//             provinceId = item.id
//         }
//     })
//     let data = []
// }


exports.getProvinceName = (req, res) => {
    let provinsi = req.query.provinceName;
    let data = [];
    let provinceId;
    provinces.forEach((item) => {
        console.log('id : ' + item.id);
        console.log(item.name);
        // console.log('alt name : ' + item.alt_name);
        if (item.name.toLowerCase().includes(provinsi.toLowerCase())) {
            provinceId = item.id
        }
    })
    regencies.forEach((item) => {
        // console.log('province id : ' + item.province_id);
        if (item.province_id == provinceId) {
            data.push(item)
        }
    });
    res.json(data)
}

exports.getCitiesNameByWordCount = (req, res) => {
    console.log('req n-count : ' + req.params);
    let wordCount = req.query.count;
    let data = []
    regencies.forEach((item) => {
        console.log(item.id);
        // console.log(item.name);
        if (item.name.split(" ").length == wordCount) {
            data.push(item)
        }
    })
    res.json(data)
}

exports.getProvinceByCityName = (req, res) => {
    let city = req.query.cityName;
    let data = [];
    let provinceId;

    regencies.forEach((item) => {
        console.log(item.name);
        if (item.name.toLowerCase().split(" ").includes(city.toLowerCase())) {
            provinceId = item.province_id
            // city = item.name
            // data.push(item)
        }
    })
    provinces.forEach((item) => {
        if (item.id == provinceId && city == city) {
            data.push(item)
        }
    })
    res.json(data)
}