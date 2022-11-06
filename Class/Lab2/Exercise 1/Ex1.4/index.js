const isValidJSON = obj => {
    try {
      JSON.parse(obj);
      return true;
    } catch (e) {
      return false;
    }
  };
  console.log(isValidJSON('{"name":"ThaoNhu","age":21}'));
  console.log(isValidJSON('{"name":"ThaoNhu",age:"21"}'));
  console.log(isValidJSON(null));