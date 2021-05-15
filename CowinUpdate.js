(() => {
    FetchDataFromCowin() 
})
FetchDataFromCowin = () => {
    debugger
    fetch('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=125050&date=13-05-2021')
  .then(response => response.json())
  .then(data => console.log(data));
}
FetchDataFromCowin() 