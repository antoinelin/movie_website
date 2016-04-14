function appleTvAgora(event) {
  let dot, eventDoc, doc, body, pageX, pageY, yearX, yearY, rotationX, rotationY, distance, distanceX, distanceY;

  event = event || window.event; // IE-ism

  if (event.pageX == null && event.clientX != null) {
    eventDoc = (event.target && event.target.ownerDocument) || document;
    doc = eventDoc.documentElement;
    body = eventDoc.body;
    event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
    event.pageY = event.clientY + (doc && doc.scrollTop  || body && body.scrollTop  || 0) - (doc && doc.clientTop  || body && body.clientTop  || 0);
  }
  // Use event.pageX / event.pageY here
  for(let i = 0; i<years.length ; i++){
    distanceX = event.pageX - years[i].offsetLeft - years[i].offsetWidth/2
    distanceY = event.pageY - years[i].offsetTop - years[i].offsetHeight/2
    distance = Math.round(
      Math.sqrt(
        Math.pow(distanceX , 2) + Math.pow(distanceY, 2)
      )
    )
    if (Math.abs(distanceX) < 300)
      rotationY = .016 * distanceX * 4
    else if (Math.abs(distanceX) < 600){
      if (Math.abs(distanceX) == distanceX)
        rotationY = (-1*(distanceX)/60) + 10
      else
        rotationY = (-1*(distanceX)/60) - 10
    }
    else if (Math.abs(distanceX) > 600)
      rotationY = 0

    if (Math.abs(distanceY) < 300)
      rotationX = .016 * distanceY * 4
    else if (Math.abs(distanceY) < 600)
      if (Math.abs(distanceY) == distanceY)
        rotationX = (-1*(distanceY)/60) + 10
      else
        rotationX = (-1*(distanceY)/60) - 10
    else if (Math.abs(distanceY) > 600)
      rotationX = 0
    years[i].style.transform = `perspective(200px) rotateX(${-rotationX}deg) rotateY(${rotationY}deg)`
    years[i].style.boxShadow = `inset 0px 1px 1px ${Math.abs(rotationX)*0.3}px rgba(255, 255, 255, 0.1)`
  }

}

export{appleTvAgora}
