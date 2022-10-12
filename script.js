const getEvent = (e, type) => {
  const charCode = document.getElementById(`${type}charCode`);
  const code = document.getElementById(`${type}code`);
  const key = document.getElementById(`${type}key`);
  const keyCode = document.getElementById(`${type}keyCode`);
  const which = document.getElementById(`${type}which`);
  const data = document.getElementById(`${type}data`);
  const inputType = document.getElementById(`${type}inputType`);

  if (e) {
    charCode.innerHTML = e.charCode;
    code.innerHTML = e.code;
    key.innerHTML = e.key;
    keyCode.innerHTML = e.keyCode;
    which.innerHTML = e.which;
    data.innerHTML = e.data;
    inputType.innerHTML = e.inputType;

    console.log(e);
  } else {
    console.error(e, type);
  }
}

const input = document.getElementById('input');
input.addEventListener('keydown', (e) => getEvent(e, 'keydown'));
input.addEventListener('keyup', (e) => getEvent(e, 'keyup'));
input.addEventListener('keypress', (e) => getEvent(e, 'keypress'));
input.addEventListener('input', (e) => getEvent(e, 'input'));
input.addEventListener('beforeinput', (e) => getEvent(e, 'beforeinput'));