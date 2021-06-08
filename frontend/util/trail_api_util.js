export const fetchTrail = (trailId) => {
 
  debugger; 

  return  $.ajax({
    url: `/api/trails/${trailId}`,
  })
}

export const fetchTrails = () =>
  $.ajax({
    url: `/api/trails`,
  });
