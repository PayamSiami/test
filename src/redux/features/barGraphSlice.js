const { createSlice } = require('@reduxjs/toolkit');

const barGraghSlice = createSlice({
  name: 'barGraph',
  initialState: {
    barGraphData: [
      { label: 'Italy', value: 400 },
      { label: 'Japan', value: 430 },
      { label: 'China', value: 448 },
      { label: 'Canada', value: 470 },
      { label: 'France', value: 540 },
      { label: 'Germany', value: 580 },
      { label: 'South Korea', value: 690 },
      { label: 'Netherlands', value: 1100 },
      { label: 'United States', value: 1200 },
      { label: 'United Kingdom', value: 1380 },
    ],
  },
});

export default barGraghSlice.reducer;
