function takeANumber(katzDeliLine, newName){
  var position = katzDeliLine.length + 1;
  katzDeliLine.push(newName);
  var message = "Welcome, "+ newName + ". You are number "+position+" in line.";
  return message;
}

function nowServing(katzDeliLine){
  
}