

const states = [
    { value: 'AK', name: 'Alaska', lat: '66.160507', long: '-153.369141' },
    { value: 'TX', name: 'Texas', lat: '31.000000', long: '-100.000000' },
    { value: 'AL', name: 'Alabama', lat: '32.318230', long: '-86.902298' },
    { value: 'AR', name: 'Arkansas', lat: '34.799999', long: '-92.199997' },
    { value: 'AZ', name: 'Arizona', lat: '34.048927', long: '-111.093735' },
    { value: 'CA', name: 'California', lat: '36.778259', long: '-119.417931' },
    { value: 'CO', name: 'Colorado', lat: '39.113014', long: '-105.358887' },
    { value: 'CT', name: 'Connecticut', lat: '41.599998', long: '-72.699997' },
    { value: 'DC', name: 'District of Columbia', lat: '38.942142', long: '-77.025955' },
    { value: 'DE', name: 'Delaware', lat: '39.000000', long: '-75.500000' },
    { value: 'FL', name: 'Florida', lat: '27.994402', long: '-81.760254' },
    { value: 'GA', name: 'Georgia', lat: '33.247875', long: '-83.441162' },
    { value: 'HI', name: 'Hawaii', lat: '19.741755', long: '-155.844437' },
    { value: 'IA', name: 'Iowa', lat: '42.032974', long: '-93.581543' },
    { value: 'ID', name: 'Idaho', lat: '44.068203', long: '-114.742043' },
    { value: 'IL', name: 'Illinois', lat: '40.000000', long: '-89.000000' },
    { value: 'IN', name: 'Indiana', lat: '40.273502', long: '-86.126976' },
    { value: 'KS', name: 'Kansas', lat: '38.500000', long: '-98.000000' },
    { value: 'KY', name: 'Kentucky', lat: '37.839333', long: '-84.270020' },
    { value: 'LA', name: 'Louisiana', lat: '30.391830', long: '-92.329102' },
    { value: 'MA', name: 'Massachusetts', lat: '42.407211', long: '-71.382439' },
    { value: 'MD', name: 'Maryland', lat: '39.045753', long: '-76.641273' },
    { value: 'ME', name: 'Maine', lat: '45.367584', long: '-68.972168' },
    { value: 'MI', name: 'Michigan', lat: '44.182205', long: '-84.506836' },
    { value: 'MN', name: 'Minnesota', lat: '46.392410', long: '-94.636230' },
    { value: 'MO', name: 'Missouri', lat: '38.573936', long: '-92.603760' },
    { value: 'MS', name: 'Mississippi', lat: '33.000000', long: '-90.000000' },
    { value: 'MT', name: 'Montana', lat: '46.965260', long: '-109.533691' },
    { value: 'NC', name: 'North Carolina', lat: '35.782169', long: '-80.793457' },
    { value: 'ND', name: 'North Dakota', lat: '47.650589', long: '-100.437012' },
    { value: 'NE', name: 'Nebraska', lat: '41.500000', long: '-100.000000' },
    { value: 'NH', name: 'New Hampshire', lat: '44.000000', long: '-71.500000' },
    { value: 'NJ', name: 'New Jersey', lat: '39.833851', long: '-74.871826' },
    { value: 'NM', name: 'New Mexico', lat: '34.307144', long: '-106.018066' },
    { value: 'NV', name: 'Nevada', lat: '39.876019', long: '-117.224121' },
    { value: 'NY', name: 'NewYork', lat: '43.000000', long: '-75.000000' },
    { value: 'OH', name: 'Ohio', lat: '40.367474', long: '-82.996216' },
    { value: 'OK', name: 'Oklahoma', lat: '36.084621', long: '-96.921387' },
    { value: 'OR', name: 'Oregon', lat: '44.000000', long: '-120.500000' },
    { value: 'PA', name: 'Pennsylvania', lat: '41.203323', long: '-77.194527' },
    { value: 'RI', name: 'Rhode Island', lat: '41.742325', long: '-71.742332' },
    { value: 'SC', name: 'South Carolina', lat: '33.836082', long: '-81.163727' },
    { value: 'SD', name: 'South Dakota', lat: '44.500000', long: '-100.000000' },
    { value: 'TN', name: 'Tennessee', lat: '35.860119', long: '-86.660156' },
    { value: 'TX', name: 'Texas', lat: '31.000000', long: '-100.000000' },
    { value: 'UT', name: 'Utah', lat: '39.419220', long: '-111.950684' },
    { value: 'VA', name: 'Virginia', lat: '37.926868', long: '-78.024902' },
    { value: 'VT', name: 'Vermont', lat: '39.833851', long: '-74.871826' },
    { value: 'WA', name: 'Washington', lat: '47.751076', long: '-120.740135' },
    { value: 'WI', name: 'Wisconsin', lat: '44.500000', long: '-89.500000' },
    { value: 'WV', name: 'West Virginia', lat: '39.000000', long: '-80.500000' },
    { value: 'WY', name: 'Wyoming', lat: '43.075970', long: '-107.290283' }
];

exports.find = function () {
    return states;
};

exports.findByValue = (value) => states.find(state => state.value === value);