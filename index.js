var recipes = {}


function updateObjectWithKeyAndValue(object, key, value){
  clone = object  
  clone[key] = value
  return clone
}