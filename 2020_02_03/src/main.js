const API = "https://webapi19sa-1.course.tamk.cloud/v1/weather";

const get_data = async (url) => {
    const response = await fetch(url);
    console.log("Waiting for data...");
    return await response.json();
}

const DATA = get_data(API)
  .then((data) => {
    var table_contents = "\n<thead><tr><th>Device</th><th>Date time</th><th>Temperature</th></tr></thead>\n";
    
    console.log(data);
    
    for (row of data) {
      if ('temperature' in row.data) {
        table_contents += `<tr><td>${row['device_id']}</td><td>${(new Date(row['date_time']).toLocaleString('en-GB'))}</td><td>${row['data']['temperature']}</td></tr>\n`;
      }
    }
    
    document.getElementById("data-div").innerHTML = table_contents;
  })

  .catch((error) => {
      console.error(`Error: ${error}`);
  });

