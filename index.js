function takeANumber(katzDeliLine, newName){
  var position = katzDeliLine.length + 1;
  katzDeliLine.push(newName);
  var message = "Welcome, "+ newName + ". You are number "+position+" in line.";
  return message;
}

function nowServing(katzDeliLine){
  var message
  if(katzDeliLine.length > 0){
    message = "There is nobody waiting to be served!"
  }
  else{
    message = "There is nobody waiting to be served!"
  }
  return message;
}