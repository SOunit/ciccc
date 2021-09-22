{
  // difference ---> delta(32, 30 -> 2)

  const weeklyWeather = [32, 30, 15, 16, 18, 40, 35];

  // 0 -> 1 = 2
  // 1 -> 2 = 15
  // 2 -> 3 = 1

  let delta = 0;
  let firstIndex = 0;
  let lastIndexg = 0;

  weeklyWeather.map((data, index) => {
    const lastIndex = index - 1;

    if (lastIndex >= 0) {
      culc = Math.abs(data - weeklyWeather[lastIndex]);
      console.log('first data', data);
      console.log('second data', weeklyWeather[lastIndex]);
      console.log('culc', culc);
      console.log('-----------------');
      if (delta < culc) {
        delta = culc;
        firstIndex = index;
        lastIndexg = lastIndex;
      }
    }
  });

  console.log('max delta', delta);
  console.log('firstIndex', firstIndex, weeklyWeather[firstIndex]);
  console.log('lastIndexg', lastIndexg, weeklyWeather[lastIndexg]);
}

{
  const ww = [32, 30, 15, 16, 18, 40, 35];

  let max_delta = ww[0] - ww[1];

  for (let i = 0; i < ww.length - 1; i++) {
    let temp1 = ww[i];
    let temp2 = ww[i + 1];
    let delta = Math.abs(temp1 - temp2);

    console.log('comparing', temp1, temp2, 'delta', delta);

    if (delta > max_delta) {
      max_delta = delta;
    }
  }

  console.log('Max Delta:', max_delta);
}
