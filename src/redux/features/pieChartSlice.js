const { createSlice } = require('@reduxjs/toolkit');

const pieChartSlice = createSlice({
  name: 'pieChart',
  initialState: {
    pieChartData: [
      { label: 'America', value: 4344 },
      { label: 'Asia', value: 5435 },
      { label: 'Europe', value: 1443 },
      { label: 'Africa', value: 4443 },
    ],
  },
});

export default pieChartSlice.reducer;
