function takeANumber(katzDeliLine, newName){
  var postion = katzDeliLine.length + 1;
  katzDeliLine.push(newName);
  //var position = fruits.indexOf(newName);
  var message = "Welcome, "+ newName + ". You are number "+position+" in line.";
  return message;
}